# AgileWorks MCP Server

AgileWorksの公式ローカルMCPサーバーです。

## 前提条件

- Node.js (Ver 22.22.0 以上)

## インストール

MCPクライアント（例: Claude Desktop など）の設定ファイルに、以下の内容を追記してください。

Claude Desktop の場合は `claude_desktop_config.json` に追記します。

```json
{
  "mcpServers": {
    "agileWorksWebAPIR320Server": {
      "command": "{nodejsのインストールディレクトリの絶対パス}",
      "args": [
        "{server.jsの絶対パス}"
      ],
      "env": {
        "SYSTEM_URL": "{AgileWorksのシステムURL}",
        "ACCESS_TOKEN": "{WebAPIで使用するOAuth2.0のアクセストークン}"
      }
    }
  }
}
```

### 設定例

```json
{
  "mcpServers": {
    "agileWorksWebAPIR320Server": {
      "command": "c:\\nvm4w\\nodejs\\node",
      "args": [
        "C:\\temp\\agileworks-mcp-server\\dist\\server.js"
      ],
      "env": {
        "SYSTEM_URL": "https://sample.co.jp/AgileWorks",
        "ACCESS_TOKEN": "abcdefghijklmnopqrstuvwxyz"
      }
    }
  }
}
```

## Tools

MCPサーバーで使用できるツールは以下の通りです。

> [!CAUTION]
> - 破壊的な操作（例: ユーザー削除、書類却下）を行うToolは慎重に使用してください
> - MCPクライアントに登録するTool数が多すぎると、AIが適切なToolを選択できなくなる場合があります。必要なToolのみを有効にすることを推奨します

> [!TIP]
> Dockerなどを使用することで、ローカルMCPサーバーをリモートMCPサーバーとして公開することも可能です。

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
| addDocAttachment | 書類添付情報追加API |
| updateDocAttachment | 書類添付情報更新API |
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

### 管理者権限不要API

| Tool名 | 説明 |
|--------|------|
| notAdminPrepareDocRequest | 新規書類データ作成API |
| notAdminAddDoc | 新規書類データ保存API |
| notAdminSelectDoc | 書類検索API |
| getDocView | 書類表示API |
| notAdminCountListWorkflowMessage | 回付情報件数一覧取得API |
| notAdminSelectWorkflowMessage | 回付情報検索API |
| notAdminStart | 書類作成/申請API |
| listProxyApplyAppointment | 所有している代理申請権限取得API |
| notAdminListProxyAppointment | 所有している代理承認権限取得API |
| notAdminListPublicFolderInfo | 公開フォルダ・公開フォーム取得API |
| notAdminGetUserInfo | ユーザー情報取得API |
| notAdminGetVersion | バージョン情報取得API |

### SCIM API

| Tool名 | 説明 |
|--------|------|
| sCIMGetUsers | ユーザー情報取得API |
| sCIMPostUsers | ユーザー情報作成API |
| sCIMGetUsersId | 指定ユーザー情報取得API |
| sCIMPostUsersId | ユーザー情報更新API |
| sCIMPatchUsersId | ユーザー情報一部更新API |
| sCIMDeleteUsersId | ユーザー情報削除API |
| sCIMGetGroups | 組織情報取得API |
| sCIMPostGroups | 組織情報作成API |
| sCIMGetGroupsId | 指定組織情報取得API |
| sCIMPutGroups | 組織情報更新API |
| sCIMPatchGroupsId | 組織情報一部更新API |
| sCIMDeleteGroupsId | 組織情報削除API |
| sCIMResourceTypes | リソース情報取得API |
| sCIMSchemas | スキーマ定義取得API |
| sCIMService | サービス定義取得API |

### その他

| Tool名 | 説明 |
|--------|------|
| model | モデルオブジェクト取得API |
| nonParameter | サービス実行API |
| download | ダウンロードAPI |

## ライセンス

MIT
