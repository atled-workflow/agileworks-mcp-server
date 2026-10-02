"use strict";
// FIXME ログは仮実装。ログの本実装時に正しく実装する
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogIsoTimestamp = getLogIsoTimestamp;
exports.logApiError = logApiError;
exports.logApiKeyStatusError = logApiKeyStatusError;
exports.logApiKeyError = logApiKeyError;
// エラーボディ読み取りの時間上限（上流がヘッダーのみ返してボディの送信が止まった場合に備える）
const ERROR_BODY_READ_TIMEOUT_MS = 3000;
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
/* AgileWorks API 呼び出しエラーログ（レスポンスボディ付き） */
async function logApiError(response, systemUrl, config, options) {
    // AgileWorksは特殊でエラーレスポンスのステータスコードが200になるので、この処理が通る条件はステータスコードが200以外の時のみ。
    // また、200以外の場合は認証エラーでこの処理が通る。認証エラーは機密情報は含まれないので、bodyの内容をログに出力しても問題ない。
    // ただし、ログの実装は今後修正するので、この処理は暫定対応とする。
    const requestMethod = options?.method
        ?? (typeof config === 'string' ? 'GET' : config.method);
    const requestUrl = typeof config === 'string' ? config : config.url;
    const queryString = requestUrl.split('?')[1] || '';
    const params = new URLSearchParams(queryString);
    const tool = params.get('method') ?? requestUrl.split('?')[0];
    let timer;
    const errorBody = await Promise.race([
        response.text(),
        new Promise((resolve) => {
            timer = setTimeout(() => resolve(''), ERROR_BODY_READ_TIMEOUT_MS);
        }),
    ])
        .catch(() => '')
        .finally(() => {
        clearTimeout(timer);
        // タイムアウトで抜けた場合はボディを破棄してコネクションを解放する
        response.body?.cancel().catch(() => { });
    });
    const truncated = errorBody.length > 500 ? `${errorBody.slice(0, 500)}...` : errorBody;
    console.error(`[MCP][${getLogIsoTimestamp()}] ${requestMethod} systemUrl=${systemUrl} tool=${tool} → ${response.status} body: ${truncated}`);
}
/* APIキー取得APIがエラーレスポンス（not ok）を返した場合のログ（ステータスコード付き） */
function logApiKeyStatusError(licenseNo, status, message) {
    console.error(`[MCP][${getLogIsoTimestamp()}] GET licenseNo=${licenseNo} → ${status} failed: ${message}`);
}
/* fetch自体の失敗やレスポンス解析失敗など、ステータスコードを持たないエラーのログ */
function logApiKeyError(licenseNo, error) {
    console.error(`[MCP][${getLogIsoTimestamp()}] GET licenseNo=${licenseNo} failed:`, error);
}
