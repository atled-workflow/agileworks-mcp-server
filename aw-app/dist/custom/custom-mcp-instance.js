"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFetchInstance = exports.tenantContext = void 0;
exports.getAgileWorksSystemUrl = getAgileWorksSystemUrl;
const http_status_codes_1 = require("http-status-codes");
const node_async_hooks_1 = require("node:async_hooks");
const log_utils_1 = require("./log/log-utils");
const web_api_client_1 = require("./web-api/web-api-client");
exports.tenantContext = new node_async_hooks_1.AsyncLocalStorage();
// ─── stdioモード用フォールバック変数 ──────────────────────────────────────────
let _accessToken = process.env.ACCESS_TOKEN ?? '';
let _systemUrl = process.env.SYSTEM_URL?.replace(/\/+$/, '') || 'https://example.com/AgileWorks';
function getLicenseNo() {
    return exports.tenantContext.getStore()?.licenseNo;
}
// ベースURLを取得する関数（orvalで使用）
// AsyncLocalStorage → モジュール変数 の優先順位で取得
// ?? を使い、store 値が undefined の場合のみフォールバックする（空文字はフォールバックしない）
function getAgileWorksSystemUrl() {
    return exports.tenantContext.getStore()?.systemUrl ?? _systemUrl;
}
// アクセストークンを取得する関数
// AsyncLocalStorage → モジュール変数 の優先順位で取得
// ?? を使い、store 値が undefined の場合のみフォールバックする（空文字はフォールバックしない）
function getAccessToken() {
    return exports.tenantContext.getStore()?.accessToken ?? _accessToken;
}
function useOAuth() {
    return exports.tenantContext.getStore()?.useOAuth ?? false;
}
// Orvalが使用するカスタムインスタンス関数（fetch版）
// options に任意で responseType: 'json'|'blob'|'text' を渡せます（fetchの標準ではないので独自扱い）
const customFetchInstance = async (config, options) => {
    const accessToken = getAccessToken();
    // クラウド版の場合は licenseNo、オンプレ版の場合は systemUrl が事前バリデーション済みで必ず値を持つ
    const webApiClient = process.env.IS_CLOUD === 'true'
        ? web_api_client_1.WebApiClient.forCloud(getLicenseNo())
        : web_api_client_1.WebApiClient.forOnPremise(getAgileWorksSystemUrl());
    const response = await webApiClient.request(config, accessToken, options);
    if (!response.ok) {
        (0, log_utils_1.logApiError)(response, getAgileWorksSystemUrl(), config, options);
        if (response.status === http_status_codes_1.StatusCodes.UNAUTHORIZED && useOAuth()) {
            throw new Error('AGILEWORKS_AUTH_ERROR');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return handleResponse(config, response, options);
};
exports.customFetchInstance = customFetchInstance;
// レスポンスを処理するヘルパー関数
const handleResponse = async (config, response, options) => {
    const override = options && options.responseType;
    if (override) {
        return handleOverrideResponse(response, override);
    }
    const urlStr = typeof config === 'string' ? config : config.url ?? '';
    if (urlStr.includes('getDocPdf')) {
        return handlePdfResponse(response);
    }
    const ct = response.headers.get('content-type')?.split(';')[0].trim().toLowerCase() || '';
    if (ct === 'application/json' || ct.endsWith('+json')) {
        return (await response.json());
    }
    else if (ct === 'application/octet-stream' || ct === 'application/pdf' || ct.startsWith('image/') || ct.startsWith('application/zip')) {
        return handleBinaryResponse(response, ct);
    }
    else if (ct.startsWith('text/') || ct === 'application/xml' || ct === 'text/html') {
        return (await response.text());
    }
    else {
        return (await response.json());
    }
};
// PDFレスポンスを処理する関数
const handlePdfResponse = async (response) => {
    let buffer;
    if (typeof response === 'string') {
        // base64 文字列を想定
        buffer = Buffer.from(response, 'base64');
    }
    else if (response.arrayBuffer) {
        const ab = await response.arrayBuffer();
        buffer = Buffer.from(ab);
    }
    else if (response.blob) {
        const ab = await (await response.blob()).arrayBuffer();
        buffer = Buffer.from(ab);
    }
    else if (response.buffer) {
        buffer = await response.buffer();
    }
    else {
        throw new Error('サポートされていないレスポンス型です。arrayBuffer/blob/base64 のいずれかを提供してください。');
    }
    return buffer;
};
// オーバーライドされたレスポンスを処理する関数
const handleOverrideResponse = async (response, override) => {
    if (override === 'blob') {
        return (await response.blob());
    }
    else if (override === 'text') {
        return (await response.text());
    }
    else {
        return (await response.json());
    }
};
// バイナリレスポンスを処理する関数
const handleBinaryResponse = async (response, ct) => {
    const ab = await response.arrayBuffer();
    const bytes = new Uint8Array(ab);
    const binary = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
    const b64 = typeof btoa !== 'undefined' ? btoa(binary) : Buffer.from(binary, 'binary').toString('base64');
    return b64;
};
