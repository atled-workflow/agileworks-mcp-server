# ARGをFROMより前に宣言することでFROM命令内で使用可能になる
ARG IS_CLOUD=false

FROM node:24.13.0 AS base

ARG BUILD_DATE
ARG VERSION
LABEL org.opencontainers.image.created="${BUILD_DATE}"
LABEL org.opencontainers.image.version="${VERSION}"
LABEL org.opencontainers.image.title="AgileWorks MCP Server"

WORKDIR /app

# 全依存関係をインストール（typescript含む）
COPY package*.json ./
RUN npm install

# IS_CLOUD=true: TypeScript ソースをコピーしてビルド
FROM base AS true
COPY tsconfig.json ./
COPY src ./src
RUN npx tsc --skipLibCheck
RUN ls -la dist/custom/admin/server-http.js
RUN rm -rf src tsconfig.json

# IS_CLOUD=false: 事前ビルド済みの dist をコピー
FROM base AS false
COPY dist ./dist
RUN ls -la dist/custom/admin/server-http.js

# IS_CLOUD の値（true/false）でステージを選択
FROM ${IS_CLOUD} AS final

# dev依存を削除
RUN npm prune --omit=dev

# HTTP MCP サーバーが使用するポートを公開（MCP_PORT で可変）
ARG MCP_PORT=8002
EXPOSE ${MCP_PORT}

CMD ["node", "./dist/custom/admin/server-http.js"]
