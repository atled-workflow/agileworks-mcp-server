"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const custom_mcp_instance_1 = require("../custom-mcp-instance");
// ─────────────────────────────────────────────────────────────
// customFetchInstance に追加した logApiError の
// 呼び出しを検証する（実際の AgileWorks Web API 呼び出し失敗時のログ）
// 成功時はログを出力しない（ステータスコードのログ出力は廃止済み）
// ─────────────────────────────────────────────────────────────
(0, node_test_1.describe)('customFetchInstance のログ出力', () => {
    (0, node_test_1.it)('成功時: ログを出力しない', async (t) => {
        const errorCalls = [];
        t.mock.method(console, 'error', (...args) => {
            errorCalls.push(args);
        });
        t.mock.method(globalThis, 'fetch', async () => {
            return new Response(JSON.stringify({ ok: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        });
        await custom_mcp_instance_1.tenantContext.run({ systemUrl: 'https://tenant-log.example.com', accessToken: 'token-X', useOAuth: false }, () => (0, custom_mcp_instance_1.customFetchInstance)('/api/test'));
        strict_1.default.strictEqual(errorCalls.length, 0);
    });
    (0, node_test_1.it)('method を指定して成功した場合も、ログを出力しない', async (t) => {
        const errorCalls = [];
        t.mock.method(console, 'error', (...args) => {
            errorCalls.push(args);
        });
        t.mock.method(globalThis, 'fetch', async () => {
            return new Response(JSON.stringify({ ok: true }), {
                status: 201,
                headers: { 'Content-Type': 'application/json' },
            });
        });
        await custom_mcp_instance_1.tenantContext.run({ systemUrl: 'https://tenant-log.example.com', accessToken: 'token-X', useOAuth: false }, () => (0, custom_mcp_instance_1.customFetchInstance)('/api/test', { method: 'POST' }));
        strict_1.default.strictEqual(errorCalls.length, 0);
    });
    (0, node_test_1.it)('失敗時(通常エラー): logApiError 相当のログをレスポンスボディ付きで1件だけ出力する', async (t) => {
        const errorCalls = [];
        t.mock.method(console, 'error', (...args) => {
            errorCalls.push(args);
        });
        t.mock.method(globalThis, 'fetch', async () => {
            return new Response('upstream failure detail', { status: 500 });
        });
        await custom_mcp_instance_1.tenantContext.run({ systemUrl: 'https://tenant-log.example.com', accessToken: 'token-X', useOAuth: false }, async () => {
            await strict_1.default.rejects(() => (0, custom_mcp_instance_1.customFetchInstance)('/Broker/WebApi/Service?name=doc.Doc&method=getDoc'), /HTTP error! status: 500/);
        });
        // logApiError は customFetchInstance 内で await されない（fire-and-forget）ため、
        // レスポンスボディ読み取り分の非同期処理が完了するまで待つ
        await new Promise((resolve) => setTimeout(resolve, 0));
        strict_1.default.strictEqual(errorCalls.length, 1);
        strict_1.default.match(String(errorCalls[0][0]), /^\[MCP\]\[.+\] GET systemUrl=https:\/\/tenant-log\.example\.com tool=getDoc → 500 body: upstream failure detail$/);
    });
    (0, node_test_1.it)('失敗時(OAuth 401 → AGILEWORKS_AUTH_ERROR): エラー変換前に logApiError を出力する', async (t) => {
        const errorCalls = [];
        t.mock.method(console, 'error', (...args) => {
            errorCalls.push(args);
        });
        t.mock.method(globalThis, 'fetch', async () => {
            return new Response('token expired', { status: 401 });
        });
        await custom_mcp_instance_1.tenantContext.run({ systemUrl: 'https://tenant-log.example.com', accessToken: 'expired-token', useOAuth: true }, async () => {
            await strict_1.default.rejects(() => (0, custom_mcp_instance_1.customFetchInstance)('/Broker/WebApi/Service?name=doc.Doc&method=getDoc'), /AGILEWORKS_AUTH_ERROR/);
        });
        // logApiError は customFetchInstance 内で await されない（fire-and-forget）ため、
        // レスポンスボディ読み取り分の非同期処理が完了するまで待つ
        await new Promise((resolve) => setTimeout(resolve, 0));
        strict_1.default.strictEqual(errorCalls.length, 1);
        strict_1.default.match(String(errorCalls[0][0]), /^\[MCP\]\[.+\] GET systemUrl=https:\/\/tenant-log\.example\.com tool=getDoc → 401 body: token expired$/);
    });
});
