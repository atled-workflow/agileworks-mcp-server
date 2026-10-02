"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebApiClient = void 0;
const package_json_1 = require("../../../package.json");
const api_key_1 = require("./api-key");
/**
 * クラウド版のリクエストの組み立て方式.
 *
 * API利用枠オプションを用いたリクエストの組み立てを行う
 *
 * @class CloudRequestBuilder
 * @implements {RequestBuilder}
 */
class CloudRequestBuilder {
    constructor(licenseNo) {
        this.licenseNo = licenseNo;
    }
    buildUrl(config) {
        const url = requestUrlOf(config);
        const usagePlanApiUrl = process.env.AW_USAGE_PLAN_API_REQUEST_URL;
        if (!usagePlanApiUrl) {
            throw new Error('Environment variable AW_USAGE_PLAN_API_REQUEST_URL is not set.');
        }
        return `${trimTrailingSlash(usagePlanApiUrl)}${toAbsolutePath(url)}`;
    }
    async buildHeaders(accessToken, options) {
        const headers = createBaseHeaders(accessToken, options);
        headers['license-no'] = this.licenseNo;
        headers['x-api-key'] = await (0, api_key_1.fetchApiGatewayApiKey)(this.licenseNo);
        return headers;
    }
}
/**
 * オンプレ版のリクエストの組み立て方式.
 *
 * 通常のWebAPIのリクエストの組み立てを行う
 *
 * @class OnPremiseRequestBuilder
 * @implements {RequestBuilder}
 */
class OnPremiseRequestBuilder {
    constructor(systemUrl) {
        this.systemUrl = systemUrl;
    }
    buildUrl(config) {
        const url = requestUrlOf(config);
        return `${trimTrailingSlash(this.systemUrl)}${toAbsolutePath(url)}`;
    }
    async buildHeaders(accessToken, options) {
        return createBaseHeaders(accessToken, options);
    }
}
function requestUrlOf(config) {
    return typeof config === 'string' ? config : config.url;
}
function toAbsolutePath(url) {
    return url.startsWith('/') ? url : `/${url}`;
}
function trimTrailingSlash(url) {
    return url.endsWith('/') ? url.slice(0, -1) : url;
}
function createBaseHeaders(accessToken, options) {
    const baseHeaders = options?.headers || {};
    const headers = { ...baseHeaders };
    if (!('Content-Type' in headers) && !(options?.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    else {
        console.warn('AgileWorks access token is not set. API calls may fail.');
    }
    // AW本体の判定に使うため、呼び出し側の指定よりも優先する。(無条件にagileworks-mcp/{version}を付与する)
    headers['User-Agent'] = `agileworks-mcp/${package_json_1.version}`;
    return headers;
}
class WebApiClient {
    constructor(requestBuilder) {
        this.requestBuilder = requestBuilder;
    }
    // クラウド版。licenseNo は事前バリデーション済みで必ず値がある前提。
    static forCloud(licenseNo) {
        return new WebApiClient(new CloudRequestBuilder(licenseNo));
    }
    // オンプレ版。systemUrl は事前バリデーション済みで必ず値がある前提。
    static forOnPremise(systemUrl) {
        return new WebApiClient(new OnPremiseRequestBuilder(systemUrl));
    }
    /**
     * WebAPIを実行する
     */
    async request(config, accessToken, options) {
        const url = this.requestBuilder.buildUrl(config);
        const headers = await this.requestBuilder.buildHeaders(accessToken, options);
        return await fetch(url, {
            ...options,
            headers,
        });
    }
}
exports.WebApiClient = WebApiClient;
