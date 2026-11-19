# リモートMCPサーバーの環境構築（Windows Server）

Windows Server に、WSL2 上の Docker と Windows 版の nginx を使ってリモートMCPサーバーを構築する手順例です。

構成（パターンA / パターンB）、`.env` の設定項目、外部からの動作確認などの OS に依存しない内容は、[README のリモートMCPサーバー](./README.md#リモートmcpサーバー) を参照してください。

**パターンA: nginx で TLS を終端する**

```
AIエージェント ──https:443──▶ nginx（Windows のサービス） ──http──▶ MCPサーバー（WSL2 上の Docker, 127.0.0.1:8002）
```

**パターンB: ロードバランサーで TLS を終端する**

```
AIエージェント ──https:443──▶ ロードバランサー（AWS ALB 等） ──http:80──▶ nginx（Windows のサービス） ──http──▶ MCPサーバー（WSL2 上の Docker, 127.0.0.1:8002）
```

> [!NOTE]
> Windows Server は Docker Desktop の対象外です。この手順では、WSL2 の Ubuntu に Docker Engine を直接インストールします。

## 目次

- [前提条件](#前提条件)
- [構築手順](#構築手順)
  - [1. WSL をインストールする](#1-wsl-をインストールする)
  - [2. Docker をインストールする](#2-docker-をインストールする)
  - [3. MCPサーバーを起動する](#3-mcpサーバーを起動する)
  - [4. サーバーの起動時に WSL を自動で起動する](#4-サーバーの起動時に-wsl-を自動で起動する)
  - [5. nginx をインストールする](#5-nginx-をインストールする)
  - [6. 証明書を配置する（パターンA）](#6-証明書を配置するパターンa)
  - [7. ロードバランサーを設定する（パターンB）](#7-ロードバランサーを設定するパターンb)
  - [8. nginx を設定する](#8-nginx-を設定する)
  - [9. nginx を Windows のサービスに登録する](#9-nginx-を-windows-のサービスに登録する)
  - [10. Windows ファイアウォールを設定する](#10-windows-ファイアウォールを設定する)
  - [11. 動作を確認する](#11-動作を確認する)
- [AgileWorks と同じサーバーに構築する場合](#agileworks-と同じサーバーに構築する場合)
- [トラブルシューティング](#トラブルシューティング)
- [運用操作とアップデート](#運用操作とアップデート)

## 前提条件

- Windows Server に管理者権限でログインできること
- WSL2 を利用できること

> [!NOTE]
> この手順は Windows Server 2025 を前提に記載しています。ほかのバージョンの Windows Server では、WSL のインストール方法や使える設定が異なります。Microsoft の [Windows Server への WSL のインストール](https://learn.microsoft.com/ja-jp/windows/wsl/install-on-server) と [WSL の詳細設定（.wslconfig）](https://learn.microsoft.com/ja-jp/windows/wsl/wsl-config) で、お使いのバージョンの対応状況を確認してから構築してください。
- インターネット（Docker・nginx・GitHub の配布元）に接続できること
- [README の前提条件](./README.md#前提条件-2) を満たしていること

コマンドを実行する場所を、各手順の見出しの下に「PowerShell（管理者）」「Ubuntu」のように記載しています。

## 構築手順

### 1. WSL をインストールする

実行場所: PowerShell（管理者）

```powershell
# WSL を有効化する（初回は再起動を求められます）
wsl --install

# 再起動後、インストールできるディストリビューションを確認する
wsl --list --online

# Ubuntu をインストールして起動する（初回起動時に Linux のユーザー名とパスワードを作成します）
wsl --install -d Ubuntu-26.04
wsl -d Ubuntu-26.04
```

`Ubuntu-26.04` は、`wsl --list --online` に表示された Ubuntu の名前に置き換えてください。以降も同様です。

手順 2〜3 は、この Ubuntu の中で実行します。

> [!NOTE]
> 手順 2 の `systemctl` が `System has not been booted with systemd` で失敗する場合は、Ubuntu の `/etc/wsl.conf` に次の 2 行を書き、Windows 側で `wsl --shutdown` を実行してから Ubuntu を起動し直してください。
>
> ```
> [boot]
> systemd=true
> ```

### 2. Docker をインストールする

実行場所: Ubuntu

```bash
# 競合するパッケージを削除する（入っていなければ無視されます）
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do
  sudo apt-get remove -y $pkg
done

# Docker の公式リポジトリを追加する
sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# インストールと起動
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io \
  docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker

# 確認
sudo docker run --rm hello-world
sudo docker compose version
```

最新の手順は [Docker の公式ドキュメント](https://docs.docker.com/engine/install/ubuntu/) を参照してください。

### 3. MCPサーバーを起動する

実行場所: Ubuntu（最後の確認のみ PowerShell）

ソースコードを取得します。ここでは `/opt` 配下に配置します。`RX.Y.Z` は利用するリリースタグに置き換えてください。

```bash
sudo apt-get install -y git
cd /opt
sudo git clone https://github.com/atled-workflow/agileworks-mcp-server.git
cd agileworks-mcp-server
sudo git checkout RX.Y.Z
cd aw-app
```

> [!IMPORTANT]
> ソースコードは Linux 側のフォルダ（`/opt` など）に置いてください。`/mnt/c/...`（C ドライブ）に置くと、ファイルの読み書きが遅くなり、パーミッションの問題も起きます。

`.env.example` をコピーして `.env` を作成し、`MCP_SERVER_BASE_URL` を書き換えます。設定できる項目は [README の環境変数](./README.md#環境変数env) を参照してください。

```bash
sudo cp .env.example .env
sudo nano .env
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

WSL2 では、Ubuntu の中で `127.0.0.1:8002` に待ち受けたポートが、Windows の `127.0.0.1:8002` にも転送されます。Windows 側から届くことを確認します。

```powershell
curl.exe http://127.0.0.1:8002/health
```

> [!NOTE]
> Windows 側から届かない場合は、次の順に確認してください。
>
> 1. Ubuntu の中で `curl http://127.0.0.1:8002/health` が応答するか確認します。応答しない場合は、コンテナ側の問題です（`sudo docker compose ps` と `sudo docker compose logs` を確認してください）
> 2. `C:\Users\<ユーザー名>\.wslconfig` で `localhostForwarding=false` になっていないか確認します。既定値は `true` で、WSL 内で待ち受けたポートに Windows の `localhost` から接続できます
> 3. それでも届かない場合は、`.wslconfig` に次の 2 行を書き、PowerShell で `wsl --shutdown` を実行して WSL を再起動してください。Windows と WSL が同じネットワークを共有するようになります（mirrored モード。この設定のときは `localhostForwarding` は無視されます）
>
>    ```
>    [wsl2]
>    networkingMode=mirrored
>    ```
>
> mirrored モードを使える OS のバージョンは、Microsoft の [WSL の詳細設定（.wslconfig）](https://learn.microsoft.com/ja-jp/windows/wsl/wsl-config) で確認してください。

### 4. サーバーの起動時に WSL を自動で起動する

実行場所: PowerShell（管理者）

WSL は、ユーザーがログインして起動するまで動かず、動いているプロセスがなくなると停止します。そのままではサーバーを再起動したときにMCPサーバーが止まったままになるため、タスクスケジューラで、サーバーの起動時に WSL を起動して常駐させます。WSL が起動すると systemd が Docker を起動し、`docker-compose.yml` の `restart: always` によってコンテナも起動します。

```powershell
$action   = New-ScheduledTaskAction -Execute "wsl.exe" -Argument "-d Ubuntu-26.04 -u root --exec sleep infinity"
$trigger  = New-ScheduledTaskTrigger -AtStartup
$settings = New-ScheduledTaskSettingsSet -ExecutionTimeLimit 0 -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1)
Register-ScheduledTask -TaskName "WSL-Docker-MCP" -Action $action -Trigger $trigger -Settings $settings `
  -User "<手順 1 で WSL をインストールした Windows のユーザー>" -Password "<パスワード>" -RunLevel Highest
```

> [!IMPORTANT]
> 手順 1 と同じ Windows のユーザーで登録してください。WSL のディストリビューションは、インストールした Windows のユーザーに紐づきます。別のユーザー（SYSTEM など）で実行すると、Ubuntu が見つからずに失敗します。「ログオンしているかどうかにかかわらず実行する」になるよう、パスワード付きで登録します。

### 5. nginx をインストールする

実行場所: Windows

> [!NOTE]
> AgileWorks と同じサーバーに構築する場合は、nginx をインストールせず、[AgileWorks と同じサーバーに構築する場合](#agileworks-と同じサーバーに構築する場合) に進んでください。

[nginx.org](https://nginx.org/en/download.html) から Windows 版（`nginx/Windows-x.y.z` の zip）を入手し、展開したフォルダを `C:\nginx` という名前で配置します。

> [!WARNING]
> `nginx.exe` をダブルクリックしたり、引数なしで起動したりしないでください。既定の `conf\nginx.conf` で起動して 80 番ポートを使ってしまいます。nginx は手順 9 のサービスから起動します。

`conf\nginx.conf` は変更しません。MCPサーバー用の設定は別のファイルにして、起動時に `-c` で指定します。nginx を更新するときに、設定を上書きせずに済みます。

### 6. 証明書を配置する（パターンA）

実行場所: PowerShell（管理者）

パターンBの場合は、手順 7 に進んでください。

nginx は PEM 形式の証明書を読み込みます。`C:\nginx\conf\ssl\` に、サーバー証明書の後ろに中間証明書を連結した「フルチェーン」と、秘密鍵を配置します。

```powershell
New-Item C:\nginx\conf\ssl -ItemType Directory -Force

# サーバー証明書 + 中間証明書 = フルチェーン
Get-Content .\mcp.example.co.jp.crt, .\intermediate.crt |
  Set-Content -Encoding ascii C:\nginx\conf\ssl\mcp.example.co.jp.crt
Copy-Item .\mcp.example.co.jp.key C:\nginx\conf\ssl\

# 秘密鍵は Administrators と SYSTEM だけが読めるようにする
icacls C:\nginx\conf\ssl\mcp.example.co.jp.key /inheritance:r /grant:r "Administrators:F" "SYSTEM:R"
```

> [!IMPORTANT]
> 中間証明書を連結し忘れると、ブラウザでは表示できても、AIエージェント（サーバー側の HTTP クライアント）からは証明書の検証エラーになることがあります。

> [!TIP]
> 証明書が `.pfx` 形式しかない場合は、WSL の Ubuntu にある `openssl` で PEM 形式に変換できます。`openssl pkcs12 -in mcp.pfx -nokeys -out fullchain.crt` と `openssl pkcs12 -in mcp.pfx -nocerts -nodes -out mcp.key` を実行し、Windows 側（`/mnt/c/...`）にコピーしてください。

### 7. ロードバランサーを設定する（パターンB）

パターンAの場合は、手順 8 に進んでください。nginx に証明書は不要です。AWS の Application Load Balancer（ALB）の場合の設定は次のとおりです。

| 項目 | 設定 |
| :--- | :--- |
| リスナー 443（HTTPS） | ACM の証明書を指定し、ターゲットグループへ転送 |
| リスナー 80（HTTP） | HTTPS（443）へリダイレクト。nginx 側でリダイレクトするとループします |
| ターゲットグループ | プロトコル HTTP、ポート 80、ヘルスチェックパス `/health` |
| アイドルタイムアウト | 既定の 60 秒から 300 秒程度に延長（Server-Sent Events の応答が切れないようにする） |
| EC2 のセキュリティグループ | 80/tcp を ALB のセキュリティグループからのみ許可。8002 は開けない |
| DNS | FQDN を ALB に向ける（Route 53 なら Alias レコード） |
| ACM の証明書 | FQDN を含むもの（ワイルドカード可）を ALB と同じリージョンに用意 |

### 8. nginx を設定する

実行場所: Windows

`C:\nginx\conf\agileworks-mcp.conf` を作成します。`-c` で指定したファイルは `nginx.conf` の代わりに単独で読み込まれるため、`events` と `http` のブロックを含めた完結した内容にします。`mcp.example.co.jp` はお使いの FQDN に置き換え、`.env` の `MCP_SERVER_BASE_URL` のホスト名と一致させてください。

> [!NOTE]
> メモ帳で保存する場合は、ファイルの種類を「すべてのファイル」にしてください。`agileworks-mcp.conf.txt` として保存されることがあります。

**パターンA（nginx で TLS を終端する）**

```nginx
worker_processes  1;
error_log  logs/agileworks-mcp.error.log;
pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    access_log  logs/agileworks-mcp.access.log;

    server {
        listen 80;
        server_name mcp.example.co.jp;
        return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl;
        http2 on;
        server_name mcp.example.co.jp;

        # パスの区切りはスラッシュで書く。証明書はフルチェーン
        ssl_certificate     C:/nginx/conf/ssl/mcp.example.co.jp.crt;
        ssl_certificate_key C:/nginx/conf/ssl/mcp.example.co.jp.key;
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
}
```

**パターンB（ロードバランサーで TLS を終端する）**

```nginx
worker_processes  1;
error_log  logs/agileworks-mcp.error.log;
pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    access_log  logs/agileworks-mcp.access.log;

    server {
        listen 80;
        server_name mcp.example.co.jp;

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
}
```

`location /` の `/` は URL のパスです。Windows でも `C:\` などに書き換えないでください。

構文を確認します。

```powershell
C:\nginx\nginx.exe -p C:/nginx/ -c conf/agileworks-mcp.conf -t
# => ... syntax is ok
# => ... test is successful
```

### 9. nginx を Windows のサービスに登録する

実行場所: PowerShell（管理者）

Windows 版の nginx は単体では Windows のサービスとして動かないため、[WinSW](https://github.com/winsw/winsw) v2.12.0 を使ってサービスにします。WinSW は exe ファイル 1 つで動作し、事前のインストールや .NET の追加は不要です。v3 系はアルファ版で設定ファイルの書き方が異なるため、v2.12.0 を使ってください。

```powershell
# WinSW を取得し、WinSW-nginx.exe という名前で配置する
New-Item C:\nginx-service\logs -ItemType Directory -Force
Invoke-WebRequest -Uri https://github.com/winsw/winsw/releases/download/v2.12.0/WinSW-x64.exe `
  -OutFile C:\nginx-service\WinSW-nginx.exe
Unblock-File C:\nginx-service\WinSW-nginx.exe
```

```
C:\nginx-service\
├── WinSW-nginx.exe    ← WinSW-x64.exe の名前を変えたもの
├── WinSW-nginx.xml    ← exe と同じ名前で、同じフォルダに置く
└── logs\              ← WinSW 自体のログ
```

`C:\nginx-service\WinSW-nginx.xml` を **UTF-8** で保存します。起動時だけでなく、停止時の引数にも `-c` を指定するのが要点です。

```xml
<service>
  <id>nginx-mcp</id>
  <name>nginx (AgileWorks MCP Server)</name>
  <description>AgileWorks MCP サーバー用リバースプロキシ</description>

  <workingdirectory>C:\nginx</workingdirectory>
  <executable>C:\nginx\nginx.exe</executable>
  <startarguments>-p C:/nginx/ -c conf/agileworks-mcp.conf</startarguments>

  <stopexecutable>C:\nginx\nginx.exe</stopexecutable>
  <stoparguments>-p C:/nginx/ -c conf/agileworks-mcp.conf -s stop</stoparguments>
  <stoptimeout>15 sec</stoptimeout>

  <startmode>Automatic</startmode>
  <onfailure action="restart" delay="10 sec"/>

  <logpath>C:\nginx-service\logs</logpath>
  <log mode="roll-by-time">
    <pattern>yyyyMMdd</pattern>
  </log>
</service>
```

> [!WARNING]
> 起動する前に、手動で起動した nginx が残っていないこと（`Get-Process nginx`）と、80 番ポートを IIS などが使っていないこと（`netstat -ano | findstr ":80 "`）を確認してください。どちらかがあると、起動に失敗します。

サービスを登録して起動します。

```powershell
C:\nginx-service\WinSW-nginx.exe install
Start-Service nginx-mcp
Get-Service nginx-mcp        # Status が Running になっていること
Get-Process nginx            # master と worker の 2 つのプロセスが動いていること

curl.exe -i -H "Host: mcp.example.co.jp" http://127.0.0.1/health
```

最後の `curl.exe` は、パターンAでは 80 番が https へのリダイレクトになるため、`301` が返れば正常です。パターンBでは `{"status":"OK",...}` が返れば、nginx から WSL 上のコンテナまでつながっています。

### 10. Windows ファイアウォールを設定する

実行場所: PowerShell（管理者）

8002 は開けないでください。

```powershell
# パターンA: 80 と 443 を開ける
New-NetFirewallRule -DisplayName "AgileWorks MCP HTTP"  -Direction Inbound -Protocol TCP -LocalPort 80  -Action Allow
New-NetFirewallRule -DisplayName "AgileWorks MCP HTTPS" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow

# パターンB: 80 だけ開ける（443 はロードバランサーが受ける）
New-NetFirewallRule -DisplayName "AgileWorks MCP HTTP" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow
```

パターンBでは、送信元をロードバランサーからのみに絞る設定を、クラウドのセキュリティグループなどで行ってください。

### 11. 動作を確認する

[README の動作確認](./README.md#動作確認) を外部の端末から実行してください。

> [!IMPORTANT]
> 最後に、サーバーを再起動し、**ログインしないまま** 外部の端末から `/health` が返ることを確認してください。手順 4（WSL の自動起動）と手順 9（nginx のサービス）が機能しているかを確かめるためです。起動直後は、コンテナより先に nginx が起動するため、しばらく `502 Bad Gateway` が返ることがあります。

## AgileWorks と同じサーバーに構築する場合

AgileWorks が動いている Windows Server にMCPサーバーを構築する場合は、次の 2 点に注意してください。

### ① nginx は入れず、AgileWorks の Apache に VirtualHost を追加する

AgileWorks の Apache が 80/443 を使っているため、nginx をインストールしても起動できません。サブパスでは公開できず、443 以外のポートで公開すると利用者側のプロキシやファイアウォールで止められやすいため、**MCPサーバー専用の FQDN の VirtualHost を Apache に追加**します。この場合、手順 5（nginx のインストール）・手順 8（nginx の設定）・手順 9（サービスの登録）は行わず、代わりに以下を行います。

`<Apacheのインストールディレクトリ>` は、AgileWorks の Apache をインストールしたディレクトリに置き換えてください。

#### 事前確認

実行場所: PowerShell（管理者）

```powershell
# 使用中のポートを確認する（8002 をMCPサーバー以外が使っている場合は、下の「8002 が使われている場合」を参照）
netstat -ano | findstr /R ":80 :443 :8002 :8090"

# 必要なモジュールが読み込まれているか（ssl_module はパターンAの場合のみ必要）
<Apacheのインストールディレクトリ>\bin\httpd.exe -M | findstr /R "proxy_module proxy_http_module ssl_module"

# 表示されないモジュールは、.so ファイルの有無と LoadModule の行（コメントアウトされていないか）を確認する
dir <Apacheのインストールディレクトリ>\modules\mod_proxy.so, <Apacheのインストールディレクトリ>\modules\mod_proxy_http.so, <Apacheのインストールディレクトリ>\modules\mod_ssl.so
findstr /N /R "LoadModule.proxy_module LoadModule.proxy_http_module LoadModule.ssl_module" <Apacheのインストールディレクトリ>\conf\httpd.conf

# 変更前の VirtualHost の構成を控えておく
<Apacheのインストールディレクトリ>\bin\httpd.exe -S
```

モジュールの LoadModule の行がコメントアウトされている場合は、`<Apacheのインストールディレクトリ>\conf\httpd.conf` の行頭の `#` を外します。

**8002 が使われている場合**

Tomcat など、MCPサーバー以外のプロセスが 8002 を使っている場合は、MCPサーバーのポートを空いているポート（例: 8003）に変更します。

1. `aw-app/.env` の `MCP_PORT` を変更します（例: `MCP_PORT=8003`）
2. コンテナを作り直して、変更後のポートで応答することを確認します

    実行場所: Ubuntu

    ```bash
    cd /opt/agileworks-mcp-server/aw-app
    sudo docker compose up -d
    curl http://127.0.0.1:8003/health
    ```

    実行場所: PowerShell

    ```powershell
    curl.exe http://127.0.0.1:8003/health
    ```

3. 以降の Apache の設定（`ProxyPass` / `ProxyPassReverse`）にある `127.0.0.1:8002` を、変更後のポートに置き換えます

#### パターンA（Apache で TLS を終端する）

443 を待ち受けているかを確認します。

```powershell
findstr /N /R "^ *Listen" <Apacheのインストールディレクトリ>\conf\httpd.conf <Apacheのインストールディレクトリ>\conf\extra\*.conf
```

- **`Listen 443` が無い場合**（AgileWorks を HTTP だけで公開している場合）は、下の設定ファイルの先頭の `Listen 443` を有効にします。**既にある場合は書かないでください。** 重複すると `could not bind to address` で Apache が起動しません
- AgileWorks とMCPサーバーは、どちらも 443 で待ち受けられます。`Listen 443` は 1 回だけ書き、`ServerName` の異なる `<VirtualHost *:443>` を並べると、Apache が接続先のホスト名（SNI）で振り分けて、それぞれの証明書を返します
- AgileWorks 側が `<VirtualHost 192.0.2.10:443>` のように IP アドレスで書かれている場合は、MCPサーバー側も同じ書き方にしてください（`*:443` のままだと AgileWorks 側が優先され、MCPサーバーに届きません）
- `mod_ssl.so` 自体が無い場合は、AgileWorks の Apache を SSL を含むビルドに差し替える必要があります。AgileWorks 全体に影響するため、事前に影響を確認してください
- `extra/httpd-ssl.conf` の Include を新たに有効にする必要はありません。サンプルの証明書のパスが入ったまま有効にすると、証明書が見つからずに Apache が起動しなくなります

証明書は、手順 6 と同じ要領で `<Apacheのインストールディレクトリ>\conf\ssl\` に配置します。

`<Apacheのインストールディレクトリ>\conf\extra\agileworks-mcp.conf` を作成します。

```apache
# 443 をまだ待ち受けていない場合だけ有効にする
# Listen 443

<VirtualHost *:443>
    ServerName mcp.example.co.jp

    SSLEngine on
    # パスの区切りはスラッシュで書く。証明書はフルチェーン
    SSLCertificateFile    "<Apacheのインストールディレクトリ>/conf/ssl/mcp.example.co.jp.crt"
    SSLCertificateKeyFile "<Apacheのインストールディレクトリ>/conf/ssl/mcp.example.co.jp.key"
    SSLProtocol -all +TLSv1.2 +TLSv1.3

    ErrorLog  "logs/agileworks-mcp.error.log"
    CustomLog "logs/agileworks-mcp.access.log" combined

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
> Apache は、どの `ServerName` にも一致しない要求を、そのポートで**最初に読み込まれた VirtualHost** に渡します。MCPサーバー用の設定が先に読み込まれると、IP アドレスでのアクセスなど AgileWorks の FQDN 以外の要求がMCPサーバーに流れます。後述の `Include` は `httpd.conf` の**末尾**に追加し、反映後の `httpd.exe -S` で、443 の `default server` が AgileWorks のままであることを確認してください。AgileWorks が VirtualHost を使わずにメインの設定で 443 を受けている場合は、先に AgileWorks 用の VirtualHost を作成する必要があります。

#### パターンB（ロードバランサーで TLS を終端する）

`<Apacheのインストールディレクトリ>\conf\extra\agileworks-mcp.conf` を作成します。AgileWorks が使っている 80 番の振り分けに手を入れないよう、MCPサーバー専用のポート（例: 8090）で受けます。

```apache
Listen 8090

<VirtualHost *:8090>
    ServerName mcp.example.co.jp

    ErrorLog  "logs/agileworks-mcp.error.log"
    CustomLog "logs/agileworks-mcp.access.log" combined

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

手順 7 のロードバランサーの設定と手順 10 のファイアウォールのうち、次の項目を読み替えます。いずれかが漏れると、外部からのアクセスが AgileWorks の Apache（80 番）に届いて `404 Not Found` になるか、ターゲットが `unhealthy` のままになります。

| 項目 | 設定 |
| :--- | :--- |
| ターゲットグループ | MCPサーバー専用に作成。プロトコル HTTP、**ポート 8090**、ヘルスチェックパス `/health`。AgileWorks 用（80 番）とは分ける |
| リスナー 443（HTTPS） | MCPサーバーの FQDN 宛て（ホストヘッダーで振り分け）を、MCPサーバー用のターゲットグループへ転送。AgileWorks 側の転送先は変えない |
| EC2 のセキュリティグループ | インバウンドに「カスタム TCP・ポート **8090**・ソース = ALB のセキュリティグループ」を追加。IP アドレス（`0.0.0.0/0` など）では許可しない |
| Windows ファイアウォール | 80 の代わりに 8090/tcp を開ける（下のコマンド） |

```powershell
New-NetFirewallRule -DisplayName "AgileWorks MCP (ALB)" -Direction Inbound -Protocol TCP -LocalPort 8090 -Action Allow
```

#### 設定の読み込みと反映

`<Apacheのインストールディレクトリ>\conf\httpd.conf` の**末尾**に次の行を追加します。

```apache
Include conf/extra/agileworks-mcp.conf
```

> [!WARNING]
> Apache の設定ファイルでは、行の途中に `#` でコメントを書けません（`SSLCertificateFile ... # フルチェーン` は構文エラーになります）。コメントは必ず別の行に書いてください。

反映します。サービスを停止・起動すると AgileWorks も止まるため、`-k restart` で設定を読み直します。Windows の `-k restart` は、サービスを止めずに設定を読み直して子プロセスを入れ替えますが、処理中の要求が切れることがあるため、利用の少ない時間帯に行ってください。

```powershell
# Apache のサービス名を調べる（-n に指定する）
Get-Service | Where-Object { $_.DisplayName -like '*Apache*' -or $_.Name -like '*Apache*' }

<Apacheのインストールディレクトリ>\bin\httpd.exe -t
<Apacheのインストールディレクトリ>\bin\httpd.exe -k restart -n "<Apache のサービス名>"
<Apacheのインストールディレクトリ>\bin\httpd.exe -S
```

サーバー内で、Apache 経由でMCPサーバーに届くことを確認します。`200` と `X-Powered-By: Express` が返れば正常です。

```powershell
# パターンA
curl.exe -i --resolve mcp.example.co.jp:443:127.0.0.1 https://mcp.example.co.jp/health
# パターンB
curl.exe -i -H "Host: mcp.example.co.jp" http://127.0.0.1:8090/health
```

その後、手順 11 の動作確認と再起動試験を、nginx の代わりに Apache が動いている前提で同じように行ってください。

### ② WSL とMCPサーバーが使うリソースの上限を設定する

MCPサーバーは CPU:1 コア・メモリ:2GB 程度を想定しています。Windows では特に **WSL2 の上限** が重要です。WSL2 は既定でホストの物理メモリの最大 50% まで使い、使い終わったメモリもすぐには Windows に返しません。そのままでは AgileWorks（Tomcat）のメモリを圧迫するため、手順 1 の後に `.wslconfig` で上限を設定します。

`C:\Users\<手順 1 で WSL をインストールした Windows のユーザー>\.wslconfig` を作成します。

```ini
[wsl2]
# コンテナの 2GB ＋ Ubuntu・Docker 本体の分
memory=3GB
processors=1
# 手順 3 で localhostForwarding や networkingMode を設定した場合は、その行も残す
# networkingMode=mirrored

[experimental]
# 使い終わったメモリを少しずつ Windows に返す
autoMemoryReclaim=gradual
```

反映します（MCPサーバーも一度停止します）。

```powershell
wsl --shutdown
wsl -d Ubuntu-26.04 -- free -h      # total が 3GB 前後になっていること
```

あわせて、`aw-app/docker-compose.yml` の `services.agileworks-mcp` に、コンテナの上限を追加します。

```yaml
services:
  agileworks-mcp:
    # ...既存の設定...
    mem_limit: 2g
    cpus: 1
```

`docker-compose.yml` は編集しただけでは反映されません。コンテナを作り直して反映し、上限が設定されたことを確認します。

実行場所: Ubuntu

```bash
cd /opt/agileworks-mcp-server/aw-app
sudo docker compose up -d
# MEM USAGE / LIMIT が 2GiB になっていること
sudo docker stats --no-stream agileworks_mcp
```

- 「AgileWorks（Tomcat）の最大ヒープ（`-Xmx`）＋ WSL の 3GB ＋ Windows・Apache・DB（同じサーバーにある場合）」が物理メモリに収まることを確認してください
- 構築後は、タスクマネージャーの `VmmemWSL`（または `vmmem`）で WSL 全体のメモリ使用量を確認できます
- MCPサーバーのツール呼び出しは、AgileWorks の Web API の呼び出しになります。AgileWorks 側の CPU・DB の負荷も増えるため、MCPサーバーの分だけで見積もらないでください
- `docker-compose.yml` を変更した場合は、アップデートのときに変更を引き継いでください（[README のアップデート手順](./README.md#アップデート手順) の 2 と 4）

## トラブルシューティング

OS に依存しない症状は、[README のトラブルシューティング](./README.md#トラブルシューティング) を参照してください。

| 症状 | 原因と対処 |
| :--- | :--- |
| `nginx -t` が `no "events" section in configuration` で失敗する | `agileworks-mcp.conf` に `events { }` がありません。`server { }` の部分だけをコピーしていないか、空のファイル（メモ帳で `.conf.txt` として保存したもの）を読み込んでいないか確認してください |
| nginx のサービスが起動しない | `C:\nginx-service\logs\`（WinSW）と `C:\nginx\logs\agileworks-mcp.error.log`（nginx）を確認してください。80 番ポートの競合、手動で起動した nginx の残り、XML のパスの誤りがよくある原因です |
| 502 Bad Gateway | WSL またはコンテナが停止しています。Windows から `curl.exe http://127.0.0.1:8002/health` で確認してください。サーバーの再起動後に起きる場合は、手順 4 のタスクを確認してください |
| Windows から `127.0.0.1:8002` に届かない | WSL のポート転送が機能していません。Ubuntu の中での応答、`.wslconfig` の `localhostForwarding` の順に確認し、それでも届かない場合は `networkingMode=mirrored` を設定してください（手順 3 の NOTE） |
| サービスを停止しても nginx のプロセスが残る | XML の `stoparguments` に `-c` がありません。`C:\nginx\nginx.exe -p C:/nginx/ -c conf/agileworks-mcp.conf -s stop` で停止し、残る場合は `Stop-Process -Name nginx -Force` を実行してください |
| ロードバランサー構成でリダイレクトがループする | nginx で 80 から 443 へリダイレクトしています。ロードバランサー構成では、nginx 側にリダイレクトを書かないでください |
| AgileWorks と同じサーバーに構築した構成（パターンB）で、外部からの `/health` が Apache の 404 になる | ロードバランサーのターゲットグループが 8090 以外（AgileWorks の 80 番）に転送しています。サーバー内で `curl.exe -H "Host: mcp.example.co.jp" http://127.0.0.1:8090/health` が 200 になる場合は、ターゲットグループ・セキュリティグループ・Windows ファイアウォールの 8090 を確認してください |

## 運用操作とアップデート

| やりたいこと | 操作（PowerShell（管理者）） |
| :--- | :--- |
| nginx の停止・起動・再起動 | `Stop-Service nginx-mcp` ／ `Start-Service nginx-mcp` ／ `Restart-Service nginx-mcp` |
| nginx の設定を変更した | `C:\nginx\nginx.exe -p C:/nginx/ -c conf/agileworks-mcp.conf -t` で確認し、同じ引数に `-s reload` を付けて実行します。サービスを止めずに反映できます |
| WinSW の XML を変更した | `Stop-Service nginx-mcp` → `C:\nginx-service\WinSW-nginx.exe uninstall` → `C:\nginx-service\WinSW-nginx.exe install` → `Start-Service nginx-mcp` |
| XML の `id` を変更した | `uninstall` は新しい `id` のサービスを探すため、古いサービスが残ります。`Stop-Service <古いid>` と `sc.exe delete <古いid>` で削除してください |
| サービスの削除が「削除の予約」のまま止まる | サービスの管理画面やイベントビューアーを閉じてから再実行してください。直らない場合は OS を再起動してください |
| nginx のバージョンを上げる | `Stop-Service nginx-mcp` で停止し、新しい zip の `nginx.exe` で `C:\nginx\nginx.exe` を置き換えてから `Start-Service nginx-mcp` で起動します。`conf\agileworks-mcp.conf` と `conf\ssl\` はそのまま使えます |

MCPサーバーのアップデートは、Ubuntu の `/opt/agileworks-mcp-server/aw-app` で、[README のアップデート手順](./README.md#アップデート手順) を `sudo` を付けて実行してください。
