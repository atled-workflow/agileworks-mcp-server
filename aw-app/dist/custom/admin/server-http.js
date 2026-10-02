"use strict";
/**
 * AgileWorks MCP HTTP Server (Multi-tenant)
 *
 * クライアント（mcp-remote）から送信されるヘッダー／パスパラメーターでテナントを識別します。
 * 接続 URL は `{MCP_SERVER_BASE_URL}/{license_no または x-system-url}/mcp` の形式（ヘッダーでの指定も可）。
 *
 * システム URL の解決（IS_CLOUD 環境変数で切り替え）:
 *   IS_CLOUD=true  : license_no 必須。DynamoDB（customer_license）から URL を取得
 *   IS_CLOUD=false : x-system-url 必須
 *
 * 認証（両モード共通）:
 *   x-access-token あり: そのトークンを使用（OAuth は実施しない）
 *   x-access-token なし: OAuth フローで認証する
 *     client_id は AgileWorks に事前登録したものをクライアント側で設定する
 *     （カスタムコネクタはコネクタ設定、mcp-remote は --static-oauth-client-info）。
 *     DCR（動的クライアント登録）には対応しない。
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const streamableHttp_js_1 = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const custom_mcp_instance_1 = require("../../custom/custom-mcp-instance");
const register_tools_1 = require("../../generated/admin/register-tools");
const package_json_1 = require("../../../package.json");
const customer_license_repository_1 = require("../../custom/dynamodb/customer-license-repository");
const dynamodb_client_1 = require("../../custom/dynamodb/dynamodb-client");
const log_utils_1 = require("../../custom/log/log-utils");
const JSON_RPC = '2.0';
const PORT = parseInt(process.env.MCP_PORT ?? '8002', 10);
const MCP_SERVER_BASE_URL = process.env.MCP_SERVER_BASE_URL ?? `http://localhost:${PORT}`;
// クラウド版: license_no をキーに DynamoDB からシステム URL を解決する
// オンプレ版: x-system-url ヘッダーでシステム URL を指定する
const IS_CLOUD = process.env.IS_CLOUD === 'true';
function isHttpOrHttpsUrl(url) {
    return url.startsWith('http://') || url.startsWith('https://');
}
// ヘッダー → クエリパラメーター の優先順位で値を取得する
function getHeaderOrQuery(req, name) {
    const q = req.query[name];
    const qValue = Array.isArray(q) ? q[0] : q;
    return req.get(name) ?? (typeof qValue === 'string' ? qValue : undefined);
}
// クエリパラメーターの値を取得する（ヘッダーは参照しない）
function getQuery(name, req) {
    const q = req.query[name];
    const qValue = Array.isArray(q) ? q[0] : q;
    return typeof qValue === 'string' ? qValue : undefined;
}
// ヘッダー → パスパラメーター の優先順位で値を取得する
// （license_no / x-system-url は `/:tenantId/mcp` のパスセグメントとして受け取る）
function getHeaderOrPathParam(req, headerName) {
    return req.get(headerName) ?? req.params.tenantId;
}
// JSON-RPC 形式のエラーレスポンスを返す
function sendJsonRpcError(res, status, code, message) {
    res.status(status).json({ jsonrpc: JSON_RPC, error: { code, message }, id: null });
}
// 401 Unauthorized を返し、WWW-Authenticate ヘッダーの resource_metadata でクライアントを OAuth ディスカバリーへ誘導する
function replyUnauthorized(res, pathTenantId, systemUrl) {
    const metaUrl = pathTenantId
        ? new URL(`${MCP_SERVER_BASE_URL}/.well-known/oauth-protected-resource/${encodeURIComponent(pathTenantId)}/mcp`)
        : new URL(`${MCP_SERVER_BASE_URL}/.well-known/oauth-protected-resource`);
    if (!pathTenantId) {
        metaUrl.searchParams.set('x-system-url', systemUrl);
    }
    res.setHeader('WWW-Authenticate', `Bearer realm="${MCP_SERVER_BASE_URL}", resource_metadata="${metaUrl.toString()}"`);
    res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
        jsonrpc: JSON_RPC,
        error: { code: types_js_1.ErrorCode.InvalidRequest, message: 'Unauthorized' },
        id: null,
    });
}
// ── システム URL の解決 ────────────────────────────────────────
// クラウド版: license_no 必須。DynamoDB（customer_license）から URL を取得する
// オンプレ版: x-system-url 必須
// 解決できなかった場合はエラーレスポンスを送信し、undefined を返す
async function resolveSystemUrl(req, res) {
    return IS_CLOUD ? resolveSystemUrlFromLicenseNo(req, res) : resolveStaticSystemUrl(req, res);
}
// クラウド版: license_no をキーに DynamoDB（customer_license）からシステム URL を取得する
async function resolveSystemUrlFromLicenseNo(req, res) {
    const licenseNo = getHeaderOrPathParam(req, 'license_no');
    if (!licenseNo) {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Missing required header or path parameter: license_no is required when IS_CLOUD=true.`);
        sendJsonRpcError(res, http_status_codes_1.StatusCodes.BAD_REQUEST, types_js_1.ErrorCode.InvalidRequest, 'license_no is required');
        return undefined;
    }
    let resolvedUrl;
    try {
        resolvedUrl = await (0, customer_license_repository_1.getUrlByLicenseNo)(licenseNo);
    }
    catch (error) {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Failed to look up customer_license for license_no="${licenseNo}"`, error);
        sendJsonRpcError(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, types_js_1.ErrorCode.InternalError, 'Internal server error');
        return undefined;
    }
    if (!resolvedUrl) {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] No customer_license found for license_no="${licenseNo}"`);
        sendJsonRpcError(res, http_status_codes_1.StatusCodes.BAD_REQUEST, types_js_1.ErrorCode.InvalidRequest, 'Unknown license_no');
        return undefined;
    }
    const normalizedUrl = resolvedUrl.replace(/\/+$/, '');
    if (!isHttpOrHttpsUrl(normalizedUrl)) {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Invalid system URL resolved from customer_license for license_no="${licenseNo}": "${resolvedUrl}"`);
        sendJsonRpcError(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, types_js_1.ErrorCode.InternalError, 'Internal server error');
        return undefined;
    }
    return normalizedUrl;
}
// オンプレ版: x-system-url ヘッダー（または SYSTEM_URL 環境変数）からシステム URL を取得・検証する
function resolveStaticSystemUrl(req, res) {
    const staticSystemUrl = (getHeaderOrPathParam(req, 'x-system-url') ?? process.env.SYSTEM_URL)?.replace(/\/+$/, '');
    if (!staticSystemUrl) {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Missing required header or path parameter: x-system-url is required when IS_CLOUD=false.`);
        sendJsonRpcError(res, http_status_codes_1.StatusCodes.BAD_REQUEST, types_js_1.ErrorCode.InvalidRequest, 'x-system-url is required');
        return undefined;
    }
    let parsedSystemUrl;
    try {
        parsedSystemUrl = new URL(staticSystemUrl);
    }
    catch {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Invalid system URL: "${staticSystemUrl}"`);
        sendJsonRpcError(res, http_status_codes_1.StatusCodes.BAD_REQUEST, types_js_1.ErrorCode.InvalidRequest, 'Invalid system URL');
        return undefined;
    }
    if (!isHttpOrHttpsUrl(staticSystemUrl)) {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Rejected system URL with disallowed protocol: "${parsedSystemUrl.protocol}"`);
        sendJsonRpcError(res, http_status_codes_1.StatusCodes.BAD_REQUEST, types_js_1.ErrorCode.InvalidRequest, 'System URL must use http or https');
        return undefined;
    }
    return staticSystemUrl;
}
// リクエストごとに McpServer インスタンスを生成する
// （マルチテナント対応: リクエスト間の状態を共有しない）
function createMcpServer() {
    const server = new mcp_js_1.McpServer({
        name: 'AgileWorksMCPServer',
        version: '0.1.1',
    });
    (0, register_tools_1.registerTools)(server);
    return server;
}
// ─── Express HTTP サーバー ────────────────────────────────────────────────────
const app = (0, express_1.default)();
app.use(express_1.default.json());
// ブラウザベースのクライアント（MCP Inspector 等）は well-known メタデータの取得を
// ブラウザから直接 fetch するため、CORS を許可する必要がある。
// 特に WWW-Authenticate を公開しないと 401 から resource_metadata URL を読めず、
// クライアントはクエリなしの well-known URL（テナント解決不可）にフォールバックした後、
// 既定エンドポイント {origin}/authorize（存在しない）に到達してしまう。
app.use((req, res, next) => {
    const corsEnabled = req.path === '/mcp' ||
        /^\/[^/]+\/mcp$/.test(req.path) ||
        req.path.startsWith('/.well-known/');
    if (corsEnabled) {
        res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ALLOW_ORIGIN ?? '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
        const requestedHeaders = req.headers['access-control-request-headers'];
        res.setHeader('Access-Control-Allow-Headers', typeof requestedHeaders === 'string' && requestedHeaders !== ''
            ? requestedHeaders
            : 'Content-Type, Authorization, Mcp-Session-Id, Mcp-Protocol-Version');
        res.setHeader('Access-Control-Expose-Headers', 'WWW-Authenticate, Mcp-Session-Id');
    }
    if (req.method === 'OPTIONS' && corsEnabled) {
        res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        return;
    }
    next();
});
// mcp-remote は Accept ヘッダーを送らないため、
// StreamableHTTPServerTransport の Accept チェックをパスするよう補完する。
// @hono/node-server は req.rawHeaders を使うため両方を書き換える必要がある。
app.use((req, _res, next) => {
    const REQUIRED_ACCEPT = 'application/json, text/event-stream';
    const accept = req.headers['accept'] ?? '';
    if (!accept.includes('text/event-stream')) {
        // req.headers を更新
        req.headers['accept'] = REQUIRED_ACCEPT;
        // req.rawHeaders も更新（@hono/node-server はこちらを参照する）
        const raw = req.rawHeaders;
        if (Array.isArray(raw)) {
            const idx = raw.findIndex((v, i) => i % 2 === 0 && typeof v === 'string' && v.toLowerCase() === 'accept');
            if (idx >= 0) {
                raw[idx + 1] = REQUIRED_ACCEPT;
            }
            else {
                raw.push('Accept', REQUIRED_ACCEPT);
            }
        }
    }
    next();
});
async function handleMcpPost(req, res) {
    // ── 認証方式の判定 ─────────────────────────────────────────────
    // x-access-token あり: そのトークンを使用し OAuth は実施しない
    // x-access-token なし: OAuth（Authorization: Bearer）で認証する
    const staticAccessToken = getHeaderOrQuery(req, 'x-access-token');
    const useOAuth = !staticAccessToken;
    // システム URL の解決（失敗時はエラーレスポンス送信済み）
    const systemUrl = await resolveSystemUrl(req, res);
    if (systemUrl === undefined) {
        return;
    }
    // ── アクセストークンの解決 ─────────────────────────────────────
    let accessToken = staticAccessToken;
    if (useOAuth) {
        const authHeader = getHeaderOrQuery(req, 'Authorization');
        accessToken = authHeader?.startsWith('Bearer ') ? authHeader.substring('Bearer '.length) : undefined;
        if (!accessToken) {
            replyUnauthorized(res, req.params.tenantId, systemUrl);
            return;
        }
    }
    const body = req.body;
    const method = body?.method ?? 'unknown';
    const toolName = method === 'tools/call' ? (body?.params?.name ?? 'unknown') : undefined;
    const methodLabel = toolName != null ? `method=${method} tool=${toolName}` : `method=${method}`;
    const reqStart = performance.now();
    const transport = new streamableHttp_js_1.StreamableHTTPServerTransport({
        sessionIdGenerator: undefined, // stateless モード（セッション管理なし）
        enableJsonResponse: true, // レスポンスをバッファリングし、ツール401をHTTP 401に昇格できるようにする
    });
    const origSend = transport.send.bind(transport);
    transport.send = async (message) => {
        const msg = message;
        // ツールAPI 401 → HTTP 401 昇格
        // customFetchInstance が AGILEWORKS_AUTH_ERROR を throw → transport.send() に到達した時点では
        // enableJsonResponse: true によりまだ res.headersSent = false のため HTTP 401 に変換できる
        if (useOAuth && !res.headersSent) {
            const errText = msg?.result?.content?.find(c => c.type === 'text')?.text
                ?? msg?.error?.message
                ?? '';
            if (errText.includes('AGILEWORKS_AUTH_ERROR')) {
                // ここで HTTP 401 を返却済み。origSend（SDK本来の送信）は呼ばない。
                // 呼ぶとレスポンスへの二重書き込みとなり、待機中の Promise チェーン外で
                // ERR_HTTP_HEADERS_SENT が発生して try/catch に捕捉されずログに出力されてしまう。
                replyUnauthorized(res, req.params.tenantId, systemUrl);
                return;
            }
        }
        if (msg?.error) {
            // JSON-RPC プロトコルレベルのエラー
            const durationMs = Math.round(performance.now() - reqStart);
            console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST ${req.path} systemUrl="${systemUrl}" ${methodLabel} error ${msg.error.code}: ${msg.error.message} (${durationMs}ms)`);
        }
        else if (msg?.result?.isError) {
            // ツールハンドラー内のエラー（McpError を含む）は isError: true の result として返される
            const text = msg.result.content?.find(c => c.type === 'text')?.text ?? '(no message)';
            const durationMs = Math.round(performance.now() - reqStart);
            console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST ${req.path} systemUrl="${systemUrl}" ${methodLabel} tool error: ${text} (${durationMs}ms)`);
        }
        return origSend(message);
    };
    const context = {
        licenseNo: getHeaderOrPathParam(req, 'license_no'),
        systemUrl,
        accessToken,
        useOAuth,
    };
    try {
        await custom_mcp_instance_1.tenantContext.run(context, async () => {
            const server = createMcpServer();
            await server.connect(transport);
            await transport.handleRequest(req, res, req.body);
        });
        const durationMs = Math.round(performance.now() - reqStart);
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST ${req.path} systemUrl="${systemUrl ?? 'NOT_SET'}" ${methodLabel} completed (${durationMs}ms)`);
    }
    catch (error) {
        const durationMs = Math.round(performance.now() - reqStart);
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST ${req.path} systemUrl="${systemUrl ?? 'NOT_SET'}" ${methodLabel} Error handling request (${durationMs}ms):`, error);
        if (!res.headersSent) {
            res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                jsonrpc: JSON_RPC,
                error: { code: types_js_1.ErrorCode.InternalError, message: 'Internal server error' },
                id: null,
            });
        }
    }
}
app.post('/mcp', handleMcpPost);
app.post('/:tenantId/mcp', handleMcpPost);
const mcpMethodNotAllowed = (_req, res) => {
    res.setHeader('Allow', 'POST').status(http_status_codes_1.StatusCodes.METHOD_NOT_ALLOWED).end();
};
app.get('/mcp', mcpMethodNotAllowed);
app.get('/:tenantId/mcp', mcpMethodNotAllowed);
// システム URL をテナント識別子（ヘッダー優先、なければパスパラメーター）から解決する。
// resolveSystemUrl とは異なりエラーレスポンスは送信しない（呼び出し側が未解決時の扱いを判断する）。
async function resolveSystemUrlQuietly(req) {
    // 401 リダイレクト時にクエリへ埋め込まれた解決済み systemUrl（bare `/mcp` 接続時の伝搬用）を最優先で使う。
    // これがある場合、パスパラメーターは（bare 接続時は付与されないため）参照する必要がない。
    const embeddedSystemUrl = getQuery('x-system-url', req);
    if (embeddedSystemUrl) {
        return embeddedSystemUrl.replace(/\/+$/, '');
    }
    if (IS_CLOUD) {
        const licenseNo = getHeaderOrPathParam(req, 'license_no');
        if (!licenseNo) {
            return undefined;
        }
        try {
            return (await (0, customer_license_repository_1.getUrlByLicenseNo)(licenseNo))?.replace(/\/+$/, '');
        }
        catch (error) {
            console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] GET ${req.path} failed to look up customer_license for license_no="${licenseNo}":`, error);
            return undefined;
        }
    }
    return (getHeaderOrPathParam(req, 'x-system-url') ?? process.env.SYSTEM_URL)?.replace(/\/+$/, '');
}
// OAuth2.0 リソースサーバーのメタデータを返すエンドポイント
const protectedResourceHandler = async (req, res) => {
    const systemUrl = await resolveSystemUrlQuietly(req);
    // resource はクライアントの接続 URL（/mcp または /:tenantId/mcp）と一致させる必要がある
    // （SDK の selectResourceURL が検証するため、不一致だとクライアントが Fatal エラーになる）。
    const resourcePath = req.params.tenantId ? `/${encodeURIComponent(req.params.tenantId)}/mcp` : '/mcp';
    // authorization_servers には AgileWorks（systemUrl）を直接載せず、この MCP サーバー自身を
    // 仲介 issuer「{MCP_SERVER_BASE_URL}/as/{base64url(systemUrl)}」として返す。
    //
    // クライアントは issuer 文字列から RFC 8414 の規則で認可サーバーメタデータの URL を組み立てる（{origin}/.well-known/oauth-authorization-server{path}）。
    // このときクエリは落とされるため、テナント情報（systemUrl）はクエリでは渡せず、issuer のパスにbase64url で埋め込む必要がある。
    // これでクライアントは GET /.well-known/oauth-authorization-server/as/:b64SystemUrl に到達し、テナントごとの AgileWorks を指すメタデータを受け取れる。
    const authorizationServer = systemUrl
        ? `${MCP_SERVER_BASE_URL}/as/${Buffer.from(systemUrl).toString('base64url')}`
        : null;
    console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] GET ${req.path} systemUrl="${systemUrl ?? 'UNRESOLVED'}" -> authorization_servers=${authorizationServer ? `"${authorizationServer}"` : '[]'}`);
    res.json({
        resource: `${MCP_SERVER_BASE_URL}${resourcePath}`,
        authorization_servers: authorizationServer ? [authorizationServer] : [],
    });
};
app.get('/.well-known/oauth-protected-resource', protectedResourceHandler);
// MCP SDK の path-aware ディスカバリー形式にも応答する:
//   {origin}/.well-known/oauth-protected-resource/mcp
//   {origin}/.well-known/oauth-protected-resource/:tenantId/mcp
// SDK はこの形式のとき接続 URL のパス（/:tenantId/mcp）を維持して fetch する。
// ここで 404 を返すと SDK はテナントなしの root 形式にフォールバックし、テナントを解決できなくなるため、必ずここで応答する。
app.get('/.well-known/oauth-protected-resource/mcp', protectedResourceHandler);
app.get('/.well-known/oauth-protected-resource/:tenantId/mcp', protectedResourceHandler);
// OAuth2.0 認可サーバーメタデータの仲介エンドポイント（RFC 8414 sub-issuer 形式）
// "{MCP_SERVER_BASE_URL}/as/{b64}" から GET /.well-known/oauth-authorization-server/as/{b64} を構築してここに到達する。
// 実際の OAuth フロー（authorize / token）は AgileWorks に直接向ける。
// registration_endpoint は広告しない（DCR 非対応。client_id はクライアント側で事前登録済みのものを設定する）。
app.get('/.well-known/oauth-authorization-server/as/:b64SystemUrl', (req, res) => {
    let systemUrl;
    try {
        systemUrl = Buffer.from(req.params.b64SystemUrl, 'base64url').toString('utf8').replace(/\/+$/, '');
        if (!isHttpOrHttpsUrl(systemUrl)) {
            throw new Error('invalid protocol');
        }
    }
    catch {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        return;
    }
    console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] GET /.well-known/oauth-authorization-server/as systemUrl="${systemUrl}"`);
    res.json({
        issuer: `${MCP_SERVER_BASE_URL}/as/${req.params.b64SystemUrl}`,
        authorization_endpoint: `${systemUrl}/oauth/authorize`,
        token_endpoint: `${systemUrl}/oauth/token`,
        response_types_supported: ['code'],
        grant_types_supported: ['authorization_code', 'refresh_token'],
        code_challenge_methods_supported: ['S256', 'plain'],
    });
});
// ヘルスチェックエンドポイント (versionとDynamoDBの接続確認を返す)
app.get('/health', async (req, res) => {
    let isHealthy = true;
    if (IS_CLOUD) {
        // クラウド版のみ DynamoDB の接続確認を行う（オンプレ版は DynamoDB を使用しない）
        isHealthy = await (0, dynamodb_client_1.checkDynamoDbConnection)();
    }
    res.status(isHealthy ? http_status_codes_1.StatusCodes.OK : http_status_codes_1.StatusCodes.SERVICE_UNAVAILABLE).json({
        status: isHealthy ? 'OK' : 'NG',
        version: package_json_1.version
    });
});
app.listen(PORT, () => {
    console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] AgileWorks MCP HTTP server listening on port ${PORT}`);
});
