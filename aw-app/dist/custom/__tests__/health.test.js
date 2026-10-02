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
const package_json_1 = require("../../../package.json");
// ─────────────────────────────────────────────────────────────
// GET /health のテスト
//
// server-http.ts は import した時点で app.listen() が実行される構成のため、
// 子プロセスとして起動し、実際の HTTP リクエストで挙動を検証する。
// DynamoDB は、customer_license への GetItem リクエストに 200 を返すモック HTTP サーバー
// （成功ケース）、または何も listen していないポート（接続不可＝失敗ケース）で代替する。
//
// 検証対象:
//   - IS_CLOUD=false（オンプレ版）: DynamoDB 未使用のため常に 200 OK
//   - IS_CLOUD=true（クラウド版） + DynamoDB 疎通可: 200 OK
//   - IS_CLOUD=true（クラウド版） + DynamoDB 疎通不可: 503 + status NG
// ─────────────────────────────────────────────────────────────
const APP_ROOT = node_path_1.default.resolve(__dirname, '..', '..', '..');
const SERVER_ENTRY = node_path_1.default.join(APP_ROOT, 'src', 'custom', 'admin', 'server-http.ts');
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
// customer_license への GetItem リクエストに正常応答するモック DynamoDB エンドポイント
function startMockDynamoDb() {
    return new Promise((resolve) => {
        const requests = [];
        const server = node_http_1.default.createServer((req, res) => {
            const chunks = [];
            req.on('data', (c) => chunks.push(c));
            req.on('end', () => {
                const text = Buffer.concat(chunks).toString('utf8');
                requests.push({
                    target: String(req.headers['x-amz-target'] ?? ''),
                    body: text ? JSON.parse(text) : {},
                });
                res.writeHead(200, { 'Content-Type': 'application/x-amz-json-1.0' });
                // 存在しないキーでの GetItem を模して、Item なし（疎通のみ確認）で応答する
                res.end(JSON.stringify({}));
            });
        });
        server.listen(0, '127.0.0.1', () => {
            const address = server.address();
            resolve({ server, url: `http://127.0.0.1:${address.port}`, requests });
        });
    });
}
async function startServer(env) {
    const port = await getFreePort();
    const baseUrl = `http://127.0.0.1:${port}`;
    const child = (0, node_child_process_1.spawn)(process.execPath, ['--import', 'tsx', SERVER_ENTRY], {
        cwd: APP_ROOT,
        env: {
            ...process.env,
            MCP_PORT: String(port),
            MCP_SERVER_BASE_URL: baseUrl,
            AWS_ACCESS_KEY_ID: 'dummy',
            AWS_SECRET_ACCESS_KEY: 'dummy',
            AWS_REGION: 'ap-northeast-1',
            ...env,
        },
        stdio: ['ignore', 'pipe', 'pipe'],
    });
    const handle = { process: child, baseUrl, log: '' };
    child.stdout?.on('data', (c) => { handle.log += String(c); });
    child.stderr?.on('data', (c) => { handle.log += String(c); });
    // /health は DynamoDB 疎通不可でも 503 で応答するため、起動完了確認にそのまま使える
    const deadline = Date.now() + 30000;
    for (;;) {
        if (child.exitCode !== null) {
            throw new Error(`server-http.ts が起動前に終了しました (exitCode=${child.exitCode})\n${handle.log}`);
        }
        try {
            const res = await fetch(`${baseUrl}/health`);
            if (res.status === 200 || res.status === 503)
                return handle;
        }
        catch {
            // 起動待ち
        }
        if (Date.now() > deadline) {
            throw new Error(`server-http.ts の起動がタイムアウトしました\n${handle.log}`);
        }
        await new Promise((r) => setTimeout(r, 200));
    }
}
// ─────────────────────────────────────────────────────────────
// テスト
// ─────────────────────────────────────────────────────────────
(0, node_test_1.describe)('GET /health', () => {
    (0, node_test_1.describe)('IS_CLOUD=false（オンプレ版・DynamoDB 未使用）', () => {
        let handle;
        (0, node_test_1.before)(async () => {
            handle = await startServer({
                IS_CLOUD: 'false',
                SYSTEM_URL: 'https://example.com',
                // DynamoDB へは接続しない設定のはずなので、疎通不可なエンドポイントを指定しても影響しないことを確認する
                DYNAMODB_ENDPOINT: 'http://127.0.0.1:1',
            });
        });
        (0, node_test_1.after)(() => {
            handle.process.kill();
        });
        (0, node_test_1.it)('DynamoDB が疎通不可でも 200 OK を返す', async () => {
            const res = await fetch(`${handle.baseUrl}/health`);
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.status, 'OK');
            strict_1.default.strictEqual(body.version, package_json_1.version);
        });
    });
    (0, node_test_1.describe)('IS_CLOUD=true（クラウド版） + DynamoDB 疎通可', () => {
        let handle;
        let mockDynamoDb;
        let requests;
        (0, node_test_1.before)(async () => {
            const mock = await startMockDynamoDb();
            mockDynamoDb = mock.server;
            requests = mock.requests;
            handle = await startServer({
                IS_CLOUD: 'true',
                DYNAMODB_ENDPOINT: mock.url,
            });
        });
        (0, node_test_1.after)(() => {
            handle.process.kill();
            mockDynamoDb.close();
        });
        (0, node_test_1.it)('200 OK と status OK を返す', async () => {
            const res = await fetch(`${handle.baseUrl}/health`);
            strict_1.default.strictEqual(res.status, 200);
            const body = await res.json();
            strict_1.default.strictEqual(body.status, 'OK');
            strict_1.default.strictEqual(body.version, package_json_1.version);
        });
        (0, node_test_1.it)('customer_license テーブルへの GetItem で疎通確認している', async () => {
            await fetch(`${handle.baseUrl}/health`);
            strict_1.default.ok(requests.length > 0, 'DynamoDB へリクエストが送信されていない');
            const last = requests[requests.length - 1];
            strict_1.default.match(last.target, /GetItem$/);
            strict_1.default.strictEqual(last.body.TableName, 'customer_license');
        });
    });
    (0, node_test_1.describe)('IS_CLOUD=true（クラウド版） + DynamoDB 疎通不可', () => {
        let handle;
        (0, node_test_1.before)(async () => {
            handle = await startServer({
                IS_CLOUD: 'true',
                // どのプロセスも listen していないポートを指定し、接続不可を再現する
                DYNAMODB_ENDPOINT: 'http://127.0.0.1:1',
            });
        });
        (0, node_test_1.after)(() => {
            handle.process.kill();
        });
        (0, node_test_1.it)('503 と status NG を返す', async () => {
            const res = await fetch(`${handle.baseUrl}/health`);
            strict_1.default.strictEqual(res.status, 503);
            const body = await res.json();
            strict_1.default.strictEqual(body.status, 'NG');
            strict_1.default.strictEqual(body.version, package_json_1.version);
        });
    });
});
