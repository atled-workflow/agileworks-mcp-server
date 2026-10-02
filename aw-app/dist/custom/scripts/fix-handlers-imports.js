"use strict";
/**
 * orval が生成した handlers.ts の '../http-schemas' import ブロックを、実際の使用状況に
 * 合わせて再構成するスクリプト。package.json の build スクリプト
 * （generate-register-tools.ts の直後）から実行される。
 *
 * 背景: @orval/mcp の import 生成ロジックは型名を operationId から機械的に合成する
 * （例: getDoc → GetDocBody）。しかし requestBody を複数オペレーションで $ref 共有
 * すると、orval-core は重複定義を避けるため型名を参照先コンポーネント名
 * （例: docId → DocIdBody）に寄せる。この2つのロジックのズレにより、
 * 「使われているのに import されない型」と「import されているのに使われない型」が
 * 同時に発生する。ここでは handlers.ts の実際の型使用状況を再スキャンし、
 * import 文を過不足なく再構成する。
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
const path = __importStar(require("path"));
const HANDLERS_TS = 'src/generated/admin/handlers.ts';
const SCHEMAS_DIR = 'src/generated/http-schemas';
const SCHEMAS_INDEX = path.join(SCHEMAS_DIR, 'index.ts');
// ─── http-schemas がエクスポートする型名を収集 ────────────────────────────────
const indexSrc = fs.readFileSync(SCHEMAS_INDEX, 'utf-8');
const reExportFiles = [...indexSrc.matchAll(/export \* from '\.\/([\w.-]+)';/g)].map((m) => m[1]);
const availableNames = new Set();
for (const file of reExportFiles) {
    const filePath = path.join(SCHEMAS_DIR, `${file}.ts`);
    const fileSrc = fs.readFileSync(filePath, 'utf-8');
    for (const m of fileSrc.matchAll(/export (?:type|interface|const|enum) (\w+)/g)) {
        availableNames.add(m[1]);
    }
}
// ─── handlers.ts から '../http-schemas' の import ブロックを抽出 ──────────────
const handlersSrc = fs.readFileSync(HANDLERS_TS, 'utf-8');
const importMatch = handlersSrc.match(/import\s*\{([^}]+)\}\s*from\s*'\.\.\/http-schemas';/s);
if (!importMatch) {
    throw new Error(`'../http-schemas' import block not found in ${HANDLERS_TS}`);
}
const importBlock = importMatch[0];
const importStart = importMatch.index;
const importEnd = importStart + importBlock.length;
// import ブロックを除いた本文（ここでの型名の出現＝実使用とみなす）
const restSrc = handlersSrc.slice(0, importStart) + handlersSrc.slice(importEnd);
// ─── 実際に使われている型名を、本文中の初出位置順に判定 ───────────────────────
const usedNames = [];
for (const name of availableNames) {
    const usageMatch = restSrc.match(new RegExp(`\\b${name}\\b`));
    if (usageMatch) {
        usedNames.push({ name, pos: usageMatch.index });
    }
}
usedNames.sort((a, b) => a.pos - b.pos);
const before = new Set([...importMatch[1].matchAll(/\w+/g)].map((m) => m[0]));
const after = new Set(usedNames.map((u) => u.name));
const added = [...after].filter((n) => !before.has(n));
const removed = [...before].filter((n) => !after.has(n));
// ─── import ブロックを再構成して書き戻す ──────────────────────────────────────
const newImportBlock = `import {\n${usedNames.map((u) => `  ${u.name}`).join(',\n')}\n} from '../http-schemas';`;
const newHandlersSrc = handlersSrc.slice(0, importStart) + newImportBlock + handlersSrc.slice(importEnd);
fs.writeFileSync(HANDLERS_TS, newHandlersSrc, 'utf-8');
console.log(`[fix-handlers-imports] ${HANDLERS_TS} の '../http-schemas' import を再構成しました（${usedNames.length}件）`);
if (added.length > 0)
    console.log(`[fix-handlers-imports]   追加: ${added.join(', ')}`);
if (removed.length > 0)
    console.log(`[fix-handlers-imports]   削除: ${removed.join(', ')}`);
if (added.length === 0 && removed.length === 0)
    console.log(`[fix-handlers-imports]   変更なし`);
