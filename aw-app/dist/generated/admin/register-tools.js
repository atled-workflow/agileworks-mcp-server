"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTools = registerTools;
const handlers_1 = require("./handlers");
const tool_schemas_zod_1 = require("./tool-schemas.zod");
function registerTools(server) {
    server.tool('agileworks_get_document', '書類データ取得。書類ID(docId)を指定して、申請書・稟議書・フォームなど1件の書類データを取得します。書類のフィールド値や入力内容、承認状況を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.getDocBody
    }, {
        readOnlyHint: true
    }, handlers_1.getDocHandler);
    server.tool('agileworks_prepare_document', '新規書類データ作成。フォームID(formId)を指定して、初期値入りの新規書類データ(雛形)を作成します。新しい申請書・稟議書・フォームを起票する最初のステップで使用します。', {
        bodyParams: tool_schemas_zod_1.prepareDocRequestBody
    }, {
        readOnlyHint: true
    }, handlers_1.prepareDocRequestHandler);
    server.tool('agileworks_add_document', '新規書類データ保存。新規に作成した申請書・稟議書などの書類データを保存します。 「新規書類データ作成API」で取得したdocの値を雛形として、書類の各フィールドに値をセットし、本APIにより書類データの保存を行います。 本APIで保存した書類データを画面から参照できるようにするには、さらに、「下書き保存API」あるいは「書類作成 / 申請API」を実行する必要があります。', {
        bodyParams: tool_schemas_zod_1.addDocBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false
    }, handlers_1.addDocHandler);
    server.tool('agileworks_update_document', '書類データ更新。「書類データ取得API」または「新規書類データ保存API」で取得したdocに対し、申請書・稟議書のフィールド値を変更し、本APIにより書類データを更新(編集)することができます。', {
        bodyParams: tool_schemas_zod_1.updateDocBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true
    }, handlers_1.updateDocHandler);
    server.tool('agileworks_search_documents', '書類検索。検索条件(書類種別、申請日、ステータスなど)を指定して、条件に合致する申請書・稟議書・フォームの一覧を取得します。書類を一覧で探したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.selectDocBody
    }, {
        readOnlyHint: true
    }, handlers_1.selectDocHandler);
    server.tool('agileworks_list_document_comments', '書類コメント一覧取得。書類ID(docId)を指定して、その書類に付けられたコメント・メモの一覧を取得します。承認者や関係者とのやり取り履歴を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listDocCommentBody
    }, {
        readOnlyHint: true
    }, handlers_1.listDocCommentHandler);
    server.tool('agileworks_add_document_comment', '書類メモ追加。書類ID(docId)を指定して、書類にコメント・メモを追加します。承認や確認の際に、書類に対して補足説明や連絡事項を残したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.addDocCommentBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false
    }, handlers_1.addDocCommentHandler);
    server.tool('agileworks_add_document_attachment', '書類添付情報追加。書類ID(docId)を指定して、申請書・稟議書にURLを追加します。種別(type)、名前(name)、URL(url)などを指定します。書類にリンクを添付したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.addDocAttachmentBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false
    }, handlers_1.addDocAttachmentHandler);
    server.tool('agileworks_update_document_attachment', '書類添付情報更新。「書類添付情報一覧取得API」などで取得した添付情報のID(id)と書類ID(docId)を指定して、添付ファイルの種別(type)、名前(name)、URL(url)などを更新します。書類に登録済みの添付情報を修正したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.updateDocAttachmentBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true
    }, handlers_1.updateDocAttachmentHandler);
    server.tool('agileworks_list_document_attachments', '書類添付情報一覧取得。書類ID(docId)を指定して、その書類に添付されているファイルの一覧情報(ファイル名など)を取得します。添付ファイルの有無や内容を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listDocAttachmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.listDocAttachmentHandler);
    server.tool('agileworks_get_document_references', '参照元関連書類情報取得。書類ID(docId)を指定して、その書類が参照している(関連付け元の)書類情報を取得します。書類同士の関連付け・紐づけを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.getDocReferenceBody
    }, {
        readOnlyHint: true
    }, handlers_1.getDocReferenceHandler);
    server.tool('agileworks_list_referencing_documents', '参照先関連書類情報一覧取得。書類ID(docId)を指定して、その書類を参照している(関連付けている)書類の一覧を取得します。ある書類に紐づく関連書類を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listDocReferencerBody
    }, {
        readOnlyHint: true
    }, handlers_1.listDocReferencerHandler);
    server.tool('agileworks_add_document_reference', '関連書類追加。2つの書類ID(docId)を指定して、書類同士の関連付け(紐づけ)を追加します。ある申請書と別の申請書を関連書類として紐づけたいときに使用します。', {
        bodyParams: tool_schemas_zod_1.addDocReferenceBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false
    }, handlers_1.addDocReferenceHandler);
    server.tool('agileworks_open_document', '書類表示。書類ID(docId)を指定して、書類の内容を表示するHTMLをダウンロードします。画面表示と同じレイアウトで申請書・稟議書の内容を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.openDocBody
    }, {
        readOnlyHint: true
    }, handlers_1.openDocHandler);
    server.tool('agileworks_count_workflow_messages', '回付情報件数取得。検索条件(condition: userCode、workflowMessageType など)を指定して、条件に合致する回付情報(承認待ち・報告待ちなどのタスク)の件数のみを取得します。「回付情報検索API」で一覧を取得する前に、対象件数を把握したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.countWorkflowMessageBody
    }, {
        readOnlyHint: true
    }, handlers_1.countWorkflowMessageHandler);
    server.tool('agileworks_list_workflow_message_counts', '回付情報件数一覧取得。複数の検索条件(conditionList.entries: userCode、workflowMessageType の組み合わせ)をまとめて指定し、条件ごとの回付情報の件数を一括で取得します。承認待ち・報告待ちなど複数種類のタスク件数をまとめて確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.countListWorkflowMessageBody
    }, {
        readOnlyHint: true
    }, handlers_1.countListWorkflowMessageHandler);
    server.tool('agileworks_search_workflow_messages', '回付情報検索。検索条件を指定して、書類の回付情報(承認フロー・ワークフローの進捗、処理待ちのタスクなど)の一覧を検索します。承認待ち・処理待ちの書類を探したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.selectWorkflowMessageBody
    }, {
        readOnlyHint: true
    }, handlers_1.selectWorkflowMessageHandler);
    server.tool('agileworks_save_document_draft', '書類下書き保存。書類ID(docId)を指定して、作成中の申請書・稟議書を下書き(一時保存)として保存します。まだ申請せずに途中まで入力した内容を保存したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.docDraftBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true
    }, handlers_1.docDraftHandler);
    server.tool('agileworks_submit_document', '書類作成/申請。書類ID(docId)を指定して、書類を新規作成または申請(起票)します。申請書・稟議書のワークフローを開始し、承認者に回付したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.docStartBody
    }, {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false
    }, handlers_1.docStartHandler);
    server.tool('agileworks_approve_document', '書類承認。書類ID(docId)を指定して、回付されてきた申請書・稟議書を承認(決裁)します。承認者として書類の内容を承認し、次の承認者や完了に進めたいときに使用します。', {
        bodyParams: tool_schemas_zod_1.docApproveBody
    }, {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false
    }, handlers_1.docApproveHandler);
    server.tool('agileworks_remand_document', '書類差戻し。書類ID(docId)を指定して、回付されてきた申請書・稟議書を前の担当者に差し戻します。内容に不備がある場合などに、承認せず差し戻したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.docRemandBody
    }, {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false
    }, handlers_1.docRemandHandler);
    server.tool('agileworks_retract_document', '書類引戻し。書類ID(docId)を指定して、申請済みの書類を申請者自身が引き戻します。誤って申請した書類や内容を修正したい場合に、申請を取り下げたいときに使用します。', {
        bodyParams: tool_schemas_zod_1.docRetractBody
    }, {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false
    }, handlers_1.docRetractHandler);
    server.tool('agileworks_get_workflow_info', '回付情報取得。書類ID(docId)を指定して、その書類の回付情報(現在の処理ステップや処理待ちユーザーなど、ワークフローの進捗状況)を取得します。特定の書類が今どの承認ステップにあるかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.getWorkflowInfoBody
    }, {
        readOnlyHint: true
    }, handlers_1.getWorkflowInfoHandler);
    server.tool('agileworks_find_workflow_tasks', '回付情報タスク検索。検索条件(condition: docId、ruleStepCode、ruleStepType(CREATE/APPLY/APPROVE/CONFIRM/READ)など)を指定して、書類の回付情報タスク(各処理ステップの担当者や処理状況)を検索します。特定の書類の各ステップの処理状況を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findWorkflowTaskBody
    }, {
        readOnlyHint: true
    }, handlers_1.findWorkflowTaskHandler);
    server.tool('agileworks_list_workflow_journals', '回付履歴一覧取得。書類ID(docId)を指定して、その書類がこれまでに回付された履歴(承認・差戻し・却下などの処理履歴)の一覧を取得します。書類の承認プロセスの経緯を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listWorkflowJournalBody
    }, {
        readOnlyHint: true
    }, handlers_1.listWorkflowJournalHandler);
    server.tool('agileworks_find_users', 'ユーザー参照。指定されたパラメータのユーザーを参照します。 ユーザーの参照には、基準日を指定する必要があります。 指定した基準日が適用期間内に含まれるユーザーを参照します。 また、columnValueConditionListで検索条件を指定できます。', {
        bodyParams: tool_schemas_zod_1.findUserBody
    }, {
        readOnlyHint: true
    }, handlers_1.findUserHandler);
    server.tool('agileworks_find_units', '組織参照。検索条件・基準日を指定して、部署・部門などの組織情報を参照します。組織図の作成や、特定の部署の情報を調べたいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findUnitBody
    }, {
        readOnlyHint: true
    }, handlers_1.findUnitHandler);
    server.tool('agileworks_find_section_roles', 'セクションロール参照。コード、名前、ユーザーコード、組織コードなどの検索条件を指定して、セクションロール(組織上の役職・役割)の一覧を検索します。特定の役職に就いているユーザーや、役職の設定内容を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findSectionRoleBody
    }, {
        readOnlyHint: true
    }, handlers_1.findSectionRoleHandler);
    server.tool('agileworks_find_section_role_groups', 'セクションロールグループ参照。コード、名前、所属セクションロールコードなどの検索条件を指定して、セクションロールグループ(セクションロールをまとめたグループ)の一覧を検索します。複数の役職をグループ単位で管理・確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findSectionRoleGroupBody
    }, {
        readOnlyHint: true
    }, handlers_1.findSectionRoleGroupHandler);
    server.tool('agileworks_find_unit_appointments', '組織所属参照。検索条件・基準日を指定して、ユーザーの組織所属(配属)情報を参照します。誰がどの部署に所属しているかを調べたいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findUnitAppointmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.findUnitAppointmentHandler);
    server.tool('agileworks_find_proxy_apply_appointments', '代理申請参照。委任元(申請)の組織・ユーザー、代理ユーザー、対象フォーム・ルールなどの検索条件を指定して、代理申請(申請権限の代理設定)の一覧を検索します。誰が誰の代わりに申請できる設定になっているかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findProxyApplyAppointmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.findProxyApplyAppointmentHandler);
    server.tool('agileworks_find_proxy_appointments', '代理承認参照。委任元(承認)の組織・ユーザー、代理ユーザー、対象フォーム・ルールなどの検索条件を指定して、代理承認(承認権限の代理設定)の一覧を検索します。誰が誰の代わりに承認できる設定になっているかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findProxyAppointmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.findProxyAppointmentHandler);
    server.tool('agileworks_find_delegation_appointments', '権限委譲参照。委譲元・委譲先の組織・ユーザー、対象フォーム・ルールなどの検索条件を指定して、権限委譲(承認権限などをほかのユーザーに委譲する設定)の一覧を検索します。誰から誰に権限が委譲されているかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findDelegationAppointmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.findDelegationAppointmentHandler);
    server.tool('agileworks_find_deprivation_appointments', '引上げ権限参照。対象ユーザーコード、対象フォーム・ルールなどの検索条件を指定して、引上げ権限(特定ユーザーの承認権限を上位者が引き上げる設定)の一覧を検索します。誰の権限がどの範囲で引き上げられているかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findDeprivationAppointmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.findDeprivationAppointmentHandler);
    server.tool('agileworks_find_private_roles', 'プライベートロール参照。コード、名前、任意の項目による絞り込み条件などを指定して、プライベートロール(特定の申請フローで使う候補者グループ)の一覧を検索します。承認候補者の設定内容を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findPrivateRoleBody
    }, {
        readOnlyHint: true
    }, handlers_1.findPrivateRoleHandler);
    server.tool('agileworks_find_private_role_appointments', 'プライベートロール所属参照。ユーザーコード、プライベートロールコード、候補者コードなどの検索条件を指定して、プライベートロール所属(プライベートロールへのユーザー・候補者の割り当て)の一覧を検索します。誰がどのプライベートロールの候補者になっているかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findPrivateRoleAppointmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.findPrivateRoleAppointmentHandler);
    server.tool('agileworks_find_universal_roles', 'ユニバーサルロール参照。コード、名前、任意の項目による絞り込み条件などを指定して、ユニバーサルロール(組織や所属に依存しない汎用ロール)の一覧を検索します。汎用ロールの設定内容を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findUniversalRoleBody
    }, {
        readOnlyHint: true
    }, handlers_1.findUniversalRoleHandler);
    server.tool('agileworks_find_universal_role_appointments', 'ユニバーサルロール所属参照。ユーザーコード、ユニバーサルロールコード、任意の項目による絞り込み条件などを指定して、ユニバーサルロール所属(ユニバーサルロールへのユーザーの割り当て)の一覧を検索します。誰がどのユニバーサルロールに所属しているかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findUniversalRoleAppointmentBody
    }, {
        readOnlyHint: true
    }, handlers_1.findUniversalRoleAppointmentHandler);
    server.tool('agileworks_list_projects', '業務カテゴリ一覧取得。業務カテゴリ(書類を分類するフォルダ・カテゴリ)の一覧を取得します。書類がどのカテゴリ・フォルダに属しているかを調べたいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findProjectBody
    }, {
        readOnlyHint: true
    }, handlers_1.findProjectHandler);
    server.tool('agileworks_list_master_reference_components', 'マスター参照コンポーネント一覧取得。フォームで使用可能なマスター参照コンポーネント(住所マスタ、部門マスタなど、フォーム上でマスタデータを参照・選択する部品)の一覧を取得します。フォーム定義でどのマスター参照コンポーネントが利用できるかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listComponentMasterWindowBody
    }, {
        readOnlyHint: true
    }, handlers_1.listComponentMasterWindowHandler);
    server.tool('agileworks_list_auto_number_components', '自動採番コンポーネント一覧取得。フォームで使用可能な自動採番コンポーネント(書類番号などを自動的に採番する部品)の一覧を取得します。フォーム定義でどの自動採番コンポーネントが利用できるかを確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listComponentAutoNumberBody
    }, {
        readOnlyHint: true
    }, handlers_1.listComponentAutoNumberHandler);
    server.tool('agileworks_list_forms', '登録フォーム一覧取得。システムに登録されているフォーム(申請書・稟議書のテンプレート)の一覧を取得します。利用可能な申請書式を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listFormBody
    }, {
        readOnlyHint: true
    }, handlers_1.listFormHandler);
    server.tool('agileworks_get_form_definition', 'フォーム定義情報取得。フォームID(formId)を指定して、そのフォームの定義情報(項目構成・入力項目・レイアウトなど)を取得します。申請書のフォーム構造を確認したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.findFormDefinitionBody
    }, {
        readOnlyHint: true
    }, handlers_1.findFormDefinitionHandler);
    server.tool('agileworks_list_public_folders', '公開フォルダ・公開フォーム取得。公開されているフォルダおよびフォーム(申請書式)の一覧を取得します。誰でも申請できる公開の申請フォームを探したいときに使用します。', {
        bodyParams: tool_schemas_zod_1.listPublicFolderInfoBody
    }, {
        readOnlyHint: true
    }, handlers_1.listPublicFolderInfoHandler);
    server.tool('agileworks_get_version', '（管理者権限不要）バージョン情報取得。管理者権限がなくても呼び出せる、AgileWorksのバージョン情報を取得するAPIです。動作確認や疎通確認をしたいときに使用します。', {
        bodyParams: tool_schemas_zod_1.notAdminGetVersionBody
    }, {
        readOnlyHint: true
    }, handlers_1.notAdminGetVersionHandler);
    server.tool('agileworks_create_rule', '回付ルール作成。ルールコード・名称・適用期間・業務カテゴリ・ポリシー設定・カスタムメニュー・紐づくフォーム・ステップ構成などを指定して、新しい回付ルール（ワークフロー定義）を作成します。', {
        bodyParams: tool_schemas_zod_1.createRuleBody
    }, {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false
    }, handlers_1.createRuleHandler);
    server.tool('agileworks_find_rule', '回付ルール取得。ルールコードを指定して、回付ルール（ワークフロー定義）を取得します。基準日またはバージョンを指定して、特定時点・特定バージョンのルール定義を参照できます。', {
        bodyParams: tool_schemas_zod_1.findRuleBody
    }, {
        readOnlyHint: true
    }, handlers_1.findRuleHandler);
}
