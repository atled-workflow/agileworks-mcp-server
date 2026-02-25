"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFetchInstance = void 0;
exports.setAgileWorksAccessToken = setAgileWorksAccessToken;
exports.setAgileWorksSystemUrl = setAgileWorksSystemUrl;
exports.getAgileWorksSystemUrl = getAgileWorksSystemUrl;
// アクセストークンを保持する変数
let accessToken = process.env.ACCESS_TOKEN || null;
// ベースURLを保持する変数
let systemUrl = process.env.SYSTEM_URL || 'https://example.com/AgileWorks';
// アクセストークンを設定する関数
function setAgileWorksAccessToken(token) {
    accessToken = token;
}
// ベースURLを設定する関数
function setAgileWorksSystemUrl(url) {
    systemUrl = url;
}
// ベースURLを取得する関数（orvalで使用）
function getAgileWorksSystemUrl() {
    return systemUrl;
}
// Orvalが使用するカスタムインスタンス関数（fetch版）
// options に任意で responseType: 'json'|'blob'|'text' を渡せます（fetchの標準ではないので独自扱い）
const customFetchInstance = async (config, options) => {
    const headers = createHeaders(options);
    // URLを構築（相対パスの場合はベースURLを付加）
    const url = buildFullUrl(config);
    const response = await fetch(url, {
        ...options,
        headers,
    });
    if (!response.ok) {
        // 必要に応じてエラー処理を追加
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return handleResponse(url, response, options);
};
exports.customFetchInstance = customFetchInstance;
// フルURLを構築するヘルパー関数
const buildFullUrl = (config) => {
    const url = typeof config === 'string' ? config : config.url;
    // 既に完全なURLの場合はそのまま返す
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    // 相対パスの場合はベースURLを付加
    const cleanBaseUrl = systemUrl.endsWith('/') ? systemUrl.slice(0, -1) : systemUrl;
    const cleanPath = url.startsWith('/') ? url : `/${url}`;
    return `${cleanBaseUrl}${cleanPath}`;
};
// ヘッダーを作成するヘルパー関数
const createHeaders = (options) => {
    const baseHeaders = options?.headers || {};
    const headers = { ...baseHeaders };
    if (!('Content-Type' in headers) && !(options && options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    else {
        console.warn('AgileWorks access token is not set. API calls may fail.');
    }
    return headers;
};
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
