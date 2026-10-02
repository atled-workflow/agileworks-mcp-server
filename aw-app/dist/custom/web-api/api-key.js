"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchApiGatewayApiKey = fetchApiGatewayApiKey;
const log_utils_1 = require("../log/log-utils");
/**
 * API GatewayのAPIキーを取得する.
 *
 * @export
 * @param {string} licenseNo ライセンスNo
 * @return {*}  {Promise<string>} APIキー
 */
async function fetchApiGatewayApiKey(licenseNo) {
    const apiKeyUrl = process.env.INTERNAL_OPS_API_KEY_URL;
    if (!apiKeyUrl) {
        throw new Error('Environment variable INTERNAL_OPS_API_KEY_URL is not set.');
    }
    let response;
    let rawBody;
    try {
        response = await fetch(trimTrailingSlash(apiKeyUrl), {
            method: 'GET',
            headers: {
                'license-no': licenseNo
            }
        });
        rawBody = await response.text();
    }
    catch (error) {
        // fetch自体の失敗（ステータスコードを持たないエラー）
        (0, log_utils_1.logApiKeyError)(licenseNo, error);
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred.');
    }
    let body;
    try {
        body = JSON.parse(rawBody);
    }
    catch {
        // 502/504等でHTMLやプレーンテキストが返るケース。ステータスコードと生テキストを残す
        (0, log_utils_1.logApiKeyStatusError)(licenseNo, response.status, rawBody);
        throw new Error(`Failed to fetch API key. status=${response.status}`);
    }
    if (response.ok) {
        return body.api_key.value;
    }
    else {
        const message = body?.message ?? JSON.stringify(body);
        (0, log_utils_1.logApiKeyStatusError)(licenseNo, response.status, message);
        throw new Error(message);
    }
}
function trimTrailingSlash(url) {
    return url.endsWith('/') ? url.slice(0, -1) : url;
}
