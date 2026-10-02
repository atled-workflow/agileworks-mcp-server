"use strict";
/**
 * orval が生成した server.ts を読み込み、register-tools.ts を自動生成するスクリプト。
 * package.json の build スクリプト（orval の直後）から実行される。
 *
 * 生成物: src/generated/admin/register-tools.ts
 *   - registerTools(server: McpServer): void を export する
 *   - src/custom/admin/server.ts と src/custom/admin/server-http.ts から import して使う
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const yaml_1 = require("yaml");
const allowed_operations_1 = require("./allowed-operations");
const SERVER_TS = 'src/generated/admin/server.ts';
const OUTPUT_TS = 'src/generated/admin/register-tools.ts';
const OPENAPI_YAML = 'openapi.yaml';
// ツール説明文の上限（Claude カスタムコネクタ経由の ToolSearch 検索性を上げるための
// summary + description 合成後、極端に長くなるケースを避けるための安全弁）
const MAX_DESCRIPTION_LENGTH = 200;
// ─── openapi.yaml から operationId ごとの summary / description を収集 ────────
//
// カスタムコネクタ（claude.ai）経由の利用では、ツール数が多いこのサーバーは
// ToolSearch による遅延ロード対象になる。ToolSearch のキーワード検索は
// ツール名（英語の operationId）には強く一致する一方、summary だけの短い日本語
// （例:「書類検索」）だけでは一致せず、ツールが「存在するのに見つからない」状態になる。
// summary に description の文章を合成してツールの説明文を厚くすることで、
// 日本語の自然文検索でも ToolSearch に引っかかりやすくする。
function loadOperationDescriptions() {
    const doc = (0, yaml_1.parse)(fs.readFileSync(OPENAPI_YAML, 'utf-8'));
    const descriptions = new Map();
    for (const pathItem of Object.values(doc.paths ?? {})) {
        for (const operation of Object.values(pathItem ?? {})) {
            if (!operation?.operationId)
                continue;
            const summary = (operation.summary ?? '').trim();
            const description = (operation.description ?? '')
                .replace(/<br\s*\/?>/gi, ' ')
                .replace(/\s+/g, ' ')
                .trim();
            let combined = description && description !== summary ? `${summary}。${description}` : summary;
            if (combined.length > MAX_DESCRIPTION_LENGTH) {
                combined = `${combined.slice(0, MAX_DESCRIPTION_LENGTH - 1)}…`;
            }
            descriptions.set(toToolName(operation.operationId), combined);
        }
    }
    return descriptions;
}
function escapeJsString(value) {
    return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
// orval は operationId の先頭 1 文字だけを小文字化してツール名にするため
// （例: FindUser -> findUser）、マップのキーもそれに合わせて正規化する
function toToolName(operationId) {
    return operationId.charAt(0).toLowerCase() + operationId.slice(1);
}
const operationDescriptions = loadOperationDescriptions();
// ─── ツール名を agileworks_<動詞>_<名詞> 形式に統一するための上書きマップ ──────
//
// orval は operationId を camelCase 化してツール名にするため、アンダースコア区切り
// の名前を openapi.yaml の operationId に指定しても反映されない。そのため、
// generate-register-tools.ts の後処理でツール名（server.tool() の第1引数）を
// 直接上書きする。一覧は allowed-operations.ts で一括管理する。
const TOOL_NAME_OVERRIDES = new Map(allowed_operations_1.ALLOWED_OPERATIONS.map(({ operationId, toolName }) => [operationId, toolName]));
// ─── readOnlyHint/destructiveHint/idempotentHint から ToolAnnotations を合成 ──
//
// server.tool() は `tool(name, description, paramsSchema, annotations, cb)` という
// オーバーロードを持つため、paramsSchema オブジェクトとハンドラー引数の間に
// annotations オブジェクトを挿入する。値は allowed-operations.ts の
// AllowedOperation で一括管理する（付与方針はそちらのコメントを参照）。
const ANNOTATIONS_BY_OPERATION = new Map(allowed_operations_1.ALLOWED_OPERATIONS.map((op) => [op.operationId, op]));
function formatAnnotations(op, indent) {
    const innerIndent = `${indent}  `;
    const fields = [`readOnlyHint: ${op.readOnlyHint}`];
    if (op.destructiveHint !== undefined) {
        fields.push(`destructiveHint: ${op.destructiveHint}`);
    }
    if (op.idempotentHint !== undefined) {
        fields.push(`idempotentHint: ${op.idempotentHint}`);
    }
    return `{\n${fields.map((field) => innerIndent + field).join(',\n')}\n${indent}}`;
}
// ─── ソース読み込み ────────────────────────────────────────────────────────────
const src = fs.readFileSync(SERVER_TS, 'utf-8');
// ─── handlers import ブロックを抽出 ───────────────────────────────────────────
const handlersMatch = src.match(/import\s*\{[^}]+\}\s*from\s*'\.\/handlers'/s);
if (!handlersMatch) {
    throw new Error(`handlers import block not found in ${SERVER_TS}`);
}
const handlersImport = handlersMatch[0];
// ─── tool-schemas.zod import ブロックを抽出 ───────────────────────────────────
const schemasMatch = src.match(/import\s*\{[^}]+\}\s*from\s*'\.\/tool-schemas\.zod'/s);
if (!schemasMatch) {
    throw new Error(`tool-schemas.zod import block not found in ${SERVER_TS}`);
}
const schemasImport = schemasMatch[0];
// ─── server.tool(...) 呼び出しをすべて抽出（括弧カウント方式） ────────────────
const toolCalls = [];
let searchPos = 0;
while (true) {
    const callStart = src.indexOf('server.tool(', searchPos);
    if (callStart === -1)
        break;
    let depth = 0;
    let i = callStart + 'server.tool'.length; // '(' の位置
    let callEnd = -1;
    while (i < src.length) {
        const ch = src[i];
        if (ch === '(') {
            depth++;
        }
        else if (ch === ')') {
            depth--;
            if (depth === 0) {
                // ')' の直後にある ';' を含めて取得
                const afterParen = src.slice(i + 1).match(/^[ \t]*;/);
                callEnd = i + 1 + (afterParen ? afterParen[0].length : 0);
                break;
            }
        }
        i++;
    }
    if (callEnd === -1)
        break;
    // ツール名（1 番目の引数）を取り出し、openapi.yaml の summary+description に
    // 差し替えられる場合は 2 番目の引数（説明文）を差し替える
    let rawCall = src.slice(callStart, callEnd).trimEnd();
    const toolNameMatch = rawCall.match(/server\.tool\(\s*'([^']+)'/);
    const originalToolName = toolNameMatch?.[1];
    const enrichedDescription = originalToolName ? operationDescriptions.get(originalToolName) : undefined;
    if (enrichedDescription) {
        rawCall = rawCall.replace(/(server\.tool\(\s*'[^']+',\s*)'(?:[^'\\]|\\.)*'/, (_match, prefix) => `${prefix}'${escapeJsString(enrichedDescription)}'`);
    }
    const overriddenToolName = originalToolName ? TOOL_NAME_OVERRIDES.get(originalToolName) : undefined;
    if (overriddenToolName) {
        rawCall = rawCall.replace(/(server\.tool\(\s*)'[^']+'/, (_match, prefix) => `${prefix}'${overriddenToolName}'`);
    }
    // paramsSchema 引数（`{ bodyParams: xxxBody }`）とハンドラー引数の間に
    // annotations 引数を挿入する
    const annotation = originalToolName ? ANNOTATIONS_BY_OPERATION.get(originalToolName) : undefined;
    if (annotation) {
        rawCall = rawCall.replace(/(\n)(\s*)(\w+Handler)(\s*\n\s*\);)$/, (_match, newline, indent, handlerName, tail) => `${newline}${indent}${formatAnnotations(annotation, indent)},\n${indent}${handlerName}${tail}`);
    }
    // 各行を 2 スペースインデント
    const indented = rawCall
        .split('\n')
        .map((line) => '  ' + line)
        .join('\n');
    toolCalls.push(indented);
    searchPos = callEnd;
}
if (toolCalls.length === 0) {
    throw new Error(`No server.tool() calls found in ${SERVER_TS}`);
}
// ─── register-tools.ts を生成 ─────────────────────────────────────────────────
const output = `// Auto-generated by src/custom/scripts/generate-register-tools.ts
// Do not edit manually.
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
${handlersImport}
${schemasImport}

export function registerTools(server: McpServer): void {
${toolCalls.join('\n\n')}
}
`;
fs.writeFileSync(OUTPUT_TS, output, 'utf-8');
console.log(`[generate-register-tools] ${toolCalls.length} tools written to ${OUTPUT_TS}`);
// orval が生成した server.ts は register-tools.ts の生成にのみ使用するため削除する。
// （custom/admin/server.ts が正式なサーバーファイルであり、generated/admin/server.ts は不要）
fs.unlinkSync(SERVER_TS);
console.log(`[generate-register-tools] ${SERVER_TS} removed (no longer needed)`);
