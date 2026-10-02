"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_child_process_1 = require("node:child_process");
const node_http_1 = __importDefault(require("node:http"));
const node_net_1 = __importDefault(require("node:net"));
const node_path_1 = __importDefault(require("node:path"));
const node_test_1 = require("node:test");
// ─────────────────────────────────────────────────────────────
// server-http.ts の OAuth 周りの実装のテスト
//
// server-http.ts は import した時点で app.listen() が実行される構成のため、
// 子プロセスとして起動し、実際の HTTP リクエストで挙動を検証する。
// AgileWorks 本体はテスト内のモック HTTP サーバー（upstream）で代替し、
// x-system-url にモックの URL を渡すことでツール実行の転送先をモックに向ける。
//
// 検証対象:
//   - POST /mcp の認証方式判定（x-access-token / Authorization: Bearer / 未認証 401）
//   - 401 応答の WWW-Authenticate resource_metadata（x-system-url の伝搬）
//   - ツール実行中の AgileWorks 401 → HTTP 401 への昇格（OAuth 時のみ）
//   - GET /.well-known/oauth-protected-resource（仲介 issuer の構築）
//   - GET /.well-known/oauth-authorization-server/as/:b64SystemUrl
// ─────────────────────────────────────────────────────────────
const APP_ROOT = node_path_1.default.resolve(__dirname, '..', '..', '..');
const SERVER_ENTRY = node_path_1.default.join(APP_ROOT, 'src', 'custom', 'admin', 'server-http.ts');
const b64url = (value) => Buffer.from(value).toString('base64url');
let upstream;
let upstreamUrl = '';
// ツール API（/Broker/...）へのリクエストの記録と応答ステータス
let brokerStatus = 200;
const brokerRequests = [];
function startUpstream() {
    return new Promise((resolve) => {
        upstream = node_http_1.default.createServer((req, res) => {
            const chunks = [];
            req.on('data', (c) => chunks.push(c));
            req.on('end', () => {
                const text = Buffer.concat(chunks).toString('utf8');
                const record = {
                    method: req.method ?? '',
                    url: req.url ?? '',
                    headers: req.headers,
                    body: text ? JSON.parse(text) : undefined,
                };
                brokerRequests.push(record);
                res.writeHead(brokerStatus, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ versionInfo: { versionInfo: 'test-version' } }));
            });
        });
        upstream.listen(0, '127.0.0.1', () => {
            const address = upstream.address();
            upstreamUrl = `http://127.0.0.1:${address.port}`;
            resolve();
        });
    });
}
// ─── テスト対象サーバー（子プロセス） ─────────────────────────
let mcpBaseUrl = '';
let serverProcess;
let serverLog = '';
function getFreePort() {
    return new Promise((resolve, reject) => {
        const srv = node_net_1.default.createServer();
        srv.once('error', reject);
        srv.listen(0, '127.0.0.1', () => {
            const address = srv.address();
            srv.close(() => resolve(address.port));
        });
    });
}
async function startServer() {
    const port = await getFreePort();
    mcpBaseUrl = `http://127.0.0.1:${port}`;
    serverProcess = (0, node_child_process_1.spawn)(process.execPath, ['--import', 'tsx', SERVER_ENTRY], {
        cwd: APP_ROOT,
        env: {
            ...process.env,
            MCP_PORT: String(port),
            MCP_SERVER_BASE_URL: mcpBaseUrl,
            // オンプレモードで検証する（DynamoDB 不要）
            IS_CLOUD: 'false',
            // 既定のシステム URL は無し（x-system-url 必須の挙動を検証するため）
            // 空文字を明示することで dotenv（.env）による上書きも防ぐ
            SYSTEM_URL: '',
        },
        stdio: ['ignore', 'pipe', 'pipe'],
    });
    serverProcess.stdout?.on('data', (c) => { serverLog += String(c); });
    serverProcess.stderr?.on('data', (c) => { serverLog += String(c); });
    // 起動完了まで well-known エンドポイントをポーリングする
    const deadline = Date.now() + 30000;
    for (;;) {
        if (serverProcess.exitCode !== null) {
            throw new Error(`server-http.ts が起動前に終了しました (exitCode=${serverProcess.exitCode})\n${serverLog}`);
        }
        try {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-protected-resource`);
            if (res.ok)
                return;
        }
        catch {
            // 起動待ち
        }
        if (Date.now() > deadline) {
            throw new Error(`server-http.ts の起動がタイムアウトしました\n${serverLog}`);
        }
        await new Promise((r) => setTimeout(r, 200));
    }
}
// ─── リクエストヘルパー ──────────────────────────────────────
function initializeRequest(id = 1) {
    return {
        jsonrpc: '2.0',
        id,
        method: 'initialize',
        params: {
            protocolVersion: '2025-03-26',
            capabilities: {},
            clientInfo: { name: 'unit-test', version: '0.0.0' },
        },
    };
}
// テスト用にバージョン取得ツールを呼ぶリクエストを作る
function toolCallRequest(id = 2) {
    return {
        jsonrpc: '2.0',
        id,
        method: 'tools/call',
        params: { name: 'agileworks_get_version', arguments: { bodyParams: {} } },
    };
}
async function postMcp(options) {
    const path = options.tenantId ? `/${encodeURIComponent(options.tenantId)}/mcp` : '/mcp';
    const url = new URL(`${mcpBaseUrl}${path}`);
    for (const [key, value] of Object.entries(options.query ?? {})) {
        url.searchParams.set(key, value);
    }
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options.headers },
        body: JSON.stringify(options.body),
    });
}
// WWW-Authenticate から resource_metadata URL を取り出す
function parseResourceMetadata(res) {
    const header = res.headers.get('www-authenticate');
    strict_1.default.ok(header, 'WWW-Authenticate ヘッダーがない');
    const match = header.match(/resource_metadata="([^"]+)"/);
    strict_1.default.ok(match, `resource_metadata が含まれていない: ${header}`);
    return new URL(match[1]);
}
// ─────────────────────────────────────────────────────────────
// テスト
// ─────────────────────────────────────────────────────────────
(0, node_test_1.describe)('server-http OAuth', () => {
    (0, node_test_1.before)(async () => {
        await startUpstream();
        await startServer();
    });
    (0, node_test_1.after)(() => {
        serverProcess?.kill();
        upstream?.closeAllConnections();
        upstream?.close();
    });
    (0, node_test_1.describe)('POST /mcp 認証方式の判定', () => {
        (0, node_test_1.it)('トークンなし → 401 と WWW-Authenticate（bare /mcp 接続時は resource_metadata もパスなし・解決済み systemUrl をクエリで伝搬）', async () => {
            const res = await postMcp({
                headers: { 'x-system-url': upstreamUrl },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 401);
            const body = await res.json();
            strict_1.default.strictEqual(body.error.code, -32600);
            strict_1.default.strictEqual(body.error.message, 'Unauthorized');
            const metaUrl = parseResourceMetadata(res);
            strict_1.default.strictEqual(metaUrl.origin, mcpBaseUrl);
            strict_1.default.strictEqual(metaUrl.pathname, '/.well-known/oauth-protected-resource');
            strict_1.default.strictEqual(metaUrl.searchParams.get('x-system-url'), upstreamUrl);
            // 回帰テスト: resource_metadata が返す resource は実際の接続 URL（bare /mcp）と一致しなければならない。
            // 不一致だと mcp-remote/SDK の selectResourceURL が Fatal error を投げる。
            const metaRes = await fetch(metaUrl);
            const metaBody = await metaRes.json();
            strict_1.default.strictEqual(metaBody.resource, `${mcpBaseUrl}/mcp`);
        });
        (0, node_test_1.it)('x-access-token あり → OAuth をスキップして initialize が成功する', async () => {
            const res = await postMcp({
                headers: { 'x-system-url': upstreamUrl, 'x-access-token': 'static-token-abc' },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.result.serverInfo.name, 'AgileWorksMCPServer');
        });
        (0, node_test_1.it)('Authorization: Bearer あり → OAuth トークンとして受理され initialize が成功する', async () => {
            const res = await postMcp({
                headers: { 'x-system-url': upstreamUrl, Authorization: 'Bearer oauth-token-xyz' },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.result.serverInfo.name, 'AgileWorksMCPServer');
        });
        (0, node_test_1.it)('クエリパラメーターの x-access-token でも認証できる（ヘッダー → クエリの順で解決）', async () => {
            const res = await postMcp({
                headers: { 'x-system-url': upstreamUrl },
                query: { 'x-access-token': 'query-token' },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.result.serverInfo.name, 'AgileWorksMCPServer');
        });
        (0, node_test_1.it)('x-system-url なし（SYSTEM_URL 未設定）→ 400 x-system-url is required', async () => {
            const res = await postMcp({
                headers: { 'x-access-token': 'token' },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 400);
            const body = await res.json();
            strict_1.default.strictEqual(body.error.message, 'x-system-url is required');
        });
        (0, node_test_1.it)('x-system-url が URL として不正 → 400 Invalid system URL', async () => {
            const res = await postMcp({
                headers: { 'x-system-url': 'not-a-valid-url', 'x-access-token': 'token' },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 400);
            const body = await res.json();
            strict_1.default.strictEqual(body.error.message, 'Invalid system URL');
        });
        (0, node_test_1.it)('x-system-url が http/https 以外 → 400 System URL must use http or https', async () => {
            const res = await postMcp({
                headers: { 'x-system-url': 'ftp://example.com', 'x-access-token': 'token' },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 400);
            const body = await res.json();
            strict_1.default.strictEqual(body.error.message, 'System URL must use http or https');
        });
    });
    (0, node_test_1.describe)('POST /:tenantId/mcp（パスパラメーターでのテナント指定）', () => {
        (0, node_test_1.it)('x-system-url をパスパラメーターで指定して initialize が成功する', async () => {
            const res = await postMcp({
                tenantId: upstreamUrl,
                headers: { 'x-access-token': 'static-token-path' },
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.result.serverInfo.name, 'AgileWorksMCPServer');
        });
        (0, node_test_1.it)('トークンなし → 401 の resource_metadata もパスパラメーターの値を維持する', async () => {
            const res = await postMcp({
                tenantId: upstreamUrl,
                body: initializeRequest(),
            });
            strict_1.default.strictEqual(res.status, 401);
            const metaUrl = parseResourceMetadata(res);
            strict_1.default.strictEqual(metaUrl.pathname, `/.well-known/oauth-protected-resource/${encodeURIComponent(upstreamUrl)}/mcp`);
            // 回帰テスト: resource_metadata が返す resource は実際の接続 URL（/:tenantId/mcp）と一致しなければならない。
            const metaRes = await fetch(metaUrl);
            const metaBody = await metaRes.json();
            strict_1.default.strictEqual(metaBody.resource, `${mcpBaseUrl}/${encodeURIComponent(upstreamUrl)}/mcp`);
        });
        (0, node_test_1.it)('ツール呼び出しがパスパラメーターで指定した upstream に転送される', async () => {
            brokerStatus = 200;
            brokerRequests.length = 0;
            const res = await postMcp({
                tenantId: upstreamUrl,
                headers: { 'x-access-token': 'static-token-path-tool' },
                body: toolCallRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            strict_1.default.strictEqual(brokerRequests.length, 1);
            strict_1.default.strictEqual(brokerRequests[0].headers.authorization, 'Bearer static-token-path-tool');
        });
    });
    (0, node_test_1.describe)('POST /mcp トークンのテナントコンテキストへの伝搬', () => {
        (0, node_test_1.it)('OAuth の Bearer トークンが AgileWorks API への Authorization ヘッダーになる', async () => {
            brokerStatus = 200;
            brokerRequests.length = 0;
            const res = await postMcp({
                headers: { 'x-system-url': upstreamUrl, Authorization: 'Bearer oauth-token-propagated' },
                body: toolCallRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            strict_1.default.strictEqual(brokerRequests.length, 1);
            strict_1.default.strictEqual(brokerRequests[0].headers.authorization, 'Bearer oauth-token-propagated');
        });
        (0, node_test_1.it)('x-access-token も AgileWorks API への Authorization ヘッダーになる', async () => {
            brokerStatus = 200;
            brokerRequests.length = 0;
            const res = await postMcp({
                headers: { 'x-system-url': upstreamUrl, 'x-access-token': 'static-token-propagated' },
                body: toolCallRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            strict_1.default.strictEqual(brokerRequests.length, 1);
            strict_1.default.strictEqual(brokerRequests[0].headers.authorization, 'Bearer static-token-propagated');
        });
    });
    (0, node_test_1.describe)('POST /mcp ツール実行中の 401 昇格', () => {
        (0, node_test_1.it)('OAuth 時: AgileWorks が 401 → HTTP 401 に昇格し WWW-Authenticate を返す', async () => {
            brokerStatus = 401;
            const logOffsetBefore = serverLog.length;
            const res = await postMcp({
                headers: {
                    'x-system-url': upstreamUrl,
                    Authorization: 'Bearer expired-token',
                },
                body: toolCallRequest(),
            });
            strict_1.default.strictEqual(res.status, 401);
            const body = await res.json();
            strict_1.default.strictEqual(body.error.message, 'Unauthorized');
            const metaUrl = parseResourceMetadata(res);
            strict_1.default.strictEqual(metaUrl.pathname, '/.well-known/oauth-protected-resource');
            strict_1.default.strictEqual(metaUrl.searchParams.get('x-system-url'), upstreamUrl);
            // 回帰テスト: 401 昇格時に origSend（SDK 本来の送信）を呼ぶと、既に replyUnauthorized で
            // 送信済みのレスポンスへ二重書き込みが発生し、ERR_HTTP_HEADERS_SENT が
            // 待機中の Promise チェーン外でログに出力されてしまう（try/catch で捕捉できない）。
            // このテストのリクエスト中に限定してサーバーログを確認し、再発しないことを検証する。
            //
            // 二重書き込みは非同期に発生しうるため、直後のログにまだ現れていない可能性がある。
            // 少し待ってから確認する。
            await new Promise((r) => setTimeout(r, 200));
            const logDuringTest = serverLog.slice(logOffsetBefore);
            strict_1.default.ok(!logDuringTest.includes('ERR_HTTP_HEADERS_SENT'), `ERR_HTTP_HEADERS_SENT がログに出力された（二重書き込みの再発）:\n${logDuringTest}`);
            strict_1.default.ok(!logDuringTest.includes('Cannot set headers after they are sent'), `"Cannot set headers after they are sent" がログに出力された（二重書き込みの再発）:\n${logDuringTest}`);
        });
        (0, node_test_1.it)('x-access-token 時: AgileWorks が 401 でも HTTP 401 に昇格しない（isError の 200 のまま）', async () => {
            brokerStatus = 401;
            const res = await postMcp({
                headers: { 'x-system-url': upstreamUrl, 'x-access-token': 'static-token' },
                body: toolCallRequest(),
            });
            strict_1.default.strictEqual(res.status, 200);
            strict_1.default.strictEqual(res.headers.get('www-authenticate'), null);
            const body = await res.json();
            strict_1.default.strictEqual(body.result.isError, true);
        });
    });
    (0, node_test_1.describe)('GET /.well-known/oauth-protected-resource', () => {
        (0, node_test_1.it)('x-system-url ヘッダーから仲介 issuer（/as/{b64}）を構築する', async () => {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-protected-resource`, {
                headers: { 'x-system-url': upstreamUrl },
            });
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.resource, `${mcpBaseUrl}/mcp`);
            strict_1.default.deepStrictEqual(body.authorization_servers, [
                `${mcpBaseUrl}/as/${b64url(upstreamUrl)}`,
            ]);
        });
        (0, node_test_1.it)('systemUrl を解決できない → authorization_servers は空配列', async () => {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-protected-resource`);
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.deepStrictEqual(body.authorization_servers, []);
        });
        (0, node_test_1.it)('path-aware ディスカバリー形式（/.well-known/oauth-protected-resource/mcp）でも同じ応答を返す', async () => {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-protected-resource/mcp`, {
                headers: { 'x-system-url': upstreamUrl },
            });
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.deepStrictEqual(body.authorization_servers, [
                `${mcpBaseUrl}/as/${b64url(upstreamUrl)}`,
            ]);
        });
        (0, node_test_1.it)('x-system-url をパスパラメーターで指定した場合（/.well-known/oauth-protected-resource/:tenantId/mcp）', async () => {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-protected-resource/${encodeURIComponent(upstreamUrl)}/mcp`);
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.resource, `${mcpBaseUrl}/${encodeURIComponent(upstreamUrl)}/mcp`);
            strict_1.default.deepStrictEqual(body.authorization_servers, [
                `${mcpBaseUrl}/as/${b64url(upstreamUrl)}`,
            ]);
        });
        (0, node_test_1.it)('x-system-url の末尾スラッシュは除去してから b64url 化する', async () => {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-protected-resource`, {
                headers: { 'x-system-url': `${upstreamUrl}///` },
            });
            const body = await res.json();
            strict_1.default.deepStrictEqual(body.authorization_servers, [
                `${mcpBaseUrl}/as/${b64url(upstreamUrl)}`,
            ]);
        });
    });
    (0, node_test_1.describe)('GET /.well-known/oauth-authorization-server/as/:b64SystemUrl', () => {
        (0, node_test_1.it)('AgileWorks の各エンドポイントを指すメタデータを返す（registration_endpoint は広告しない）', async () => {
            const b64 = b64url(upstreamUrl);
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-authorization-server/as/${b64}`);
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.issuer, `${mcpBaseUrl}/as/${b64}`);
            strict_1.default.strictEqual(body.authorization_endpoint, `${upstreamUrl}/oauth/authorize`);
            strict_1.default.strictEqual(body.token_endpoint, `${upstreamUrl}/oauth/token`);
            // DCR 非対応: registration_endpoint を含めない
            strict_1.default.strictEqual('registration_endpoint' in body, false);
            strict_1.default.deepStrictEqual(body.response_types_supported, ['code']);
            strict_1.default.deepStrictEqual(body.grant_types_supported, ['authorization_code', 'refresh_token']);
            strict_1.default.deepStrictEqual(body.code_challenge_methods_supported, ['S256', 'plain']);
        });
        (0, node_test_1.it)('b64SystemUrl が URL としてデコードできない → 400', async () => {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-authorization-server/as/${b64url('not a url')}`);
            strict_1.default.strictEqual(res.status, 400);
        });
        (0, node_test_1.it)('b64SystemUrl が http/https 以外のプロトコル → 400', async () => {
            const res = await fetch(`${mcpBaseUrl}/.well-known/oauth-authorization-server/as/${b64url('ftp://example.com')}`);
            strict_1.default.strictEqual(res.status, 400);
        });
    });
    (0, node_test_1.describe)('削除済みの DCR エンドポイント', () => {
        (0, node_test_1.it)('POST /register/as/:b64SystemUrl は存在しない → 404', async () => {
            const res = await fetch(`${mcpBaseUrl}/register/as/${b64url(upstreamUrl)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({}),
            });
            strict_1.default.strictEqual(res.status, 404);
        });
    });
});
