FROM node:24.13.0

# ビルド時のバージョン情報を記録
ARG BUILD_DATE
ARG VERSION
LABEL org.opencontainers.image.created="${BUILD_DATE}"
LABEL org.opencontainers.image.version="${VERSION}"
LABEL org.opencontainers.image.title="AgileWorks MCP Server"

# 作業ディレクトリを設定
WORKDIR /app

# Supergatewayをインストール
RUN npm install -g supergateway

# distと同じ階層にこのDockerfileがある前提
COPY . .

# 値は後で.envから渡す

# SupergatewayのSSE通信で使用するポート(8002)を公開
EXPOSE 8002

CMD ["npx", "-y", "supergateway", \
    "--stdio", "node ./dist/server.js", \
    "--port", "8002", "--baseUrl", "http://localhost:8002", \
    "--ssePath" ,"/sse" ,"--messagePath" ,"/message" ,"--logLevel", "debug"]