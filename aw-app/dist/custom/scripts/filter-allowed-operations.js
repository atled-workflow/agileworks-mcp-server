"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = excludeOperationsNotInAllowList;
const allowed_operations_1 = require("./allowed-operations");
const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'];
// 生成対象として使用可能にするツール(operationId)の一覧は allowed-operations.ts で一括管理する。
const ALLOWED_OPERATION_IDS = new Set(allowed_operations_1.ALLOWED_OPERATIONS.map(({ operationId }) => operationId.toLowerCase()));
// orval の filters.tags は「タグのいずれか一つでもマッチすれば含める」という OR 判定のため、
// 複数タグを持つオペレーション(DocAPI + DeleteAPI など)をタグ指定だけでは絞り込めない。
// そのため operationId ベースのホワイトリストで生成対象を絞り込む。
function excludeOperationsNotInAllowList(spec) {
    for (const pathItem of Object.values(spec.paths ?? {})) {
        for (const method of HTTP_METHODS) {
            const operation = pathItem[method];
            if (operation?.operationId && !ALLOWED_OPERATION_IDS.has(operation.operationId.toLowerCase())) {
                delete pathItem[method];
            }
        }
    }
    return spec;
}
