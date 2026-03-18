// アクセストークンを保持する変数
let accessToken: string | null = process.env.ACCESS_TOKEN || null

// ベースURLを保持する変数
let systemUrl: string = process.env.SYSTEM_URL || 'https://example.com/AgileWorks'

// アクセストークンを設定する関数
export function setAgileWorksAccessToken(token: string): void {
  accessToken = token
}

// ベースURLを設定する関数
export function setAgileWorksSystemUrl(url: string): void {
  systemUrl = url
}

// ベースURLを取得する関数（orvalで使用）
export function getAgileWorksSystemUrl(): string {
  return systemUrl
}

// Orvalが使用するカスタムインスタンス関数（fetch版）
// options に任意で responseType: 'json'|'blob'|'text' を渡せます（fetchの標準ではないので独自扱い）
export const customFetchInstance = async <T>(
  config: RequestInfo,
  options?: RequestInit & { responseType?: 'json' | 'blob' | 'text' },
): Promise<T> => {
  const headers = createHeaders(options)
  
  // URLを構築（相対パスの場合はベースURLを付加）
  const url = buildFullUrl(config)

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    // 必要に応じてエラー処理を追加
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return handleResponse<T>(url, response, options);
}

// フルURLを構築するヘルパー関数
const buildFullUrl = (config: RequestInfo): string => {
  const url = typeof config === 'string' ? config : (config as Request).url;
  
  // 既に完全なURLの場合はそのまま返す
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // 相対パスの場合はベースURLを付加
  const cleanBaseUrl = systemUrl.endsWith('/') ? systemUrl.slice(0, -1) : systemUrl;
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  
  return `${cleanBaseUrl}${cleanPath}`;
}

// ヘッダーを作成するヘルパー関数
const createHeaders = (options?: RequestInit) => {
  const baseHeaders = (options?.headers as Record<string, string> | undefined) || {};
  const headers: Record<string, string> = { ...baseHeaders };

  if (!('Content-Type' in headers) && !(options && options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  } else {
    console.warn('AgileWorks access token is not set. API calls may fail.');
  }

  return headers;
}

// レスポンスを処理するヘルパー関数
const handleResponse = async <T>(config: RequestInfo, response: Response, options?: RequestInit & { responseType?: 'json' | 'blob' | 'text' }): Promise<T> => {
  const override = options && (options as any).responseType as 'json' | 'blob' | 'text' | undefined;

  if (override) {
    return handleOverrideResponse<T>(response, override);
  }

  const urlStr = typeof config === 'string' ? config : (config as Request).url ?? ''
  if (urlStr.includes('getDocPdf')) {
    return handlePdfResponse<T>(response);
  }

  const ct = response.headers.get('content-type')?.split(';')[0].trim().toLowerCase() || '';
  if (ct === 'application/json' || ct.endsWith('+json')) {
    return (await response.json()) as Promise<T>;
  } else if (ct === 'application/octet-stream' || ct === 'application/pdf' || ct.startsWith('image/') || ct.startsWith('application/zip')) {
    return handleBinaryResponse<T>(response, ct);
  } else if (ct.startsWith('text/') || ct === 'application/xml' || ct === 'text/html') {
    return (await response.text()) as unknown as Promise<T>;
  } else {
    return (await response.json()) as Promise<T>;
  }
}

// PDFレスポンスを処理する関数
const handlePdfResponse = async <T>(response: Response): Promise<T> => {
  let buffer: Buffer
  if (typeof response === 'string') {
    // base64 文字列を想定
    buffer = Buffer.from(response, 'base64')
  } else if ((response as any).arrayBuffer) {
    const ab = await (response as any).arrayBuffer()
    buffer = Buffer.from(ab)
  } else if ((response as any).blob) {
    const ab = await (await (response as any).blob()).arrayBuffer()
    buffer = Buffer.from(ab)
  } else if ((response as any).buffer) {
    buffer = await (response as any).buffer()
  } else {
    throw new Error('サポートされていないレスポンス型です。arrayBuffer/blob/base64 のいずれかを提供してください。')
  }

  return buffer as unknown as Promise<T>
}

// オーバーライドされたレスポンスを処理する関数
const handleOverrideResponse = async <T>(response: Response, override: 'json' | 'blob' | 'text'): Promise<T> => {
  if (override === 'blob') {
    return (await response.blob()) as unknown as Promise<T>;
  } else if (override === 'text') {
    return (await response.text()) as unknown as Promise<T>;
  } else {
    return (await response.json()) as Promise<T>;
  }
}

// バイナリレスポンスを処理する関数
const handleBinaryResponse = async <T>(response: Response, ct: string): Promise<T> => {
  const ab = await response.arrayBuffer();
  const bytes = new Uint8Array(ab);
  const binary = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
  const b64 = typeof btoa !== 'undefined' ? btoa(binary) : Buffer.from(binary, 'binary').toString('base64');
  return b64 as unknown as Promise<T>;
}

// エラー型の定義
export type ErrorType<Error> = Error

// ボディ型の定義
export type BodyType<BodyData> = BodyData