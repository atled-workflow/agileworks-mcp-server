"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const custom_mcp_instance_js_1 = require("../custom-mcp-instance.js");
async function handleRequestFixed(tenantId, accessToken) {
    return custom_mcp_instance_js_1.tenantContext.run({ systemUrl: `https://${tenantId}.example.com`, accessToken }, async () => {
        await new Promise((r) => setTimeout(r, 50));
        const url = (0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)();
        const match = url.match(/https:\/\/(.+?)\.example\.com/);
        const resolvedTenantId = match ? match[1] : `UNKNOWN(url=${url})`;
        const resolvedToken = custom_mcp_instance_js_1.tenantContext.getStore()?.accessToken ?? 'MISSING';
        return { tenantId: resolvedTenantId, accessToken: resolvedToken };
    });
}
// ─────────────────────────────────────────────────────────────
// テスト
// ─────────────────────────────────────────────────────────────
(0, node_test_1.describe)('テナント分離', () => {
    (0, node_test_1.describe)('✅ AsyncLocalStorage（分離の確認）', () => {
        (0, node_test_1.it)('並走リクエストで systemUrl が正しく分離される', async () => {
            const reqA = handleRequestFixed('Tenant-A', 'secret-token-A');
            // 少し待ってから別のリクエストを開始することで、並走状態を作る
            await new Promise((r) => setTimeout(r, 20));
            const reqB = handleRequestFixed('Tenant-B', 'secret-token-B');
            const [resA, resB] = await Promise.all([reqA, reqB]);
            strict_1.default.strictEqual(resA.tenantId, 'Tenant-A');
            strict_1.default.strictEqual(resB.tenantId, 'Tenant-B');
        });
        (0, node_test_1.it)('並走リクエストで accessToken が正しく分離される', async () => {
            const reqA = handleRequestFixed('Tenant-A', 'secret-token-A');
            // 少し待ってから別のリクエストを開始することで、並走状態を作る
            await new Promise((r) => setTimeout(r, 20));
            const reqB = handleRequestFixed('Tenant-B', 'secret-token-B');
            const [resA, resB] = await Promise.all([reqA, reqB]);
            strict_1.default.strictEqual(resA.accessToken, 'secret-token-A');
            strict_1.default.strictEqual(resB.accessToken, 'secret-token-B');
        });
        (0, node_test_1.it)('完了順が逆転しても各テナントが自分のコンテキストを保持する', async () => {
            const tenants = [
                { name: 'Alpha', token: 'secret-xyz-001' },
                { name: 'Beta', token: 'secret-abc-999' },
                { name: 'Gamma', token: 'secret-qrs-555' },
            ];
            const results = await Promise.all(tenants.map((t, i) => custom_mcp_instance_js_1.tenantContext.run({ systemUrl: `https://${t.name}.example.com`, accessToken: t.token }, async () => {
                await new Promise((r) => setTimeout(r, (tenants.length - i) * 30)); // 意図的に完了順を逆転
                const url = (0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)();
                const match = url.match(/https:\/\/(.+?)\.example\.com/);
                return {
                    tenantId: match ? match[1] : `UNKNOWN`,
                    accessToken: custom_mcp_instance_js_1.tenantContext.getStore()?.accessToken ?? 'MISSING',
                };
            })));
            for (let i = 0; i < tenants.length; i++) {
                strict_1.default.strictEqual(results[i].tenantId, tenants[i].name, `${tenants[i].name}: tenantId が一致しない`);
                strict_1.default.strictEqual(results[i].accessToken, tenants[i].token, `${tenants[i].name}: accessToken が一致しない`);
            }
        });
    });
    (0, node_test_1.describe)('① コンテキスト外フォールバック（stdioモード）', () => {
        (0, node_test_1.it)('tenantContext.run の外では環境変数のデフォルト値にフォールバックする', () => {
            // tenantContext.getStore() が undefined になる状況 = run() の外
            const expected = process.env.SYSTEM_URL?.replace(/\/+$/, '') ?? 'https://example.com/AgileWorks';
            strict_1.default.strictEqual((0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)(), expected);
        });
    });
    (0, node_test_1.describe)('② ?? セマンティクス（undefined のみフォールバック）', () => {
        (0, node_test_1.it)('store の systemUrl が undefined のときのみ _systemUrl にフォールバックする', async () => {
            const fallback = process.env.SYSTEM_URL?.replace(/\/+$/, '') ?? 'https://example.com/AgileWorks';
            // systemUrl を渡さない（undefined）→ フォールバック
            await new Promise((resolve) => {
                custom_mcp_instance_js_1.tenantContext.run({ accessToken: 'token' }, () => {
                    strict_1.default.strictEqual((0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)(), fallback);
                    resolve();
                });
            });
        });
        (0, node_test_1.it)('store の systemUrl が空文字のときはフォールバックしない', async () => {
            // コメントに「空文字はフォールバックしない」と明記されているため検証
            await new Promise((resolve) => {
                custom_mcp_instance_js_1.tenantContext.run({ systemUrl: '', accessToken: 'token' }, () => {
                    strict_1.default.strictEqual((0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)(), '');
                    resolve();
                });
            });
        });
    });
    (0, node_test_1.describe)('③ customFetchInstance のURL・ヘッダー検証', () => {
        (0, node_test_1.it)('正しいテナントの systemUrl と accessToken を使ってリクエストを送る', async (t) => {
            let capturedUrl = '';
            let capturedInit;
            t.mock.method(globalThis, 'fetch', async (url, init) => {
                capturedUrl = url;
                capturedInit = init;
                return new Response(JSON.stringify({}), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                });
            });
            await custom_mcp_instance_js_1.tenantContext.run({ systemUrl: 'https://tenant-x.example.com', accessToken: 'token-X' }, async () => {
                await (0, custom_mcp_instance_js_1.customFetchInstance)('/api/test');
                strict_1.default.ok(capturedUrl.startsWith('https://tenant-x.example.com'), `URL が正しくない: ${capturedUrl}`);
                strict_1.default.strictEqual(capturedInit?.headers?.['Authorization'], 'Bearer token-X');
            });
        });
    });
    (0, node_test_1.describe)('④ ネストした tenantContext.run', () => {
        (0, node_test_1.it)('内側のコンテキストが外側を上書きし、終了後に外側へ戻る', async () => {
            await custom_mcp_instance_js_1.tenantContext.run({ systemUrl: 'https://outer.example.com', accessToken: 'outer-token' }, async () => {
                strict_1.default.strictEqual((0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)(), 'https://outer.example.com');
                custom_mcp_instance_js_1.tenantContext.run({ systemUrl: 'https://inner.example.com', accessToken: 'inner-token' }, () => {
                    strict_1.default.strictEqual((0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)(), 'https://inner.example.com');
                });
                // 内側が終わった後は外側のコンテキストに戻る
                strict_1.default.strictEqual((0, custom_mcp_instance_js_1.getAgileWorksSystemUrl)(), 'https://outer.example.com');
            });
        });
    });
});
