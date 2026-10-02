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

## 前提条件

- AgileWorksのライセンスにWebAPIオプションが含まれていること
- 管理者権限が必要なToolを利用する場合は、AgileWorksの管理者権限（全権限）を持っていること
- AgileWorksクラウド版をご利用の場合は、API利用枠オプションを契約していること
- AgileWorksの管理サイトにて、システムURLが設定されていること

## 互換性

本MCPサーバーのバージョンと、対応するAgileWorks Web APIのバージョンは以下の通りです。

| AgileWorks MCP Server タグ | 対応AgileWorksバージョン |
| :--- | :--- |
| v0.2.0 | R3.3.0a～ |
| v0.3.0 | R3.3.0a～ |

## インストール

### ローカルMCPサーバー

#### 前提条件

- Node.js (v24.13.0 以上) をインストールしていること

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

#### 環境構築

##### 前提条件

- MCPサーバー用のポート番号を許可してください (デフォルトは8002)

> [!NOTE]
> `.env.example` をリネームして `.env` を作成し、`MCP_PORT` でポート番号を変更できます。

##### ファイル構成

```
aw-app/
├── dist/
├── Dockerfile
├── docker-compose.yml
└── .env (※任意)
```

##### 設定手順

1. Docker コンテナをビルド・起動します。

    ```bash
    cd aw-app
    docker compose build
    docker compose up -d
    ```

> [!TIP]
> nginx / Traefikなどを用いてリバースプロキシを配置することで、リモートMCPサーバーのエンドポイントを変更することができます。

##### アップデート手順

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

#### 接続方法

MCPサーバーがAgileWorksのAPIを呼び出すための認証情報（クライアントID）を、あらかじめAgileWorksの管理画面から取得してください。クライアントIDをすでに作成している場合は、新たに生成せずそのクライアントIDをご利用ください。

1. AgileWorksの管理者アカウントで管理画面にログインします。（AgileWorksの管理権限が必要です）
2. 「サイト管理」>「サイト共通設定」>「認証・セキュリティ」>「API認証」を開きます。
3. 認証方式で「OAuth2認証」を選択します。
4. 「クライアントID設定」を押下してクライアントIDを生成します。
5. 発行されたクライアントIDを控えます（後ほど利用します）。

> [!IMPORTANT]
> クライアントID発行時の「リダイレクトURIのスキーマ」は `https` を設定してください。

##### カスタムコネクタから接続する場合

AIエージェントに、リモートMCPサーバーのURLを設定してください。

```
https://{FQDN}/{AgileWorksのシステムURLをURLエンコードしたもの}/mcp
```

例：AgileWorksのシステムURLが `https://sample.co.jp/AgileWorks` の場合

```
https://{FQDN}/https%3A%2F%2Fsample.co.jp%2FAgileWorks/mcp
```

また、AIエージェントによっては認証URLとトークン発行URLの入力を別途求められる場合があります。その場合は以下を設定してください。

- 認証URL: `{AgileWorksのシステムURL}/oauth/authorize`
- トークン発行URL: `{AgileWorksのシステムURL}/oauth/token`

**設定例（Claudeのカスタムコネクタを利用した例）:**

Claudeの「カスタムコネクタ」機能を使って接続する利用例です。※2026年9月現在の情報です。最新の設定方法については公式ドキュメントをご参照ください。

1. 管理者が「組織設定（個人プランの場合はカスタマイズ）」>「コネクタ」を開きます。
2. 「コネクタを追加」（または「＋」→「カスタムコネクタを追加」）を選択します。
3. 接続先のリモートMCPサーバーURLを入力します。
4. 「詳細設定（Advanced settings）」を開き、上記で取得したクライアントIDを「OAuth Client ID」に入力します。OAuth Client Secretは空欄のままで構いません。
5. 「追加」を押下します。
6. ブラウザ上でAgileWorksのログイン画面が表示されるので、通常お使いのアカウントでログインします。
7. ログインが完了すると接続が確立し、チャットより本MCPのツールが利用可能になります。

ほかのAIエージェントをご利用の場合も、おおむね同じ形式の設定項目を入力してください。

## Tools

MCPサーバー経由でAIエージェントから呼び出し可能な主要ツール一覧です。

> [!CAUTION]
> - 破壊的な操作（例: 書類却下、承認・差戻し）を行うToolは慎重に使用してください
> - MCPクライアントに登録するTool数が多すぎると、AIが適切なToolを選択できなくなる場合があります。必要なToolのみを有効にすることを推奨します
> - 回付ルール作成（agileworks_create_rule）のツールをご利用になる予定がない場合は、設定の無効化をおすすめいたします。このツールは定義情報（説明文など）が膨大であるため、有効にしたままにしておくと、メッセージを送信するたびにその定義情報もあわせてAIへ送信されてしまいます。その結果、やり取り1回あたりに消費されるトークン数（利用料や通信量）が無駄に増加してしまいます


### 読み取り専用Tool

データの参照のみを行い、AgileWorks側のデータを変更しないToolです。

| ツール名称 | 説明 | 主な効果・活用例 |
|---|---|---|
| agileworks_get_document | 書類ID(docId)を指定して、申請書・稟議書・フォームなど1件の書類データを取得する | 「書類ID=1234の内容を教えて」のように、特定の書類の詳細を確認したいときに使う |
| agileworks_prepare_document | フォームコード(formCode)などを指定して、初期値入りの新規書類データ(雛形)を作成する | 「出張申請のフォームで新しい書類を作りたい」など、申請書作成の最初のステップとして使う |
| agileworks_search_documents | 書類種別、申請日、ステータスなどの条件を指定して、条件に合致する書類の一覧を検索する | 「今月提出された出張申請の一覧を出して」など、条件で書類を探すときに使う |
| agileworks_open_document | 書類ID(docId)を指定して、画面表示と同じレイアウトの書類内容(HTML)を取得する | 申請書・稟議書の内容を画面表示に近い形式で確認したいときに使う |
| agileworks_list_document_comments | 書類ID(docId)を指定して、その書類に付けられたコメント・メモの一覧を取得する | 承認者や関係者とのやり取りの履歴を確認したいときに使う |
| agileworks_list_document_attachments | 書類ID(docId)を指定して、その書類に添付されているファイル・リンクの一覧を取得する | 書類にどんなファイルが添付されているか確認したいときに使う |
| agileworks_get_document_references | 書類ID(docId)を指定して、その書類が参照している(関連付け元の)書類情報を取得する | 書類同士の関連付け・紐づけを確認したいときに使う |
| agileworks_list_referencing_documents | 書類ID(docId)を指定して、その書類を参照している(関連付けている)書類の一覧を取得する | ある書類に紐づく関連書類を確認したいときに使う |
| agileworks_count_workflow_messages | ユーザーコードや回付種別などの条件を指定して、条件に合致する回付情報(承認待ち・報告待ちタスク)の件数を取得する | 「今、承認待ちは何件ある？」と件数だけすぐ確認したいときに使う |
| agileworks_list_workflow_message_counts | 複数の検索条件の組み合わせをまとめて指定し、条件ごとの回付情報の件数を一括で取得する | 承認待ち・報告待ちなど複数種類のタスク件数をまとめて確認したいときに使う |
| agileworks_search_workflow_messages | 検索条件を指定して、承認フロー・ワークフローの進捗や処理待ちタスクの一覧を検索する | 「自分の承認待ち書類を教えて」のように、処理待ちの書類を探したいときに使う |
| agileworks_get_workflow_info | 書類ID(docId)を指定して、その書類の現在の処理ステップや処理待ちユーザーなど、回付情報(進捗状況)を取得する | 「あの申請、今誰の承認待ち？」を確認したいときに使う |
| agileworks_find_workflow_tasks | docId、処理ステップコード・種別(CREATE/APPLY/APPROVE/CONFIRM/READ等)などの条件を指定して、回付タスク(各ステップの担当者や処理状況)を検索する | 特定の書類の各承認ステップの処理状況を確認したいときに使う |
| agileworks_list_workflow_journals | 書類ID(docId)を指定して、その書類の承認・差戻し・却下などの処理履歴の一覧を取得する | 書類の承認プロセスの経緯を確認したいときに使う |
| agileworks_find_users | 基準日や検索条件を指定して、条件に合致するユーザー情報を参照する | 「〇〇さんの所属や役職を教えて」のように、ユーザー情報を調べたいときに使う |
| agileworks_find_units | 検索条件・基準日を指定して、部署・部門などの組織情報を参照する | 組織図の作成や、特定の部署の情報を調べたいときに使う |
| agileworks_find_section_roles | コード、名前、ユーザーコード、組織コードなどの条件で、セクションロール(組織上の役職・役割)の一覧を検索する | 特定の役職に就いているユーザーや、役職の設定内容を確認したいときに使う |
| agileworks_find_section_role_groups | コード、名前、所属セクションロールコードなどの条件で、セクションロールグループの一覧を検索する | 複数の役職をグループ単位で管理・確認したいときに使う |
| agileworks_find_unit_appointments | 検索条件・基準日を指定して、ユーザーの組織所属(配属)情報を参照する | 誰がどの部署に所属しているかを調べたいときに使う |
| agileworks_find_proxy_apply_appointments | 申請元の組織・ユーザー、代理ユーザー、対象フォーム・ルールなどの条件で、代理申請(申請権限の代理設定)の一覧を検索する | 誰が誰の代わりに申請できる設定になっているかを確認したいときに使う |
| agileworks_find_proxy_appointments | 承認元の組織・ユーザー、代理ユーザー、対象フォーム・ルールなどの条件で、代理承認(承認権限の代理設定)の一覧を検索する | 誰が誰の代わりに承認できる設定になっているかを確認したいときに使う |
| agileworks_find_delegation_appointments | 委譲元・委譲先の組織・ユーザー、対象フォーム・ルールなどの条件で、権限委譲の一覧を検索する | 誰から誰に承認権限などが委譲されているかを確認したいときに使う |
| agileworks_find_deprivation_appointments | 対象ユーザーコード、対象フォーム・ルールなどの条件で、引上げ権限(上位者による権限引き上げ設定)の一覧を検索する | 誰の権限がどの範囲で引き上げられているかを確認したいときに使う |
| agileworks_find_private_roles | コード、名前などの条件で、プライベートロール(特定の申請フローで使う候補者グループ)の一覧を検索する | 承認候補者グループの設定内容を確認したいときに使う |
| agileworks_find_private_role_appointments | ユーザーコード、プライベートロールコード、候補者コードなどの条件で、プライベートロールへの割り当ての一覧を検索する | 誰がどのプライベートロールの候補者になっているかを確認したいときに使う |
| agileworks_find_universal_roles | コード、名前などの条件で、ユニバーサルロール(組織や所属に依存しない汎用ロール)の一覧を検索する | 汎用ロールの設定内容を確認したいときに使う |
| agileworks_find_universal_role_appointments | ユーザーコード、ユニバーサルロールコードなどの条件で、ユニバーサルロールへの割り当ての一覧を検索する | 誰がどのユニバーサルロールに所属しているかを確認したいときに使う |
| agileworks_list_projects | 書類を分類する業務カテゴリ(フォルダ・カテゴリ)の一覧を取得する | 書類がどのカテゴリ・フォルダに属しているかを調べたいときに使う |
| agileworks_list_master_reference_components | フォームで使用可能なマスター参照コンポーネント(住所マスタ、部門マスタなどの参照部品)の一覧を取得する | フォーム定義でどのマスター参照コンポーネントが利用できるかを確認したいときに使う |
| agileworks_list_auto_number_components | フォームで使用可能な自動採番コンポーネント(書類番号などを自動採番する部品)の一覧を取得する | フォーム定義でどの自動採番コンポーネントが利用できるかを確認したいときに使う |
| agileworks_list_forms | システムに登録されているフォーム(申請書・稟議書のテンプレート)の一覧を取得する | 利用可能な申請書式を確認したいときに使う |
| agileworks_get_form_definition | フォームID(formId)を指定して、そのフォームの定義情報(項目構成・入力項目・レイアウトなど)を取得する | 書類作成前にフォームの入力項目を確認したいときに使う |
| agileworks_list_public_folders | 公開されているフォルダおよびフォーム(申請書式)の一覧を取得する | 誰でも申請できる公開の申請フォームを探したいときに使う |
| agileworks_get_version | 管理者権限がなくても呼び出せる、AgileWorksのバージョン情報を取得する | MCPサーバとAgileWorksの接続の動作確認や疎通確認をしたいときに使う |
| agileworks_find_rule | ルールコードを指定して、回付ルールを取得する | 「ルールコード=XXXの回付ルールの内容を確認したい」「過去のある基準日・バージョン時点でのルール内容を確認したい」など、既存の回付ルールの設定内容や変更履歴を確認したいときに使う |

### 書き込み専用Tool

AgileWorks側のデータを作成・更新するToolです。ワークフローの承認・差戻し・引戻しなど、書類の状態を変更する操作を含みます。

| ツール名称 | 説明 | 主な効果・活用例 |
|---|---|---|
| agileworks_add_document | 新規に作成した書類データ(雛形)にフィールド値をセットして保存する | 「このフォームに入力した内容を保存して」など、下書き保存や申請の前段階でデータを確定させたいときに使う |
| agileworks_update_document | 取得済みの書類データに対し、フィールド値を変更して更新(編集)する | 「この書類の金額を修正して」など、既存の書類データを編集したいときに使う |
| agileworks_add_document_comment | 書類ID(docId)を指定して、書類にコメント・メモを追加する | 「この書類にコメントを付けて」と依頼するときに使う |
| agileworks_add_document_attachment | 書類ID(docId)を指定して、種別・名前・URLなどの添付情報(URLリンク)を追加する | 書類にリンクを添付したいときに使う |
| agileworks_update_document_attachment | 書類に登録済みの添付情報(ID指定)の種別・名前・URLなどを更新する | 登録済みの添付リンクの内容を修正したいときに使う |
| agileworks_add_document_reference | 2つの書類ID(docId)を指定して、書類同士の関連付け(紐づけ)を追加する | ある申請書と別の申請書を関連書類として紐づけたいときに使う |
| agileworks_save_document_draft | 書類ID(docId)を指定して、作成中の申請書・稟議書を下書き(一時保存)として保存する | まだ申請せずに途中まで入力した内容を保存しておきたいときに使う |
| agileworks_submit_document | 書類ID(docId)を指定して、書類を新規作成または申請(起票)し、ワークフローを開始する | 「このフォームに入力して申請して」など、承認者への回付を開始したいときに使う |
| agileworks_approve_document | 書類ID(docId)を指定して、回付されてきた申請書・稟議書を承認(決裁)する | 「この書類を承認して」と依頼するときに使う |
| agileworks_remand_document | 書類ID(docId)を指定して、回付されてきた申請書・稟議書を前の担当者に差し戻す | 内容に不備がある場合など、「差し戻して」と依頼するときに使う |
| agileworks_retract_document | 書類ID(docId)を指定して、申請済みの書類を申請者自身が引き戻す | 誤って申請した書類を取り下げたい、内容を修正したいときに使う |
| agileworks_create_rule | ルールコード・名称・適用期間・業務カテゴリ・ポリシー設定・カスタムメニュー・紐づくフォーム・ステップ構成などを指定して、新しい回付ルールを作成する | 「出張申請フォーム用の新しい承認フロー(回付ルール)を作りたい」など、新しい業務フローの承認ルートを新規に設定したいときに使う（※利用予定がない場合は設定の無効化を推奨） |

## ライセンス

MIT