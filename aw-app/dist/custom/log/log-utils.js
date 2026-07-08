"use strict";
// FIXME ログは仮実装。ログの本実装時に正しく実装する
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogIsoTimestamp = getLogIsoTimestamp;
exports.logApiCall = logApiCall;
exports.logApiError = logApiError;
/* ログのタイムスタンプを ISO 8601 形式で取得するユーティリティ関数 */
function getLogIsoTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    // タイムゾーンオフセット（分）を取得（日本なら -540）
    const offsetMinutes = now.getTimezoneOffset();
    if (offsetMinutes === 0) {
        return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    }
    // 符号（+/-）の判定（※JavaScriptは符号が逆になるため、マイナスならプラス）
    const sign = offsetMinutes > 0 ? '-' : '+';
    const absOffsetMinutes = Math.abs(offsetMinutes);
    const offsetHours = String(Math.floor(absOffsetMinutes / 60)).padStart(2, '0');
    const offsetMins = String(absOffsetMinutes % 60).padStart(2, '0');
    return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}.${milliseconds}${sign}${offsetHours}:${offsetMins}`;
}
/* AgileWorks API 呼び出し成功ログ */
function logApiCall(method, systemUrl, toolName, status) {
    console.error(`[MCP][${getLogIsoTimestamp()}] ${method} systemUrl=${systemUrl} tool=${toolName} → ${status}`);
}
/* AgileWorks API 呼び出しエラーログ（レスポンスボディ付き） */
function logApiError(method, systemUrl, toolName, status, body) {
    const truncated = body.length > 500 ? `${body.slice(0, 500)}...` : body;
    console.error(`[MCP][${getLogIsoTimestamp()}] ${method} systemUrl=${systemUrl} tool=${toolName} → ${status} body: ${truncated}`);
}
