"use strict";
/**
 * AgileWorks MCP HTTP Server (Multi-tenant)
 *
 * クライアント（mcp-remote）から送信される以下のヘッダーを使ってテナントを識別します:
 *   x-system-url   : AgileWorks システム URL
 *   x-access-token : アクセストークン
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const streamableHttp_js_1 = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
const express_1 = __importDefault(require("express"));
const custom_mcp_instance_1 = require("../../custom/custom-mcp-instance");
const register_tools_1 = require("../../generated/admin/register-tools");
const log_utils_1 = require("../../custom/log/log-utils");
const PORT = parseInt(process.env.MCP_PORT ?? '8002', 10);
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
app.post('/mcp', async (req, res) => {
    const systemUrl = (req.get('x-system-url') ?? req.query['x-system-url'] ?? process.env.SYSTEM_URL)?.replace(/\/+$/, '');
    const accessToken = req.get('x-access-token') ?? req.query['x-access-token'] ?? process.env.ACCESS_TOKEN;
    if (!systemUrl || !accessToken) {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Missing required: system-url and access-token must be provided in headers or environment variables.`);
        res.status(400).json({ jsonrpc: '2.0', error: { code: -32600, message: 'Missing required headers' }, id: null });
        return;
    }
    let parsedSystemUrl;
    try {
        parsedSystemUrl = new URL(systemUrl);
    }
    catch {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Invalid system URL: "${systemUrl}"`);
        res.status(400).json({ jsonrpc: '2.0', error: { code: -32600, message: 'Invalid system URL' }, id: null });
        return;
    }
    if (parsedSystemUrl.protocol !== 'http:' && parsedSystemUrl.protocol !== 'https:') {
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] Rejected system URL with disallowed protocol: "${parsedSystemUrl.protocol}"`);
        res.status(400).json({ jsonrpc: '2.0', error: { code: -32600, message: 'System URL must use http or https' }, id: null });
        return;
    }
    const body = req.body;
    const method = body?.method ?? 'unknown';
    const toolName = method === 'tools/call' ? (body?.params?.name ?? 'unknown') : undefined;
    const methodLabel = toolName != null ? `method=${method} tool=${toolName}` : `method=${method}`;
    const reqStart = performance.now();
    const transport = new streamableHttp_js_1.StreamableHTTPServerTransport({
        sessionIdGenerator: undefined, // stateless モード（セッション管理なし）
    });
    const origSend = transport.send.bind(transport);
    transport.send = async (message) => {
        const msg = message;
        if (msg?.error) {
            // JSON-RPC プロトコルレベルのエラー
            const durationMs = Math.round(performance.now() - reqStart);
            console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST /mcp systemUrl="${systemUrl}" ${methodLabel} error ${msg.error.code}: ${msg.error.message} (${durationMs}ms)`);
        }
        else if (msg?.result?.isError) {
            // ツールハンドラー内のエラー（McpError を含む）は isError: true の result として返される
            const text = msg.result.content?.find(c => c.type === 'text')?.text ?? '(no message)';
            const durationMs = Math.round(performance.now() - reqStart);
            console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST /mcp systemUrl="${systemUrl}" ${methodLabel} tool error: ${text} (${durationMs}ms)`);
        }
        return origSend(message);
    };
    const context = {
        systemUrl: systemUrl,
        accessToken: accessToken,
    };
    try {
        await custom_mcp_instance_1.tenantContext.run(context, async () => {
            const server = createMcpServer();
            await server.connect(transport);
            await transport.handleRequest(req, res, req.body);
        });
        const durationMs = Math.round(performance.now() - reqStart);
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST /mcp systemUrl="${systemUrl ?? 'NOT_SET'}" ${methodLabel} completed (${durationMs}ms)`);
    }
    catch (error) {
        const durationMs = Math.round(performance.now() - reqStart);
        console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] POST /mcp systemUrl="${systemUrl ?? 'NOT_SET'}" ${methodLabel} Error handling request (${durationMs}ms):`, error);
        if (!res.headersSent) {
            res.status(500).json({
                jsonrpc: '2.0',
                error: { code: -32603, message: 'Internal server error' },
                id: null,
            });
        }
    }
});
app.get('/mcp', (_req, res) => {
    res.setHeader('Allow', 'POST').status(405).end();
});
app.listen(PORT, () => {
    console.error(`[MCP][${(0, log_utils_1.getLogIsoTimestamp)()}] AgileWorks MCP HTTP server listening on port ${PORT}`);
});
