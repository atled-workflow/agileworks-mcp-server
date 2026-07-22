# AgileWorks MCP Server

AgileWorksの公式ローカルMCPサーバーです。

## 目次

- [前提条件](#前提条件)
- [互換性](#互換性)
- [インストール](#インストール)
  - [ローカルMCPサーバー](#ローカルmcpサーバー)
  - [リモートMCPサーバー](#リモートmcpサーバー)
- [Tools](#tools)
- [ライセンス](#ライセンス)
- [免責事項・サポートについて](#免責事項サポートについて)

## 前提条件

- Node.js v24.13.0 以上
- AgileWorksのライセンスにWebAPIオプションが含まれていること

## 互換性

本MCPサーバーのバージョンと、対応するAgileWorks Web APIのバージョンは以下の通りです。

| AgileWorks MCP Server タグ | 対応AgileWorksバージョン | 備考 |
| :--- | :--- | :--- |
| v0.1.0 | R3.2.0 | 初版 |
| v0.1.1 | R3.2.0～R3.3.0 | 第2版 |
| v0.1.2 | R3.2.0～R3.3.0 | 第3版 |

## インストール

### ローカルMCPサーバー

1. 依存モジュールをインストールします。

    ```bash
    cd aw-app
    npm install
    ```

2. MCPクライアント（例: Claude Desktop など）の設定ファイルに、以下の内容を追記してください。

    Claude Desktop の場合は `claude_desktop_config.json` に追記します。

    ```json
    {
        "mcpServers": {
            "AgileWorks": {
                "command": "{nodejsのインストールディレクトリの絶対パス}",
                "args": [
                    "{aw-app/dist/custom/admin/server.js の絶対パス}"
                ],
                "env": {
                     "SYSTEM_URL": "{AgileWorksのシステムURL}",
                    "ACCESS_TOKEN": "{AgileWorks WebAPIで使用するOAuth2のアクセストークン}"
                }
            }
        }
    }
    ```

    **設定例:**

    ```json
    {
        "mcpServers": {
            "AgileWorks": {
                "command": "c:\\nvm4w\\nodejs\\node",
                "args": [
                    "C:\\temp\\agileworks-mcp-server\\aw-app\\dist\\custom\\admin\\server.js"
                ],
                "env": {
                    "SYSTEM_URL": "https://sample.co.jp/AgileWorks",
                    "ACCESS_TOKEN": "abcdefghijklmnopqrstuvwxyz"
                }
            }
        }
    }
    ```

### リモートMCPサーバー

Dockerを使用することで、リモートMCPサーバーとして公開できます。

#### 前提条件

- MCPサーバー用のポート番号を許可してください (デフォルトは8002)

> [!NOTE]
> `.env.example` をリネームして `.env` を作成し、`MCP_PORT` でポート番号を変更できます。

#### ファイル構成

```
aw-app/
├── dist/
├── Dockerfile
├── docker-compose.yml
└── .env (※任意)
```

#### 設定手順

1. Docker コンテナをビルド・起動します。

    ```bash
    cd aw-app
    docker compose build
    docker compose up -d
    ```

2. MCP クライアント（例: Claude Desktop など）の設定ファイルに、以下の内容を追記します。

    ```json
    {
      "mcpServers": {
        "AgileWorks": {
          "command": "npx",
          "args": [
            "-y",
            "mcp-remote",
            "http(s)://{FQDN}/mcp",
            "--header",
            "x-system-url: {AgileWorksのシステムURL}",
            "--header",
            "x-access-token: {AgileWorks WebAPIで使用するOAuth2のアクセストークン}"
          ]
        }
      }
    }
    ```

    **設定例:**

    ```json
    {
      "mcpServers": {
        "AgileWorks": {
          "command": "npx",
          "args": [
            "-y",
            "mcp-remote",
            "https://sample.co.jp/mcp",
            "--header",
            "x-system-url: https://example.com/AgileWorks",
            "--header",
            "x-access-token: abcdefghijklmnopqrstuvwxyz"
          ]
        }
      }
    }
    ```

> [!NOTE]
> ChatGPTなどのAIエージェントでは、`x-system-url` / `x-access-token` をクエリパラメータでも指定できます（リクエストは `/mcp` への **POST**）。
> ただし URL にトークンを含めるとアクセスログ等に残る可能性があるため、可能な限りヘッダー指定を推奨します。
>
> ```
> http(s)://{FQDN}/mcp?x-system-url={AgileWorksのシステムURL}&x-access-token={AgileWorks WebAPIで使用するOAuth2のアクセストークン}
> ```
>
> 例:
> ```
> https://sample.co.jp/mcp?x-system-url=https://example.com/AgileWorks&x-access-token=abcdefghijklmnopqrstuvwxyz
> ```

> [!TIP]
> nginx / Traefikなどを用いてリバースプロキシを配置することで、リモートMCPサーバーのエンドポイントを変更することができます。

#### リモートMCPサーバーのアップデート

1. リモートMCPサーバーを停止します。
```bash
cd aw-app
docker compose down
```

2. （任意）docker-compose.ymlとDockerfileのバックアップを行います。
```bash
cp docker-compose.yml docker-compose.yml.$(date +%s).bak
cp Dockerfile Dockerfile.$(date +%s).bak
```

3. 最新のソースコードを取得します。

4. Dockerコンテナを再ビルド・起動します。
```bash
docker compose build
docker compose up -d
```

## Tools

MCPサーバーで使用できるツールは以下の通りです。

> [!CAUTION]
> - 破壊的な操作（例: ユーザー削除、書類却下）を行うToolは慎重に使用してください
> - MCPクライアントに登録するTool数が多すぎると、AIが適切なToolを選択できなくなる場合があります。必要なToolのみを有効にすることを推奨します
> - 本ツールは現在α版として公開されており、仕様が予告なく変更される場合があります。
> - 基礎的な動作確認は AgileWorks R3.2.0 で実施していますが、予期しない動作が発生する可能性があります。

### 書類操作

| Tool名 | 説明 |
|--------|------|
| getDocHeader | 書類情報取得API |
| getDoc | 書類データ取得API |
| prepareDocRequest | 新規書類データ作成API |
| addDoc | 新規書類データ保存API |
| updateDoc | 書類データ更新API |
| hardDeleteDoc | 書類物理削除API |
| selectDoc | 書類検索API |
| getDocPdf | 書類PDFファイル取得API |
| openDoc | 書類表示API |

### 書類コメント

| Tool名 | 説明 |
|--------|------|
| listDocComment | 書類コメント一覧取得API |
| addDocComment | 書類メモ追加API |
| deleteDocComment | 書類コメント/メモ削除API |

### 書類添付情報

| Tool名 | 説明 |
|--------|------|
| addDocAttachment | 書類添付情報追加API (URLのみ添付可) |
| updateDocAttachment | 書類添付情報更新API (URLのみ添付可) |
| listDocAttachment | 書類添付情報一覧取得API |
| deleteDocAttachment | 書類添付情報削除API |

### 関連書類

| Tool名 | 説明 |
|--------|------|
| getDocReference | 参照元関連書類情報取得API |
| listDocReferencer | 参照先関連書類情報一覧API |
| addDocReference | 関連書類追加API |
| deleteDocReference | 関連書類削除API |

### ワークフロー

| Tool名 | 説明 |
|--------|------|
| countWorkflowMessage | 回付情報件数取得API |
| countListWorkflowMessage | 回付情報件数一覧取得API |
| selectWorkflowMessage | 回付情報検索API |
| docDraft | 書類下書き保存API |
| docStart | 書類作成/申請API |
| docApprove | 書類承認API |
| docDelete | 書類論理削除API |
| docRemand | 書類差戻しAPI |
| docRetract | 書類引戻しAPI |
| docReject | 書類却下API |
| getWorkflowInfo | 回付情報件数取得API |
| findWorkflowTask | 回付情報タスク検索API |
| listWorkflowJournal | 回付履歴一覧取得API |
| listElectJournal | 処理者変更履歴一覧取得API |
| listShareJournal | 共有履歴一覧取得API |

### ユーザー管理

| Tool名 | 説明 |
|--------|------|
| addUser | ユーザー作成API |
| findUser | ユーザー参照API |
| updateUser | ユーザー更新API |
| deleteUser | ユーザー削除API |
| disableUser | ユーザー適用終了API |

### 組織管理

| Tool名 | 説明 |
|--------|------|
| addUnit | 組織作成API |
| findUnit | 組織参照API |
| updateUnit | 組織更新API |
| deleteUnit | 組織削除API |
| disableUnit | 組織適用終了API |

### セクションロール

| Tool名 | 説明 |
|--------|------|
| addSectionRole | セクションロール作成API |
| findSectionRole | セクションロール参照API |
| updateSectionRole | セクションロール更新API |
| deleteSectionRole | セクションロール削除API |

### セクションロールグループ

| Tool名 | 説明 |
|--------|------|
| addSectionRoleGroup | セクションロールグループ作成API |
| findSectionRoleGroup | セクションロールグループ参照API |
| updateSectionRoleGroup | セクションロールグループ更新API |
| deleteSectionRoleGroup | セクションロールグループ削除API |

### 組織所属

| Tool名 | 説明 |
|--------|------|
| addUnitAppointment | 組織所属作成API |
| findUnitAppointment | 組織所属参照API |
| updateUnitAppointment | 組織所属更新API |
| deleteUnitAppointment | 組織所属削除API |
| disableUnitAppointment | 組織所属適用終了API |

### 代理申請

| Tool名 | 説明 |
|--------|------|
| addProxyApplyAppointment | 代理申請作成API |
| findProxyApplyAppointment | 代理申請参照API |
| updateProxyApplyAppointment | 代理申請更新API |
| deleteProxyApplyAppointment | 代理申請削除API |
| disableProxyApplyAppointment | 代理申請適用終了API |

### 代理承認

| Tool名 | 説明 |
|--------|------|
| addProxyAppointment | 代理承認作成API |
| findProxyAppointment | 代理承認参照API |
| updateProxyAppointment | 代理承認更新API |
| deleteProxyAppointment | 代理承認削除API |
| disableProxyAppointment | 代理承認適用終了API |

### 権限委譲

| Tool名 | 説明 |
|--------|------|
| addDelegationAppointment | 権限委譲作成API |
| findDelegationAppointment | 権限委譲参照API |
| updateDelegationAppointment | 権限委譲更新API |
| deleteDelegationAppointment | 権限委譲削除API |
| disableDelegationAppointment | 権限委譲適用終了API |

### 引上げ権限

| Tool名 | 説明 |
|--------|------|
| addDeprivationAppointment | 引上げ権限作成API |
| findDeprivationAppointment | 引上げ権限参照API |
| updateDeprivationAppointment | 引上げ権限更新API |
| deleteDeprivationAppointment | 引上げ権限削除API |
| disableDeprivationAppointment | 引上げ権限適用終了API |

### プライベートロール

| Tool名 | 説明 |
|--------|------|
| addPrivateRole | プライベートロール作成API |
| findPrivateRole | プライベートロール参照API |
| updatePrivateRole | プライベートロール更新API |
| deletePrivateRole | プライベートロール削除API |

### プライベートロール所属

| Tool名 | 説明 |
|--------|------|
| addPrivateRoleAppointment | プライベートロール所属作成API |
| findPrivateRoleAppointment | プライベートロール所属参照API |
| updatePrivateRoleAppointment | プライベートロール所属更新API |
| deletePrivateRoleAppointment | プライベートロール所属削除API |
| disablePrivateRoleAppointment | プライベートロール所属適用終了API |

### ユニバーサルロール

| Tool名 | 説明 |
|--------|------|
| addUniversalRole | ユニバーサルロール作成API |
| findUniversalRole | ユニバーサルロール参照API |
| updateUniversalRole | ユニバーサルロール更新API |
| deleteUniversalRole | ユニバーサルロール削除API |

### ユニバーサルロール所属

| Tool名 | 説明 |
|--------|------|
| addUniversalRoleAppointment | ユニバーサルロール所属作成API |
| findUniversalRoleAppointment | ユニバーサルロール所属参照API |
| updateUniversalRoleAppointment | ユニバーサルロール所属更新API |
| deleteUniversalRoleAppointment | ユニバーサルロール所属削除API |
| disableUniversalRoleAppointment | ユニバーサルロール所属適用終了API |

### 業務カテゴリ

| Tool名 | 説明 |
|--------|------|
| findProject | 業務カテゴリ一覧取得API |

### 外部マスタ

| Tool名 | 説明 |
|--------|------|
| importTinyUserMaster | 外部マスタ(標準)取込API |
| exportTinyUserMaster | 外部マスタ(標準)取得API |
| importUserMaster | 外部マスタ(拡張)取込API |
| exportUserMaster | 外部マスタ(拡張)取得API |

### コンポーネント

| Tool名 | 説明 |
|--------|------|
| listComponentMasterWindow | マスター参照コンポーネント一覧取得API |
| listComponentAutoNumber | 自動採番コンポーネント一覧取得API |

### フォーム

| Tool名 | 説明 |
|--------|------|
| listForm | 登録フォーム一覧取得API |
| findFormDefinition | フォーム定義情報取得API |
| listPublicFolderInfo | 公開フォルダ・公開フォーム取得API |

### 管理者権限不要

| Tool名 | 説明 |
|--------|------|
| notAdminGetVersion | バージョン情報取得API |

## ライセンス

MIT

## 免責事項・サポートについて

本リポジトリは、**動作保証や技術サポートは行いません。**
本サーバーの使用によって生じた、いかなる直接的・間接的な損害（データの消失、業務の中断、セキュリティ上の問題など）についても、一切の責任を負いません。設定や運用は、利用者自身の責任において十分な検証の上で行ってください。