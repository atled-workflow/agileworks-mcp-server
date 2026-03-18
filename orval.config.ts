import { defineConfig } from 'orval';

export default defineConfig({
    agileworksmcpAdmin: {
        input: {
            target: './openapi.yaml',
            filters: {
                tags: [/^(?!(NotAdmin|SCIM|common)).+/, /^VersionAPI$/],
            },
        },
        output: {
            baseUrl: '',
            mode: 'split',
            client: 'mcp',
            clean: false, // 既存のファイルを削除しない
            target: 'src/generated/admin/handlers.ts',
            schemas: 'src/generated/http-schemas',
            override: {
                mutator: {
                    path: 'src/custom/custom-mcp-instance.ts',
                    name: 'customFetchInstance',
                    extension: '.js',
                },
            },
        },
    },
    httpClient: {
        input: {
            target: './openapi.yaml',
        },
        output: {
            baseUrl: '',
            mode: 'split',
            client: 'fetch',
            target: 'src/generated/admin/http-client.ts',
            override: {
                mutator: {
                    path: 'src/custom/custom-mcp-instance.ts',
                    name: 'customFetchInstance',
                },
            },
        },
    },

});