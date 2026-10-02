"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const web_api_client_1 = require("../web-api/web-api-client");
const API_KEY_URL = 'https://example.com/key';
const USAGE_PLAN_URL = 'https://example.org';
(0, node_test_1.describe)('WebApiClient', () => {
    const originalApiKeyUrl = process.env.INTERNAL_OPS_API_KEY_URL;
    const originalUsagePlanUrl = process.env.AW_USAGE_PLAN_API_REQUEST_URL;
    (0, node_test_1.beforeEach)(() => {
        process.env.INTERNAL_OPS_API_KEY_URL = API_KEY_URL;
        process.env.AW_USAGE_PLAN_API_REQUEST_URL = USAGE_PLAN_URL;
    });
    (0, node_test_1.afterEach)(() => {
        if (originalApiKeyUrl === undefined) {
            delete process.env.INTERNAL_OPS_API_KEY_URL;
        }
        else {
            process.env.INTERNAL_OPS_API_KEY_URL = originalApiKeyUrl;
        }
        if (originalUsagePlanUrl === undefined) {
            delete process.env.AW_USAGE_PLAN_API_REQUEST_URL;
        }
        else {
            process.env.AW_USAGE_PLAN_API_REQUEST_URL = originalUsagePlanUrl;
        }
    });
    // fetchApiGatewayApiKey 宛のリクエストと、それ以外(実際のAPI呼び出し)を振り分けて記録する
    function mockFetch(t, recorded) {
        t.mock.method(globalThis, 'fetch', async (url, init) => {
            const urlStr = String(url);
            if (urlStr === API_KEY_URL) {
                return new Response(JSON.stringify({ api_key: { id: 'key-1', value: 'gateway-api-key' } }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            recorded.push({ url: urlStr, init });
            return new Response(JSON.stringify({ ok: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        });
    }
    (0, node_test_1.describe)('オンプレ版 (forOnPremise)', () => {
        (0, node_test_1.it)('systemUrl の末尾スラッシュを除去してパスと結合する', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forOnPremise('https://onprem.example.com/AgileWorks/');
            await client.request('/api/test', 'token-abc');
            strict_1.default.strictEqual(recorded[0].url, 'https://onprem.example.com/AgileWorks/api/test');
        });
        (0, node_test_1.it)('パスに先頭スラッシュがなくても付与して結合する', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forOnPremise('https://onprem.example.com');
            await client.request('api/test', 'token-abc');
            strict_1.default.strictEqual(recorded[0].url, 'https://onprem.example.com/api/test');
        });
        (0, node_test_1.it)('accessToken がある場合 Authorization ヘッダーを付与し、既定で Content-Type: application/json を設定する', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forOnPremise('https://onprem.example.com');
            await client.request('/api/test', 'token-abc');
            const headers = recorded[0].init?.headers;
            strict_1.default.strictEqual(headers['Authorization'], 'Bearer token-abc');
            strict_1.default.strictEqual(headers['Content-Type'], 'application/json');
            strict_1.default.match(headers['User-Agent'], /^agileworks-mcp\/\d+\.\d+\.\d+$/);
        });
        (0, node_test_1.it)('accessToken が空文字の場合 Authorization ヘッダーを付与しない', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const warnCalls = [];
            t.mock.method(console, 'warn', (...args) => {
                warnCalls.push(args);
            });
            const client = web_api_client_1.WebApiClient.forOnPremise('https://onprem.example.com');
            await client.request('/api/test', '');
            const headers = recorded[0].init?.headers;
            strict_1.default.strictEqual('Authorization' in headers, false);
            strict_1.default.strictEqual(warnCalls.length, 1);
        });
        (0, node_test_1.it)('body が FormData の場合 Content-Type を自動付与しない', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forOnPremise('https://onprem.example.com');
            const form = new FormData();
            await client.request('/api/upload', 'token-abc', { method: 'POST', body: form });
            const headers = recorded[0].init?.headers;
            strict_1.default.strictEqual('Content-Type' in headers, false);
        });
        (0, node_test_1.it)('options.headers に既に Content-Type がある場合は上書きしない', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forOnPremise('https://onprem.example.com');
            await client.request('/api/test', 'token-abc', {
                headers: { 'Content-Type': 'text/plain' },
            });
            const headers = recorded[0].init?.headers;
            strict_1.default.strictEqual(headers['Content-Type'], 'text/plain');
        });
        (0, node_test_1.it)('license-no / x-api-key ヘッダーは付与されない', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forOnPremise('https://onprem.example.com');
            await client.request('/api/test', 'token-abc');
            const headers = recorded[0].init?.headers;
            strict_1.default.strictEqual('license-no' in headers, false);
            strict_1.default.strictEqual('x-api-key' in headers, false);
        });
    });
    (0, node_test_1.describe)('クラウド版 (forCloud)', () => {
        (0, node_test_1.it)('AW_USAGE_PLAN_API_REQUEST_URL とパスを結合する', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forCloud('license-001');
            await client.request('/api/test', 'token-abc');
            strict_1.default.strictEqual(recorded[0].url, `${USAGE_PLAN_URL}/api/test`);
        });
        (0, node_test_1.it)('AW_USAGE_PLAN_API_REQUEST_URL の末尾スラッシュを除去してパスと結合する', async (t) => {
            process.env.AW_USAGE_PLAN_API_REQUEST_URL = `${USAGE_PLAN_URL}/`;
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forCloud('license-001');
            await client.request('/api/test', 'token-abc');
            strict_1.default.strictEqual(recorded[0].url, `${USAGE_PLAN_URL}/api/test`);
        });
        (0, node_test_1.it)('AW_USAGE_PLAN_API_REQUEST_URL が未設定の場合エラーを投げる', async () => {
            delete process.env.AW_USAGE_PLAN_API_REQUEST_URL;
            const client = web_api_client_1.WebApiClient.forCloud('license-001');
            await strict_1.default.rejects(() => client.request('/api/test', 'token-abc'), /Environment variable AW_USAGE_PLAN_API_REQUEST_URL is not set\./);
        });
        (0, node_test_1.it)('license-no ヘッダーと、fetchApiGatewayApiKey が返す値を x-api-key ヘッダーに設定する', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forCloud('license-001');
            await client.request('/api/test', 'token-abc');
            const headers = recorded[0].init?.headers;
            strict_1.default.strictEqual(headers['license-no'], 'license-001');
            strict_1.default.strictEqual(headers['x-api-key'], 'gateway-api-key');
            strict_1.default.match(headers['User-Agent'], /^agileworks-mcp\/\d+\.\d+\.\d+$/);
        });
        (0, node_test_1.it)('Authorization / Content-Type も併せて設定される', async (t) => {
            const recorded = [];
            mockFetch(t, recorded);
            const client = web_api_client_1.WebApiClient.forCloud('license-001');
            await client.request('/api/test', 'token-abc');
            const headers = recorded[0].init?.headers;
            strict_1.default.strictEqual(headers['Authorization'], 'Bearer token-abc');
            strict_1.default.strictEqual(headers['Content-Type'], 'application/json');
        });
        (0, node_test_1.it)('APIキー取得に失敗した場合、request() 全体が失敗する', async (t) => {
            t.mock.method(globalThis, 'fetch', async (url) => {
                if (String(url) === API_KEY_URL) {
                    return new Response(JSON.stringify({ statusCode: 403, error: 'Forbidden', message: 'invalid license' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
                }
                throw new Error('この呼び出しは発生してはいけない');
            });
            const client = web_api_client_1.WebApiClient.forCloud('bad-license');
            await strict_1.default.rejects(() => client.request('/api/test', 'token-abc'), /invalid license/);
        });
    });
});
