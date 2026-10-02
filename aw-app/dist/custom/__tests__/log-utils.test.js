"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const log_utils_1 = require("../log/log-utils");
(0, node_test_1.describe)('getLogIsoTimestamp', () => {
    (0, node_test_1.it)('YYYY-MM-DDTHH:mm:ss.SSS±HH:mm（またはZ）形式の文字列を返す', () => {
        const timestamp = (0, log_utils_1.getLogIsoTimestamp)();
        strict_1.default.match(timestamp, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|[+-]\d{2}:\d{2})$/);
    });
});
(0, node_test_1.describe)('logApiError', () => {
    (0, node_test_1.it)('method・systemUrl・tool・status・body を含む1行を console.error に出力する', async (t) => {
        const calls = [];
        t.mock.method(console, 'error', (...args) => {
            calls.push(args);
        });
        const response = new Response('internal error detail', { status: 500 });
        await (0, log_utils_1.logApiError)(response, 'https://onprem.example.com', '/api/fail', { method: 'POST' });
        strict_1.default.strictEqual(calls.length, 1);
        strict_1.default.match(String(calls[0][0]), /^\[MCP\]\[.+\] POST systemUrl=https:\/\/onprem\.example\.com tool=\/api\/fail → 500 body: internal error detail$/);
    });
    (0, node_test_1.it)('body が500文字を超える場合、先頭500文字に切り詰めて "..." を付与する', async (t) => {
        const calls = [];
        t.mock.method(console, 'error', (...args) => {
            calls.push(args);
        });
        const longBody = 'a'.repeat(600);
        const response = new Response(longBody, { status: 500 });
        await (0, log_utils_1.logApiError)(response, 'https://onprem.example.com', '/api/fail', { method: 'GET' });
        const message = String(calls[0][0]);
        strict_1.default.match(message, /body: a{500}\.\.\.$/);
        strict_1.default.strictEqual(message.includes('a'.repeat(501)), false);
    });
    (0, node_test_1.it)('body が500文字以下の場合は切り詰めない', async (t) => {
        const calls = [];
        t.mock.method(console, 'error', (...args) => {
            calls.push(args);
        });
        const shortBody = 'a'.repeat(500);
        const response = new Response(shortBody, { status: 500 });
        await (0, log_utils_1.logApiError)(response, 'https://onprem.example.com', '/api/fail', { method: 'GET' });
        const message = String(calls[0][0]);
        strict_1.default.match(message, /body: a{500}$/);
        strict_1.default.strictEqual(message.endsWith('...'), false);
    });
});
