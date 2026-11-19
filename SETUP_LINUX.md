# リモートMCPサーバーの環境構築（Linux）

Red Hat Enterprise Linux（以下 RHEL）10 に、Docker と nginx を使ってリモートMCPサーバーを構築する手順例です。

構成（パターンA / パターンB）、`.env` の設定項目、外部からの動作確認などの OS に依存しない内容は、[README のリモートMCPサーバー](./README.md#リモートmcpサーバー) を参照してください。

**パターンA: nginx で TLS を終端する**

```
AIエージェント ──https:443──▶ nginx ──http──▶ MCPサーバー（Docker, 127.0.0.1:8002）
```

**パターンB: ロードバランサーで TLS を終端する**

```
AIエージェント ──https:443──▶ ロードバランサー（AWS ALB 等） ──http:80──▶ nginx ──http──▶ MCPサーバー（Docker, 127.0.0.1:8002）
```

## 目次

- [前提条件](#前提条件)
- [構築手順](#構築手順)
  - [1. Docker をインストールする](#1-docker-をインストールする)
  - [2. MCPサーバーを起動する](#2-mcpサーバーを起動する)
  - [3. nginx をインストールする](#3-nginx-をインストールする)
  - [4. 証明書を配置する（パターンA）](#4-証明書を配置するパターンa)
  - [5. ロードバランサーを設定する（パターンB）](#5-ロードバランサーを設定するパターンb)
  - [6. nginx を設定する](#6-nginx-を設定する)
  - [7. SELinux と firewalld を設定する](#7-selinux-と-firewalld-を設定する)
  - [8. 動作を確認する](#8-動作を確認する)
- [AgileWorks と同じサーバーに構築する場合](#agileworks-と同じサーバーに構築する場合)
- [トラブルシューティング](#トラブルシューティング)
- [アップデート](#アップデート)

## 前提条件

- RHEL のサーバーに、root 権限（sudo）でログインできること
- [README の前提条件](./README.md#前提条件-2) を満たしていること

> [!NOTE]
> この手順は RHEL 10 を前提に記載しています。ほかのバージョンの RHEL では、標準でインストールされる nginx のバージョンや Docker の対応状況が異なります（例: RHEL 9 の標準 nginx は 1.25.1 未満のため、[6. nginx を設定する](#6-nginx-を設定する) で HTTP/2 の書き方が変わります）。Docker の [Install Docker Engine on RHEL](https://docs.docker.com/engine/install/rhel/) で、お使いのバージョンの対応状況を確認してから構築してください。

## 構築手順

### 1. Docker をインストールする

RHEL に標準で入っている podman / buildah は Docker と競合するため、削除してから Docker の公式リポジトリを追加します。

```bash
# 競合するパッケージを削除（入っていなければ無視されます）
sudo dnf remove -y docker docker-client docker-client-latest docker-common \
  docker-latest docker-latest-logrotate docker-logrotate docker-engine \
  podman runc buildah

# Docker の公式リポジトリを追加
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/rhel/docker-ce.repo

# インストールと起動
sudo dnf install -y docker-ce docker-ce-cli containerd.io \
  docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker

# 確認
sudo docker run --rm hello-world
sudo docker compose version
```

> [!NOTE]
> 初回インストール時に表示される GPG 鍵は、フィンガープリントが `060A 61C5 1B55 8A7F 742B 77AA C52F EB6B 621E 9F35` であることを確認して承認してください。最新の手順は [Docker の公式ドキュメント](https://docs.docker.com/engine/install/rhel/) を参照してください。

### 2. MCPサーバーを起動する

ソースコードを取得します。ここでは `/opt` 配下に配置します。`RX.Y.Z` は利用するリリースタグに置き換えてください。

```bash
sudo dnf install -y git
cd /opt
sudo git clone https://github.com/atled-workflow/agileworks-mcp-server.git
cd agileworks-mcp-server
sudo git checkout RX.Y.Z
cd aw-app
```

`.env.example` をコピーして `.env` を作成し、`MCP_SERVER_BASE_URL` を書き換えます。設定できる項目は [README の環境変数](./README.md#環境変数env) を参照してください。

```bash
sudo cp .env.example .env
sudo vi .env
```

Docker コンテナをビルド・起動し、MCPサーバーが応答することを確認します。

```bash
sudo docker compose build
sudo docker compose up -d
curl http://127.0.0.1:8002/health
# => {"status":"OK","version":"x.y.z"}
```

コンテナから AgileWorks に接続できることも確認します。`https://sample.co.jp/AgileWorks/` はお使いのシステムURLに置き換えてください。ステータスコードが表示されれば接続できています。証明書エラーや接続エラーが表示された場合は、ネットワークまたは証明書の設定を見直してください。

```bash
sudo docker exec agileworks_mcp node -e \
  "fetch('https://sample.co.jp/AgileWorks/').then(r=>console.log('HTTP',r.status)).catch(e=>console.error('NG',e.cause??e))"
```

### 3. nginx をインストールする

> [!NOTE]
> AgileWorks と同じサーバーに構築する場合は、nginx をインストールせず、[AgileWorks と同じサーバーに構築する場合](#agileworks-と同じサーバーに構築する場合) に進んでください。

```bash
sudo dnf install -y nginx
sudo systemctl enable --now nginx
nginx -v
```

表示されたバージョンを控えておいてください。手順 6 の HTTP/2 の書き方が、nginx 1.25.1 を境に変わります。

### 4. 証明書を配置する（パターンA）

パターンBの場合は、手順 5 に進んでください。

`/etc/pki/nginx/` に配置すると、SELinux のラベル（`cert_t`）が正しく付きます。サーバー証明書の後ろに中間証明書を連結した「フルチェーン」と、秘密鍵を配置します。

```bash
sudo mkdir -p /etc/pki/nginx/private

# サーバー証明書 + 中間証明書 = フルチェーン
cat mcp.example.co.jp.crt intermediate.crt | sudo tee /etc/pki/nginx/mcp.example.co.jp.crt > /dev/null
sudo cp mcp.example.co.jp.key /etc/pki/nginx/private/

sudo chmod 644 /etc/pki/nginx/mcp.example.co.jp.crt
sudo chmod 600 /etc/pki/nginx/private/mcp.example.co.jp.key
sudo restorecon -Rv /etc/pki/nginx
```

> [!IMPORTANT]
> 中間証明書を連結し忘れると、ブラウザでは表示できても、AIエージェント（サーバー側の HTTP クライアント）からは証明書の検証エラーになることがあります。

> [!TIP]
> Let's Encrypt を使う場合は、EPEL の `certbot` と `python3-certbot-nginx` で証明書の取得と自動更新ができます（外部から 80/tcp に到達できることが条件です）。

### 5. ロードバランサーを設定する（パターンB）

パターンAの場合は、手順 6 に進んでください。nginx に証明書は不要です。AWS の Application Load Balancer（ALB）の場合の設定は次のとおりです。

| 項目 | 設定 |
| :--- | :--- |
| リスナー 443（HTTPS） | ACM の証明書を指定し、ターゲットグループへ転送 |
| リスナー 80（HTTP） | HTTPS（443）へリダイレクト。nginx 側でリダイレクトするとループします |
| ターゲットグループ | プロトコル HTTP、ポート 80、ヘルスチェックパス `/health` |
| アイドルタイムアウト | 既定の 60 秒から 300 秒程度に延長（Server-Sent Events の応答が切れないようにする） |
| EC2 のセキュリティグループ | 80/tcp を ALB のセキュリティグループからのみ許可。8002 は開けない |
| DNS | FQDN を ALB に向ける（Route 53 なら Alias レコード） |
| ACM の証明書 | FQDN を含むもの（ワイルドカード可）を ALB と同じリージョンに用意 |

### 6. nginx を設定する

`/etc/nginx/conf.d/agileworks-mcp.conf` を作成します。`mcp.example.co.jp` はお使いの FQDN に置き換え、`.env` の `MCP_SERVER_BASE_URL` のホスト名と一致させてください。

**パターンA（nginx で TLS を終端する）**

```nginx
server {
    listen 80;
    server_name mcp.example.co.jp;
    return 301 https://$host$request_uri;
}

server {
    # nginx 1.25.1 未満（RHEL 9 の標準）の書き方
    listen 443 ssl http2;
    # nginx 1.25.1 以上（RHEL 10 の標準）の場合は、上の行の代わりに次の 2 行を書く
    # listen 443 ssl;
    # http2 on;
    server_name mcp.example.co.jp;

    access_log /var/log/nginx/agileworks-mcp.access.log;
    error_log  /var/log/nginx/agileworks-mcp.error.log;

    # フルチェーン
    ssl_certificate     /etc/pki/nginx/mcp.example.co.jp.crt;
    ssl_certificate_key /etc/pki/nginx/private/mcp.example.co.jp.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_session_cache   shared:SSL:10m;
    ssl_session_timeout 10m;

    # オリジン直下をすべて転送する（/{システムURL}/mcp と /.well-known/oauth-* の両方が必要）
    location / {
        # proxy_pass の末尾に "/" などの URI を付けないこと（%2F がデコードされて 404 になる）
        proxy_pass http://127.0.0.1:8002;

        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection        "";

        # Server-Sent Events の応答をバッファリングせずに逐次返す
        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 300s;
    }
}
```

**パターンB（ロードバランサーで TLS を終端する）**

```nginx
server {
    listen 80;
    server_name mcp.example.co.jp;

    access_log /var/log/nginx/agileworks-mcp.access.log;
    error_log  /var/log/nginx/agileworks-mcp.error.log;

    location / {
        # proxy_pass の末尾に "/" などの URI を付けないこと（%2F がデコードされて 404 になる）
        proxy_pass http://127.0.0.1:8002;

        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        # ロードバランサーから nginx までは http なので、ロードバランサーが付けたヘッダーを引き継ぐ
        proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;
        proxy_set_header Connection        "";

        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 300s;
    }
}
```

> [!NOTE]
> このファイルは `/etc/nginx/nginx.conf` の `http { }` の中に読み込まれます。`events`・`worker_processes`・`pid` は `nginx.conf` に定義済みのため、このファイルには書かないでください（書くと `"events" directive is not allowed here` になります）。

> [!NOTE]
> ログは `/var/log/nginx/` 配下に出力してください。標準のログローテーションの対象になり、SELinux のラベル（`httpd_log_t`）も付いています。ほかの場所にすると、nginx が書き込めずに起動に失敗します。

### 7. SELinux と firewalld を設定する

```bash
# SELinux: nginx から 127.0.0.1:8002 への接続を許可する（設定しないと 502 Bad Gateway になる）
sudo setsebool -P httpd_can_network_connect 1

# firewalld が動いているか確認する
systemctl is-active firewalld
```

firewalld が `active` の場合は、ポートを開けます。8002 は開けないでください。

```bash
# パターンA: 80 と 443 を開ける
sudo firewall-cmd --permanent --add-service=http --add-service=https
sudo firewall-cmd --reload

# パターンB: 80 だけ開ける（443 はロードバランサーが受ける）
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

firewalld が `inactive` の場合は、クラウドのセキュリティグループや上位のファイアウォールで制御してください。

最後に nginx の設定を確認して反映します。

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### 8. 動作を確認する

サーバー内で `getsebool httpd_can_network_connect` が `on` になっていることを確認したうえで、[README の動作確認](./README.md#動作確認) を外部の端末から実行してください。

## AgileWorks と同じサーバーに構築する場合

AgileWorks が動いているサーバーにMCPサーバーを構築する場合は、次の 2 点に注意してください。

### ① nginx は入れず、AgileWorks の Apache に VirtualHost を追加する

AgileWorks の Apache が 80/443 を使っているため、nginx をインストールしても起動できません。サブパスでは公開できず、443 以外のポートで公開すると利用者側のプロキシやファイアウォールで止められやすいため、**MCPサーバー専用の FQDN の VirtualHost を Apache に追加**します。この場合、手順 3（nginx のインストール）と手順 6（nginx の設定）は行わず、代わりに以下を行います。

AgileWorks の Apache がソースからビルドされていることを前提に記載しています。`<Apacheのインストールディレクトリ>` は、AgileWorks の Apache をインストールしたディレクトリに置き換えてください。RHEL 標準の httpd（`dnf` でインストール、`/etc/httpd`）の場合は、[RHEL 標準の httpd の場合](#rhel-標準の-httpd-の場合) を参照してください。

#### 事前確認

```bash
# 使用中のポートを確認する（8002 をMCPサーバー以外が使っている場合は、下の「8002 が使われている場合」を参照）
sudo ss -ltnp | grep -E ':(80|443|8002|8090)\b'

# 必要なモジュールが読み込まれているか（ssl_module はパターンAの場合のみ必要）
<Apacheのインストールディレクトリ>/bin/httpd -M | grep -E 'proxy_module|proxy_http_module|ssl_module'

# 表示されないモジュールは、.so ファイルの有無と LoadModule の行（コメントアウトされていないか）を確認する
ls <Apacheのインストールディレクトリ>/modules | grep -E 'mod_proxy\.so|mod_proxy_http\.so|mod_ssl\.so'
grep -nE 'LoadModule (proxy_module|proxy_http_module|ssl_module)' <Apacheのインストールディレクトリ>/conf/httpd.conf

# 変更前の VirtualHost の構成と、Include の行を控えておく
sudo <Apacheのインストールディレクトリ>/bin/httpd -S
grep -nE '^\s*Include' <Apacheのインストールディレクトリ>/conf/httpd.conf
```

モジュールの LoadModule の行がコメントアウトされている場合は、`httpd.conf` の行頭の `#` を外します。

**8002 が使われている場合**

Tomcat など、MCPサーバー以外のプロセスが 8002 を使っている場合は、MCPサーバーのポートを空いているポート（例: 8003）に変更します。

1. `aw-app/.env` の `MCP_PORT` を変更します（例: `MCP_PORT=8003`）
2. コンテナを作り直して、変更後のポートで応答することを確認します

    ```bash
    cd /opt/agileworks-mcp-server/aw-app
    sudo docker compose up -d
    curl http://127.0.0.1:8003/health
    ```

3. 以降の Apache の設定（`ProxyPass` / `ProxyPassReverse`）にある `127.0.0.1:8002` を、変更後のポートに置き換えます

#### パターンA（Apache で TLS を終端する）

443 を待ち受けているかを確認します。

```bash
grep -nE '^\s*Listen' <Apacheのインストールディレクトリ>/conf/httpd.conf <Apacheのインストールディレクトリ>/conf/extra/*.conf
```

- **`Listen 443` が無い場合**（AgileWorks を HTTP だけで公開している場合）は、下の設定ファイルの先頭の `Listen 443` を有効にします。**既にある場合は書かないでください。** 重複すると `Address already in use` で Apache が起動しません
- AgileWorks とMCPサーバーは、どちらも 443 で待ち受けられます。`Listen 443` は 1 回だけ書き、`ServerName` の異なる `<VirtualHost *:443>` を並べると、Apache が接続先のホスト名（SNI）で振り分けて、それぞれの証明書を返します
- AgileWorks 側が `<VirtualHost 192.0.2.10:443>` のように IP アドレスで書かれている場合は、MCPサーバー側も同じ書き方にしてください（`*:443` のままだと AgileWorks 側が優先され、MCPサーバーに届きません）
- `mod_ssl.so` 自体が無い場合は、Apache のビルド時に `--enable-ssl` が指定されていません。`openssl-devel` をインストールして `apxs` でモジュールを追加するか、Apache をビルドし直す必要があります。AgileWorks 全体に影響するため、事前に影響を確認してください
- `extra/httpd-ssl.conf` の Include を新たに有効にする必要はありません。サンプルの証明書のパスが入ったまま有効にすると、証明書が見つからずに Apache が起動しなくなります

証明書を配置します。

```bash
sudo mkdir -p <Apacheのインストールディレクトリ>/conf/ssl
cat mcp.example.co.jp.crt intermediate.crt | sudo tee <Apacheのインストールディレクトリ>/conf/ssl/mcp.example.co.jp.crt > /dev/null
sudo cp mcp.example.co.jp.key <Apacheのインストールディレクトリ>/conf/ssl/
sudo chmod 644 <Apacheのインストールディレクトリ>/conf/ssl/mcp.example.co.jp.crt
sudo chmod 600 <Apacheのインストールディレクトリ>/conf/ssl/mcp.example.co.jp.key
```

`<Apacheのインストールディレクトリ>/conf/extra/zz-agileworks-mcp.conf` を作成します。

```apache
# 443 をまだ待ち受けていない場合だけ有効にする
# Listen 443

<VirtualHost *:443>
    ServerName mcp.example.co.jp

    SSLEngine on
    # フルチェーン
    SSLCertificateFile    <Apacheのインストールディレクトリ>/conf/ssl/mcp.example.co.jp.crt
    SSLCertificateKeyFile <Apacheのインストールディレクトリ>/conf/ssl/mcp.example.co.jp.key
    SSLProtocol -all +TLSv1.2 +TLSv1.3

    ErrorLog  logs/agileworks-mcp.error.log
    CustomLog logs/agileworks-mcp.access.log combined

    # VirtualHost ごとに書く（メインの設定からは継承されない）。無いと %2F を含む URL が 404 になる
    AllowEncodedSlashes NoDecode

    ProxyPreserveHost On
    ProxyTimeout 300
    # Server-Sent Events の応答を圧縮・バッファリングせずに逐次返す
    SetEnv no-gzip 1
    ProxyPass        / http://127.0.0.1:8002/ nocanon flushpackets=on
    ProxyPassReverse / http://127.0.0.1:8002/
</VirtualHost>
```

> [!IMPORTANT]
> Apache は、どの `ServerName` にも一致しない要求を、そのポートで**最初に読み込まれた VirtualHost** に渡します。MCPサーバー用の設定が先に読み込まれると、IP アドレスでのアクセスなど AgileWorks の FQDN 以外の要求がMCPサーバーに流れます。後述の `Include` は `httpd.conf` の**末尾**に追加し、反映後の `httpd -S` で、443 の `default server` が AgileWorks のままであることを確認してください。AgileWorks が VirtualHost を使わずにメインの設定で 443 を受けている場合は、先に AgileWorks 用の VirtualHost を作成する必要があります。

#### パターンB（ロードバランサーで TLS を終端する）

`<Apacheのインストールディレクトリ>/conf/extra/zz-agileworks-mcp.conf` を作成します。AgileWorks が使っている 80 番の振り分けに手を入れないよう、MCPサーバー専用のポート（例: 8090）で受けます。

```apache
Listen 8090

<VirtualHost *:8090>
    ServerName mcp.example.co.jp

    ErrorLog  logs/agileworks-mcp.error.log
    CustomLog logs/agileworks-mcp.access.log combined

    # VirtualHost ごとに書く（メインの設定からは継承されない）。無いと %2F を含む URL が 404 になる
    AllowEncodedSlashes NoDecode

    ProxyPreserveHost On
    ProxyTimeout 300
    # Server-Sent Events の応答を圧縮・バッファリングせずに逐次返す
    SetEnv no-gzip 1
    ProxyPass        / http://127.0.0.1:8002/ nocanon flushpackets=on
    ProxyPassReverse / http://127.0.0.1:8002/
</VirtualHost>
```

> [!NOTE]
> 80 番の VirtualHost に相乗りしないのは、ALB のヘルスチェックが `Host` ヘッダーにインスタンスの IP アドレスを入れて送るためです。名前ベースの VirtualHost ではMCPサーバー側に届かず、AgileWorks 側に渡って異常と判定されます。

手順 5 のロードバランサーの設定のうち、次の項目を読み替えます。いずれかが漏れると、外部からのアクセスが AgileWorks の Apache（80 番）に届いて `404 Not Found` になるか、ターゲットが `unhealthy` のままになります。

| 項目 | 設定 |
| :--- | :--- |
| ターゲットグループ | MCPサーバー専用に作成。プロトコル HTTP、**ポート 8090**、ヘルスチェックパス `/health`。AgileWorks 用（80 番）とは分ける |
| リスナー 443（HTTPS） | MCPサーバーの FQDN 宛て（ホストヘッダーで振り分け）を、MCPサーバー用のターゲットグループへ転送。AgileWorks 側の転送先は変えない |
| EC2 のセキュリティグループ | インバウンドに「カスタム TCP・ポート **8090**・ソース = ALB のセキュリティグループ」を追加。IP アドレス（`0.0.0.0/0` など）では許可しない |

ポート 8090 を開けます。

```bash
# SELinux: Apache が 8090 で待ち受けられるようにする（後述の「SELinux の設定」で必要と判断した場合）
sudo semanage port -a -t http_port_t -p tcp 8090
# firewalld が active の場合
sudo firewall-cmd --permanent --add-port=8090/tcp && sudo firewall-cmd --reload
```

#### 設定の読み込みと反映

`<Apacheのインストールディレクトリ>/conf/httpd.conf` の末尾に次の行を追加します。ソースからビルドした Apache には `conf.d` の自動読み込みが無いため、明示的に読み込みます。

```apache
Include conf/extra/zz-agileworks-mcp.conf
```

反映します。`restart` は AgileWorks も停止するため使わず、`graceful` で設定を読み直します。ソースからビルドした Apache は systemd のサービスとして管理されていないことが多いため、`systemctl` ではなく `apachectl` を使います。

```bash
sudo <Apacheのインストールディレクトリ>/bin/apachectl configtest && sudo <Apacheのインストールディレクトリ>/bin/apachectl graceful
sudo <Apacheのインストールディレクトリ>/bin/httpd -S
```

サーバー内で、Apache 経由でMCPサーバーに届くことを確認します。`200` と `X-Powered-By: Express` が返れば正常です。

```bash
# パターンA
curl -i --resolve mcp.example.co.jp:443:127.0.0.1 https://mcp.example.co.jp/health
# パターンB
curl -i -H 'Host: mcp.example.co.jp' http://127.0.0.1:8090/health
```

その後、[README の動作確認](./README.md#動作確認) を外部の端末から実行してください。

#### SELinux の設定

手順 7 の `setsebool -P httpd_can_network_connect 1` と、パターンBの `semanage port` が必要かどうかは、Apache のプロセスのドメインで決まります。`ps -eZ | grep httpd` の結果が `httpd_t` の場合は必要、`unconfined_t` などの場合は不要です。必要な場合は AgileWorks の Apache にも効く設定のため、変更してよいかを事前に確認してください。

#### RHEL 標準の httpd の場合

AgileWorks の Apache が RHEL 標準の httpd（`/etc/httpd`）の場合は、次のように読み替えてください。

- 設定ファイルは `/etc/httpd/conf.d/zz-agileworks-mcp.conf` に置きます。`conf.d` は自動で読み込まれるため、`Include` の追加は不要です。ファイル名の先頭の `zz-` は、AgileWorks の設定より後に読み込ませるためのものです
- 証明書は `/etc/pki/tls/certs/`（証明書）と `/etc/pki/tls/private/`（秘密鍵）に置きます
- 反映は `sudo apachectl configtest && sudo systemctl reload httpd` で行います

### ② MCPサーバーが使うリソースの上限を設定する

MCPサーバーは CPU:1 コア・メモリ:2GB 程度を想定しています。上限を設定しないと、負荷が高いときに AgileWorks（Tomcat）のメモリや CPU を圧迫するおそれがあるため、`aw-app/docker-compose.yml` の `services.agileworks-mcp` に上限を追加します。

```yaml
services:
  agileworks-mcp:
    # ...既存の設定...
    mem_limit: 2g
    cpus: 1
```

```bash
# 構築前: 物理メモリと現在の使用量
free -h

# docker-compose.yml の変更をコンテナに反映する（編集しただけでは反映されない。コンテナが作り直される）
cd /opt/agileworks-mcp-server/aw-app
sudo docker compose up -d

# 構築後: コンテナの使用量と上限（MEM USAGE / LIMIT が 2GiB になっていること）
sudo docker stats --no-stream agileworks_mcp
```

- 「AgileWorks（Tomcat）の最大ヒープ（`-Xmx`）＋ MCPサーバーの 2GB ＋ OS・Apache・DB（同じサーバーにある場合）」が物理メモリに収まることを確認してください
- MCPサーバーのツール呼び出しは、AgileWorks の Web API の呼び出しになります。AgileWorks 側の CPU・DB の負荷も増えるため、MCPサーバーの分だけで見積もらないでください
- `docker-compose.yml` を変更した場合は、[アップデート手順](./README.md#アップデート手順) の 2 と 4 で変更を引き継いでください

## トラブルシューティング

OS に依存しない症状は、[README のトラブルシューティング](./README.md#トラブルシューティング) を参照してください。

| 症状 | 原因と対処 |
| :--- | :--- |
| 502 Bad Gateway | SELinux によって nginx からMCPサーバーへの接続が拒否されています。`sudo setsebool -P httpd_can_network_connect 1` を実行してください。コンテナが停止していないかも `sudo docker compose ps` で確認してください |
| `nginx -t` が `"events" directive is not allowed here` で失敗する | `conf.d` のファイルに `events` などを書いています。削除してください |
| `nginx -t` が `unknown directive "http2"` で失敗する | nginx 1.25.1 未満です。`listen 443 ssl http2;` の書き方にしてください |
| `nginx -t` が `the "listen ... http2" directive is deprecated` と警告する | nginx 1.25.1 以上です。`listen 443 ssl;` と `http2 on;` の書き方にしてください |
| nginx が起動しない（ログの書き込みエラー） | ログの出力先が `/var/log/nginx/` 以外になっています |
| ロードバランサー構成でリダイレクトがループする | nginx で 80 から 443 へリダイレクトしています。リダイレクトはロードバランサーの 80 のリスナーで行ってください |
| AgileWorks と同じサーバーに構築した構成で、外部からの `/health` が Apache の 404 になる | ロードバランサーのターゲットグループが 8090 以外（AgileWorks の 80 番）に転送しています。サーバー内で `curl -i -H 'Host: mcp.example.co.jp' http://127.0.0.1:8090/health` が 200 になる場合は、ターゲットグループ・セキュリティグループ・firewalld の 8090 を確認してください |
| Apache が `Address already in use` で起動しない | `Listen` が重複しています。`zz-agileworks-mcp.conf` の `Listen` を削除してください |
| Apache の設定確認で構文エラーになる | Apache の設定ファイルでは、行の途中に `#` でコメントを書けません。コメントは別の行に書いてください |

## アップデート

[README のアップデート手順](./README.md#アップデート手順) を、`/opt/agileworks-mcp-server/aw-app` で `sudo` を付けて実行してください。nginx・Apache の設定ファイルと証明書は、アップデートの影響を受けません。
