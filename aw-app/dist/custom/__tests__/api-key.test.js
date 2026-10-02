"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const api_key_1 = require("../web-api/api-key");
(0, node_test_1.describe)('fetchApiGatewayApiKey', () => {
    const originalUrl = process.env.INTERNAL_OPS_API_KEY_URL;
    (0, node_test_1.beforeEach)(() => {
        process.env.INTERNAL_OPS_API_KEY_URL = 'https://example.com/key';
    });
    (0, node_test_1.afterEach)(() => {
        if (originalUrl === undefined) {
            delete process.env.INTERNAL_OPS_API_KEY_URL;
        }
        else {
            process.env.INTERNAL_OPS_API_KEY_URL = originalUrl;
        }
    });
    (0, node_test_1.it)('INTERNAL_OPS_API_KEY_URL が未設定の場合エラーを投げる', async () => {
        delete process.env.INTERNAL_OPS_API_KEY_URL;
        await strict_1.default.rejects(() => (0, api_key_1.fetchApiGatewayApiKey)('license-001'), /Environment variable INTERNAL_OPS_API_KEY_URL is not set\./);
    });
    (0, node_test_1.it)('INTERNAL_OPS_API_KEY_URL の末尾スラッシュを除去してリクエストする', async (t) => {
        process.env.INTERNAL_OPS_API_KEY_URL = 'https://example.com/key/';
        let capturedUrl = '';
        t.mock.method(globalThis, 'fetch', async (url) => {
            capturedUrl = url;
            return new Response(JSON.stringify({ api_key: { id: 'key-1', value: 'secret-value' } }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        });
        await (0, api_key_1.fetchApiGatewayApiKey)('license-001');
        strict_1.default.strictEqual(capturedUrl, 'https://example.com/key');
    });
    (0, node_test_1.it)('成功時: license-no ヘッダーを付けて GET し、api_key.value を返す', async (t) => {
        let capturedUrl = '';
        let capturedInit;
        t.mock.method(globalThis, 'fetch', async (url, init) => {
            capturedUrl = url;
            capturedInit = init;
            return new Response(JSON.stringify({ api_key: { id: 'key-1', value: 'secret-value' } }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        });
        const value = await (0, api_key_1.fetchApiGatewayApiKey)('license-001');
        strict_1.default.strictEqual(value, 'secret-value');
        strict_1.default.strictEqual(capturedUrl, 'https://example.com/key');
        strict_1.default.strictEqual(capturedInit?.method, 'GET');
        strict_1.default.strictEqual(capturedInit?.headers?.['license-no'], 'license-001');
    });
    (0, node_test_1.it)('レスポンスが not ok の場合、body.message を使ってエラーを投げる', async (t) => {
        t.mock.method(globalThis, 'fetch', async () => {
            return new Response(JSON.stringify({ statusCode: 404, error: 'Not Found', message: 'license not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        });
        await strict_1.default.rejects(() => (0, api_key_1.fetchApiGatewayApiKey)('unknown-license'), /license not found/);
    });
    (0, node_test_1.it)('fetch が Error を投げた場合、そのメッセージで再スローする', async (t) => {
        t.mock.method(globalThis, 'fetch', async () => {
            throw new Error('network down');
        });
        await strict_1.default.rejects(() => (0, api_key_1.fetchApiGatewayApiKey)('license-001'), /network down/);
    });
    (0, node_test_1.it)('fetch が Error 以外を投げた場合、汎用メッセージで再スローする', async (t) => {
        t.mock.method(globalThis, 'fetch', async () => {
            throw 'some non-error rejection';
        });
        await strict_1.default.rejects(() => (0, api_key_1.fetchApiGatewayApiKey)('license-001'), /An unknown error occurred\./);
    });
    (0, node_test_1.describe)('ログ出力', () => {
        (0, node_test_1.it)('成功時: URL・licenseNo・ステータスを含む1行を console.error に出力しない', async (t) => {
            const errorCalls = [];
            t.mock.method(console, 'error', (...args) => {
                errorCalls.push(args);
            });
            t.mock.method(globalThis, 'fetch', async () => {
                return new Response(JSON.stringify({ api_key: { id: 'key-1', value: 'secret-value' } }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                });
            });
            await (0, api_key_1.fetchApiGatewayApiKey)('license-001');
            strict_1.default.strictEqual(errorCalls.length, 0);
        });
        (0, node_test_1.it)('レスポンスが not ok の場合、失敗ログを console.error に出力する', async (t) => {
            const errorCalls = [];
            t.mock.method(console, 'error', (...args) => {
                errorCalls.push(args);
            });
            t.mock.method(globalThis, 'fetch', async () => {
                return new Response(JSON.stringify({ statusCode: 404, error: 'Not Found', message: 'license not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            });
            await strict_1.default.rejects(() => (0, api_key_1.fetchApiGatewayApiKey)('unknown-license'));
            strict_1.default.strictEqual(errorCalls.length, 1);
            strict_1.default.match(String(errorCalls[0][0]), /^\[MCP\]\[.+\] GET licenseNo=unknown-license → 404 failed: license not found$/);
        });
        (0, node_test_1.it)('fetch が Error を投げた場合、失敗ログを console.error に出力する', async (t) => {
            const errorCalls = [];
            t.mock.method(console, 'error', (...args) => {
                errorCalls.push(args);
            });
            t.mock.method(globalThis, 'fetch', async () => {
                throw new Error('network down');
            });
            await strict_1.default.rejects(() => (0, api_key_1.fetchApiGatewayApiKey)('license-001'));
            strict_1.default.strictEqual(errorCalls.length, 1);
            strict_1.default.match(String(errorCalls[0][0]), /^\[MCP\]\[.+\] GET licenseNo=license-001 failed:$/);
            strict_1.default.match(errorCalls[0][1].message, /network down/);
        });
        (0, node_test_1.it)('INTERNAL_OPS_API_KEY_URL が未設定の場合は失敗ログを出力しない（環境変数チェックはログ対象外）', async (t) => {
            delete process.env.INTERNAL_OPS_API_KEY_URL;
            const errorCalls = [];
            t.mock.method(console, 'error', (...args) => {
                errorCalls.push(args);
            });
            await strict_1.default.rejects(() => (0, api_key_1.fetchApiGatewayApiKey)('license-001'));
            strict_1.default.strictEqual(errorCalls.length, 0);
        });
    });
});
