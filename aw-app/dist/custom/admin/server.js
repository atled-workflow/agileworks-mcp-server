"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* ローカルMCPサーバー
*/
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const register_tools_1 = require("../../generated/admin/register-tools");
const server = new mcp_js_1.McpServer({
    name: 'AgileWorksMCPServer',
    version: '0.1.1',
});
(0, register_tools_1.registerTools)(server);
const transport = new stdio_js_1.StdioServerTransport();
server.connect(transport).then(() => {
    console.error('MCP server running on stdio');
}).catch(console.error);
