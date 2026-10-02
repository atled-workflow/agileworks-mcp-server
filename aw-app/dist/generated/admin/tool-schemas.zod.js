"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDocAttachmentResponse = exports.listDocAttachmentResponseDocAttachmentListEntriesItemOperationInfoModifyDateRegExp = exports.listDocAttachmentResponseDocAttachmentListEntriesItemOperationInfoRegistrationDateRegExp = exports.listDocAttachmentResponseDocAttachmentListEntriesItemRuleStepHeaderTypeRegExp = exports.listDocAttachmentResponseDocAttachmentListEntriesItemTypeRegExp = exports.listDocAttachmentBody = exports.updateDocAttachmentResponse = exports.updateDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp = exports.updateDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp = exports.updateDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp = exports.updateDocAttachmentResponseDocAttachmentTypeRegExp = exports.updateDocAttachmentBody = exports.addDocAttachmentResponse = exports.addDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp = exports.addDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp = exports.addDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp = exports.addDocAttachmentResponseDocAttachmentTypeRegExp = exports.addDocAttachmentBody = exports.addDocCommentResponse = exports.addDocCommentResponseDocCommentOperationInfoModifyDateRegExp = exports.addDocCommentResponseDocCommentOperationInfoRegistrationDateRegExp = exports.addDocCommentResponseDocCommentEffectorTypeRegExpOne = exports.addDocCommentResponseDocCommentRuleStepHeaderTypeRegExp = exports.addDocCommentBody = exports.listDocCommentResponse = exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoModifyDateRegExp = exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoRegistrationDateRegExp = exports.listDocCommentResponseDocCommentListEntriesItemEffectorTypeRegExpOne = exports.listDocCommentResponseDocCommentListEntriesItemRuleStepHeaderTypeRegExp = exports.listDocCommentBody = exports.selectDocResponse = exports.selectDocBody = exports.selectDocBodyConditionDateConditionToRegExp = exports.selectDocBodyConditionDateConditionFromRegExp = exports.selectDocBodyConditionCriterionDateRegExp = exports.updateDocResponse = exports.updateDocResponseDocCriterionDateRegExp = exports.updateDocBody = exports.updateDocBodyCriterionDateRegExp = exports.addDocResponse = exports.addDocResponseDocCriterionDateRegExp = exports.addDocBody = exports.addDocBodyCriterionDateRegExp = exports.prepareDocRequestResponse = exports.prepareDocRequestResponseDocCriterionDateRegExp = exports.prepareDocRequestBody = exports.prepareDocRequestBodyCriterionDateRegExp = exports.getDocResponse = exports.getDocResponseDocCriterionDateRegExp = exports.getDocBody = void 0;
exports.findUserResponseUserListEntriesItemValidityDateToRegExp = exports.findUserBody = exports.findUserBodyConditionCriterionDateRegExp = exports.listWorkflowJournalResponse = exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleStepHeaderTypeRegExp = exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleEffectorTypeRegExpOne = exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemCreateDateRegExp = exports.listWorkflowJournalBody = exports.findWorkflowTaskResponse = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleStepHeaderTypeRegExp = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemDeprivedRuleStepHeaderTypeRegExp = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemEffectDateRegExp = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleEffectorTypeRegExpOne = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemStateRegExp = exports.findWorkflowTaskBody = exports.getWorkflowInfoResponse = exports.getWorkflowInfoResponseWorkflowInfoLastOperateDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoApplyDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoApprovedDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoCreateDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoCriterionDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoCurrentRuleStepHeaderListEntriesItemTypeRegExp = exports.getWorkflowInfoBody = exports.docRetractResponse = exports.docRetractBody = exports.docRemandResponse = exports.docRemandBody = exports.docApproveResponse = exports.docApproveBody = exports.docStartResponse = exports.docStartBody = exports.docStartBodyCriterionDateRegExp = exports.docDraftResponse = exports.docDraftBody = exports.docDraftBodyCriterionDateRegExp = exports.selectWorkflowMessageResponse = exports.selectWorkflowMessageBody = exports.countListWorkflowMessageResponse = exports.countListWorkflowMessageBody = exports.countWorkflowMessageResponse = exports.countWorkflowMessageBody = exports.openDocBody = exports.addDocReferenceResponse = exports.addDocReferenceBody = exports.listDocReferencerResponse = exports.listDocReferencerResponseDocHeaderListEntriesItemCriterionDateRegExp = exports.listDocReferencerBody = exports.getDocReferenceResponse = exports.getDocReferenceResponseDocHeaderCriterionDateRegExp = exports.getDocReferenceBody = void 0;
exports.findPrivateRoleAppointmentBodyConditionCriterionDateRegExp = exports.findPrivateRoleResponse = exports.findPrivateRoleResponsePrivateRoleListEntriesItemCandidateListEntriesItemCriterionDateRegExp = exports.findPrivateRoleBody = exports.findDeprivationAppointmentResponse = exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemCriterionDateRegExp = exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateToRegExp = exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateFromRegExp = exports.findDeprivationAppointmentBody = exports.findDeprivationAppointmentBodyConditionCriterionDateRegExp = exports.findDelegationAppointmentResponse = exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemCriterionDateRegExp = exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateToRegExp = exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateFromRegExp = exports.findDelegationAppointmentBody = exports.findDelegationAppointmentBodyConditionCriterionDateRegExp = exports.findProxyAppointmentResponse = exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemCriterionDateRegExp = exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateToRegExp = exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateFromRegExp = exports.findProxyAppointmentBody = exports.findProxyAppointmentBodyConditionCriterionDateRegExp = exports.findProxyApplyAppointmentResponse = exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemCriterionDateRegExp = exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateToRegExp = exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateFromRegExp = exports.findProxyApplyAppointmentBody = exports.findProxyApplyAppointmentBodyConditionCriterionDateRegExp = exports.findUnitAppointmentResponse = exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemCriterionDateRegExp = exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateToRegExp = exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateFromRegExp = exports.findUnitAppointmentBody = exports.findUnitAppointmentBodyConditionCriterionDateRegExp = exports.findSectionRoleGroupResponse = exports.findSectionRoleGroupBody = exports.findSectionRoleResponse = exports.findSectionRoleBody = exports.findSectionRoleBodyConditionCriterionDateRegExp = exports.findUnitResponse = exports.findUnitResponseUnitListEntriesItemAvailableDateToRegExp = exports.findUnitResponseUnitListEntriesItemAvailableDateFromRegExp = exports.findUnitResponseUnitListEntriesItemValidityDateToRegExp = exports.findUnitResponseUnitListEntriesItemValidityDateFromRegExp = exports.findUnitBody = exports.findUnitBodyConditionCriterionDateRegExp = exports.findUserResponse = exports.findUserResponseUserListEntriesItemValidityDateFromRegExp = exports.findUserResponseUserListEntriesItemAvailableDateFromRegExp = exports.findUserResponseUserListEntriesItemAvailableDateToRegExp = void 0;
exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMax = exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMin = exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMinNumberMax = exports.createRuleBodyRuleDefinitionStepsEntriesItemCoordRegExp = exports.createRuleBodyRuleDefinitionStepsEntriesItemCodeRegExp = exports.createRuleBodyRuleDefinitionStepsEntriesItemCodeMax = exports.createRuleBodyRuleDefinitionStepsEntriesItemStepNameMax = exports.createRuleBodyRuleDefinitionCustomMenuEntriesItemNameMax = exports.createRuleBodyRuleDefinitionAvailableDateToRegExp = exports.createRuleBodyRuleDefinitionAvailableDateFromRegExp = exports.createRuleBodyRuleDefinitionRuleNameMax = exports.createRuleBodyRuleDefinitionRuleCodeRegExp = exports.createRuleBodyRuleDefinitionRuleCodeMax = exports.notAdminGetVersionResponse = exports.notAdminGetVersionBody = exports.listPublicFolderInfoResponse = exports.listPublicFolderInfoBody = exports.listPublicFolderInfoBodyCriterionDateRegExp = exports.findFormDefinitionResponse = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDateFormatRegExp = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemLookupValueRegExp = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDataTypeRegExp = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemFieldTypeRegExp = exports.findFormDefinitionBody = exports.findFormDefinitionBodyCriterionDateRegExp = exports.listFormResponse = exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateFromRegExp = exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateToRegExp = exports.listFormResponseFormProjectEntriesItemFormEntriesItemTypeRegExp = exports.listFormBody = exports.listFormBodyCriterionDateRegExp = exports.listComponentAutoNumberResponse = exports.listComponentAutoNumberBody = exports.listComponentMasterWindowResponse = exports.listComponentMasterWindowBody = exports.findProjectResponse = exports.findProjectBody = exports.findUniversalRoleAppointmentResponse = exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDatetoRegExp = exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDateFromRegExp = exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemCriterionDateRegExp = exports.findUniversalRoleAppointmentBody = exports.findUniversalRoleAppointmentBodyConditionCriterionDateRegExp = exports.findUniversalRoleResponse = exports.findUniversalRoleBody = exports.findPrivateRoleAppointmentResponse = exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemCriterionDateRegExp = exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDatetoRegExp = exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDateFromRegExp = exports.findPrivateRoleAppointmentBody = void 0;
exports.findRuleResponse = exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMax = exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMin = exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMinNumberMax = exports.findRuleResponseRuleDefinitionStepsEntriesItemCoordRegExp = exports.findRuleResponseRuleDefinitionStepsEntriesItemCodeRegExp = exports.findRuleResponseRuleDefinitionStepsEntriesItemCodeMax = exports.findRuleResponseRuleDefinitionStepsEntriesItemStepNameMax = exports.findRuleResponseRuleDefinitionCustomMenuEntriesItemNameMax = exports.findRuleResponseRuleDefinitionAvailableDateToRegExp = exports.findRuleResponseRuleDefinitionAvailableDateFromRegExp = exports.findRuleResponseRuleDefinitionRuleNameMax = exports.findRuleResponseRuleDefinitionRuleCodeRegExp = exports.findRuleResponseRuleDefinitionRuleCodeMax = exports.findRuleBody = exports.findRuleBodyCriterionDateRegExp = exports.findRuleBodyRuleCodeRegExp = exports.findRuleBodyRuleCodeMax = exports.createRuleResponse = exports.createRuleBody = void 0;
/**
 * Generated by orval v7.21.0 🍺
 * Do not edit manually.
 * AgileWorks WebAPI (R3.2.0)
 * OpenAPI spec version: 1.0.0
 */
const zod_1 = require("zod");
exports.getDocBody = zod_1.z.object({
    "raw_data": zod_1.z.number().describe('書類ID')
});
exports.getDocResponseDocCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getDocResponse = zod_1.z.object({
    "doc": zod_1.z.object({
        "owner": zod_1.z.object({
            "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
            "code": zod_1.z.string().optional().describe('書類オーナーコード')
        }).optional().describe('書類オーナー'),
        "id": zod_1.z.number().optional().describe('書類ID'),
        "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
        "criterionDate": zod_1.z.string().regex(exports.getDocResponseDocCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "formCode": zod_1.z.string().optional().describe('フォームコード'),
        "listNames": zod_1.z.object({
            "listNames1": zod_1.z.string().optional(),
            "listNames2": zod_1.z.string().optional(),
            "listNames3": zod_1.z.string().optional(),
            "listNames4": zod_1.z.string().optional(),
            "listNames5": zod_1.z.string().optional(),
            "listNames6": zod_1.z.string().optional(),
            "listNames7": zod_1.z.string().optional(),
            "listNames8": zod_1.z.string().optional(),
            "listNames9": zod_1.z.string().optional(),
            "listNames10": zod_1.z.string().optional(),
            "listNames11": zod_1.z.string().optional(),
            "listNames12": zod_1.z.string().optional(),
            "listNames13": zod_1.z.string().optional(),
            "listNames14": zod_1.z.string().optional(),
            "listNames15": zod_1.z.string().optional(),
            "listNames16": zod_1.z.string().optional(),
            "listNames17": zod_1.z.string().optional(),
            "listNames18": zod_1.z.string().optional(),
            "listNames19": zod_1.z.string().optional(),
            "listNames20": zod_1.z.string().optional()
        }).describe('件名項目').optional(),
        "adminNo": zod_1.z.string().optional().describe('書類管理番号')
    }).optional().describe('書類情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.prepareDocRequestBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.prepareDocRequestBody = zod_1.z.object({
    "applyUnitCode": zod_1.z.string().describe('申請組織コード'),
    "applyUserCode": zod_1.z.string().describe('申請ユーザーコード'),
    "stepCode": zod_1.z.string().optional().describe('ステップコード<br>\n\*nullを指定\n'),
    "referenceDocId": zod_1.z.number().optional().describe('参照元書類ID'),
    "formCode": zod_1.z.string().describe('フォームコード'),
    "ruleCode": zod_1.z.string().describe('回付ルールコード'),
    "criterionDate": zod_1.z.string().regex(exports.prepareDocRequestBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.prepareDocRequestResponseDocCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.prepareDocRequestResponse = zod_1.z.object({
    "doc": zod_1.z.object({
        "owner": zod_1.z.object({
            "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
            "code": zod_1.z.string().optional().describe('書類オーナーコード')
        }).optional().describe('書類オーナー'),
        "id": zod_1.z.number().optional().describe('書類ID'),
        "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
        "criterionDate": zod_1.z.string().regex(exports.prepareDocRequestResponseDocCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "formCode": zod_1.z.string().optional().describe('フォームコード'),
        "listNames": zod_1.z.object({
            "listNames1": zod_1.z.string().optional(),
            "listNames2": zod_1.z.string().optional(),
            "listNames3": zod_1.z.string().optional(),
            "listNames4": zod_1.z.string().optional(),
            "listNames5": zod_1.z.string().optional(),
            "listNames6": zod_1.z.string().optional(),
            "listNames7": zod_1.z.string().optional(),
            "listNames8": zod_1.z.string().optional(),
            "listNames9": zod_1.z.string().optional(),
            "listNames10": zod_1.z.string().optional(),
            "listNames11": zod_1.z.string().optional(),
            "listNames12": zod_1.z.string().optional(),
            "listNames13": zod_1.z.string().optional(),
            "listNames14": zod_1.z.string().optional(),
            "listNames15": zod_1.z.string().optional(),
            "listNames16": zod_1.z.string().optional(),
            "listNames17": zod_1.z.string().optional(),
            "listNames18": zod_1.z.string().optional(),
            "listNames19": zod_1.z.string().optional(),
            "listNames20": zod_1.z.string().optional()
        }).describe('件名項目').optional(),
        "adminNo": zod_1.z.string().optional().describe('書類管理番号')
    }).optional().describe('書類情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.addDocBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDocBody = zod_1.z.object({
    "publicFormId": zod_1.z.number().describe('公開フォームID<br>\n\*「新規書類データ作成API」で取得した値を指定\n'),
    "docData": zod_1.z.object({
        "entryList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "name": zod_1.z.string().nullable().describe('フィールド名<br>\n\*「新規書類データ作成API」で取得した値を指定\n'),
                "fieldType": zod_1.z.string().nullable().describe('フィールドタイプ<br>\n\*「新規書類データ作成API」で取得した値を指定\n'),
                "fieldId": zod_1.z.string().describe('フィールドID<br>\n\*「新規書類データ作成API」で取得した値を指定\n'),
                "dataType": zod_1.z.string().nullable().describe('データタイプ<br>\n\*「新規書類データ作成API」で取得した値を指定\n'),
                "dataValue": zod_1.z.object({
                    "value": zod_1.z.unknown().optional().describe('フィールドの値<br>\n\*任意の値を指定<br>\n\*通常フィールドの場合のみ\n'),
                    "entryList": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "name": zod_1.z.string().nullish().describe('フィールド名'),
                            "fieldType": zod_1.z.string().nullish().describe('フィールドタイプ'),
                            "fieldId": zod_1.z.string().nullish().describe('フィールドID'),
                            "dataType": zod_1.z.string().nullish().describe('データタイプ'),
                            "dataValue": zod_1.z.object({
                                "value": zod_1.z.unknown().nullish(),
                                "entryList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "name": zod_1.z.string().nullish(),
                                        "fieldType": zod_1.z.string().nullish(),
                                        "fieldId": zod_1.z.string().nullish(),
                                        "dataType": zod_1.z.string().nullish(),
                                        "dataValue": zod_1.z.object({
                                            "value": zod_1.z.unknown().nullish(),
                                            "entryList": zod_1.z.object({
                                                "entries": zod_1.z.array(zod_1.z.object({})).optional()
                                            }).optional()
                                        }).optional()
                                    })).optional()
                                }).optional()
                            }).optional()
                        })).optional()
                    }).optional().describe('表明細フィールドのリスト<br>\n\*任意の値を指定<br>\n\*表明細フィールドの場合のみ\n')
                }).optional().describe('フィールドの値<br>\n\*任意の値を指定\n')
            })).optional()
        }).describe('各フィールドのデータ')
    }).describe('書類データ<br>\n\*「新規書類データ作成API」で取得した値に対し、任意の値を指定\n'),
    "id": zod_1.z.number().nullish().describe('書類ID<br>\n\*nullを指定\n'),
    "formCode": zod_1.z.string().describe('フォームコード<br>\n\*「新規書類データ作成API」で取得した値を指定\n'),
    "criterionDate": zod_1.z.string().regex(exports.addDocBodyCriterionDateRegExp).nullish().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "adminNo": zod_1.z.string().nullish().describe('書類管理番号<br>\n\*nullを指定\n'),
    "listNames": zod_1.z.object({}).optional().describe('件名項目<br>\n\*「新規書類データ作成API」で取得した値を指定\n'),
    "version": zod_1.z.string().nullish().describe('書類バージョン<br>\n\*nullを指定\n'),
    "owner": zod_1.z.object({}).optional().describe('書類オーナー<br>\n\*nullを指定\n')
});
exports.addDocResponseDocCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDocResponse = zod_1.z.object({
    "doc": zod_1.z.object({
        "owner": zod_1.z.object({
            "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
            "code": zod_1.z.string().optional().describe('書類オーナーコード')
        }).optional().describe('書類オーナー'),
        "id": zod_1.z.number().optional().describe('書類ID'),
        "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
        "criterionDate": zod_1.z.string().regex(exports.addDocResponseDocCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "formCode": zod_1.z.string().optional().describe('フォームコード'),
        "listNames": zod_1.z.object({
            "listNames1": zod_1.z.string().optional(),
            "listNames2": zod_1.z.string().optional(),
            "listNames3": zod_1.z.string().optional(),
            "listNames4": zod_1.z.string().optional(),
            "listNames5": zod_1.z.string().optional(),
            "listNames6": zod_1.z.string().optional(),
            "listNames7": zod_1.z.string().optional(),
            "listNames8": zod_1.z.string().optional(),
            "listNames9": zod_1.z.string().optional(),
            "listNames10": zod_1.z.string().optional(),
            "listNames11": zod_1.z.string().optional(),
            "listNames12": zod_1.z.string().optional(),
            "listNames13": zod_1.z.string().optional(),
            "listNames14": zod_1.z.string().optional(),
            "listNames15": zod_1.z.string().optional(),
            "listNames16": zod_1.z.string().optional(),
            "listNames17": zod_1.z.string().optional(),
            "listNames18": zod_1.z.string().optional(),
            "listNames19": zod_1.z.string().optional(),
            "listNames20": zod_1.z.string().optional()
        }).describe('件名項目').optional(),
        "adminNo": zod_1.z.string().optional().describe('書類管理番号')
    }).optional().describe('書類情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.updateDocBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDocBody = zod_1.z.object({
    "publicFormId": zod_1.z.number().describe('公開フォームID<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
    "docData": zod_1.z.object({
        "entryList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "name": zod_1.z.string().nullable().describe('フィールド名<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
                "fieldType": zod_1.z.string().nullable().describe('フィールドタイプ<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
                "fieldId": zod_1.z.string().describe('フィールドID<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
                "dataType": zod_1.z.string().nullable().describe('データタイプ<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
                "dataValue": zod_1.z.object({
                    "value": zod_1.z.unknown().optional().describe('フィールドの値<br>\n\*任意の値を指定<br>\n\*通常フィールドの場合のみ\n'),
                    "entryList": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "name": zod_1.z.string().nullish().describe('フィールド名'),
                            "fieldType": zod_1.z.string().nullish().describe('フィールドタイプ'),
                            "fieldId": zod_1.z.string().nullish().describe('フィールドID'),
                            "dataType": zod_1.z.string().nullish().describe('データタイプ'),
                            "dataValue": zod_1.z.object({
                                "value": zod_1.z.unknown().nullish(),
                                "entryList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "name": zod_1.z.string().nullish(),
                                        "fieldType": zod_1.z.string().nullish(),
                                        "fieldId": zod_1.z.string().nullish(),
                                        "dataType": zod_1.z.string().nullish(),
                                        "dataValue": zod_1.z.object({
                                            "value": zod_1.z.unknown().nullish(),
                                            "entryList": zod_1.z.object({
                                                "entries": zod_1.z.array(zod_1.z.object({})).optional()
                                            }).optional()
                                        }).optional()
                                    })).optional()
                                }).optional()
                            }).optional()
                        })).optional()
                    }).optional().describe('表明細フィールドのリスト<br>\n\*任意の値を指定<br>\n\*表明細フィールドの場合のみ\n')
                }).optional().describe('フィールドの値<br>\n\*任意の値を指定\n')
            })).optional()
        }).describe('各フィールドのデータ')
    }).describe('書類データ<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値に対し、任意の値を指定\n'),
    "id": zod_1.z.number().describe('書類ID<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
    "formCode": zod_1.z.string().describe('フォームコード<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
    "criterionDate": zod_1.z.string().regex(exports.updateDocBodyCriterionDateRegExp).describe('基準日<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n'),
    "adminNo": zod_1.z.string().describe('書類管理番号<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
    "listNames": zod_1.z.object({}).describe('件名項目<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
    "version": zod_1.z.string().describe('書類バージョン<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n'),
    "owner": zod_1.z.object({}).describe('書類オーナー<br>\n\*「書類データ取得API」または「新規書類データ保存API」で取得した値を指定\n')
});
exports.updateDocResponseDocCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDocResponse = zod_1.z.object({
    "doc": zod_1.z.object({
        "owner": zod_1.z.object({
            "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
            "code": zod_1.z.string().optional().describe('書類オーナーコード')
        }).optional().describe('書類オーナー'),
        "id": zod_1.z.number().optional().describe('書類ID'),
        "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
        "criterionDate": zod_1.z.string().regex(exports.updateDocResponseDocCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "formCode": zod_1.z.string().optional().describe('フォームコード'),
        "listNames": zod_1.z.object({
            "listNames1": zod_1.z.string().optional(),
            "listNames2": zod_1.z.string().optional(),
            "listNames3": zod_1.z.string().optional(),
            "listNames4": zod_1.z.string().optional(),
            "listNames5": zod_1.z.string().optional(),
            "listNames6": zod_1.z.string().optional(),
            "listNames7": zod_1.z.string().optional(),
            "listNames8": zod_1.z.string().optional(),
            "listNames9": zod_1.z.string().optional(),
            "listNames10": zod_1.z.string().optional(),
            "listNames11": zod_1.z.string().optional(),
            "listNames12": zod_1.z.string().optional(),
            "listNames13": zod_1.z.string().optional(),
            "listNames14": zod_1.z.string().optional(),
            "listNames15": zod_1.z.string().optional(),
            "listNames16": zod_1.z.string().optional(),
            "listNames17": zod_1.z.string().optional(),
            "listNames18": zod_1.z.string().optional(),
            "listNames19": zod_1.z.string().optional(),
            "listNames20": zod_1.z.string().optional()
        }).describe('件名項目').optional(),
        "adminNo": zod_1.z.string().optional().describe('書類管理番号')
    }).optional().describe('書類情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.selectDocBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.selectDocBodyConditionDateConditionFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.selectDocBodyConditionDateConditionToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.selectDocBody = zod_1.z.object({
    "docView": zod_1.z.object({
        "formCode": zod_1.z.string().describe('フォームコード'),
        "groupFormFieldId": zod_1.z.string().optional().describe('表明細フィールドID'),
        "columnList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "type": zod_1.z.enum(['FIELD', 'GROUP_FIELD', 'DOC_ID', 'DOC_ADMIN_NO', 'DOC_LISTNAME1', 'DOC_LISTNAME2', 'DOC_LISTNAME3', 'DOC_LISTNAME4', 'DOC_LISTNAME5', 'DOC_LISTNAME6', 'DOC_LISTNAME7', 'DOC_LISTNAME8', 'DOC_LISTNAME9', 'DOC_LISTNAME10', 'DOC_LISTNAME11', 'DOC_LISTNAME12', 'DOC_LISTNAME13', 'DOC_LISTNAME14', 'DOC_LISTNAME15', 'DOC_LISTNAME16', 'DOC_LISTNAME17', 'DOC_LISTNAME18', 'DOC_LISTNAME19', 'DOC_LISTNAME20', 'DOC_FULL_VERSION', 'DOC_EXIST_ATTACHMENT', 'DOC_EXIST_COMMENT', 'DOC_REFERENCE_STATUS', 'FORM_CODE', 'FORM_NAME', 'FORM_STATUS', 'RULE_CODE', 'RULE_NAME', 'FLOW_STATUS', 'FLOW_CURRENTSTEP_NAME', 'FLOW_CRITERION_DATE', 'FLOW_FIX_DATE', 'CREATOR_UNIT_CODE', 'CREATOR_UNIT_NAME', 'CREATOR_ROLE_CODE', 'CREATOR_ROLE_NAME', 'CREATOR_USER_CODE', 'CREATOR_USER_NAME', 'CREATE_DATE', 'APPLY_UNIT_CODE', 'APPLY_UNIT_NAME', 'APPLY_ROLE_CODE', 'APPLY_ROLE_NAME', 'APPLY_USER_CODE', 'APPLY_USER_NAME', 'APPLY_DATE', 'LASTOPERATOR_UNIT_CODE', 'LASTOPERATOR_UNIT_NAME', 'LASTOPERATOR_ROLE_CODE', 'LASTOPERATOR_ROLE_NAME', 'LASTOPERATOR_USER_CODE', 'LASTOPERATOR_USER_NAME', 'LASTOPERATOR_DATE']).describe('列項目タイプ<br>\n指定可能な値<br>\n|パラメータ|値|\n|----|----|\n|FIELD|書類のフィールド|\n|GROUP_FIELD|書類の表明細フィールド|\n|DOC_ID|書類ID|\n|DOC_ADMIN_NO|書類管理番号|\n|DOC_LISTNAME1～20|件名項目１～２０|\n|DOC_FULL_VERSION|書類バージョン|\n|DOC_EXIST_ATTACHMENT|添付有無|\n|DOC_EXIST_COMMENT|コメント有無|\n|DOC_REFERENCE_STATUS|関連書類有無|\n|FORM_CODE|フォームコード|\n|FORM_NAME|フォーム名|\n|FORM_STATUS|フォームバージョン|\n|RULE_CODE|回付ルールコード|\n|RULE_NAME|回付ルール名|\n|FLOW_STATUS|書類状態|\n|FLOW_CURRENTSTEP_NAME|現在のステップ|\n|FLOW_CRITERION_DATE|基準日|\n|FLOW_FIX_DATE|承認完了日時|\n|CREATOR_UNIT_CODE|作成者組織コード|\n|CREATOR_UNIT_NAME|作成者組織名|\n|CREATOR_ROLE_CODE|作成者ロールコード|\n|CREATOR_ROLE_NAME|作成者ロール名|\n|CREATOR_USER_CODE|作成者コード|\n|CREATOR_USER_NAME|作成者名|\n|CREATE_DATE|作成日時|\n|APPLY_UNIT_CODE|申請者組織コード|\n|APPLY_UNIT_NAME|申請者組織名|\n|APPLY_ROLE_CODE|申請者ロールコード|\n|APPLY_ROLE_NAME|申請者ロール名|\n|APPLY_USER_CODE|申請者コード|\n|APPLY_USER_NAME|申請者名|\n|APPLY_DATE|申請日時|\n|LASTOPERATOR_UNIT_CODE|最終処理者組織コード|\n|LASTOPERATOR_UNIT_NAME|最終処理者組織名|\n|LASTOPERATOR_ROLE_CODE|最終処理者ロールコード|\n|LASTOPERATOR_ROLE_NAME|最終処理者ロール名|\n|LASTOPERATOR_USER_CODE|最終処理者コード|\n|LASTOPERATOR_USER_NAME|最終処理者名|\n|LASTOPERATOR_DATE|最終処理日時|\n').optional(),
                "fieldId": zod_1.z.string().optional().describe('フィールドID')
            })).optional()
        }).optional().describe('列項目リスト')
    }).optional().describe('一覧のビュー定義'),
    "condition": zod_1.z.object({
        "criterionDate": zod_1.z.string().regex(exports.selectDocBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
        "docId": zod_1.z.number().optional().describe('書類ID'),
        "adminNo": zod_1.z.string().optional().describe('書類管理番号'),
        "formCode": zod_1.z.string().optional().describe('フォームコード<br>\n\*フィールド値条件リストで書類のフィールドを指定する場合は必須\n'),
        "ruleCode": zod_1.z.string().optional().describe('回付ルールコード'),
        "ruleStepCode": zod_1.z.string().optional().describe('回付ルールステップコード'),
        "workflowState": zod_1.z.enum(['PREPARE', 'ACTIVE', 'APPROVED', 'REJECTED', 'CANCELED', 'DELETED']).describe('書類状態<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|PREPARE|下書き|\n|ACTIVE|回付中|\n|APPROVED|承認完了|\n|REJECTED|却下|\n|CANCELED|取り下げ|\n|DELETED|削除|\n').optional(),
        "listNameKeyword": zod_1.z.string().optional().describe('件名キーワード'),
        "dateCondition": zod_1.z.object({
            "type": zod_1.z.enum(['APPLY', 'CRITERION', 'APPROVED', 'REGISTRATION', 'MODIFY']).describe('日付タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPLY|申請日|\n|CRITERION|基準日|\n|APPROVED|承認完了日|\n|REGISTRATION|作成日|\n|MODIFY|最終適用終了日|\n').optional(),
            "rangeType": zod_1.z.enum(['ABSOLUTE_DATE', 'RELATIVE_DAY', 'RELATIVE_MONTH']).describe('日付範囲タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ABSOLUTE_DATE|日付指定|\n|RELATIVE_DAY|日付指定(日)|\n|RELATIVE_MONTH|日付指定(月)|\n').optional(),
            "from": zod_1.z.string().regex(exports.selectDocBodyConditionDateConditionFromRegExp).optional().describe('日付指定の開始日'),
            "to": zod_1.z.string().regex(exports.selectDocBodyConditionDateConditionToRegExp).optional().describe('日付指定の終了日'),
            "dayFrom": zod_1.z.number().optional().describe('日付指定(日)の開始日数<br>\n\*0～9999\n現在日から何日遡るかを指定する日数（過去の日付）。\n例: 7 = 7日前から、30 = 30日前から\n現在日が2025-12-03の場合、dayFrom=7は2025-11-26を意味します。\n'),
            "dayTo": zod_1.z.number().optional().describe('日付指定(日)の終了日数<br>\n\*0～9999\n現在日から何日遡るかを指定する日数（過去の日付）。\n例: 0 = 今日まで、1 = 昨日まで\n現在日が2025-12-03の場合、dayTo=0は2025-12-03を意味します。\ndayFromより小さい値を指定してください（dayFrom=7, dayTo=0で7日前から今日までの範囲）。\n'),
            "monthFrom": zod_1.z.number().optional().describe('日付指定(月)の開始月数<br>\n\*0～999\n現在月から何ヶ月遡るかを指定する月数（過去の月）。\n例: 3 = 3ヶ月前から、12 = 12ヶ月前から\n現在月が2025-12の場合、monthFrom=3は2025-09を意味します。\n'),
            "monthTo": zod_1.z.number().optional().describe('日付指定(月)の終了月数<br>\n\*0～999\n現在月から何ヶ月遡るかを指定する月数（過去の月）。\n例: 0 = 今月まで、1 = 先月まで\n現在月が2025-12の場合、monthTo=0は2025-12を意味します。\nmonthFromより小さい値を指定してください（monthFrom=3, monthTo=0で3ヶ月前から今月までの範囲）。\n'),
            "monthDayFrom": zod_1.z.number().optional().describe('日付指定(月)の開始日<br>\n\*1～31<br>\n\*存在しない日の場合は月末に丸められます\nmonthFromで指定した月の範囲内で、特定の日付を指定します（日数ではなく日付）。\n例: monthDayFrom=15で各月の15日から、monthDayFrom=1で各月の1日から\nmonthFrom=3, monthDayFrom=15の場合、3ヶ月前の15日を意味します。\n'),
            "monthDayTo": zod_1.z.unknown().optional().describe('日付指定(月)の終了日<br>\n\*1～31<br>\n\*存在しない日の場合は月末に丸められます\nmonthToで指定した月の範囲内で、特定の日付を指定します（日数ではなく日付）。\n例: monthDayTo=20で各月の20日まで、monthDayTo=31で各月の末日まで\nmonthTo=0 monthDayTo=20の場合、今月の20日を意味します。\n')
        }).optional().describe('日付条件'),
        "relativeConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "type": zod_1.z.enum(['OWNER', 'CREATE', 'APPLY', 'APPROVE', 'PROXY_APPROVE', 'PRINCIPAL_APPROVE', 'REJECT', 'CANCEL']).describe('関連タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|OWNER|書類オーナ|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|PROXY_APPROVE|代理承認|\n|PRINCIPAL_APPROVE|被代理承認|\n|REJECT|却下|\n|CANCEL|取下げ|\n').optional(),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "userType": zod_1.z.enum(['UNIT_APPOINTMENT', 'UNIT', 'USER', 'LOGIN_USER']).describe('ユーザータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT_APPOINTMENT|組織+ユーザ|\n|UNIT|組織|\n|USER|ユーザ|\n|LOGIN_USER|ログインユーザ(WebAPI実行ユーザ)|\n').optional()
            })).optional()
        }).optional().describe('ユーザー関連条件リスト'),
        "logicalOperatorType": zod_1.z.string().optional().describe('フィールド値条件全体の AND \/ OR<br>\n\*AND または OR を指定\n'),
        "fieldValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "type": zod_1.z.enum(['FIELD', 'LISTNAME1', 'LISTNAME2', 'LISTNAME3', 'LISTNAME4', 'LISTNAME5', 'LISTNAME6', 'LISTNAME7', 'LISTNAME8', 'LISTNAME9', 'LISTNAME10', 'LISTNAME11', 'LISTNAME12', 'LISTNAME13', 'LISTNAME14', 'LISTNAME15', 'LISTNAME16', 'LISTNAME17', 'LISTNAME18', 'LISTNAME19', 'LISTNAME20']).describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|FIELD|書類のフィールド|\n|LISTNAME1～20|件名項目１～２０|\n').optional(),
                "fieldId": zod_1.z.string().optional().describe('フィールドID'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値'),
                "valueFrom": zod_1.z.string().optional().describe('値(From)'),
                "valueTo": zod_1.z.string().optional().describe('値(To)')
            })).optional()
        }).optional().describe('フィールド値条件リスト'),
        "fulltextSearchCondition": zod_1.z.object({
            "logicalOperatorType": zod_1.z.string().optional().describe('全文検索条件全体の AND \/ OR<br>\n\*AND または OR を指定\n'),
            "docContentQuery": zod_1.z.string().optional().describe('書類内容[全文検索]'),
            "attachmentFilenameQuery": zod_1.z.string().optional().describe('添付ファイルの名称[全文検索]'),
            "attachmentContentQuery": zod_1.z.unknown().optional().describe('添付ファイルの内容[全文検索]')
        }).optional().describe('全文検索条件')
    }).optional().describe('書類の検索条件')
});
exports.selectDocResponse = zod_1.z.object({
    "resultSet": zod_1.z.object({
        "recordList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "entryList": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "name": zod_1.z.string().optional().describe('名称'),
                        "value": zod_1.z.object({}).optional().describe('値')
                    })).optional()
                }).optional().describe('エントリのリスト'),
                "index": zod_1.z.number().optional().describe('レコードインデックス')
            })).optional().describe('レコード')
        }).optional().describe('レコードのリスト'),
        "fieldList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "name": zod_1.z.string().optional().describe('フィールド名'),
                "type": zod_1.z.enum(['BOOLEAN', 'DATE', 'DATETIME', 'DECIMAL', 'INT', 'LONG', 'STRING', 'TEXT']).describe('データ型<br>\n|パラメータ|説明|\n|----|----|\n|BOOLEAN|真偽値|\n|DATE|日付|\n|DATETIME|日時|\n|DECIMAL|整数|\n|INT|整数値(int)|\n|LONG|整数値(long)|\n|STRING|文字列|\n|TEXT|テキスト|\n').optional()
            })).optional().describe('フィールド')
        }).optional().describe('フィールドのリスト')
    }).optional().describe('結果のセット'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listDocCommentBody = zod_1.z.object({
    "raw_data": zod_1.z.number().describe('書類ID')
});
exports.listDocCommentResponseDocCommentListEntriesItemRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.listDocCommentResponseDocCommentListEntriesItemEffectorTypeRegExpOne = new RegExp('rule.EnumRuleEffectorType');
exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoRegistrationDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoModifyDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listDocCommentResponse = zod_1.z.object({
    "docCommentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "id": zod_1.z.number().optional().describe('コメントID'),
            "comment": zod_1.z.string().optional().describe('コメント'),
            "ruleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.listDocCommentResponseDocCommentListEntriesItemRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            }).optional().describe('コメントが付加されているステップ'),
            "effectorType": zod_1.z.string().regex(exports.listDocCommentResponseDocCommentListEntriesItemEffectorTypeRegExpOne).describe('作用種別<br>\n|パラメータ|説明|\n|----|----|\n|CREATE|作成|\n|APPLY|申請|\n|APPLY_PROXY|代理申請|\n|APPROVE|承認|\n|APPROVE_WITH_COMMENTS|コメント付き承認|\n|REMAND|差戻し|\n|REJECT|却下|\n|CANCEL|削除|\n|RETRACT|引戻し|\n|CONFIRM|確認|\n|DELETE|削除|\n|EDIT|編集|\n|SAVE|保存|\n|PDF|PDF|\n|COPY|コピーして新規|\n|REFERENCE|関連書類|\n|CUSTOM|カスタムメニュー|\n|DEPRIVE|引上げ|\n|SHARE|共有|\n').optional(),
            "operationInfo": zod_1.z.object({
                "registrationDate": zod_1.z.string().regex(exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoRegistrationDateRegExp).optional().describe('登録日時'),
                "modifyDate": zod_1.z.string().regex(exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoModifyDateRegExp).optional().describe('更新日時'),
                "modifier": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('更新ユーザー'),
                "registrant": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('登録ユーザー'),
                "modifierOfShared": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('更新ユーザー'),
                "registrantOfShared": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('登録ユーザー')
            }).optional().describe('操作情報')
        })).optional().describe('書類コメント情報')
    }).optional().describe('書類コメント一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.addDocCommentBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID'),
    "comment": zod_1.z.string().describe('コメント内容'),
    "operationInfo": zod_1.z.object({
        "registrant": zod_1.z.object({
            "userCode": zod_1.z.string().describe('ユーザーコード<br>\n\*登録ユーザー(registrant)の userCode は必須\n')
        }).describe('登録ユーザー<br>\n\*登録ユーザー(registrant)の userCode を null の値以外入力時に「登録ユーザー」へ反映される\n')
    }).describe('操作情報')
});
exports.addDocCommentResponseDocCommentRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.addDocCommentResponseDocCommentEffectorTypeRegExpOne = new RegExp('rule.EnumRuleEffectorType');
exports.addDocCommentResponseDocCommentOperationInfoRegistrationDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDocCommentResponseDocCommentOperationInfoModifyDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDocCommentResponse = zod_1.z.object({
    "docComment": zod_1.z.object({
        "id": zod_1.z.number().optional().describe('コメントID'),
        "comment": zod_1.z.string().optional().describe('コメント'),
        "ruleStepHeader": zod_1.z.object({
            "name": zod_1.z.string().optional().describe('ステップ名称'),
            "type": zod_1.z.string().regex(exports.addDocCommentResponseDocCommentRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
            "index": zod_1.z.number().optional().describe('インデックス'),
            "code": zod_1.z.string().optional().describe('ステップコード')
        }).optional().describe('コメントが付加されているステップ'),
        "effectorType": zod_1.z.string().regex(exports.addDocCommentResponseDocCommentEffectorTypeRegExpOne).describe('作用種別<br>\n|パラメータ|説明|\n|----|----|\n|CREATE|作成|\n|APPLY|申請|\n|APPLY_PROXY|代理申請|\n|APPROVE|承認|\n|APPROVE_WITH_COMMENTS|コメント付き承認|\n|REMAND|差戻し|\n|REJECT|却下|\n|CANCEL|削除|\n|RETRACT|引戻し|\n|CONFIRM|確認|\n|DELETE|削除|\n|EDIT|編集|\n|SAVE|保存|\n|PDF|PDF|\n|COPY|コピーして新規|\n|REFERENCE|関連書類|\n|CUSTOM|カスタムメニュー|\n|DEPRIVE|引上げ|\n|SHARE|共有|\n').optional(),
        "operationInfo": zod_1.z.object({
            "registrationDate": zod_1.z.string().regex(exports.addDocCommentResponseDocCommentOperationInfoRegistrationDateRegExp).optional().describe('登録日時'),
            "modifyDate": zod_1.z.string().regex(exports.addDocCommentResponseDocCommentOperationInfoModifyDateRegExp).optional().describe('更新日時'),
            "modifier": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('更新ユーザー'),
            "registrant": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('登録ユーザー'),
            "modifierOfShared": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('更新ユーザー'),
            "registrantOfShared": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('登録ユーザー')
        }).optional().describe('操作情報')
    }).optional().describe('書類コメント情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.addDocAttachmentBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID'),
    "type": zod_1.z.enum(['URL']).describe('添付書類タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|URL|URL|\n'),
    "explanation": zod_1.z.string().optional().describe('添付の説明'),
    "name": zod_1.z.string().describe('添付名称<br>\n\*type が URL の場合に必須\n'),
    "url": zod_1.z.string().describe('URL<br>\n\*type が URL の場合に必須\n')
});
exports.addDocAttachmentResponseDocAttachmentTypeRegExp = new RegExp('doc.EnumDocAttachmentType');
exports.addDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.addDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDocAttachmentResponse = zod_1.z.object({
    "docAttachment": zod_1.z.object({
        "name": zod_1.z.string().optional().describe('ファイル名称'),
        "id": zod_1.z.number().optional().describe('書類添付ID'),
        "type": zod_1.z.string().regex(exports.addDocAttachmentResponseDocAttachmentTypeRegExp).optional().describe('書類添付タイプ<br>\n|パラメータ|説明|\n|----|----|\n|FILE|添付ファイル|\n|URL|URL|\n'),
        "size": zod_1.z.number().optional().describe('ファイルサイズ'),
        "path": zod_1.z.string().optional().describe('エンコードされたパス情報'),
        "explanation": zod_1.z.string().optional().describe('添付書類の説明'),
        "ruleStepHeader": zod_1.z.object({
            "name": zod_1.z.string().optional().describe('ステップ名称'),
            "type": zod_1.z.string().regex(exports.addDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
            "index": zod_1.z.number().optional().describe('インデックス'),
            "code": zod_1.z.string().optional().describe('ステップコード')
        }).optional().describe('添付書類が付加されているステップ'),
        "storageFile": zod_1.z.object({
            "name": zod_1.z.string().optional().describe('ファイル名'),
            "key": zod_1.z.string().optional().describe('ファイルキー'),
            "id": zod_1.z.string().optional().describe('ファイルID<br>\n\*ダウンロードAPIで使用可能\n'),
            "size": zod_1.z.number().optional().describe('ファイルサイズ'),
            "contentType": zod_1.z.string().optional().describe('MIMEタイプ')
        }).optional().describe('添付ファイル'),
        "url": zod_1.z.string().optional().describe('URL'),
        "operationInfo": zod_1.z.object({
            "registrationDate": zod_1.z.string().regex(exports.addDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp).optional().describe('登録日時'),
            "modifyDate": zod_1.z.string().regex(exports.addDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp).optional().describe('更新日時'),
            "modifier": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('更新ユーザー'),
            "registrant": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('登録ユーザー'),
            "modifierOfShared": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('更新ユーザー'),
            "registrantOfShared": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('登録ユーザー')
        }).optional().describe('操作情報'),
        "docId": zod_1.z.number().optional().describe('書類ID')
    }).optional().describe('書類添付情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.updateDocAttachmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('添付ID<br>\n\*「書類添付情報一覧取得API」で取得した書類添付IDを指定\n'),
    "docId": zod_1.z.number().describe('書類ID'),
    "type": zod_1.z.enum(['URL']).describe('添付書類タイプ<br>\n\*更新前と同じ値を設定してください<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|URL|URL|\n'),
    "explanation": zod_1.z.string().optional().describe('添付の説明'),
    "name": zod_1.z.string().describe('添付名称<br>\n\*type が URL の場合に必須\n'),
    "url": zod_1.z.string().describe('URL<br>\n\*type が URL の場合に必須\n')
});
exports.updateDocAttachmentResponseDocAttachmentTypeRegExp = new RegExp('doc.EnumDocAttachmentType');
exports.updateDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.updateDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDocAttachmentResponse = zod_1.z.object({
    "docAttachment": zod_1.z.object({
        "name": zod_1.z.string().optional().describe('ファイル名称'),
        "id": zod_1.z.number().optional().describe('書類添付ID'),
        "type": zod_1.z.string().regex(exports.updateDocAttachmentResponseDocAttachmentTypeRegExp).optional().describe('書類添付タイプ<br>\n|パラメータ|説明|\n|----|----|\n|FILE|添付ファイル|\n|URL|URL|\n'),
        "size": zod_1.z.number().optional().describe('ファイルサイズ'),
        "path": zod_1.z.string().optional().describe('エンコードされたパス情報'),
        "explanation": zod_1.z.string().optional().describe('添付書類の説明'),
        "ruleStepHeader": zod_1.z.object({
            "name": zod_1.z.string().optional().describe('ステップ名称'),
            "type": zod_1.z.string().regex(exports.updateDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
            "index": zod_1.z.number().optional().describe('インデックス'),
            "code": zod_1.z.string().optional().describe('ステップコード')
        }).optional().describe('添付書類が付加されているステップ'),
        "storageFile": zod_1.z.object({
            "name": zod_1.z.string().optional().describe('ファイル名'),
            "key": zod_1.z.string().optional().describe('ファイルキー'),
            "id": zod_1.z.string().optional().describe('ファイルID<br>\n\*ダウンロードAPIで使用可能\n'),
            "size": zod_1.z.number().optional().describe('ファイルサイズ'),
            "contentType": zod_1.z.string().optional().describe('MIMEタイプ')
        }).optional().describe('添付ファイル'),
        "url": zod_1.z.string().optional().describe('URL'),
        "operationInfo": zod_1.z.object({
            "registrationDate": zod_1.z.string().regex(exports.updateDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp).optional().describe('登録日時'),
            "modifyDate": zod_1.z.string().regex(exports.updateDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp).optional().describe('更新日時'),
            "modifier": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('更新ユーザー'),
            "registrant": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('登録ユーザー'),
            "modifierOfShared": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('更新ユーザー'),
            "registrantOfShared": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('登録ユーザー')
        }).optional().describe('操作情報'),
        "docId": zod_1.z.number().optional().describe('書類ID')
    }).optional().describe('書類添付情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listDocAttachmentBody = zod_1.z.object({
    "raw_data": zod_1.z.number().describe('書類ID')
});
exports.listDocAttachmentResponseDocAttachmentListEntriesItemTypeRegExp = new RegExp('doc.EnumDocAttachmentType');
exports.listDocAttachmentResponseDocAttachmentListEntriesItemRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.listDocAttachmentResponseDocAttachmentListEntriesItemOperationInfoRegistrationDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listDocAttachmentResponseDocAttachmentListEntriesItemOperationInfoModifyDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listDocAttachmentResponse = zod_1.z.object({
    "docAttachmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().optional().describe('ファイル名称'),
            "id": zod_1.z.number().optional().describe('書類添付ID'),
            "type": zod_1.z.string().regex(exports.listDocAttachmentResponseDocAttachmentListEntriesItemTypeRegExp).optional().describe('書類添付タイプ<br>\n|パラメータ|説明|\n|----|----|\n|FILE|添付ファイル|\n|URL|URL|\n'),
            "size": zod_1.z.number().optional().describe('ファイルサイズ'),
            "path": zod_1.z.string().optional().describe('エンコードされたパス情報'),
            "explanation": zod_1.z.string().optional().describe('添付書類の説明'),
            "ruleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.listDocAttachmentResponseDocAttachmentListEntriesItemRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            }).optional().describe('添付書類が付加されているステップ'),
            "storageFile": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ファイル名'),
                "key": zod_1.z.string().optional().describe('ファイルキー'),
                "id": zod_1.z.string().optional().describe('ファイルID<br>\n\*ダウンロードAPIで使用可能\n'),
                "size": zod_1.z.number().optional().describe('ファイルサイズ'),
                "contentType": zod_1.z.string().optional().describe('MIMEタイプ')
            }).optional().describe('添付ファイル'),
            "url": zod_1.z.string().optional().describe('URL'),
            "operationInfo": zod_1.z.object({
                "registrationDate": zod_1.z.string().regex(exports.listDocAttachmentResponseDocAttachmentListEntriesItemOperationInfoRegistrationDateRegExp).optional().describe('登録日時'),
                "modifyDate": zod_1.z.string().regex(exports.listDocAttachmentResponseDocAttachmentListEntriesItemOperationInfoModifyDateRegExp).optional().describe('更新日時'),
                "modifier": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('更新ユーザー'),
                "registrant": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('登録ユーザー'),
                "modifierOfShared": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('更新ユーザー'),
                "registrantOfShared": zod_1.z.object({
                    "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitName": zod_1.z.string().optional().describe('組織名称'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleName": zod_1.z.string().optional().describe('ロール名称'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード')
                }).optional().describe('登録ユーザー')
            }).optional().describe('操作情報'),
            "docId": zod_1.z.number().optional().describe('書類ID')
        })).optional().describe('書類添付情報')
    }).optional().describe('書類添付情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.getDocReferenceBody = zod_1.z.object({
    "raw_data": zod_1.z.number().describe('書類ID')
});
exports.getDocReferenceResponseDocHeaderCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getDocReferenceResponse = zod_1.z.object({
    "docHeader": zod_1.z.object({
        "owner": zod_1.z.object({
            "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
            "code": zod_1.z.string().optional().describe('書類オーナーコード')
        }).optional().describe('書類オーナー'),
        "id": zod_1.z.number().optional().describe('書類ID'),
        "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
        "criterionDate": zod_1.z.string().regex(exports.getDocReferenceResponseDocHeaderCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "formCode": zod_1.z.string().optional().describe('フォームコード'),
        "listNames": zod_1.z.object({
            "listNames1": zod_1.z.string().optional(),
            "listNames2": zod_1.z.string().optional(),
            "listNames3": zod_1.z.string().optional(),
            "listNames4": zod_1.z.string().optional(),
            "listNames5": zod_1.z.string().optional(),
            "listNames6": zod_1.z.string().optional(),
            "listNames7": zod_1.z.string().optional(),
            "listNames8": zod_1.z.string().optional(),
            "listNames9": zod_1.z.string().optional(),
            "listNames10": zod_1.z.string().optional(),
            "listNames11": zod_1.z.string().optional(),
            "listNames12": zod_1.z.string().optional(),
            "listNames13": zod_1.z.string().optional(),
            "listNames14": zod_1.z.string().optional(),
            "listNames15": zod_1.z.string().optional(),
            "listNames16": zod_1.z.string().optional(),
            "listNames17": zod_1.z.string().optional(),
            "listNames18": zod_1.z.string().optional(),
            "listNames19": zod_1.z.string().optional(),
            "listNames20": zod_1.z.string().optional()
        }).describe('件名項目').optional(),
        "adminNo": zod_1.z.string().optional().describe('書類管理番号')
    }).optional().describe('書類情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listDocReferencerBody = zod_1.z.object({
    "raw_data": zod_1.z.number().describe('書類ID')
});
exports.listDocReferencerResponseDocHeaderListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listDocReferencerResponse = zod_1.z.object({
    "docHeaderList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "owner": zod_1.z.object({
                "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
                "code": zod_1.z.string().optional().describe('書類オーナーコード')
            }).optional().describe('書類オーナー'),
            "id": zod_1.z.number().optional().describe('書類ID'),
            "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
            "criterionDate": zod_1.z.string().regex(exports.listDocReferencerResponseDocHeaderListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "formCode": zod_1.z.string().optional().describe('フォームコード'),
            "listNames": zod_1.z.object({
                "listNames1": zod_1.z.string().optional(),
                "listNames2": zod_1.z.string().optional(),
                "listNames3": zod_1.z.string().optional(),
                "listNames4": zod_1.z.string().optional(),
                "listNames5": zod_1.z.string().optional(),
                "listNames6": zod_1.z.string().optional(),
                "listNames7": zod_1.z.string().optional(),
                "listNames8": zod_1.z.string().optional(),
                "listNames9": zod_1.z.string().optional(),
                "listNames10": zod_1.z.string().optional(),
                "listNames11": zod_1.z.string().optional(),
                "listNames12": zod_1.z.string().optional(),
                "listNames13": zod_1.z.string().optional(),
                "listNames14": zod_1.z.string().optional(),
                "listNames15": zod_1.z.string().optional(),
                "listNames16": zod_1.z.string().optional(),
                "listNames17": zod_1.z.string().optional(),
                "listNames18": zod_1.z.string().optional(),
                "listNames19": zod_1.z.string().optional(),
                "listNames20": zod_1.z.string().optional()
            }).describe('件名項目').optional(),
            "adminNo": zod_1.z.string().optional().describe('書類管理番号')
        })).optional().describe('書類情報')
    }).optional().describe('書類情報のリスト'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.addDocReferenceBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID(参照先関連書類ID)'),
    "refDocId": zod_1.z.number().describe('関連書類ID(参照元関連書類ID)')
});
exports.addDocReferenceResponse = zod_1.z.object({
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.openDocBody = zod_1.z.object({
    "id": zod_1.z.number().optional().describe('書類ID'),
    "adminNo": zod_1.z.string().optional().describe('書類管理番号')
}).describe('いずれかを必ず指定する。<br>\n両方指定された場合、書類IDを優先する。\n');
exports.countWorkflowMessageBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "workflowMessageType": zod_1.z.enum(['APPLY_REQUEST', 'APPROVE_REQUEST', 'CONFIRM_REQUEST', 'PREPARE', 'REMANDED', 'REMIND_EXIST', 'REQUEST_POSSIBLE']).describe('回付情報タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPLY_REQUEST|申請依頼|\n|APPROVE_REQUEST|承認依頼|\n|CONFIRM_REQUEST|報告依頼|\n|PREPARE|下書き|\n|REMANDED|差戻し|\n|REMIND_EXIST|督促あり|\n|REQUEST_POSSIBLE|回付予定|\n')
    }).describe('回付情報件数の取得条件')
});
exports.countWorkflowMessageResponse = zod_1.z.object({
    "count": zod_1.z.number().optional().describe('件数'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.countListWorkflowMessageBody = zod_1.z.object({
    "conditionList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "userCode": zod_1.z.string().describe('ユーザーコード'),
            "workflowMessageType": zod_1.z.enum(['APPLY_REQUEST', 'APPROVE_REQUEST', 'CONFIRM_REQUEST', 'PREPARE', 'REMANDED', 'REMIND_EXIST', 'REQUEST_POSSIBLE']).describe('回付情報タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPLY_REQUEST|申請依頼|\n|APPROVE_REQUEST|承認依頼|\n|CONFIRM_REQUEST|報告依頼|\n|PREPARE|下書き|\n|REMANDED|差戻し|\n|REMIND_EXIST|督促あり|\n|REQUEST_POSSIBLE|回付予定|\n')
        }).describe('回付情報件数の取得条件'))
    }).describe('回付情報件数の取得条件のリスト')
});
exports.countListWorkflowMessageResponse = zod_1.z.object({
    "countList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "count": zod_1.z.number().optional().describe('指定した回付情報の件数')
        })).optional().describe('書類情報')
    }).optional().describe('指定した回付情報の件数の一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.selectWorkflowMessageBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "workflowMessageType": zod_1.z.enum(['APPLY_REQUEST', 'APPROVE_REQUEST', 'CONFIRM_REQUEST', 'PREPARE', 'REMANDED', 'REMIND_EXIST', 'REQUEST_POSSIBLE']).describe('回付情報タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPLY_REQUEST|申請依頼|\n|APPROVE_REQUEST|承認依頼|\n|CONFIRM_REQUEST|報告依頼|\n|PREPARE|下書き|\n|REMANDED|差戻し|\n|REMIND_EXIST|督促あり|\n|REQUEST_POSSIBLE|回付予定|\n')
    }).describe('回付情報の検索条件')
});
exports.selectWorkflowMessageResponse = zod_1.z.object({
    "resultSet": zod_1.z.object({
        "fieldList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "name": zod_1.z.string().optional().describe('フィールド名'),
                "type": zod_1.z.enum(['BOOLEAN', 'DATE', 'DATETIME', 'DECIMAL', 'INT', 'LONG', 'STRING', 'TEXT']).describe('データ型<br>\n|パラメータ|説明|\n|----|----|\n|BOOLEAN|真偽値|\n|DATE|日付|\n|DATETIME|日時|\n|DECIMAL|整数|\n|INT|整数値(int)|\n|LONG|整数値(long)|\n|STRING|文字列|\n|TEXT|テキスト|\n').optional()
            })).optional().describe('フィールド情報')
        }).optional().describe('フィールド情報一覧'),
        "recordList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "index": zod_1.z.number().optional().describe('レコードインデックス'),
                "entryList": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "name": zod_1.z.string().optional().describe('名称'),
                        "value": zod_1.z.object({}).optional().describe('値')
                    })).optional().describe('エントリ')
                }).optional().describe('エントリのリスト')
            })).optional().describe('レコード情報')
        }).optional().describe('レコード情報一覧')
    }).optional().describe('回付情報の検索結果'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.docDraftBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.docDraftBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID<br>\n\*「書類データ取得API」、「新規書類データ保存API」、「書類データ更新」で取得した値を指定\n'),
    "criterionDate": zod_1.z.string().regex(exports.docDraftBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "applyUnitCode": zod_1.z.string().describe('申請者組織コード'),
    "applyUserCode": zod_1.z.string().describe('申請者コード'),
    "operateUserCode": zod_1.z.string().optional().describe('処理者ユーザーコード<br>\n\*書類作成\/申請APIを行うとき、本APIで指定したユーザーをoperateUserCodeに指定するか、指定したユーザーで実行する必要があります。\n'),
    "formCode": zod_1.z.string().describe('フォームコード<br>\n\*「書類データ取得API」、「新規書類データ保存API」、「書類データ更新API」で取得した値を指定\n'),
    "ruleCode": zod_1.z.string().describe('ルールコード')
});
exports.docDraftResponse = zod_1.z.object({
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.docStartBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.docStartBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID<br>\n\*「書類データ取得API」、「新規書類データ保存API」、「書類データ更新」で取得した値を指定\n'),
    "criterionDate": zod_1.z.string().regex(exports.docStartBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "applyUnitCode": zod_1.z.string().describe('申請者組織コード'),
    "applyUserCode": zod_1.z.string().describe('申請者コード'),
    "operateUserCode": zod_1.z.string().optional().describe('処理者ユーザーコード<br>\n\*書類作成\/申請APIを行うとき、本APIで指定したユーザーをoperateUserCodeに指定するか、指定したユーザーで実行する必要があります。\n'),
    "formCode": zod_1.z.string().describe('フォームコード<br>\n\*「書類データ取得API」、「新規書類データ保存API」、「書類データ更新API」で取得した値を指定\n'),
    "ruleCode": zod_1.z.string().describe('ルールコード')
});
exports.docStartResponse = zod_1.z.object({
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.docApproveBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID'),
    "operatorCode": zod_1.z.string().optional().describe('承認する処理者のユーザーコード<br>\n\*未指定の場合は、指定ステップに設定されている任意の処理者で承認される（どの処理者で承認されるかは不定）\n'),
    "ruleStepCode": zod_1.z.string().describe('承認するステップのコード'),
    "comment": zod_1.z.string().optional().describe('コメント')
});
exports.docApproveResponse = zod_1.z.object({
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.docRemandBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID'),
    "operatorCode": zod_1.z.string().optional().describe('差し戻す処理者のユーザーコード<br>\n\*未指定の場合は、差戻し元ステップに設定されている任意の処理者で差戻される（どの処理者で差戻されるかは不定）\n'),
    "ruleStepCode": zod_1.z.string().describe('差戻し元ステップのコード'),
    "comment": zod_1.z.string().describe('コメント'),
    "remandRuleStepCode": zod_1.z.string().describe('差戻し先ステップのコード')
});
exports.docRemandResponse = zod_1.z.object({
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.docRetractBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID'),
    "operatorCode": zod_1.z.string().optional().describe('引戻す処理者のユーザーコード<br>\n\*未指定の場合は、引戻し元ステップに設定されている任意の処理者で引戻される（どの処理者で引戻されるかは不定）\n'),
    "ruleStepCode": zod_1.z.string().describe('引戻し先ステップのコード')
});
exports.docRetractResponse = zod_1.z.object({
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.getWorkflowInfoBody = zod_1.z.object({
    "raw_data": zod_1.z.number().describe('書類ID')
});
exports.getWorkflowInfoResponseWorkflowInfoCurrentRuleStepHeaderListEntriesItemTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.getWorkflowInfoResponseWorkflowInfoCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getWorkflowInfoResponseWorkflowInfoCreateDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getWorkflowInfoResponseWorkflowInfoApprovedDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getWorkflowInfoResponseWorkflowInfoApplyDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getWorkflowInfoResponseWorkflowInfoLastOperateDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getWorkflowInfoResponse = zod_1.z.object({
    "workflowInfo": zod_1.z.object({
        "createOperator": zod_1.z.object({
            "userName": zod_1.z.string().optional().describe('ユーザー名称'),
            "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
            "unitName": zod_1.z.string().optional().describe('組織名称'),
            "unitCode": zod_1.z.string().optional().describe('組織コード'),
            "roleName": zod_1.z.string().optional().describe('ロール名称'),
            "roleCode": zod_1.z.string().optional().describe('ロールコード')
        }).optional().describe('作成者'),
        "currentRuleStepHeaderList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.getWorkflowInfoResponseWorkflowInfoCurrentRuleStepHeaderListEntriesItemTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            })).optional().describe('現在ステップヘッダ情報')
        }).optional().describe('現在ステップ情報リスト'),
        "applyOperator": zod_1.z.object({
            "userName": zod_1.z.string().optional().describe('ユーザー名称'),
            "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
            "unitName": zod_1.z.string().optional().describe('組織名称'),
            "unitCode": zod_1.z.string().optional().describe('組織コード'),
            "roleName": zod_1.z.string().optional().describe('ロール名称'),
            "roleCode": zod_1.z.string().optional().describe('ロールコード')
        }).optional().describe('申請者'),
        "formName": zod_1.z.string().optional().describe('フォーム名'),
        "criterionDate": zod_1.z.string().regex(exports.getWorkflowInfoResponseWorkflowInfoCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。'),
        "createDate": zod_1.z.string().regex(exports.getWorkflowInfoResponseWorkflowInfoCreateDateRegExp).optional().describe('作成日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。'),
        "lastOperator": zod_1.z.object({
            "userName": zod_1.z.string().optional().describe('ユーザー名称'),
            "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
            "unitName": zod_1.z.string().optional().describe('組織名称'),
            "unitCode": zod_1.z.string().optional().describe('組織コード'),
            "roleName": zod_1.z.string().optional().describe('ロール名称'),
            "roleCode": zod_1.z.string().optional().describe('ロールコード')
        }).optional().describe('最終処理者'),
        "docId": zod_1.z.number().optional().describe('書類ID'),
        "approvedDate": zod_1.z.string().regex(exports.getWorkflowInfoResponseWorkflowInfoApprovedDateRegExp).optional().describe('承認完了日'),
        "applyDate": zod_1.z.string().regex(exports.getWorkflowInfoResponseWorkflowInfoApplyDateRegExp).optional().describe('申請日'),
        "formCode": zod_1.z.string().optional().describe('フォームコード'),
        "workflowState": zod_1.z.enum(['PREPARE', 'ACTIVE', 'APPROVED', 'REJECTED', 'CANCELED', 'DELETED']).describe('書類状態<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|PREPARE|下書き|\n|ACTIVE|回付中|\n|APPROVED|承認完了|\n|REJECTED|却下|\n|CANCELED|取り下げ|\n|DELETED|削除|\n').optional(),
        "proxyApplyOperator": zod_1.z.object({
            "userName": zod_1.z.string().optional().describe('ユーザー名称'),
            "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
            "unitName": zod_1.z.string().optional().describe('組織名称'),
            "unitCode": zod_1.z.string().optional().describe('組織コード'),
            "roleName": zod_1.z.string().optional().describe('ロール名称'),
            "roleCode": zod_1.z.string().optional().describe('ロールコード')
        }).optional().describe('代理申請者'),
        "ruleCode": zod_1.z.string().optional().describe('ルールコード'),
        "ruleName": zod_1.z.string().optional().describe('ルール名'),
        "lastOperateDate": zod_1.z.string().regex(exports.getWorkflowInfoResponseWorkflowInfoLastOperateDateRegExp).optional().describe('最終処理日')
    }).optional(),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findWorkflowTaskBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "docId": zod_1.z.number().describe('書類ID'),
        "ruleStepCode": zod_1.z.string().optional().describe('ステップコード'),
        "ruleStepType": zod_1.z.enum(['CREATE', 'APPLY', 'APPROVE', 'CONFIRM', 'READ']).optional().describe('ステップ種別<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|CREATE|作成ステップ|\n|APPLY|申請ステップ|\n|APPROVE|承認ステップ|\n|CONFIRM|報告ステップ|\n|READ|閲覧ステップ|\n')
    }).describe('回付情報タスクの検索条件')
});
exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemStateRegExp = new RegExp('workflow.EnumWorkflowTaskStateType');
exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleEffectorTypeRegExpOne = new RegExp('rule.EnumRuleEffectorType');
exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemEffectDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemDeprivedRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.findWorkflowTaskResponse = zod_1.z.object({
    "workflowTaskList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "state": zod_1.z.string().regex(exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemStateRegExp).optional().describe('タスクの状態<br>\n|パラメータ|説明|\n|----|----|\n|NOTHING|予定無し|\n|FORECAST|予定されている|\n|ACTIVE|有効|\n|DONE|終了|\n|CANCELED|取り消し|\n'),
            "reserveItems": zod_1.z.unknown().optional().describe('拡張項目<br>\n\*未使用\n'),
            "operator": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('タスク処理者'),
            "ruleEffector": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('作用名称'),
                "type": zod_1.z.string().regex(exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleEffectorTypeRegExpOne).describe('作用種別<br>\n|パラメータ|説明|\n|----|----|\n|CREATE|作成|\n|APPLY|申請|\n|APPLY_PROXY|代理申請|\n|APPROVE|承認|\n|APPROVE_WITH_COMMENTS|コメント付き承認|\n|REMAND|差戻し|\n|REJECT|却下|\n|CANCEL|削除|\n|RETRACT|引戻し|\n|CONFIRM|確認|\n|DELETE|削除|\n|EDIT|編集|\n|SAVE|保存|\n|PDF|PDF|\n|COPY|コピーして新規|\n|REFERENCE|関連書類|\n|CUSTOM|カスタムメニュー|\n|DEPRIVE|引上げ|\n|SHARE|共有|\n').optional()
            }).optional().describe('タスク作用'),
            "isProxy": zod_1.z.boolean().optional().describe('代理タスクフラグ'),
            "effectDate": zod_1.z.string().regex(exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemEffectDateRegExp).optional().describe('作用日'),
            "deprivedRuleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemDeprivedRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            }).optional().describe('引上げ元ルールステップ'),
            "ruleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            }).optional().describe('ステップ情報')
        })).optional().describe('回付情報タスク一覧')
    }).optional().describe('回付情報タスク検索結果'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listWorkflowJournalBody = zod_1.z.object({
    "raw_data": zod_1.z.number().describe('書類ID')
});
exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemCreateDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleEffectorTypeRegExpOne = new RegExp('rule.EnumRuleEffectorType');
exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.listWorkflowJournalResponse = zod_1.z.object({
    "workflowJournalList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "comment": zod_1.z.string().optional().describe('コメント'),
            "createDate": zod_1.z.string().regex(exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemCreateDateRegExp).optional().describe('登録日時<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。'),
            "leadTime": zod_1.z.number().optional().describe('リードタイム'),
            "docId": zod_1.z.number().optional().describe('書類ID'),
            "operator": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('タスク処理者'),
            "ruleEffector": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('作用名称'),
                "type": zod_1.z.string().regex(exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleEffectorTypeRegExpOne).describe('作用種別<br>\n|パラメータ|説明|\n|----|----|\n|CREATE|作成|\n|APPLY|申請|\n|APPLY_PROXY|代理申請|\n|APPROVE|承認|\n|APPROVE_WITH_COMMENTS|コメント付き承認|\n|REMAND|差戻し|\n|REJECT|却下|\n|CANCEL|削除|\n|RETRACT|引戻し|\n|CONFIRM|確認|\n|DELETE|削除|\n|EDIT|編集|\n|SAVE|保存|\n|PDF|PDF|\n|COPY|コピーして新規|\n|REFERENCE|関連書類|\n|CUSTOM|カスタムメニュー|\n|DEPRIVE|引上げ|\n|SHARE|共有|\n').optional()
            }).optional().describe('タスク作用'),
            "ruleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            }).optional().describe('ステップ情報')
        })).optional().describe('回付情報タスク一覧')
    }).optional().describe('回付情報タスク検索結果'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findUserBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUserBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "code": zod_1.z.string().optional().describe('ユーザーコード'),
        "loginId": zod_1.z.string().optional().describe('ログインID'),
        "name": zod_1.z.string().optional().describe('ユーザー名'),
        "isAccountLock": zod_1.z.boolean().optional().describe('アカウントロックされているかどうか'),
        "unitCode": zod_1.z.string().optional().describe('所属組織コード'),
        "sectionRoleCode": zod_1.z.string().optional().describe('所有セクションロールコード'),
        "universalRoleCode": zod_1.z.string().optional().describe('所有ユニバーサルロールコード'),
        "reserveItem1": zod_1.z.string().optional().describe('拡張項目1'),
        "reserveItem2": zod_1.z.string().optional().describe('拡張項目2'),
        "reserveItem3": zod_1.z.string().optional().describe('拡張項目3'),
        "reserveItem4": zod_1.z.string().optional().describe('拡張項目4'),
        "reserveItem5": zod_1.z.string().optional().describe('拡張項目5'),
        "reserveItem6": zod_1.z.string().optional().describe('拡張項目6'),
        "reserveItem7": zod_1.z.string().optional().describe('拡張項目7'),
        "reserveItem8": zod_1.z.string().optional().describe('拡張項目8'),
        "reserveItem9": zod_1.z.string().optional().describe('拡張項目9'),
        "reserveItem10": zod_1.z.string().optional().describe('拡張項目10'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['Code', 'ImportId', 'Name', 'LocalizedName', 'LocaleName', 'Kana', 'LoginId', 'MailAddress', 'StampName', 'Remarks', 'AvailableDateFrom', 'AvailableDateTo', 'ReserveItem1', 'ReserveItem2', 'ReserveItem3', 'ReserveItem4', 'ReserveItem5', 'ReserveItem6', 'ReserveItem7', 'ReserveItem8', 'ReserveItem9', 'ReserveItem10']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|Code|コード|\n|ImportId|インポートコード|\n|Name|名称|\n|LocalizedName|ローカル名称|\n|LocaleName|ロケール名|\n|Kana|カナ|\n|LoginId|ログインID|\n|MailAddress|メールアドレス|\n|StampName|印影名|\n|Remarks|備考|\n|AvailableDateFrom|運用開始日|\n|AvailableDateTo|運用終了日|\n|ReserveItem1～10|拡張項目1～10|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.string().optional().describe('任意検索全体のAND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧'),
        "criterionDate": zod_1.z.string().regex(exports.findUserBodyConditionCriterionDateRegExp).describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('ユーザー検索条件')
});
exports.findUserResponseUserListEntriesItemValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUserResponseUserListEntriesItemAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUserResponseUserListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUserResponseUserListEntriesItemValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUserResponse = zod_1.z.object({
    "userList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().describe('ユーザー名称'),
            "diplayLanguage": zod_1.z.string().optional().describe('表示言語<br>\n以下のいずれかを指定<br>\nauto：ブラウザ設定に従う<br>\nja：日本語<br>\nen：英語<br>\nzh_CN：中文（簡体）<br>\nzh_TW：中文（繁体）\n'),
            "localeName": zod_1.z.string().optional().describe('ローカル名称の言語名'),
            "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
            "password": zod_1.z.string().describe('パスワード'),
            "reserveItems": zod_1.z.object({
                "reserveItem1": zod_1.z.string().optional(),
                "reserveItem2": zod_1.z.string().optional(),
                "reserveItem3": zod_1.z.string().optional(),
                "reserveItem4": zod_1.z.string().optional(),
                "reserveItem5": zod_1.z.string().optional(),
                "reserveItem6": zod_1.z.string().optional(),
                "reserveItem7": zod_1.z.string().optional(),
                "reserveItem8": zod_1.z.string().optional(),
                "reserveItem9": zod_1.z.string().optional(),
                "reserveItem10": zod_1.z.string().optional(),
                "reserveItem11": zod_1.z.string().optional(),
                "reserveItem12": zod_1.z.string().optional(),
                "reserveItem13": zod_1.z.string().optional(),
                "reserveItem14": zod_1.z.string().optional(),
                "reserveItem15": zod_1.z.string().optional(),
                "reserveItem16": zod_1.z.string().optional(),
                "reserveItem17": zod_1.z.string().optional(),
                "reserveItem18": zod_1.z.string().optional(),
                "reserveItem19": zod_1.z.string().optional(),
                "reserveItem20": zod_1.z.string().optional()
            }).describe('拡張項目').optional(),
            "validityDateTo": zod_1.z.string().regex(exports.findUserResponseUserListEntriesItemValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "loginId": zod_1.z.string().describe('ログインID'),
            "code": zod_1.z.string().describe('ユーザーコード'),
            "kana": zod_1.z.string().optional().describe('ユーザー名称カナ'),
            "availableDateTo": zod_1.z.string().regex(exports.findUserResponseUserListEntriesItemAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "stampName": zod_1.z.string().optional().describe('印影'),
            "mailAddress": zod_1.z.string().optional().describe('メールアドレス'),
            "remarks": zod_1.z.string().optional().describe('備考'),
            "importCode": zod_1.z.string().optional().describe('インポートコード'),
            "availableDateFrom": zod_1.z.string().regex(exports.findUserResponseUserListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "validityDateFrom": zod_1.z.string().regex(exports.findUserResponseUserListEntriesItemValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "isNeedStampImage": zod_1.z.string().optional(),
            "isForceChangePassword": zod_1.z.boolean().optional().describe('次回ログイン時にパスワード変更を求めるかどうか<br>\n\*true の指定は無効\n'),
            "isAccountLock": zod_1.z.boolean().optional().describe('アカウントロックフラグ')
        })).optional().describe('ユーザー参照一覧')
    }).optional().describe('ユーザー参照結果一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findUnitBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "code": zod_1.z.string().optional().describe('組織コード'),
        "name": zod_1.z.string().optional().describe('組織名称'),
        "parentCode": zod_1.z.string().nullish().describe('親組織コード'),
        "importCode": zod_1.z.string().optional().describe('インポート組織コード'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['Code', 'ImportId', 'Name', 'LocalizedName', 'LocaleName', 'Kana', 'LoginId', 'MailAddress', 'StampName', 'Remarks', 'AvailableDateFrom', 'AvailableDateTo', 'ReserveItem1', 'ReserveItem2', 'ReserveItem3', 'ReserveItem4', 'ReserveItem5', 'ReserveItem6', 'ReserveItem7', 'ReserveItem8', 'ReserveItem9', 'ReserveItem10']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|Code|コード|\n|ImportId|インポートコード|\n|Name|名称|\n|LocalizedName|ローカル名称|\n|LocaleName|ロケール名|\n|Kana|カナ|\n|LoginId|ログインID|\n|MailAddress|メールアドレス|\n|StampName|印影名|\n|Remarks|備考|\n|AvailableDateFrom|運用開始日|\n|AvailableDateTo|運用終了日|\n|ReserveItem1～10|拡張項目1～10|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.string().optional().describe('任意検索全体のAND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧'),
        "criterionDate": zod_1.z.string().regex(exports.findUnitBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('組織検索条件')
});
exports.findUnitResponseUnitListEntriesItemValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitResponseUnitListEntriesItemValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitResponseUnitListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitResponseUnitListEntriesItemAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitResponse = zod_1.z.object({
    "unitList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "code": zod_1.z.string().describe('組織コード'),
            "importCode": zod_1.z.string().optional().describe('インポートコード'),
            "parentCode": zod_1.z.string().nullish().describe('親組織コード<br>\n\*ルート組織直下に組織を追加する場合は null\n'),
            "name": zod_1.z.string().describe('組織名称'),
            "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
            "localeName": zod_1.z.string().optional().describe('ローカル名'),
            "officialName": zod_1.z.string().optional().describe('組織正式名称'),
            "kana": zod_1.z.string().optional().describe('組織名称カナ'),
            "remarks": zod_1.z.string().optional().describe('備考'),
            "validityDateFrom": zod_1.z.string().regex(exports.findUnitResponseUnitListEntriesItemValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "validityDateTo": zod_1.z.string().regex(exports.findUnitResponseUnitListEntriesItemValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateFrom": zod_1.z.string().regex(exports.findUnitResponseUnitListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateTo": zod_1.z.string().regex(exports.findUnitResponseUnitListEntriesItemAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "reserveItems": zod_1.z.object({
                "reserveItem1": zod_1.z.string().optional(),
                "reserveItem2": zod_1.z.string().optional(),
                "reserveItem3": zod_1.z.string().optional(),
                "reserveItem4": zod_1.z.string().optional(),
                "reserveItem5": zod_1.z.string().optional(),
                "reserveItem6": zod_1.z.string().optional(),
                "reserveItem7": zod_1.z.string().optional(),
                "reserveItem8": zod_1.z.string().optional(),
                "reserveItem9": zod_1.z.string().optional(),
                "reserveItem10": zod_1.z.string().optional(),
                "reserveItem11": zod_1.z.string().optional(),
                "reserveItem12": zod_1.z.string().optional(),
                "reserveItem13": zod_1.z.string().optional(),
                "reserveItem14": zod_1.z.string().optional(),
                "reserveItem15": zod_1.z.string().optional(),
                "reserveItem16": zod_1.z.string().optional(),
                "reserveItem17": zod_1.z.string().optional(),
                "reserveItem18": zod_1.z.string().optional(),
                "reserveItem19": zod_1.z.string().optional(),
                "reserveItem20": zod_1.z.string().optional()
            }).describe('拡張項目').optional()
        })).optional().describe('組織情報')
    }).optional().describe('組織情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findSectionRoleBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findSectionRoleBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "code": zod_1.z.string().optional().describe('セクションロールコード'),
        "name": zod_1.z.string().optional().describe('セクションロール名称'),
        "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
        "unitCode": zod_1.z.string().optional().describe('組織コード'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['Code', 'ImportId', 'Name', 'Rank']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|Code|コード|\n|ImportId|インポートコード|\n|Name|名称|\n|Rank|ランク|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.string().optional().describe('任意検索全体のAND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧'),
        "criterionDate": zod_1.z.string().regex(exports.findSectionRoleBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('セクションロール検索条件')
});
exports.findSectionRoleResponse = zod_1.z.object({
    "sectionRoleList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "code": zod_1.z.string().describe('セクションロールコード'),
            "importCode": zod_1.z.string().optional().describe('インポートコード'),
            "name": zod_1.z.string().describe('ロール名称'),
            "explanation": zod_1.z.string().optional().describe('備考'),
            "folderCode": zod_1.z.string().optional().describe('セクションロールフォルダ<br>\n\*セクションロールフォルダ直下に作成する場合はnullを指定\n'),
            "rank": zod_1.z.number().optional().describe('ランク')
        })).optional().describe('セクションロール情報')
    }).optional().describe('セクションロール情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findSectionRoleGroupBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "code": zod_1.z.string().optional().describe('セクションロールグループコード'),
        "name": zod_1.z.string().optional().describe('セクションロールグループ名称'),
        "roleCode": zod_1.z.string().optional().describe('セクションロールコード'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['Code', 'Name', 'SectionRoleCode']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|Code|コード|\n|Name|名称|\n|SectionRoleCode|セクションロールコード|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.string().optional().describe('任意検索全体のAND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧')
    }).optional().describe('セクションロールグループ検索条件')
});
exports.findSectionRoleGroupResponse = zod_1.z.object({
    "sectionRoleGroupList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "code": zod_1.z.string().describe('セクションロールグループコード'),
            "name": zod_1.z.string().describe('セッションロールグループ名称'),
            "sortNo": zod_1.z.string().optional().describe('ソート順序'),
            "explanation": zod_1.z.string().optional().describe('説明'),
            "roleCodeList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "code": zod_1.z.string().optional().describe('セクションロールコード')
                })).optional().describe('セクションロールコード情報')
            }).optional().describe('所属しているセクションロールコードのリスト')
        })).optional().describe('セクションロールグループ情報')
    }).optional().describe('セクションロールグループ情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findUnitAppointmentBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitAppointmentBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
        "unitCode": zod_1.z.string().optional().describe('組織コード<br>\n\*unitDirection と共に指定\n'),
        "unitDirection": zod_1.z.enum(['ABSOLUTE', 'ESCALATE', 'CASCADE']).optional().describe('組織の検索種別<br>\n\*unitCode と共に指定<br>\n\*省略時は該当組織のみ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ABSOLUTE|対象組織のみ|\n|ESCALATE|対象組織と、組織の上位にある 全ての組織 or 所属を返す|\n|CASCADE|対象組織と、対称組織の配下にある 全ての組織 or 所属を返す|\n'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['UnitCode', 'UnitName', 'UnitOfficialName', 'UnitValidityDateFrom', 'UnitValidityDateTo', 'UnitAvailableDateFrom', 'UnitAvailableDateTo', 'UserCode', 'UserName', 'UserKana', 'UserLoginId', 'UserMailAddress', 'UserStampName', 'UserAvailableDateFrom', 'UserAvailableDateTo', 'RoleCode', 'RoleName', 'RoleRank', 'ValidityDateFrom', 'ValidityDateTo', 'UnitReserveItem1', 'UnitReserveItem2', 'UnitReserveItem3', 'UnitReserveItem4', 'UnitReserveItem5', 'UnitReserveItem6', 'UnitReserveItem7', 'UnitReserveItem8', 'UnitReserveItem9', 'UnitReserveItem10', 'UserReserveItem1', 'UserReserveItem2', 'UserReserveItem3', 'UserReserveItem4', 'UserReserveItem5', 'UserReserveItem6', 'UserReserveItem7', 'UserReserveItem8', 'UserReserveItem9', 'UserReserveItem10']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UnitCode|組織コード|\n|UnitName|インポートコード|\n|UnitOfficialName|名称|\n|UnitValidityDateFrom|ローカル名称|\n|UnitValidityDateTo|ロケール名|\n|UnitAvailableDateFrom|カナ|\n|UnitAvailableDateTo|ログインID|\n|UserCode|メールアドレス|\n|UserName|印影名|\n|UserKana|備考|\n|UserLoginId|運用開始日|\n|UserMailAddress|運用終了日|\n|UserStampName|説明|\n|UserAvailableDateFrom|コード|\n|UserAvailableDateTo|インポートコード|\n|RoleCode|名称|\n|RoleName|ローカル名称|\n|RoleRank|ロケール名|\n|ValidityDateFrom|カナ|\n|ValidityDateTo|ログインID|\n|UnitReserveItem1～10|組織拡張項目1～10|\n|UserReserveItem1～10|ユーザー拡張項目1～10|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.string().optional().describe('任意検索全体のAND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧'),
        "criterionDate": zod_1.z.string().regex(exports.findUnitAppointmentBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('組織所属検索条件')
});
exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUnitAppointmentResponse = zod_1.z.object({
    "unitAppointmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "unitCode": zod_1.z.string().describe('組織コード'),
            "userCode": zod_1.z.string().describe('ユーザーコード'),
            "sectionRoleCode": zod_1.z.string().optional().describe('セクションロールコード'),
            "availableDateFrom": zod_1.z.string().regex(exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateTo": zod_1.z.string().regex(exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "criterionDate": zod_1.z.string().regex(exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('組織所属情報')
    }).optional().describe('組織所属情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findProxyApplyAppointmentBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyApplyAppointmentBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "principalUserCode": zod_1.z.string().optional().describe('被代理ユーザーコード'),
        "principalUnitCode": zod_1.z.string().optional().describe('被代理組織コード'),
        "proxyUserCode": zod_1.z.string().optional().describe('代理ユーザーコード'),
        "targetFormCode": zod_1.z.string().optional().describe('対象フォームコード'),
        "targetRuleCode": zod_1.z.string().optional().describe('対象回付ルールコード'),
        "criterionDate": zod_1.z.string().regex(exports.findProxyApplyAppointmentBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "isDisplayCreateMenu": zod_1.z.boolean().optional().describe('書類作成画面に表示するかどうか')
    }).optional().describe('代理申請検索条件')
});
exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyApplyAppointmentResponse = zod_1.z.object({
    "proxyApplicationAppointmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "principalUserCode": zod_1.z.string().describe('被代理ユーザーコード'),
            "principalUnitCode": zod_1.z.string().optional().describe('被代理組織コード'),
            "proxyUserCode": zod_1.z.string().describe('代理ユーザーコード'),
            "targetFormList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "formCode": zod_1.z.string().optional().describe('フォームコード')
                })).optional().describe('フォームコードのリスト')
            }).describe('対象フォーム一覧').optional(),
            "targetRuleList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "ruleCode": zod_1.z.string().optional().describe('回付ルールコード')
                })).optional().describe('回付ルールコードのリスト')
            }).describe('対象回付ルール一覧').optional(),
            "isDisplayCreateMenu": zod_1.z.boolean().optional().describe('書類作成画面に表示するかどうか'),
            "availableDateFrom": zod_1.z.string().regex(exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateTo": zod_1.z.string().regex(exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "criterionDate": zod_1.z.string().regex(exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('代理申請情報')
    }).optional().describe('代理申請情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findProxyAppointmentBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyAppointmentBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "principalUnitCode": zod_1.z.string().optional().describe('被代理組織コード'),
        "principalUserCode": zod_1.z.string().optional().describe('被代理ユーザーコード'),
        "proxyUserCode": zod_1.z.string().optional().describe('代理ユーザーコード'),
        "targetFormCode": zod_1.z.string().optional().describe('対象フォームコード'),
        "targetRuleCode": zod_1.z.string().optional().describe('対象回付ルールコード'),
        "criterionDate": zod_1.z.string().regex(exports.findProxyAppointmentBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "isSendNotification": zod_1.z.boolean().optional().describe('代理承認依頼を通知するかどうか'),
        "isDisplayTodoMenu": zod_1.z.boolean().optional().describe('処理待ち画面に表示するかどうか')
    }).optional().describe('代理承認検索条件')
});
exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findProxyAppointmentResponse = zod_1.z.object({
    "proxyAppointmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "principalUserCode": zod_1.z.string().describe('被代理ユーザーコード'),
            "principalUnitCode": zod_1.z.string().optional().describe('被代理組織コード'),
            "proxyUserCode": zod_1.z.string().describe('代理ユーザーコード'),
            "targetFormList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "formCode": zod_1.z.string().optional().describe('フォームコード')
                })).optional().describe('フォームコードのリスト')
            }).describe('対象フォーム一覧').optional(),
            "targetRuleList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "ruleCode": zod_1.z.string().optional().describe('回付ルールコード')
                })).optional().describe('回付ルールコードのリスト')
            }).describe('対象回付ルール一覧').optional(),
            "isSendNotification": zod_1.z.boolean().optional().describe('代理承認依頼を通知するかどうか'),
            "isDisplayTodoMenu": zod_1.z.boolean().optional().describe('処理待ち画面に表示するかどうか'),
            "availableDateFrom": zod_1.z.string().regex(exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateTo": zod_1.z.string().regex(exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "criterionDate": zod_1.z.string().regex(exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('代理承認情報')
    }).optional().describe('代理承認情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findDelegationAppointmentBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDelegationAppointmentBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "fromUnitCode": zod_1.z.string().optional().describe('権限委譲元組織コード'),
        "fromUserCode": zod_1.z.string().optional().describe('権限委譲元ユーザーコード'),
        "toUserCode": zod_1.z.string().optional().describe('権限委譲先ユーザーコード'),
        "targetFormCode": zod_1.z.string().optional().describe('対象フォームコード'),
        "targetRuleCode": zod_1.z.string().optional().describe('対象回付ルールコード'),
        "criterionDate": zod_1.z.string().regex(exports.findDelegationAppointmentBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('権限委譲検索条件')
});
exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDelegationAppointmentResponse = zod_1.z.object({
    "delegationAppointmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "fromUserCode": zod_1.z.string().describe('委譲元ユーザーコード'),
            "fromUnitCode": zod_1.z.string().optional().describe('委譲元組織コード'),
            "toUserCode": zod_1.z.string().describe('委譲先ユーザーコード'),
            "targetFormList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "formCode": zod_1.z.string().optional().describe('フォームコード')
                })).optional().describe('フォームコードのリスト')
            }).describe('対象フォーム一覧').optional(),
            "targetRuleList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "ruleCode": zod_1.z.string().optional().describe('回付ルールコード')
                })).optional().describe('回付ルールコードのリスト')
            }).describe('対象回付ルール一覧').optional(),
            "availableDateFrom": zod_1.z.string().regex(exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateTo": zod_1.z.string().regex(exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "taskUnitPolicy": zod_1.z.enum(['FROM', 'TO', 'BLANK']).optional().describe('権限委譲時に処理者情報にセットされる組織情報の決定ポリシー<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|FROM|委譲前の組織を維持|\n|TO|委譲後のユーザーの主務組織|\n|BLANK|表示しない|\n'),
            "criterionDate": zod_1.z.string().regex(exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('権限委譲情報')
    }).optional().describe('権限委譲情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findDeprivationAppointmentBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDeprivationAppointmentBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
        "targetFormCode": zod_1.z.string().optional().describe('対象フォームコード'),
        "targetRuleCode": zod_1.z.string().optional().describe('対象回付ルールコード'),
        "criterionDate": zod_1.z.string().regex(exports.findDeprivationAppointmentBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('引上げ権限検索条件')
});
exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findDeprivationAppointmentResponse = zod_1.z.object({
    "deprivationAppointmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "userCode": zod_1.z.string().describe('ユーザーコード'),
            "targetFormList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "formCode": zod_1.z.string().optional().describe('フォームコード')
                })).optional().describe('フォームコードのリスト')
            }).describe('対象フォーム一覧').optional(),
            "targetRuleList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "ruleCode": zod_1.z.string().optional().describe('回付ルールコード')
                })).optional().describe('回付ルールコードのリスト')
            }).describe('対象回付ルール一覧').optional(),
            "availableDateFrom": zod_1.z.string().regex(exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateTo": zod_1.z.string().regex(exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "criterionDate": zod_1.z.string().regex(exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('引上げ権限情報')
    }).optional().describe('引上げ権限情報一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findPrivateRoleBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "code": zod_1.z.string().optional().describe('プライベートロールコード'),
        "name": zod_1.z.string().optional().describe('プライベートロール名称'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['Code', 'Name']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|Code|コード|\n|Name|名称|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.unknown().optional().describe('任意検索全体の AND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧')
    }).optional().describe('プライベートロール検索条件')
});
exports.findPrivateRoleResponsePrivateRoleListEntriesItemCandidateListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findPrivateRoleResponse = zod_1.z.object({
    "privateRoleList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "code": zod_1.z.string().describe('プライベートロールコード'),
            "importCode": zod_1.z.string().optional().describe('インポートコード'),
            "name": zod_1.z.string().describe('プライベートロール名称'),
            "explanation": zod_1.z.string().optional().describe('説明'),
            "folderCode": zod_1.z.string().describe('プライベートロールフォルダコード'),
            "isWarnIfCandidateNotAssigned": zod_1.z.boolean().optional().describe('対象ユーザー未指定時に警告表示するかどうか'),
            "candidateList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "type": zod_1.z.enum(['USER', 'UNIT', 'UNIT_ESCALATE', 'UNIT_CASCADE', 'ROLE', 'ROLE_GROUP', 'OWNER_UNIT', 'OWNER_ESCALATE', 'OWNER_CASCADE']).optional().describe('候補選出タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|USER|ユーザー指定|\n|UNIT|組織指定|\n|UNIT_ESCALATE|組織指定（上位含める）|\n|UNIT_CASCADE|組織指定（下位含める）|\n|ROLE|ロール指定|\n|ROLE_GROUP|ロールグループ指定|\n|OWNER_UNIT|設定ユーザー所属組織|\n|OWNER_ESCALATE|設定ユーザー所属上位組織|\n|OWNER_CASCADE|設定ユーザー所属下位組織|\n'),
                    "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                    "unitCode": zod_1.z.string().optional().describe('組織コード'),
                    "roleCode": zod_1.z.string().optional().describe('ロールコード'),
                    "roleType": zod_1.z.enum(['SECTION', 'UNIVERSAL', 'PRIVATE']).optional().describe('ロールタイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|SECTION|セクションロール|\n|UNIVERSAL|ユニバーサルロール|\n|PRIVATE|プライベートロール|\n'),
                    "roleGroupCode": zod_1.z.string().optional().describe('ロールグループコード'),
                    "criterionDate": zod_1.z.string().regex(exports.findPrivateRoleResponsePrivateRoleListEntriesItemCandidateListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
                })).optional().describe('プライベートロール候補者のリスト')
            }).optional().describe('プライベートロール候補者リスト'),
            "guidance": zod_1.z.object({
                "subject": zod_1.z.string().optional().describe('件名'),
                "text": zod_1.z.string().optional().describe('内容')
            }).optional().describe('ユーザーサイトの説明文')
        })).optional().describe('プライベートロール情報')
    }).optional().describe('プライベートロール一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findPrivateRoleAppointmentBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findPrivateRoleAppointmentBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
        "roleCode": zod_1.z.string().optional().describe('プライベートロールコード'),
        "candidateCode": zod_1.z.string().optional().describe('候補者のユーザーコード'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['ValidityDateFrom', 'ValidityDateTo', 'RoleCode', 'RoleName', 'UserCode', 'UserImportCode', 'UserName', 'UserKana', 'UserLoginId', 'UserMailAddress', 'UserStampName', 'UserAvailableDateFrom', 'UserAvailableDateTo', 'UserReserveItem1', 'UserReserveItem2', 'UserReserveItem3', 'UserReserveItem4', 'UserReserveItem5', 'UserReserveItem6', 'UserReserveItem7', 'UserReserveItem8', 'UserReserveItem9', 'UserReserveItem10', 'CandidateCode', 'CandidateImportCode', 'CandidateName', 'CandidateKana', 'CandidateLoginId', 'CandidateMailAddress', 'CandidateStampName', 'CandidateAvailableDateFrom', 'CandidateAvailableDateTo', 'CandidateReserveItem1', 'CandidateReserveItem2', 'CandidateReserveItem3', 'CandidateReserveItem4', 'CandidateReserveItem5', 'CandidateReserveItem6', 'CandidateReserveItem7', 'CandidateReserveItem8', 'CandidateReserveItem9', 'CandidateReserveItem10']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ValidityDateFrom|プライベートロール所属履歴開始日|\n|ValidityDateTo|プライベートロール所属履歴終了日|\n|RoleCode|プライベートロールコード|\n|RoleName|プライベートロール名称|\n|UserCode|ユーザーコード|\n|UserImportCode|ユーザーインポートコード|\n|UserName|ユーザー名称|\n|UserKana|ユーザーカナ|\n|UserLoginId|ユーザーログインID|\n|UserMailAddress|ユーザーメールアドレス|\n|UserStampName|ユーザーの印影上の表示名称|\n|UserAvailableDateFrom|ユーザー運用開始日|\n|UserAvailableDateTo|ユーザー運用終了日|\n|UserReserveItem1|ユーザーの拡張項目１|\n|UserReserveItem2|ユーザーの拡張項目２|\n|UserReserveItem3|ユーザーの拡張項目３|\n|UserReserveItem4|ユーザーの拡張項目４|\n|UserReserveItem5|ユーザーの拡張項目５|\n|UserReserveItem6|ユーザーの拡張項目６|\n|UserReserveItem7|ユーザーの拡張項目７|\n|UserReserveItem8|ユーザーの拡張項目８|\n|UserReserveItem9|ユーザーの拡張項目９|\n|UserReserveItem10|ユーザーの拡張項目１０|\n|CandidateCode|候補者のユーザーコード|\n|CandidateImportCode|候補者インポートコード|\n|CandidateName|候補者のユーザー名称|\n|CandidateKana|候補者カナ|\n|CandidateLoginId|候補者ログインID|\n|CandidateMailAddress|候補者メールアドレス|\n|CandidateStampName|候補者の印影上の表示名称|\n|CandidateAvailableDateFrom|候補者運用開始日|\n|CandidateAvailableDateTo|候補者運用終了日|\n|CandidateReserveItem1|候補者のユーザー拡張項目１|\n|CandidateReserveItem2|候補者のユーザー拡張項目２|\n|CandidateReserveItem3|候補者のユーザー拡張項目３|\n|CandidateReserveItem4|候補者のユーザー拡張項目４|\n|CandidateReserveItem5|候補者のユーザー拡張項目５|\n|CandidateReserveItem6|候補者のユーザー拡張項目６|\n|CandidateReserveItem7|候補者のユーザー拡張項目７|\n|CandidateReserveItem8|候補者のユーザー拡張項目８|\n|CandidateReserveItem9|候補者のユーザー拡張項目９|\n|CandidateReserveItem10|候補者のユーザー拡張項目１０|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.unknown().optional().describe('任意検索全体の AND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧'),
        "criterionDate": zod_1.z.string().regex(exports.findPrivateRoleAppointmentBodyConditionCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('プライベートロール所属検索条件')
});
exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findPrivateRoleAppointmentResponse = zod_1.z.object({
    "privateRoleAppointmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "userCode": zod_1.z.string().describe('ユーザーコード'),
            "privateRoleCode": zod_1.z.string().describe('プライベートロールコード'),
            "candidateCode": zod_1.z.string().describe('候補者のユーザーコード'),
            "availableDateFrom": zod_1.z.string().regex(exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateto": zod_1.z.string().regex(exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "criterionDate": zod_1.z.string().regex(exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('プライベートロール所属情報')
    }).optional().describe('プライベートロール所属一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findUniversalRoleBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "code": zod_1.z.string().optional().describe('ユニバーサルロールコード'),
        "name": zod_1.z.string().optional().describe('ユニバーサルロール名称'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['Code', 'ImportId', 'Name', 'Rank']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|Code|コード|\n|ImportId|インポートコード|\n|Name|名称|\n|Rank|ランク|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.unknown().optional().describe('任意検索全体の AND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧')
    }).optional().describe('ユニバーサルロール検索条件')
});
exports.findUniversalRoleResponse = zod_1.z.object({
    "universalRoleList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "code": zod_1.z.string().describe('ユニバーサルロールコード'),
            "importCode": zod_1.z.string().optional().describe('インポートコード'),
            "name": zod_1.z.string().describe('ユニバーサルロール名称'),
            "explanation": zod_1.z.string().optional().describe('説明'),
            "folderCode": zod_1.z.string().describe('ユニバーサルロールフォルダコード')
        })).optional().describe('ユニバーサルロール情報')
    }).optional().describe('ユニバーサルロール一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findUniversalRoleAppointmentBodyConditionCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUniversalRoleAppointmentBody = zod_1.z.object({
    "condition": zod_1.z.object({
        "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
        "roleCode": zod_1.z.string().optional().describe('ユニバーサルロールコード'),
        "columnValueConditionList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "column": zod_1.z.enum(['ValidityDateFrom', 'ValidityDateTo', 'RoleCode', 'RoleName', 'UserCode', 'UserImportCode', 'UserName', 'UserKana', 'UserLoginId', 'UserMailAddress', 'UserStampName', 'UserAvailableDateFrom', 'UserAvailableDateTo', 'UserReserveItem1', 'UserReserveItem2', 'UserReserveItem3', 'UserReserveItem4', 'UserReserveItem5', 'UserReserveItem6', 'UserReserveItem7', 'UserReserveItem8', 'UserReserveItem9', 'UserReserveItem10']).optional().describe('フィールド値タイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ValidityDateFrom|ユニバーサルロール所属履歴開始日|\n|ValidityDateTo|ユニバーサルロール所属履歴終了日|\n|RoleCode|ユニバーサルロールコード|\n|RoleName|ユニバーサルロール名称|\n|UserCode|ユーザーコード|\n|UserImportCode|ユーザーインポートコード|\n|UserName|ユーザー名称|\n|UserKana|ユーザーカナ|\n|UserLoginId|ユーザーログインID|\n|UserMailAddress|ユーザーメールアドレス|\n|UserStampName|ユーザーの印影上の表示名称|\n|UserAvailableDateFrom|ユーザー運用開始日|\n|UserAvailableDateTo|ユーザー運用終了日|\n|UserReserveItem1|ユーザーの拡張項目１|\n|UserReserveItem2|ユーザーの拡張項目２|\n|UserReserveItem3|ユーザーの拡張項目３|\n|UserReserveItem4|ユーザーの拡張項目４|\n|UserReserveItem5|ユーザーの拡張項目５|\n|UserReserveItem6|ユーザーの拡張項目６|\n|UserReserveItem7|ユーザーの拡張項目７|\n|UserReserveItem8|ユーザーの拡張項目８|\n|UserReserveItem9|ユーザーの拡張項目９|\n|UserReserveItem10|ユーザーの拡張項目１０|\n'),
                "compareOperatorType": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n').optional(),
                "value": zod_1.z.string().optional().describe('値')
            })).optional().describe('任意検索条件'),
            "logicalOperator": zod_1.z.unknown().optional().describe('任意検索全体の AND \/ OR<br>\n\*AND または OR を指定\n')
        }).optional().describe('任意検索条件一覧'),
        "criterionDate": zod_1.z.string().regex(exports.findUniversalRoleAppointmentBodyConditionCriterionDateRegExp).optional().describe('検索基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('ユニバーサルロール所属検索条件')
});
exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findUniversalRoleAppointmentResponse = zod_1.z.object({
    "universalRoleAppointmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "userCode": zod_1.z.string().describe('ユーザーコード'),
            "criterionDate": zod_1.z.string().regex(exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "universalRoleCode": zod_1.z.string().describe('ユニバーサルロールコード'),
            "availableDateFrom": zod_1.z.string().regex(exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
            "availableDateto": zod_1.z.string().regex(exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('ユニバーサルロール所属情報')
    }).optional().describe('ユニバーサルロール所属一覧'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findProjectBody = zod_1.z.object({
    "userCode": zod_1.z.string().describe('ユーザーコード'),
    "content": zod_1.z.enum(['FormMan']).describe('コンテンツ<br>\n\*FormMan\n')
});
exports.findProjectResponse = zod_1.z.object({
    "projectList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().optional().describe('業務カテゴリ名称'),
            "code": zod_1.z.string().optional().describe('業務カテゴリコード')
        })).optional().describe('業務カテゴリのリスト')
    }).optional().describe('業務カテゴリ検索結果'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listComponentMasterWindowBody = zod_1.z.object({});
exports.listComponentMasterWindowResponse = zod_1.z.object({
    "masterWindow": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().optional().describe('業務カテゴリ名'),
            "id": zod_1.z.number().optional().describe('業務カテゴリID'),
            "code": zod_1.z.string().optional().describe('業務カテゴリコード'),
            "componentList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "name": zod_1.z.string().optional().describe('コンポーネント名称'),
                    "id": zod_1.z.number().optional().describe('コンポーネントID'),
                    "code": zod_1.z.string().optional().describe('コンポーネントコード'),
                    "masterData": zod_1.z.string().optional().describe('マスタデータ名'),
                    "column": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "name": zod_1.z.string().optional().describe('見出し名称'),
                            "columnName": zod_1.z.string().optional().describe('DB項目名')
                        })).optional()
                    }).optional().describe('列項目')
                })).optional()
            }).optional().describe('マスタ参照コンポーネントリスト')
        })).optional()
    }).optional().describe('マスタ参照コンポーネント'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listComponentAutoNumberBody = zod_1.z.object({});
exports.listComponentAutoNumberResponse = zod_1.z.object({
    "autoNumber": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().optional().describe('業務カテゴリ名'),
            "id": zod_1.z.number().optional().describe('業務カテゴリID'),
            "code": zod_1.z.string().optional().describe('業務カテゴリコード'),
            "componentList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "name": zod_1.z.string().optional().describe('コンポーネント名称'),
                    "id": zod_1.z.number().optional().describe('コンポーネントID'),
                    "code": zod_1.z.string().optional().describe('コンポーネントコード')
                })).optional()
            }).optional().describe('自動採番コンポーネントリスト')
        })).optional()
    }).optional().describe('自動採番コンポーネント'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listFormBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listFormBody = zod_1.z.object({
    "criterionDate": zod_1.z.string().regex(exports.listFormBodyCriterionDateRegExp).describe('基準日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.listFormResponseFormProjectEntriesItemFormEntriesItemTypeRegExp = new RegExp('EnumFormType');
exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listFormResponse = zod_1.z.object({
    "formProject": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().optional().describe('業務カテゴリ名称<br>\n'),
            "id": zod_1.z.number().optional().describe('業務カテゴリID<br>\n'),
            "form": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "name": zod_1.z.string().optional().describe('フォーム名称'),
                    "id": zod_1.z.number().optional().describe('フォームID'),
                    "type": zod_1.z.string().regex(exports.listFormResponseFormProjectEntriesItemFormEntriesItemTypeRegExp).optional().describe('フォーム種別<br>\n\*MAIN \/ TEMPLATE\n'),
                    "version": zod_1.z.string().optional().describe('バージョン'),
                    "fieldList": zod_1.z.object({}).optional().describe('フォームフィールド一覧<br>\n\*空を出力。フォーム定義情報取得APIで表示。\n'),
                    "explanation": zod_1.z.string().optional().describe('備考'),
                    "minorVersion": zod_1.z.number().optional().describe('マイナーバージョン'),
                    "majorVersion": zod_1.z.number().optional().describe('メジャーバージョン'),
                    "code": zod_1.z.string().optional().describe('フォームコード'),
                    "projectCode": zod_1.z.string().optional().describe('業務カテゴリコード<br>\n\*formProject\/entries 配下の code と同じ\n'),
                    "isForceAutoCalc": zod_1.z.boolean().optional().describe('書類保存時に再計算するかどうか<br>\n詳細タブ>動作設定 欄の「計算式設定」内のチェックボックス<br>\nチェックあり：true<br>\nチェックなし：false\n'),
                    "isReferenceOnly": zod_1.z.boolean().optional().describe('関連書類専用フォームかどうか<br>\n\*使用していないので、falseのみ出力\n'),
                    "isInsertTrailRequired": zod_1.z.boolean().optional().describe('証跡PDF挿入を必須とするかどうか<br>\nPDFタブ>「挿入するタイミング」のラジオボタン<br>\n常に挿入する：true<br>\nPDFを作成する度に指定する：false\n'),
                    "validityDateTo": zod_1.z.string().regex(exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。'),
                    "xwfFileName": zod_1.z.string().optional().describe('XWFファイル名称'),
                    "latestVersion": zod_1.z.string().optional().describe('最新バージョン'),
                    "trailFormCode": zod_1.z.string().optional().describe('証跡PDFとして利用するフォームのフォームコード'),
                    "insertTrailPosition": zod_1.z.string().optional().describe('証跡PDF挿入位置<br>\nPDFタブ>「挿入する位置」のラジオボタン<br>\n書類の前：FRONT<br>\n書類の後：BACK\n'),
                    "validityDateFrom": zod_1.z.string().regex(exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。'),
                    "tableName": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "name": zod_1.z.unknown().optional().describe('DBテーブル名<br>\n\*表明細の内容も表示される\n')
                        })).optional()
                    }).optional().describe('DBテーブル名一覧'),
                    "isInsertTrail": zod_1.z.boolean().optional().describe('証跡PDFを挿入するかどうか<br>\nPDFタブ>「PDF作成時に証跡PDFを挿入する」内のチェックボックス<br>\nチェックあり：true<br>\nチェックなし：false\n'),
                    "pageCount": zod_1.z.number().optional().describe('フォーム構成ページ数')
                })).optional()
            }).optional().describe('フォーム'),
            "code": zod_1.z.string().optional().describe('業務カテゴリコード'),
            "formCount": zod_1.z.number().optional().describe('所属フォーム数')
        })).optional()
    }).optional().describe('フォーム設定情報'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findFormDefinitionBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findFormDefinitionBody = zod_1.z.object({
    "formCode": zod_1.z.string().describe('フォームコード'),
    "ruleCode": zod_1.z.string().optional().describe('ルールコード<br>\n\*未指定の場合は、レスポンスの項目ルールは空。\n'),
    "criterionDate": zod_1.z.string().regex(exports.findFormDefinitionBodyCriterionDateRegExp).optional().describe('基準日<br>\n\*未指定の場合は、当日日付でレスポンスの」回付ルール情報を取得<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemFieldTypeRegExp = new RegExp('EnumFieldType');
exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDataTypeRegExp = new RegExp('EnumDataType');
exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemLookupValueRegExp = new RegExp('FormFieldLookupValueType');
exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDateFormatRegExp = new RegExp('XWEBDateFormatType');
exports.findFormDefinitionResponse = zod_1.z.object({
    "form": zod_1.z.object({
        "code": zod_1.z.string().optional().describe('フォームコード'),
        "name": zod_1.z.string().optional().describe('フォーム名称'),
        "rule": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "code": zod_1.z.string().optional().describe('回付ルールコード'),
                "name": zod_1.z.string().optional().describe('回付ルール名称'),
                "ruleField": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "fieldName": zod_1.z.string().optional().describe('フィールド名'),
                        "id": zod_1.z.string().optional().describe('ID'),
                        "invisible": zod_1.z.boolean().optional().describe('閲覧可<br>\nfalse：不可<br>\ntrue：可\n'),
                        "disable": zod_1.z.boolean().optional().describe('編集可<br>\nfalse：不可<br>\ntrue：可\n'),
                        "necessary": zod_1.z.boolean().optional().describe('必須<br>\nfalse：不可<br>\ntrue：可\n')
                    })).optional()
                }).optional().describe('項目ルール<br>\n\*リクエストのルールコードが未指定の場合は、空\n\*リクエストのルールコードが設定された場合、設定したルールコードの内容のみ表示\n')
            })).optional()
        }).optional().describe('回付ルール情報<br>\n\*ない場合は、空白配列\n'),
        "pages": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "fields": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "name": zod_1.z.string().optional().describe('フィールド名称'),
                        "fieldNo": zod_1.z.number().optional().describe('フィールド番号'),
                        "fieldId": zod_1.z.string().optional().describe('フィールドID'),
                        "fieldTypeNo": zod_1.z.number().optional().describe('フィールドタイプ番号<br>\n\*詳細はfieldTypeを参照\n'),
                        "fieldType": zod_1.z.string().regex(exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemFieldTypeRegExp).optional().describe('フィールドタイプ<br>\n|フィールドタイプ番号|フィールドタイプ名|意味|備考|\n|----|----|----|----|\n|9|TEXTFIELD|文字フィールド||\n|10|NUMBERFIELD|数値フィールド||\n|11|INTEGERFIELD|整数フィールド||\n|12|TEXTAREA|テキストエリア||\n|14|BUTTON|ボタン|AWでは表示されない|\n|15|RADIOBUTTON|ラジオボタン||\n|16|CHECKBOX|チェックボックス||\n|17|COMBOBOX|コンボボックス||\n|18|LISTBOX|リストボックス||\n|23|BARCODEFIELD|バーコード|AWでは画面に表示されないため、出力しない|\n|24|IMAGE|イメージ|AWでは表示されない|\n|25|YEARFIELD|西暦フィールド||\n|26|MONTHFIELD|月フィールド||\n|27|DAYFIELD|日フィールド||\n|28|WEEKFIELD|曜日フィールド||\n|29|STAMPFIELD|印影フィールド||\n|34|DATEFIELD|日時フィールド||\n'),
                        "dataType": zod_1.z.string().regex(exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDataTypeRegExp).optional().describe('データタイプ<br>\n\*既存モデルのフィールド<br>\n|値|意味|\n|----|----|\n|STRING|文字列|\n|DECIMAL|数値|\n|INT|整数値(int)|\n|TEXT|テキスト|\n'),
                        "length": zod_1.z.number().optional().describe('フィールド最大値'),
                        "tagName": zod_1.z.string().optional().describe('タグ名'),
                        "groupIdName": zod_1.z.string().optional().describe('グループID名<br>\n\*グループ(表明細)を作った場合にID名が必須。グループでない、ラジオボタンなど一括設定の場合はnull。\n'),
                        "isRequired": zod_1.z.boolean().optional().describe('必須フィールドフラグ<br>\ntrue：必須フィールド<br>\nfalse：非必須フィールド\n'),
                        "isEditable": zod_1.z.boolean().optional().describe('編集禁止<br>\nfalse：無し<br>\ntrue：有り\n'),
                        "isDisabled": zod_1.z.boolean().optional().describe('無効<br>\nfalse：無し<br>\ntrue：有り\n'),
                        "isComma": zod_1.z.boolean().optional().describe('カンマ区切り<br>\nfalse：無し<br>\ntrue：有り\n'),
                        "lookupValue": zod_1.z.string().regex(exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemLookupValueRegExp).optional().describe('ルックアップ設定<br>\n\*ない場合は null<br>\n|値|意味|\n|----|----|\n|DOCUMENT_ID|書類ID|\n|LOGIN_USER_CODE|ログインユーザーコード|\n|LOGIN_USER_NAME|ログインユーザー名|\n|LOGIN_USER_LOCALIZED_NAME|ログインユーザーローカル名|\n|LOGIN_USER_KANA|ログインユーザーカナ|\n|LOGIN_USER_STAMPNAME|ログインユーザーの印影上の表示名|\n|LOGIN_USER_LOGINID|ログインユーザーログインID|\n|LOGIN_USER_MAILADDRESS|ログインユーザーメールアドレス|\n|LOGIN_USER_RESERVE1～20|ログインユーザー予備項目1～20|\n|LOGIN_UNIT_CODE|ログインユーザー組織コード|\n|LOGIN_UNIT_OFFICIAL_NAME|ログインユーザー組織名称|\n|LOGIN_UNIT_NAME|ログインユーザー組織画面表示名称|\n|LOGIN_UNIT_LOCALIZED_NAME|ログインユーザー組織ローカル表示名称|\n|LOGIN_UNIT_RESERVE1～20|ログインユーザー組織予備項目1～20|\n|LOGIN_SECTIONROLE_CODE|ログインユーザーセクションロールコード|\n|LOGIN_SECTIONROLE_NAME|ログインユーザーセクションロール名称|\n|LOGIN_SECTIONROLE_RANK|ログインユーザーセクションロールランク|\n|USER_CODE|申請ユーザーコード|\n|USER_NAME|申請ユーザー名|\n|USER_LOCALIZED_NAME|申請ユーザーローカル名|\n|USER_KANA|申請ユーザーカナ|\n|USER_STAMPNAME|申請ユーザーの印影上の表示名|\n|USER_LOGINID|申請ユーザーログインID|\n|USER_MAILADDRESS|申請ユーザーメールアドレス|\n|USER_RESERVE1～20|申請ユーザー予備項目1～20|\n|UNIT_CODE|申請組織コード|\n|UNIT_OFFICIAL_NAME|背院生組織名称|\n|UNIT_NAME|申請組織画面表示名称|\n|UNIT_LOCALIZED_NAME|申請組織ローカル表示名称|\n|UNIT_RESERVE1～20|申請組織予備項目1～20|\n|SECTIONROLE_CODE|申請組織セクションロールコード|\n|SECTIONROLE_NAME|申請組織セクションロール名称|\n|SECTIONROLE_RANK|申請組織セクションロールランク|\n|FORM_CODE|フォームコード|\n|FORM_NAME|フォーム名称|\n|RULE_CODE|回付ルールコード|\n|RULE_NAME|回付ルール名称|\n|BAGGAGE_CREATE_DATE|申請日|\n|APLLY_CRITERION_DATE|申請基準日|\n|BAGGAGE_FIX_DATE|承認完了日|\n|DOC_REGIST_DATE|作成日|\n|DOC_ID|書類ID|\n|DOC_VERSION|書類バージョン|\n|DOC_LISTNAME1～20|件名1～20|\n|DOC_ADMINNO|書類管理番号|\n|DOC_OWNER_NAME|書類オーナー名称|\n|DOC_FORM_CODE|フォームコード|\n|DOC_FORM_NAME|フォーム名称|\n|TASK_SEQUENCE|順序|\n|TASK_NODE_CLASS|ステップ種類|\n|TASK_NODE_NAME|ステップ名称|\n|TASK_UNIT_CODE|組織コード|\n|TASK_UNIT_NAME|組織名称|\n|TASK_ROLE_CODE|ロールコード|\n|TASK_ROLE_NAME|ロール名称|\n|TASK_USER_CODE|ユーザーコード|\n|TASK_USER_NAME|ユーザー名称|\n|TASK_PRINCIPAL_UNIT_CODE|被代理組織コード|\n|TASK_PRINCIPAL_UNIT_NAME|被代理組織名称|\n|TASK_PRINCIPAL_ROLE_CODE|被代理ロールコード|\n|TASK_PRINCIPAL_ROLE_NAME|被代理ロール名称|\n|TASK_PRINCIPAL_USER_CODE|被代理ユーザーコード|\n|TASK_PRINCIPAL_USER_NAME|被代理ユーザー名称|\n|TASK_EFFECTNAME|処理名称|\n|TASK_EFFECTDATE|処理日時|\n|TASK_ISPROXYUSER|代理ユーザーかどうか|\n|TASK_ISDEPRIVED|引上げされたかどうか|\n|TASK_DEPRIVED_NODE_NAME|引上げステップ名称|\n|TASK_COMMENT|処理時コメント|\n|TASK_RESERVE1～20|タスク予備項目1～10|\n'),
                        "defaultValue": zod_1.z.string().optional().describe('初期値<br>\n\*ない場合は空白(\"\")\n'),
                        "dateFormat": zod_1.z.string().regex(exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDateFormatRegExp).optional().describe('日付書式<br>\n\*ない場合は null<br>\n|値|意味|\n|----|----|\n|YYYYMMDD_ZERO|yyyy年MM月dd日(前0あり)|\n|YYYYMMDD_NONZERO|yyyy年MM月dd日(前0なし)|\n|YYYYMMDD_ZERO_SLASH|yyyy\/MM\/dd(前0あり)|\n|YYYYMMDD_ZERO_HYPHEN|yyyy-MM-dd(前0あり)|\n|YYYYMMDD_NONZERO_SLASH|yyyy\/MM\/dd(前0なし)|\n|YYYYMMDD_NONZERO_HYPHEN|yyyy-MM-dd(前0なし)|\n|YYYYMMDD_ZERO_DEF|yyyyMMdd(前0あり)|\n|YYYYMMDD_NONZERO_DEF|yyyyMMdd(前0なし)|\n|YYYYMM_ZERO_SLASH|yyyy\/MM(前0あり)|\n|YYYYMM_ZERO_HYPHEN|yyyy-MM(前0あり)|\n|YYYYMM_NONZERO_SLASH|yyyy\/MM(前0なし)|\n|YYYYMM_NONZERO_HYPHEN|yyyy-MM(前0なし)|\n|MMDD_ZERO_SLASH|MM\/DD(前0あり)|\n|MMDD_ZERO_HYHPEN|MM-dd(前0あり)|\n|MMDD_NONZERO_SLASH|MM\/DD(前0なし)|\n|MMDD_NONZERO_HYHPEN|MM-dd(前0なし)|\n|YYYYMM_ZERO_DEF|yyyyMM(前0あり)|\n|YYYYMM_NONZERO_DEF|yyyyMM(前0なし)|\n|MMDD_ZERO_DEF|MMDD(前0あり)|\n|MMDD_NONZERO_DEF|MMDD(前0なし)|\n'),
                        "fieldList": zod_1.z.object({}).optional().describe('フィールド一覧<br>\n\*空で表示、本APIではグループID名を使用するため表明細も判断可能\n'),
                        "maxRows": zod_1.z.unknown().optional().describe('表明細行数<br>\n\*ない場合は 0\n')
                    })).optional()
                }).optional().describe('フィールド情報')
            })).optional()
        }).optional().describe('フォームページ情報')
    }).optional(),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.listPublicFolderInfoBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listPublicFolderInfoBody = zod_1.z.object({
    "userCode": zod_1.z.string().describe('ユーザーコード'),
    "criterionDate": zod_1.z.string().regex(exports.listPublicFolderInfoBodyCriterionDateRegExp).optional().describe('基準日<br>\n\*未指定の場合は現在日付<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.listPublicFolderInfoResponse = zod_1.z.object({
    "publicFolderList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().optional().describe('公開フォルダ名称'),
            "id": zod_1.z.number().optional().describe('公開フォルダID'),
            "code": zod_1.z.string().optional().describe('公開フォルダコード'),
            "publicFormList": zod_1.z.object({
                "entries": zod_1.z.array(zod_1.z.object({
                    "formCode": zod_1.z.string().optional().describe('フォームコード'),
                    "formName": zod_1.z.string().optional().describe('フォーム名称'),
                    "ruleCode": zod_1.z.string().optional().describe('回付ルールコード'),
                    "ruleName": zod_1.z.string().optional().describe('回付ルール名称')
                })).optional()
            }).optional().describe('公開フォームのリスト'),
            "publicFolderList": zod_1.z.object({}).optional().describe('公開フォルダのリスト')
        })).optional()
    }).optional().describe('公開フォルダのリスト'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.notAdminGetVersionBody = zod_1.z.object({});
exports.notAdminGetVersionResponse = zod_1.z.object({
    "versionInfo": zod_1.z.object({
        "versionInfo": zod_1.z.string().optional().describe('AgileWorksのリリースバージョン'),
        "buildNumber": zod_1.z.number().optional().describe('AgileWorksのビルド番号')
    }).optional().describe('バージョン情報のモデル'),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.createRuleBodyRuleDefinitionRuleCodeMax = 50;
exports.createRuleBodyRuleDefinitionRuleCodeRegExp = new RegExp('^[a-zA-Z0-9_]+$');
exports.createRuleBodyRuleDefinitionRuleNameMax = 100;
exports.createRuleBodyRuleDefinitionAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.createRuleBodyRuleDefinitionAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.createRuleBodyRuleDefinitionCustomMenuEntriesItemNameMax = 255;
exports.createRuleBodyRuleDefinitionStepsEntriesItemStepNameMax = 100;
exports.createRuleBodyRuleDefinitionStepsEntriesItemCodeMax = 50;
exports.createRuleBodyRuleDefinitionStepsEntriesItemCodeRegExp = new RegExp('^[a-zA-Z0-9_]+$');
exports.createRuleBodyRuleDefinitionStepsEntriesItemCoordRegExp = new RegExp('^[A-Z]+[0-9]+$');
exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMinNumberMax = 127;
exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMin = -1;
exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMax = 127;
exports.createRuleBody = zod_1.z.object({
    "ruleDefinition": zod_1.z.object({
        "ruleCode": zod_1.z.string().max(exports.createRuleBodyRuleDefinitionRuleCodeMax).regex(exports.createRuleBodyRuleDefinitionRuleCodeRegExp).describe('ルールコード<br>\n半角英数字と \"_\" のみ(`^[a-zA-Z0-9_]+$`)、最大50文字。<br>\n作成時は未使用のコードであること(既存コードを指定するとエラー)。\n'),
        "ruleName": zod_1.z.string().max(exports.createRuleBodyRuleDefinitionRuleNameMax).describe('ルール名称。空白のみは不可、最大100文字。'),
        "availableDateFrom": zod_1.z.string().regex(exports.createRuleBodyRuleDefinitionAvailableDateFromRegExp).nullish().describe('適用開始日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n'),
        "availableDateTo": zod_1.z.string().regex(exports.createRuleBodyRuleDefinitionAvailableDateToRegExp).nullish().describe('適用終了日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n'),
        "projectCode": zod_1.z.string().describe('業務カテゴリコード。実在する業務カテゴリであること。'),
        "locale": zod_1.z.string().nullish().describe('言語。未指定可。指定する場合は \"en\"\/\"ja\"、またはライセンスで追加された言語のいずれか。'),
        "policy": zod_1.z.object({
            "absentStamp": zod_1.z.boolean().nullish().describe('不在時の印影表示'),
            "allowNonViewerEffect": zod_1.z.boolean().nullish().describe('ドキュメントビューア以外からの操作'),
            "menuControlPolicy": zod_1.z.enum(['ALWAYS', 'REFERENCE_APPROVED']).nullish().describe('関連書類を作成'),
            "electionType": zod_1.z.enum(['ALL', 'FIRST', 'LAST']).nullish().describe('同一ユーザーへの重複回付'),
            "remainedPeriod": zod_1.z.object({
                "enable": zod_1.z.boolean().nullish().describe('滞留設定にチェックが入っているか'),
                "days": zod_1.z.number().nullish().describe('何日後に督促メールを送るか')
            }).describe('滞留設定').optional(),
            "sharePolicy": zod_1.z.enum(['ALLOW', 'DENY', 'STEP']).nullish().describe('書類の共有<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ALLOW|許可|\n|DENY|許可しない|\n|STEP|ステップ毎に指定|\n'),
            "attachmentPolicy": zod_1.z.enum(['SELFUSER', 'ALLUSER']).nullish().describe('添付ファイルの編集・削除<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|SELFUSER|本人のみ|\n|ALLUSER|全てのユーザー|\n')
        }).describe('ポリシー設定').optional(),
        "customMenu": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "name": zod_1.z.string().max(exports.createRuleBodyRuleDefinitionCustomMenuEntriesItemNameMax).describe('ボタン制御ルール名称。最大255文字、customMenu内で重複不可。'),
                "url": zod_1.z.string().nullish().describe('URL')
            }).describe('ボタン制御ルール（カスタム）。エントリを指定する場合、nameは必須(最大255文字、customMenu内で重複不可)。')).optional()
        }).optional().describe('カスタムメニュー設定(ボタン制御ルール)一覧'),
        "formList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "code": zod_1.z.string().describe('フォームコード')
            }).describe('ルールに紐づくフォーム')).optional()
        }).optional().describe('ルールに紐づくフォームの設定一覧'),
        "steps": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "stepName": zod_1.z.string().max(exports.createRuleBodyRuleDefinitionStepsEntriesItemStepNameMax).nullish().describe('ステップ名称。任意、最大100文字。'),
                "code": zod_1.z.string().max(exports.createRuleBodyRuleDefinitionStepsEntriesItemCodeMax).regex(exports.createRuleBodyRuleDefinitionStepsEntriesItemCodeRegExp).describe('ステップコード。半角英数字と \"_\" のみ(`^[a-zA-Z0-9_]+$`)、最大50文字、ルール内一意。\n'),
                "remarks": zod_1.z.string().nullish().describe('備考'),
                "coord": zod_1.z.string().regex(exports.createRuleBodyRuleDefinitionStepsEntriesItemCoordRegExp).describe('座標。形式は `[A-Z]+[0-9]+`(レター部が行=Y座標、A=0,B=1,...。数字部が横位置=X座標)。<br>\nSTARTステップは \"A0\" 固定。CREATE\/APPLY\/STORE\/GOALは必ず行\"A\"(メイン行)に置く。<br>\n配置順序: CREATEより前に置けるのはSTARTのみ／APPLYより前に置けるのはSTART・CREATEのみ／\nSTOREより後に置けるのはGOALのみ／GOALより後には何も置けない。座標の重複不可。\n'),
                "stepType": zod_1.z.enum(['START', 'CREATE', 'APPLY', 'APPROVE', 'AUTOAPPLY', 'OUTPUTDOCDATA', 'CONFIRM', 'READ', 'STORE', 'SWITCH_ROOT', 'SWITCH', 'SYNC', 'DISTRIBUTE_ROOT', 'DISTRIBUTE', 'COLLECTION', 'GOAL']).describe('ステップ種別<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH_ROOT|分岐開始|\n|SWITCH|条件|\n|SYNC|分岐合流|\n|DISTRIBUTE_ROOT|並列開始|\n|DISTRIBUTE|並列|\n|COLLECTION|並列合流|\n|GOAL|終了|\n'),
                "menuPolicy": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "effectorType": zod_1.z.enum(['ADVANCE', 'ADVANCE_PROXY', 'ADVANCE_WITH_COMMENT', 'GET_BACK', 'REJECT', 'REVERSE', 'EDIT', 'SAVE', 'CANCEL', 'DELETE', 'PREVIEW', 'COPY', 'REFERENCE', 'SHARE', 'DEPRIVE', 'CUSTOM']).describe('操作種別<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ADVANCE|次へ進める|\n|ADVANCE_PROXY|次へ進める(代理)|\n|ADVANCE_WITH_COMMENT|次へ進める(コメント付き)|\n|GET_BACK|引戻す|\n|REJECT|却下する|\n|REVERSE|差戻す|\n|EDIT|書類を変更|\n|SAVE|変更を保存|\n|CANCEL|取下げる|\n|DELETE|削除をする|\n|PREVIEW|PDF出力|\n|COPY|コピーして新規作成|\n|REFERENCE|関連書類を作成|\n|SHARE|共有する|\n|DEPRIVE|引上げる|\n|CUSTOM|カスタムメニュー|\n'),
                        "enableType": zod_1.z.enum(['DISAPPROVAL', 'ALWAYS', 'EDIT', 'NOEDIT']).describe('許可種別(必須)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|DISAPPROVAL|常に操作許可しない|\n|ALWAYS|常に操作許可する|\n|EDIT|(非推奨)|\n|NOEDIT|(非推奨)|\n'),
                        "name": zod_1.z.string().describe('操作名称(必須)。effectorType=CUSTOMの場合、トップレベルcustomMenu.entriesに同名エントリが必要。')
                    }).describe('操作。エントリを指定する場合、effectorType・enableType・nameは必須。同一effectorTypeの重複不可(CUSTOMは同一nameの重複のみ不可)。')).optional()
                }).nullish().describe('操作(メニュー制御)一覧。設定可能なステップ種別: CREATE\/APPLY\/APPROVE\/CONFIRM\/READ\/STORE(いずれも任意)。<br>\n上記以外(START\/GOAL\/SWITCH系\/SYNC\/DISTRIBUTE系\/COLLECTION\/AUTOAPPLY\/OUTPUTDOCDATA)では指定不可(AWPRUL3003)。<br>\n\*\*未設定(null)を推奨\*\*: サーバーがステップ種別ごとの標準メニュー一式を自動設定する(実機確認済み。\n承認ステップは引上げ(DEPRIVE)以外を許可、それ以外のステップは可能な全操作を許可)。\n'),
                "nodePolicy": zod_1.z.object({
                    "attachmentControlType": zod_1.z.enum(['OPTION', 'NECESSARY', 'PROHIBIT']).nullish().describe('ファイル添付<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|OPTION|任意|\n|NECESSARY|必須|\n|PROHIBIT|禁止|\n'),
                    "commentControlType": zod_1.z.enum(['OPTION', 'NECESSARY', 'PROHIBIT']).nullish().describe('コメント<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|OPTION|任意|\n|NECESSARY|必須|\n|PROHIBIT|禁止|\n'),
                    "memoControlType": zod_1.z.enum(['OPTION', 'NECESSARY', 'PROHIBIT']).nullish().describe('メモ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|OPTION|任意|\n|NECESSARY|必須|\n|PROHIBIT|禁止|\n'),
                    "shareControlType": zod_1.z.enum(['ALLOW', 'DENY', 'STEP']).nullish().describe('共有<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ALLOW|許可|\n|DENY|許可しない|\n|STEP|ステップ毎に指定|\n')
                }).describe('操作制御。ステップ種別により設定可能な項目・値が異なる(いずれも任意項目。指定不可のステップ種別で値を入れるとAWPRUL3003)。<br>\nCREATE\/APPLY\/APPROVE: commentControlType=PROHIBIT不可、memoControlType=NECESSARY不可。<br>\nCONFIRM: attachmentControlType・shareControlTypeは指定不可。commentControlType=PROHIBIT不可、memoControlType=NECESSARY不可。<br>\nREAD: attachmentControlType・commentControlType・shareControlTypeは指定不可。memoControlType=NECESSARY不可。<br>\nSTORE: commentControlType・shareControlTypeは指定不可。attachmentControlType=NECESSARY不可、memoControlType=NECESSARY不可。\n').optional().describe('ポリシー(ファイル添付・コメント・メモ・共有の操作制御)。CREATE\/APPLY\/APPROVE\/CONFIRM\/READ\/STOREで設定可(各項目は任意)。<br>\nそれ以外のステップ種別(START\/GOAL\/SWITCH系\/AUTOAPPLY\/OUTPUTDOCDATA等)ではすべての項目が指定不可(AWPRUL3003)。<br>\nステップ種別ごとの値の制約は`ControlledOperationModel`の各フィールドの説明を参照。\n'),
                "isCreatorApplicant": zod_1.z.boolean().nullish().describe('オプション(作成者を申請者に自動設定)。\*\*CREATEステップのみ\*\*設定可(任意)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "operator": zod_1.z.object({
                    "candidate": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "type": zod_1.z.enum(['USER', 'UNIT', 'UNIT_ESCALATE', 'UNIT_CASCADE', 'ROLE', 'ROLE_GROUP', 'APPLICANT', 'APPLICANT_ESCALATE', 'OWNER', 'OWNER_ESCALATE', 'OWNER_CASCADE', 'PLAYER_USER', 'PLAYER_UNIT', 'PLAYER_UNIT_ESCALATE', 'PLAYER_UNIT_CASCADE', 'PLAYER_UNIT_AND_ROLE', 'PLAYER_UNIT_ESCALATE_AND_ROLE', 'PLAYER_UNIT_CASCADE_AND_ROLE', 'PLAYER_ROLE', 'STEP_USER', 'STEP_UNIT', 'STEP_UNIT_ESCALATE', 'STEP_UNIT_CASCADE', 'STEP_UNIT_AND_ROLE', 'STEP_UNIT_ESCALATE_AND_ROLE', 'STEP_UNIT_CASCADE_AND_ROLE', 'STEP_ROLE', 'NOT_FOUND']).describe('候補選出ルールタイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|USER|ユーザ指定|\n|UNIT|組織指定|\n|UNIT_ESCALATE|組織指定(上位含める)|\n|UNIT_CASCADE|組織指定(下位含める)|\n|ROLE|ロール指定|\n|ROLE_GROUP|ロールグループ指定|\n|APPLICANT|申請ユーザー|\n|APPLICANT_ESCALATE|申請部署上位|\n|OWNER|書類オーナー|\n|OWNER_ESCALATE|書類オーナーの上位|\n|OWNER_CASCADE|書類オーナーの下位|\n|PLAYER_USER|処理ユーザー|\n|PLAYER_UNIT|回付組織|\n|PLAYER_UNIT_ESCALATE|回付組織の上位|\n|PLAYER_UNIT_CASCADE|回付組織の下位|\n|PLAYER_UNIT_AND_ROLE|回付組織 + 回付ロール|\n|PLAYER_UNIT_ESCALATE_AND_ROLE|回付組織の上位 + 回付ロール|\n|PLAYER_UNIT_CASCADE_AND_ROLE|回付組織の下位 + 回付ロール|\n|PLAYER_ROLE|回付ロール|\n|STEP_USER|ステップ指定(ユーザー)|\n|STEP_UNIT|ステップ指定(組織)|\n|STEP_UNIT_ESCALATE|ステップ指定(組織)の上位|\n|STEP_UNIT_CASCADE|ステップ指定(組織)の下位|\n|STEP_UNIT_AND_ROLE|ステップ指定(組織) + 回付ロール|\n|STEP_UNIT_ESCALATE_AND_ROLE|ステップ指定(組織)の上位 + 回付ロール|\n|STEP_UNIT_CASCADE_AND_ROLE|ステップ指定(組織)の下位 + 回付ロール|\n|STEP_ROLE|ステップ指定(ロール)|\n|NOT_FOUND|存在しない値が指定されている場合|\n'),
                            "userCode": zod_1.z.string().nullish().describe('ユーザコード。\*\*type=USERのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "unitCode": zod_1.z.string().nullish().describe('組織コード。\*\*type=UNIT\/UNIT_ESCALATE\/UNIT_CASCADEのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "roleCode": zod_1.z.string().nullish().describe('ロールコード。\*\*type=ROLE、またはroleTypeを指定した場合に必須\*\*(実在チェックあり)。roleCodeとroleGroupCodeの同時指定は不可。role指定不可のtypeでは指定不可。'),
                            "roleType": zod_1.z.enum(['BUILTIN', 'SECTION', 'UNIVERSAL', 'PRIVATE']).nullish().describe('ロールタイプ。\*\*type=ROLE、またはroleCodeを指定した場合に必須\*\*。role指定不可のtypeでは指定不可\n(絶対ユーザー指定・PLAYER_\*_AND_ROLE・PLAYER_ROLE・STEP_\*_AND_ROLE・STEP_ROLEなど)。<br>\ntype=APPLICANT\/STEP_USERの場合はPRIVATEのみ指定可(SECTION\/UNIVERSAL不可)。<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|BUILTIN|ビルトインロール|\n|SECTION|セクションロール|\n|UNIVERSAL|ユニバーサルロール|\n|PRIVATE|プライベートロール|\n'),
                            "roleGroupCode": zod_1.z.string().nullish().describe('ロールグループコード。\*\*type=ROLE_GROUPのときのみ必須\*\*(実在チェックあり)。ロールグループ指定不可のtype(絶対ユーザー指定等)では指定不可。'),
                            "refStepCode": zod_1.z.string().nullish().describe('参照ステップコード。バリデーション対象外(実質未使用)。'),
                            "refStepStringCoord": zod_1.z.string().nullish().describe('参照ステップの座標(\'A1\'というフォーマットで入力する)。\*\*typeがSTEP系\n(STEP_USER\/STEP_UNIT系\/STEP_UNIT_AND_ROLE系\/STEP_ROLE)のときのみ必須\*\*。それ以外のtypeでは指定不可。\n'),
                            "isEditable": zod_1.z.boolean().nullish().describe('編集可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。'),
                            "isSharable": zod_1.z.boolean().nullish().describe('共有可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。')
                        }).describe('候補選出ルール。エントリを指定する場合、typeは必須。<br>\ntypeのステップ種別制限: APPLYでは相対指定(OWNER系・APPLICANT系・PLAYER系・STEP系)はすべて不可\n(USER\/UNIT系\/ROLE\/ROLE_GROUPの絶対指定のみ)。STORE以外ではPLAYER系・STEP_\*_AND_ROLE・STEP_ROLEは不可(STORE専用)。<br>\ncandidateとexcludeへの重複指定(同一対象)は不可。\n')).optional()
                    }).nullish().describe('処理者(候補選出ルール一覧)'),
                    "exclude": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "type": zod_1.z.enum(['USER', 'UNIT', 'UNIT_ESCALATE', 'UNIT_CASCADE', 'ROLE', 'ROLE_GROUP', 'APPLICANT', 'APPLICANT_ESCALATE', 'OWNER', 'OWNER_ESCALATE', 'OWNER_CASCADE', 'PLAYER_USER', 'PLAYER_UNIT', 'PLAYER_UNIT_ESCALATE', 'PLAYER_UNIT_CASCADE', 'PLAYER_UNIT_AND_ROLE', 'PLAYER_UNIT_ESCALATE_AND_ROLE', 'PLAYER_UNIT_CASCADE_AND_ROLE', 'PLAYER_ROLE', 'STEP_USER', 'STEP_UNIT', 'STEP_UNIT_ESCALATE', 'STEP_UNIT_CASCADE', 'STEP_UNIT_AND_ROLE', 'STEP_UNIT_ESCALATE_AND_ROLE', 'STEP_UNIT_CASCADE_AND_ROLE', 'STEP_ROLE', 'NOT_FOUND']).describe('候補選出ルールタイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|USER|ユーザ指定|\n|UNIT|組織指定|\n|UNIT_ESCALATE|組織指定(上位含める)|\n|UNIT_CASCADE|組織指定(下位含める)|\n|ROLE|ロール指定|\n|ROLE_GROUP|ロールグループ指定|\n|APPLICANT|申請ユーザー|\n|APPLICANT_ESCALATE|申請部署上位|\n|OWNER|書類オーナー|\n|OWNER_ESCALATE|書類オーナーの上位|\n|OWNER_CASCADE|書類オーナーの下位|\n|PLAYER_USER|処理ユーザー|\n|PLAYER_UNIT|回付組織|\n|PLAYER_UNIT_ESCALATE|回付組織の上位|\n|PLAYER_UNIT_CASCADE|回付組織の下位|\n|PLAYER_UNIT_AND_ROLE|回付組織 + 回付ロール|\n|PLAYER_UNIT_ESCALATE_AND_ROLE|回付組織の上位 + 回付ロール|\n|PLAYER_UNIT_CASCADE_AND_ROLE|回付組織の下位 + 回付ロール|\n|PLAYER_ROLE|回付ロール|\n|STEP_USER|ステップ指定(ユーザー)|\n|STEP_UNIT|ステップ指定(組織)|\n|STEP_UNIT_ESCALATE|ステップ指定(組織)の上位|\n|STEP_UNIT_CASCADE|ステップ指定(組織)の下位|\n|STEP_UNIT_AND_ROLE|ステップ指定(組織) + 回付ロール|\n|STEP_UNIT_ESCALATE_AND_ROLE|ステップ指定(組織)の上位 + 回付ロール|\n|STEP_UNIT_CASCADE_AND_ROLE|ステップ指定(組織)の下位 + 回付ロール|\n|STEP_ROLE|ステップ指定(ロール)|\n|NOT_FOUND|存在しない値が指定されている場合|\n'),
                            "userCode": zod_1.z.string().nullish().describe('ユーザコード。\*\*type=USERのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "unitCode": zod_1.z.string().nullish().describe('組織コード。\*\*type=UNIT\/UNIT_ESCALATE\/UNIT_CASCADEのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "roleCode": zod_1.z.string().nullish().describe('ロールコード。\*\*type=ROLE、またはroleTypeを指定した場合に必須\*\*(実在チェックあり)。roleCodeとroleGroupCodeの同時指定は不可。role指定不可のtypeでは指定不可。'),
                            "roleType": zod_1.z.enum(['BUILTIN', 'SECTION', 'UNIVERSAL', 'PRIVATE']).nullish().describe('ロールタイプ。\*\*type=ROLE、またはroleCodeを指定した場合に必須\*\*。role指定不可のtypeでは指定不可\n(絶対ユーザー指定・PLAYER_\*_AND_ROLE・PLAYER_ROLE・STEP_\*_AND_ROLE・STEP_ROLEなど)。<br>\ntype=APPLICANT\/STEP_USERの場合はPRIVATEのみ指定可(SECTION\/UNIVERSAL不可)。<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|BUILTIN|ビルトインロール|\n|SECTION|セクションロール|\n|UNIVERSAL|ユニバーサルロール|\n|PRIVATE|プライベートロール|\n'),
                            "roleGroupCode": zod_1.z.string().nullish().describe('ロールグループコード。\*\*type=ROLE_GROUPのときのみ必須\*\*(実在チェックあり)。ロールグループ指定不可のtype(絶対ユーザー指定等)では指定不可。'),
                            "refStepCode": zod_1.z.string().nullish().describe('参照ステップコード。バリデーション対象外(実質未使用)。'),
                            "refStepStringCoord": zod_1.z.string().nullish().describe('参照ステップの座標(\'A1\'というフォーマットで入力する)。\*\*typeがSTEP系\n(STEP_USER\/STEP_UNIT系\/STEP_UNIT_AND_ROLE系\/STEP_ROLE)のときのみ必須\*\*。それ以外のtypeでは指定不可。\n'),
                            "isEditable": zod_1.z.boolean().nullish().describe('編集可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。'),
                            "isSharable": zod_1.z.boolean().nullish().describe('共有可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。')
                        }).describe('候補選出ルール。エントリを指定する場合、typeは必須。<br>\ntypeのステップ種別制限: APPLYでは相対指定(OWNER系・APPLICANT系・PLAYER系・STEP系)はすべて不可\n(USER\/UNIT系\/ROLE\/ROLE_GROUPの絶対指定のみ)。STORE以外ではPLAYER系・STEP_\*_AND_ROLE・STEP_ROLEは不可(STORE専用)。<br>\ncandidateとexcludeへの重複指定(同一対象)は不可。\n')).optional()
                    }).nullish().describe('除外者(候補選出ルール一覧)')
                }).describe('処理者\/除外者。必須・設定可否はステップ種別により異なる(StepModel.operatorの説明を参照)。').optional().describe('処理者\/除外者。<br>\ncandidate: APPLY(\*\*CREATEステップが存在する場合のみ必須\*\*。CREATEが無い場合は指定不可で、申請者=起票者になる)\/\nAPPROVE・CONFIRM・READ・STORE・AUTOAPPLYでは\*\*必須\*\*。CREATE\/START\/GOAL\/SWITCH系\/OUTPUTDOCDATA等では指定不可(AWPRUL3003)。<br>\nexclude: APPLY(CREATEが存在する場合のみ設定可)\/APPROVE\/AUTOAPPLYで任意。CONFIRM\/READ\/STOREでは指定不可。\n'),
                "flowControlCondition": zod_1.z.object({
                    "method": zod_1.z.enum(['AUTO', 'MANUAL']).nullish().describe('決定方法<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|AUTO|システムで自動決定|\n|MANUAL|候補者の中からユーザーが選択|\n'),
                    "minNumber": zod_1.z.number().min(1).max(exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMinNumberMax).nullish().describe('選択人数(最小)。指定する場合は1〜127。'),
                    "maxNumber": zod_1.z.number().min(exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMin).max(exports.createRuleBodyRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMax).nullish().describe('選択人数(最大)。指定する場合は-1(無制限)〜127。'),
                    "nodeCoordList": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "coord": zod_1.z.string().optional().describe('座標')
                        }).describe('回付先または差戻し先を指定できるステップ')).optional()
                    }).nullish().describe('回付先を決定できるステップ一覧。指定するcoordは実在し、CREATE\/APPLY\/APPROVE\/AUTOAPPLYのいずれかを指すこと(CONFIRMのnodeCoordListも同様)。'),
                    "passBackNodeCoordList": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "coord": zod_1.z.string().optional().describe('座標')
                        }).describe('回付先または差戻し先を指定できるステップ')).optional()
                    }).nullish().describe('差戻し可能なステップ一覧(APPROVEのみ)。指定するcoordは実在し、CREATE\/APPLY\/APPROVE\/AUTOAPPLYのいずれかを指すこと。')
                }).describe('回付条件').optional().describe('回付条件。APPROVEで任意、CONFIRMで任意(passBackNodeCoordList以外)。それ以外のステップ種別では全項目指定不可(AWPRUL3003)。<br>\nnodeCoordList\/passBackNodeCoordListで指定するcoordは実在するステップを指し、\nCREATE\/APPLY\/APPROVE\/AUTOAPPLY(CONFIRMのnodeCoordListも同様)のいずれかである必要がある。\n'),
                "completeCondition": zod_1.z.object({
                    "method": zod_1.z.enum(['ONE_PERSON', 'ALL_PERSON', 'SPECIFIED']).nullish().describe('決定方法<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ONE_PERSON|1人が承認|\n|ALL_PERSON|全員が承認|\n|SPECIFIED|人数を指定|\n'),
                    "voteCount": zod_1.z.number().nullish().describe('選択人数。method=SPECIFIEDのときのみ意味を持ち、その場合は1〜127。')
                }).describe('完了条件').optional().describe('完了条件。\*\*APPROVEのみ\*\*任意で設定可(voteCountはmethod=SPECIFIEDのときのみ1〜127の範囲チェックあり)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "skipCondition": zod_1.z.object({
                    "isSkipRepeater": zod_1.z.boolean().nullish().describe('同一人物の連続認証をスキップするかどうか'),
                    "isSkipInferiors": zod_1.z.boolean().nullish().describe('下位役職者の認証をスキップするかどうか'),
                    "isSkipUninhabited": zod_1.z.boolean().nullish().describe('該当者不在時にスキップするかどうか')
                }).describe('フロー制御ポリシー(スキップ条件)').optional().describe('スキップ条件。設定可能な項目はステップ種別により異なる: APPLY(isSkipRepeaterのみ)\/\nAPPROVE・STORE(全項目)\/CONFIRM・READ(isSkipInferiors・isSkipUninhabitedのみ)\/AUTOAPPLY(isSkipUninhabitedのみ)。<br>\nCREATE\/START\/GOAL\/SWITCH系等では全項目指定不可(AWPRUL3003)。\n'),
                "remained": zod_1.z.object({
                    "enable": zod_1.z.boolean().nullish().describe('滞留設定にチェックが入っているか'),
                    "days": zod_1.z.number().nullish().describe('何日後に督促メールを送るか')
                }).describe('滞留設定').optional().describe('滞留設定。\*\*APPROVEのみ\*\*任意で設定可(enable=trueのときdaysは1以上)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "flowExpiration": zod_1.z.object({
                    "enable": zod_1.z.boolean().nullish().describe('回付期限設定が有効か'),
                    "days": zod_1.z.number().nullish().describe('回付期限日数。enable=trueのときは0以上。'),
                    "expirationActionType": zod_1.z.enum(['APPROVE', 'SKIP', 'REVERSE', 'REJECT']).nullish().describe('次の処理。enable=trueのときのみ意味を持つ。flowControlCondition.method=MANUALとの併用時、\nAPPROVE\/SKIPは指定不可。<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPROVE|承認|\n|SKIP|スキップ|\n|REVERSE|差戻し|\n|REJECT|却下|\n'),
                    "reverseNodeCoord": zod_1.z.string().nullish().describe('差戻し先の座標。expirationActionType=REVERSEのときは必須で、指す先はCREATE\/APPLY\/APPROVEのいずれかであること。')
                }).describe('回付期限設定').optional().describe('回付期限設定。\*\*APPROVEのみ\*\*任意で設定可(enable=trueのときdaysは0以上)。それ以外のステップ種別では指定不可(AWPRUL3003)。<br>\nexpirationActionType=REVERSEのときreverseNodeCoordは必須で、指す先はCREATE\/APPLY\/APPROVEのいずれか。<br>\nflowControlCondition.method=MANUALとの併用(expirationActionType=APPROVE\/SKIP)は不可。\n'),
                "autoApply": zod_1.z.object({
                    "startPolicy": zod_1.z.enum(['START', 'DRAFT']).nullish().describe('自動申請時の動作<br>\n指定可能な値: START, DRAFT<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。\n'),
                    "enterPolicy": zod_1.z.enum(['DONOTHING', 'REDO']).nullish().describe('再回付時の動作<br>\n指定可能な値: DONOTHING, REDO<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。\n'),
                    "formCode": zod_1.z.string().nullish().describe('フォーム。AUTOAPPLYステップでは必須。'),
                    "ruleCode": zod_1.z.string().nullish().describe('回付ルール。AUTOAPPLYステップでは必須。')
                }).describe('自動申請ポリシー。AUTOAPPLYステップの場合、formCode・ruleCodeは必須(実在する公開フォーム+ルールの組み合わせであること)。').optional().describe('自動申請。\*\*AUTOAPPLYのみ\*\*設定可、その場合formCode・ruleCodeは必須(実在する公開フォーム+ルールの組み合わせであること)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "outputDocData": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "formCode": zod_1.z.string().describe('フォームコード(必須、実在すること)'),
                        "outputDocDataCode": zod_1.z.string().describe('書類データ出力設定コード(必須、実在すること)'),
                        "formViewCode": zod_1.z.string().nullish().describe('書類ビューコード。出力形式(書類データ出力設定)がCSV\/DBの場合は必須。その場合、出力形式と書類ビューの種別が整合している必要がある。'),
                        "reOutputType": zod_1.z.enum(['NOOUTPUT', 'REOUTPUT']).nullish().describe('再出力設定<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|NOOUTPUT|再出力しない|\n|REOUTPUT|再出力する|\n')
                    }).describe('自動出力。エントリを指定する場合、formCode・outputDocDataCodeは必須。'))
                }).nullish().describe('自動出力一覧。\*\*OUTPUTDOCDATAのみ\*\*設定可、その場合\*\*最低1件必須\*\*。それ以外のステップ種別では指定不可(AWPRUL3003)。<br>\n各entryのformCode・outputDocDataCodeは必須、formViewCodeは出力形式がCSV\/DBの場合のみ必須。\n'),
                "formSetting": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "formCode": zod_1.z.string().describe('フォームコード(必須)'),
                        "formVersionSettingList": zod_1.z.object({
                            "entries": zod_1.z.array(zod_1.z.object({
                                "formVersion": zod_1.z.object({
                                    "major": zod_1.z.number().describe('メジャーバージョン'),
                                    "minor": zod_1.z.number().describe('マイナーバージョン')
                                }).describe('バージョン。formVersionとして指定する場合、major・minorは必須(対象フォームの実在バージョンであること)。'),
                                "inheritsFieldAccess": zod_1.z.boolean().nullish().describe('回付されたステップの設定を適用するか。\*\*STOREステップ専用\*\*。それ以外のステップ種別では指定不可。'),
                                "stampFieldList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "fieldId": zod_1.z.string().describe('項目ID(必須)')
                                    }).describe('押印フィールド。エントリを指定する場合、fieldIdは必須(印影フィールドとしてフォームに実在すること)。')).optional()
                                }).nullish().describe('印影フィールド一覧。READ\/STOREでは指定不可。エントリのfieldIdは必須(印影フィールドとしてフォームに実在すること。重複不可)。'),
                                "autoNumFieldList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "fieldId": zod_1.z.string().describe('項目ID(必須、フォームに実在すること)'),
                                        "numberingCode": zod_1.z.string().describe('自動採番コード(必須、実在する自動採番設定であること)'),
                                        "sortNo": zod_1.z.number().nullish().describe('印影順序')
                                    }).describe('自動採番フィールド。エントリを指定する場合、fieldId・numberingCodeは必須。')).optional()
                                }).nullish().describe('自動採番フィールド一覧。CONFIRM\/READ\/STOREでは指定不可。エントリのfieldId・numberingCodeは必須(実在すること。重複不可)。'),
                                "autoRefFieldList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "autoReferenceType": zod_1.z.enum(['USER_NAME', 'UNIT_NAME', 'SECTIONROLE_NAME', 'PROCESS_DATE']).describe('自動参照設定種別(必須)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|USER_NAME|ユーザー - 名称|\n|UNIT_NAME|組織 - 画面表示名称|\n|SECTIONROLE_NAME|組織 - セクションロール名称|\n|PROCESS_DATE|処理日時|\n'),
                                        "fieldId": zod_1.z.string().describe('項目ID(必須、フォームに実在すること)'),
                                        "orderNo": zod_1.z.number().nullish().describe('指定順序')
                                    }).describe('自動参照設定。エントリを指定する場合、autoReferenceType・fieldIdは必須。')).optional()
                                }).nullish().describe('自動参照設定フィールド一覧。APPROVE\/CONFIRMのみ設定可(CREATE\/APPLY\/STOREでは指定不可)。エントリのautoReferenceType・fieldIdは必須(重複不可)。'),
                                "fieldAccessControlList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "fieldId": zod_1.z.string().describe('フィールドID(必須)'),
                                        "isReadable": zod_1.z.boolean().nullish().describe('閲覧可であるか'),
                                        "isEditable": zod_1.z.boolean().nullish().describe('編集可であるか。CONFIRM\/READのステップでは指定不可。'),
                                        "isEssential": zod_1.z.boolean().nullish().describe('必須であるか。CONFIRM\/READのステップでは指定不可。')
                                    }).describe('フィールド別アクセス権限。エントリを指定する場合、fieldIdは必須(フォームに実在すること)。<br>\nCONFIRM\/READのステップではisEditable・isEssentialを指定不可(isReadableのみ)。\n')).optional()
                                }).nullish().describe('フィールド別アクセス権限一覧。STOREでは指定不可。CONFIRM\/READではisEditable・isEssentialを指定不可(isReadableのみ)。\nエントリのfieldIdは必須(フォームに実在すること。重複不可)。\n')
                            }).describe('フォームバージョンごとの設定。エントリを指定する場合、formVersionは必須。<br>\n各項目の設定可否はステップ種別により異なる: <br>\n|項目|CREATE|APPLY|APPROVE|CONFIRM|READ|STORE|\n|----|----|----|----|----|----|----|\n|inheritsFieldAccess|−|−|−|−|−|○(STORE専用)|\n|fieldAccessControlList|○|○|○|isReadableのみ|isReadableのみ|−|\n|autoNumFieldList|○|○|○|−|−|−|\n|autoRefFieldList|−|−|○|○|−|−|\n|stampFieldList|○|○|○|○|−|−|\n')).optional()
                        }).nullish().describe('フォームバージョンごとの設定一覧')
                    }).describe('フォーム設定。エントリを指定する場合、formCodeは必須(トップレベルformListに含まれ、実在すること)。')).optional()
                }).nullish().describe('フォーム設定一覧。CREATE\/APPLY\/APPROVE\/CONFIRM\/READ\/STOREで設定可(任意)。\nAUTOAPPLY\/OUTPUTDOCDATA\/SWITCH系\/START\/GOAL等では指定不可(AWPRUL3003)。<br>\n各項目の設定可否はステップ種別によりさらに異なる(`FormVersionSettingModel`の各フィールドの説明を参照)。\n'),
                "branchCondition": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "formCode": zod_1.z.string().describe('フォームコード(必須)'),
                        "formVersionConditionList": zod_1.z.object({
                            "entries": zod_1.z.array(zod_1.z.object({
                                "formVersion": zod_1.z.object({
                                    "major": zod_1.z.number().describe('メジャーバージョン'),
                                    "minor": zod_1.z.number().describe('マイナーバージョン')
                                }).describe('バージョン。formVersionとして指定する場合、major・minorは必須(対象フォームの実在バージョンであること)。'),
                                "logicalCondition": zod_1.z.enum(['AND', 'OR']).nullish().describe('分岐条件全体のAND\/OR(fieldToValue・fieldToField・orgRoleUserComparison間の結合)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|AND|論理積|\n|OR|論理和|\n'),
                                "fieldToValue": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "target": zod_1.z.string().describe('フィールド(フィールドID。必須)'),
                                        "comparisonMethod": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n'),
                                        "compare": zod_1.z.string().nullish().describe('比較する値')
                                    }).describe('フォームのフィールドと値を比較。エントリを指定する場合、target・comparisonMethodは必須(targetはフォームに実在するフィールドID)。')).optional()
                                }).nullish().describe('フォームのフィールドと値を比較する条件一覧'),
                                "fieldToField": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "target": zod_1.z.string().describe('フィールド(フィールドID。必須)'),
                                        "comparisonMethod": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n'),
                                        "compare": zod_1.z.string().describe('比較するフィールドID(必須)')
                                    }).describe('フォームのフィールド同士を比較。エントリを指定する場合、target・comparisonMethod・compareは必須\n(target・compareはフォームに実在するフィールドID)。comparisonMethodにEMPTY\/NOT_EMPTYは使用不可。\n')).optional()
                                }).nullish().describe('フォームのフィールド同士を比較する条件一覧'),
                                "orgRoleUserComparison": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "target": zod_1.z.string().describe('組織コード・ロールコード・ユーザーコード(必須)。typeにより実在チェック対象が変わる\n(APPLY_UNIT=組織コード、APPLY_ROLE=セクションロールコード、APPLY_USER=ユーザーコード)。\n'),
                                        "type": zod_1.z.enum(['APPLY_UNIT', 'APPLY_ROLE', 'APPLY_USER', 'FIELD']).describe('比較する組織関連種別(必須)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPLY_UNIT|申請組織|\n|APPLY_ROLE|申請者ロール|\n|APPLY_USER|申請ユーザー|\n|FIELD|フィールド|\n'),
                                        "comparisonMethod": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n')
                                    }).describe('申請組織・申請者ロール・申請ユーザー条件。エントリを指定する場合、type・target・comparisonMethodは必須。<br>\ntypeがAPPLY_UNIT\/APPLY_USERのときcomparisonMethodはEQUAL\/NOT_EQUALのみ、\nAPPLY_ROLEのときはEQUAL\/NOT_EQUAL\/LESS_THAN\/LESS_EQUAL\/GREATER_THAN\/GREATER_EQUALのみ使用可。\n')).optional()
                                }).nullish().describe('申請組織・申請者ロール・申請ユーザー条件一覧')
                            }).describe('フォームのバージョンごとの条件。エントリを指定する場合、formVersionは必須。<br>\nfieldToValue・fieldToField・orgRoleUserComparisonのいずれか最低1件が必須(すべて空だとエラー)。\n')).optional()
                        }).nullish().describe('フォームのバージョンごとの条件一覧')
                    }).describe('分岐条件(SWITCHステップのみ)。エントリを指定する場合、formCodeは必須(トップレベルformListに含まれ、実在すること)。')).optional()
                }).nullish().describe('分岐条件一覧。\*\*SWITCHステップのみ\*\*設定可。formListが空でない場合は\*\*最低1件必須\*\*。\nそれ以外のステップ種別では指定不可(AWPRUL3003)。\n'),
                "bricklet": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "caption": zod_1.z.string().describe('キャプション(必須)'),
                        "className": zod_1.z.string().describe('クラス名(必須)'),
                        "procedureName": zod_1.z.string().describe('プロシージャ名(必須)'),
                        "eventType": zod_1.z.enum(['OPEN', 'LOAD', 'ELECT', 'SAVE', 'EFFECT', 'ENTER', 'EXIT']).describe('イベントの種別(必須)<br>\n指定可能な値: OPEN, LOAD, ELECT, SAVE, EFFECT, ENTER, EXIT<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。<br>\nEFFECTの場合のみeffectorTypeも必須。\n'),
                        "effectorType": zod_1.z.enum(['CREATE', 'APPLY', 'APPLY_PROXY', 'APPROVE', 'APPROVE_WITH_COMMENTS', 'REMAND', 'REJECT', 'CANCEL', 'RETRACT', 'CONFIRM', 'DELETE', 'EDIT', 'SAVE', 'PDF', 'COPY', 'REFERENCE', 'CUSTOM', 'DEPRIVE', 'SHARE']).nullish().describe('書類操作<br>\n指定可能な値: CREATE, APPLY, APPLY_PROXY, APPROVE, APPROVE_WITH_COMMENTS, REMAND, REJECT, CANCEL, RETRACT, CONFIRM, DELETE, EDIT, SAVE, PDF, COPY, REFERENCE, CUSTOM, DEPRIVE, SHARE<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。\n')
                    }).describe('Bricklet。エントリを指定する場合、caption・className・procedureName・eventTypeは必須。\neventType=EFFECTの場合のみeffectorTypeも必須。\n')).optional()
                }).nullish().describe('Bricklet一覧。SWITCH_ROOT\/SWITCH\/SYNC\/DISTRIBUTE_ROOT\/DISTRIBUTE\/COLLECTION以外の\n全ステップ種別で任意に設定可。\n'),
                "nodeIndex": zod_1.z.number().nullish().describe('ノード番号。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外。配置はcoordから自動算出される)。null\/省略でよい。'),
                "cursorGroup": zod_1.z.number().nullish().describe('並列グループ番号。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外)。null\/省略でよい。'),
                "nodeGroup": zod_1.z.number().nullish().describe('分岐グループ番号。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外)。null\/省略でよい。'),
                "gotoCoord": zod_1.z.string().nullish().describe('対応ステップ座標。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外)。null\/省略でよい。')
            }).describe('ステップ。<br>\nルール全体としての必須構成: APPLY(申請)はちょうど1つ必須、STORE(保管)はちょうど1つ必須、\nCREATE(作成)は最大1つ(0または1)。\n'))
        }).describe('ステップ一覧')
    }).describe('回付ルール定義')
});
exports.createRuleResponse = zod_1.z.object({
    "ruleHeader": zod_1.z.object({
        "code": zod_1.z.string().nullish().describe('ルールコード<br>\n\*このフィールドは読み取り専用です。\n'),
        "name": zod_1.z.string().nullish().describe('ルール名称'),
        "majorVersion": zod_1.z.number().nullish().describe('メジャーバージョン'),
        "minorVersion": zod_1.z.number().nullish().describe('マイナーバージョン'),
        "latestMajorVersion": zod_1.z.number().nullish().describe('最新メジャーバージョン'),
        "latestMinorVersion": zod_1.z.number().nullish().describe('最新マイナーバージョン'),
        "validityDateFrom": zod_1.z.string().nullish().describe('適用開始日'),
        "validityDateTo": zod_1.z.string().nullish().describe('適用終了日'),
        "projectCode": zod_1.z.string().nullish().describe('業務カテゴリコード'),
        "localeName": zod_1.z.string().nullish().describe('ロケール名')
    }).describe('ルールヘッダ').optional(),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
exports.findRuleBodyRuleCodeMax = 50;
exports.findRuleBodyRuleCodeRegExp = new RegExp('^[a-zA-Z0-9_]+$');
exports.findRuleBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findRuleBody = zod_1.z.object({
    "ruleCode": zod_1.z.string().max(exports.findRuleBodyRuleCodeMax).regex(exports.findRuleBodyRuleCodeRegExp).describe('取得対象の回付ルールのルールコード。'),
    "criterionDate": zod_1.z.string().regex(exports.findRuleBodyCriterionDateRegExp).nullish().describe('基準日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。指定した日時点で有効なルールバージョンを取得します。<br>\n省略時はサーバーの現在日時が使用されます。version を指定した場合は無視されます。\n'),
    "version": zod_1.z.object({
        "major": zod_1.z.number().describe('メジャーバージョン'),
        "minor": zod_1.z.number().describe('マイナーバージョン')
    }).describe('バージョン。formVersionとして指定する場合、major・minorは必須(対象フォームの実在バージョンであること)。').optional().describe('取得対象のバージョン。指定した場合、criterionDateより優先されます。')
});
exports.findRuleResponseRuleDefinitionRuleCodeMax = 50;
exports.findRuleResponseRuleDefinitionRuleCodeRegExp = new RegExp('^[a-zA-Z0-9_]+$');
exports.findRuleResponseRuleDefinitionRuleNameMax = 100;
exports.findRuleResponseRuleDefinitionAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findRuleResponseRuleDefinitionAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.findRuleResponseRuleDefinitionCustomMenuEntriesItemNameMax = 255;
exports.findRuleResponseRuleDefinitionStepsEntriesItemStepNameMax = 100;
exports.findRuleResponseRuleDefinitionStepsEntriesItemCodeMax = 50;
exports.findRuleResponseRuleDefinitionStepsEntriesItemCodeRegExp = new RegExp('^[a-zA-Z0-9_]+$');
exports.findRuleResponseRuleDefinitionStepsEntriesItemCoordRegExp = new RegExp('^[A-Z]+[0-9]+$');
exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMinNumberMax = 127;
exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMin = -1;
exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMax = 127;
exports.findRuleResponse = zod_1.z.object({
    "ruleDefinition": zod_1.z.object({
        "ruleCode": zod_1.z.string().max(exports.findRuleResponseRuleDefinitionRuleCodeMax).regex(exports.findRuleResponseRuleDefinitionRuleCodeRegExp).describe('ルールコード<br>\n半角英数字と \"_\" のみ(`^[a-zA-Z0-9_]+$`)、最大50文字。<br>\n作成時は未使用のコードであること(既存コードを指定するとエラー)。\n'),
        "ruleName": zod_1.z.string().max(exports.findRuleResponseRuleDefinitionRuleNameMax).describe('ルール名称。空白のみは不可、最大100文字。'),
        "availableDateFrom": zod_1.z.string().regex(exports.findRuleResponseRuleDefinitionAvailableDateFromRegExp).nullish().describe('適用開始日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n'),
        "availableDateTo": zod_1.z.string().regex(exports.findRuleResponseRuleDefinitionAvailableDateToRegExp).nullish().describe('適用終了日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n'),
        "projectCode": zod_1.z.string().describe('業務カテゴリコード。実在する業務カテゴリであること。'),
        "locale": zod_1.z.string().nullish().describe('言語。未指定可。指定する場合は \"en\"\/\"ja\"、またはライセンスで追加された言語のいずれか。'),
        "policy": zod_1.z.object({
            "absentStamp": zod_1.z.boolean().nullish().describe('不在時の印影表示'),
            "allowNonViewerEffect": zod_1.z.boolean().nullish().describe('ドキュメントビューア以外からの操作'),
            "menuControlPolicy": zod_1.z.enum(['ALWAYS', 'REFERENCE_APPROVED']).nullish().describe('関連書類を作成'),
            "electionType": zod_1.z.enum(['ALL', 'FIRST', 'LAST']).nullish().describe('同一ユーザーへの重複回付'),
            "remainedPeriod": zod_1.z.object({
                "enable": zod_1.z.boolean().nullish().describe('滞留設定にチェックが入っているか'),
                "days": zod_1.z.number().nullish().describe('何日後に督促メールを送るか')
            }).describe('滞留設定').optional(),
            "sharePolicy": zod_1.z.enum(['ALLOW', 'DENY', 'STEP']).nullish().describe('書類の共有<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ALLOW|許可|\n|DENY|許可しない|\n|STEP|ステップ毎に指定|\n'),
            "attachmentPolicy": zod_1.z.enum(['SELFUSER', 'ALLUSER']).nullish().describe('添付ファイルの編集・削除<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|SELFUSER|本人のみ|\n|ALLUSER|全てのユーザー|\n')
        }).describe('ポリシー設定').optional(),
        "customMenu": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "name": zod_1.z.string().max(exports.findRuleResponseRuleDefinitionCustomMenuEntriesItemNameMax).describe('ボタン制御ルール名称。最大255文字、customMenu内で重複不可。'),
                "url": zod_1.z.string().nullish().describe('URL')
            }).describe('ボタン制御ルール（カスタム）。エントリを指定する場合、nameは必須(最大255文字、customMenu内で重複不可)。')).optional()
        }).optional().describe('カスタムメニュー設定(ボタン制御ルール)一覧'),
        "formList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "code": zod_1.z.string().describe('フォームコード')
            }).describe('ルールに紐づくフォーム')).optional()
        }).optional().describe('ルールに紐づくフォームの設定一覧'),
        "steps": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "stepName": zod_1.z.string().max(exports.findRuleResponseRuleDefinitionStepsEntriesItemStepNameMax).nullish().describe('ステップ名称。任意、最大100文字。'),
                "code": zod_1.z.string().max(exports.findRuleResponseRuleDefinitionStepsEntriesItemCodeMax).regex(exports.findRuleResponseRuleDefinitionStepsEntriesItemCodeRegExp).describe('ステップコード。半角英数字と \"_\" のみ(`^[a-zA-Z0-9_]+$`)、最大50文字、ルール内一意。\n'),
                "remarks": zod_1.z.string().nullish().describe('備考'),
                "coord": zod_1.z.string().regex(exports.findRuleResponseRuleDefinitionStepsEntriesItemCoordRegExp).describe('座標。形式は `[A-Z]+[0-9]+`(レター部が行=Y座標、A=0,B=1,...。数字部が横位置=X座標)。<br>\nSTARTステップは \"A0\" 固定。CREATE\/APPLY\/STORE\/GOALは必ず行\"A\"(メイン行)に置く。<br>\n配置順序: CREATEより前に置けるのはSTARTのみ／APPLYより前に置けるのはSTART・CREATEのみ／\nSTOREより後に置けるのはGOALのみ／GOALより後には何も置けない。座標の重複不可。\n'),
                "stepType": zod_1.z.enum(['START', 'CREATE', 'APPLY', 'APPROVE', 'AUTOAPPLY', 'OUTPUTDOCDATA', 'CONFIRM', 'READ', 'STORE', 'SWITCH_ROOT', 'SWITCH', 'SYNC', 'DISTRIBUTE_ROOT', 'DISTRIBUTE', 'COLLECTION', 'GOAL']).describe('ステップ種別<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH_ROOT|分岐開始|\n|SWITCH|条件|\n|SYNC|分岐合流|\n|DISTRIBUTE_ROOT|並列開始|\n|DISTRIBUTE|並列|\n|COLLECTION|並列合流|\n|GOAL|終了|\n'),
                "menuPolicy": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "effectorType": zod_1.z.enum(['ADVANCE', 'ADVANCE_PROXY', 'ADVANCE_WITH_COMMENT', 'GET_BACK', 'REJECT', 'REVERSE', 'EDIT', 'SAVE', 'CANCEL', 'DELETE', 'PREVIEW', 'COPY', 'REFERENCE', 'SHARE', 'DEPRIVE', 'CUSTOM']).describe('操作種別<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ADVANCE|次へ進める|\n|ADVANCE_PROXY|次へ進める(代理)|\n|ADVANCE_WITH_COMMENT|次へ進める(コメント付き)|\n|GET_BACK|引戻す|\n|REJECT|却下する|\n|REVERSE|差戻す|\n|EDIT|書類を変更|\n|SAVE|変更を保存|\n|CANCEL|取下げる|\n|DELETE|削除をする|\n|PREVIEW|PDF出力|\n|COPY|コピーして新規作成|\n|REFERENCE|関連書類を作成|\n|SHARE|共有する|\n|DEPRIVE|引上げる|\n|CUSTOM|カスタムメニュー|\n'),
                        "enableType": zod_1.z.enum(['DISAPPROVAL', 'ALWAYS', 'EDIT', 'NOEDIT']).describe('許可種別(必須)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|DISAPPROVAL|常に操作許可しない|\n|ALWAYS|常に操作許可する|\n|EDIT|(非推奨)|\n|NOEDIT|(非推奨)|\n'),
                        "name": zod_1.z.string().describe('操作名称(必須)。effectorType=CUSTOMの場合、トップレベルcustomMenu.entriesに同名エントリが必要。')
                    }).describe('操作。エントリを指定する場合、effectorType・enableType・nameは必須。同一effectorTypeの重複不可(CUSTOMは同一nameの重複のみ不可)。')).optional()
                }).nullish().describe('操作(メニュー制御)一覧。設定可能なステップ種別: CREATE\/APPLY\/APPROVE\/CONFIRM\/READ\/STORE(いずれも任意)。<br>\n上記以外(START\/GOAL\/SWITCH系\/SYNC\/DISTRIBUTE系\/COLLECTION\/AUTOAPPLY\/OUTPUTDOCDATA)では指定不可(AWPRUL3003)。<br>\n\*\*未設定(null)を推奨\*\*: サーバーがステップ種別ごとの標準メニュー一式を自動設定する(実機確認済み。\n承認ステップは引上げ(DEPRIVE)以外を許可、それ以外のステップは可能な全操作を許可)。\n'),
                "nodePolicy": zod_1.z.object({
                    "attachmentControlType": zod_1.z.enum(['OPTION', 'NECESSARY', 'PROHIBIT']).nullish().describe('ファイル添付<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|OPTION|任意|\n|NECESSARY|必須|\n|PROHIBIT|禁止|\n'),
                    "commentControlType": zod_1.z.enum(['OPTION', 'NECESSARY', 'PROHIBIT']).nullish().describe('コメント<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|OPTION|任意|\n|NECESSARY|必須|\n|PROHIBIT|禁止|\n'),
                    "memoControlType": zod_1.z.enum(['OPTION', 'NECESSARY', 'PROHIBIT']).nullish().describe('メモ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|OPTION|任意|\n|NECESSARY|必須|\n|PROHIBIT|禁止|\n'),
                    "shareControlType": zod_1.z.enum(['ALLOW', 'DENY', 'STEP']).nullish().describe('共有<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ALLOW|許可|\n|DENY|許可しない|\n|STEP|ステップ毎に指定|\n')
                }).describe('操作制御。ステップ種別により設定可能な項目・値が異なる(いずれも任意項目。指定不可のステップ種別で値を入れるとAWPRUL3003)。<br>\nCREATE\/APPLY\/APPROVE: commentControlType=PROHIBIT不可、memoControlType=NECESSARY不可。<br>\nCONFIRM: attachmentControlType・shareControlTypeは指定不可。commentControlType=PROHIBIT不可、memoControlType=NECESSARY不可。<br>\nREAD: attachmentControlType・commentControlType・shareControlTypeは指定不可。memoControlType=NECESSARY不可。<br>\nSTORE: commentControlType・shareControlTypeは指定不可。attachmentControlType=NECESSARY不可、memoControlType=NECESSARY不可。\n').optional().describe('ポリシー(ファイル添付・コメント・メモ・共有の操作制御)。CREATE\/APPLY\/APPROVE\/CONFIRM\/READ\/STOREで設定可(各項目は任意)。<br>\nそれ以外のステップ種別(START\/GOAL\/SWITCH系\/AUTOAPPLY\/OUTPUTDOCDATA等)ではすべての項目が指定不可(AWPRUL3003)。<br>\nステップ種別ごとの値の制約は`ControlledOperationModel`の各フィールドの説明を参照。\n'),
                "isCreatorApplicant": zod_1.z.boolean().nullish().describe('オプション(作成者を申請者に自動設定)。\*\*CREATEステップのみ\*\*設定可(任意)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "operator": zod_1.z.object({
                    "candidate": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "type": zod_1.z.enum(['USER', 'UNIT', 'UNIT_ESCALATE', 'UNIT_CASCADE', 'ROLE', 'ROLE_GROUP', 'APPLICANT', 'APPLICANT_ESCALATE', 'OWNER', 'OWNER_ESCALATE', 'OWNER_CASCADE', 'PLAYER_USER', 'PLAYER_UNIT', 'PLAYER_UNIT_ESCALATE', 'PLAYER_UNIT_CASCADE', 'PLAYER_UNIT_AND_ROLE', 'PLAYER_UNIT_ESCALATE_AND_ROLE', 'PLAYER_UNIT_CASCADE_AND_ROLE', 'PLAYER_ROLE', 'STEP_USER', 'STEP_UNIT', 'STEP_UNIT_ESCALATE', 'STEP_UNIT_CASCADE', 'STEP_UNIT_AND_ROLE', 'STEP_UNIT_ESCALATE_AND_ROLE', 'STEP_UNIT_CASCADE_AND_ROLE', 'STEP_ROLE', 'NOT_FOUND']).describe('候補選出ルールタイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|USER|ユーザ指定|\n|UNIT|組織指定|\n|UNIT_ESCALATE|組織指定(上位含める)|\n|UNIT_CASCADE|組織指定(下位含める)|\n|ROLE|ロール指定|\n|ROLE_GROUP|ロールグループ指定|\n|APPLICANT|申請ユーザー|\n|APPLICANT_ESCALATE|申請部署上位|\n|OWNER|書類オーナー|\n|OWNER_ESCALATE|書類オーナーの上位|\n|OWNER_CASCADE|書類オーナーの下位|\n|PLAYER_USER|処理ユーザー|\n|PLAYER_UNIT|回付組織|\n|PLAYER_UNIT_ESCALATE|回付組織の上位|\n|PLAYER_UNIT_CASCADE|回付組織の下位|\n|PLAYER_UNIT_AND_ROLE|回付組織 + 回付ロール|\n|PLAYER_UNIT_ESCALATE_AND_ROLE|回付組織の上位 + 回付ロール|\n|PLAYER_UNIT_CASCADE_AND_ROLE|回付組織の下位 + 回付ロール|\n|PLAYER_ROLE|回付ロール|\n|STEP_USER|ステップ指定(ユーザー)|\n|STEP_UNIT|ステップ指定(組織)|\n|STEP_UNIT_ESCALATE|ステップ指定(組織)の上位|\n|STEP_UNIT_CASCADE|ステップ指定(組織)の下位|\n|STEP_UNIT_AND_ROLE|ステップ指定(組織) + 回付ロール|\n|STEP_UNIT_ESCALATE_AND_ROLE|ステップ指定(組織)の上位 + 回付ロール|\n|STEP_UNIT_CASCADE_AND_ROLE|ステップ指定(組織)の下位 + 回付ロール|\n|STEP_ROLE|ステップ指定(ロール)|\n|NOT_FOUND|存在しない値が指定されている場合|\n'),
                            "userCode": zod_1.z.string().nullish().describe('ユーザコード。\*\*type=USERのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "unitCode": zod_1.z.string().nullish().describe('組織コード。\*\*type=UNIT\/UNIT_ESCALATE\/UNIT_CASCADEのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "roleCode": zod_1.z.string().nullish().describe('ロールコード。\*\*type=ROLE、またはroleTypeを指定した場合に必須\*\*(実在チェックあり)。roleCodeとroleGroupCodeの同時指定は不可。role指定不可のtypeでは指定不可。'),
                            "roleType": zod_1.z.enum(['BUILTIN', 'SECTION', 'UNIVERSAL', 'PRIVATE']).nullish().describe('ロールタイプ。\*\*type=ROLE、またはroleCodeを指定した場合に必須\*\*。role指定不可のtypeでは指定不可\n(絶対ユーザー指定・PLAYER_\*_AND_ROLE・PLAYER_ROLE・STEP_\*_AND_ROLE・STEP_ROLEなど)。<br>\ntype=APPLICANT\/STEP_USERの場合はPRIVATEのみ指定可(SECTION\/UNIVERSAL不可)。<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|BUILTIN|ビルトインロール|\n|SECTION|セクションロール|\n|UNIVERSAL|ユニバーサルロール|\n|PRIVATE|プライベートロール|\n'),
                            "roleGroupCode": zod_1.z.string().nullish().describe('ロールグループコード。\*\*type=ROLE_GROUPのときのみ必須\*\*(実在チェックあり)。ロールグループ指定不可のtype(絶対ユーザー指定等)では指定不可。'),
                            "refStepCode": zod_1.z.string().nullish().describe('参照ステップコード。バリデーション対象外(実質未使用)。'),
                            "refStepStringCoord": zod_1.z.string().nullish().describe('参照ステップの座標(\'A1\'というフォーマットで入力する)。\*\*typeがSTEP系\n(STEP_USER\/STEP_UNIT系\/STEP_UNIT_AND_ROLE系\/STEP_ROLE)のときのみ必須\*\*。それ以外のtypeでは指定不可。\n'),
                            "isEditable": zod_1.z.boolean().nullish().describe('編集可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。'),
                            "isSharable": zod_1.z.boolean().nullish().describe('共有可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。')
                        }).describe('候補選出ルール。エントリを指定する場合、typeは必須。<br>\ntypeのステップ種別制限: APPLYでは相対指定(OWNER系・APPLICANT系・PLAYER系・STEP系)はすべて不可\n(USER\/UNIT系\/ROLE\/ROLE_GROUPの絶対指定のみ)。STORE以外ではPLAYER系・STEP_\*_AND_ROLE・STEP_ROLEは不可(STORE専用)。<br>\ncandidateとexcludeへの重複指定(同一対象)は不可。\n')).optional()
                    }).nullish().describe('処理者(候補選出ルール一覧)'),
                    "exclude": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "type": zod_1.z.enum(['USER', 'UNIT', 'UNIT_ESCALATE', 'UNIT_CASCADE', 'ROLE', 'ROLE_GROUP', 'APPLICANT', 'APPLICANT_ESCALATE', 'OWNER', 'OWNER_ESCALATE', 'OWNER_CASCADE', 'PLAYER_USER', 'PLAYER_UNIT', 'PLAYER_UNIT_ESCALATE', 'PLAYER_UNIT_CASCADE', 'PLAYER_UNIT_AND_ROLE', 'PLAYER_UNIT_ESCALATE_AND_ROLE', 'PLAYER_UNIT_CASCADE_AND_ROLE', 'PLAYER_ROLE', 'STEP_USER', 'STEP_UNIT', 'STEP_UNIT_ESCALATE', 'STEP_UNIT_CASCADE', 'STEP_UNIT_AND_ROLE', 'STEP_UNIT_ESCALATE_AND_ROLE', 'STEP_UNIT_CASCADE_AND_ROLE', 'STEP_ROLE', 'NOT_FOUND']).describe('候補選出ルールタイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|USER|ユーザ指定|\n|UNIT|組織指定|\n|UNIT_ESCALATE|組織指定(上位含める)|\n|UNIT_CASCADE|組織指定(下位含める)|\n|ROLE|ロール指定|\n|ROLE_GROUP|ロールグループ指定|\n|APPLICANT|申請ユーザー|\n|APPLICANT_ESCALATE|申請部署上位|\n|OWNER|書類オーナー|\n|OWNER_ESCALATE|書類オーナーの上位|\n|OWNER_CASCADE|書類オーナーの下位|\n|PLAYER_USER|処理ユーザー|\n|PLAYER_UNIT|回付組織|\n|PLAYER_UNIT_ESCALATE|回付組織の上位|\n|PLAYER_UNIT_CASCADE|回付組織の下位|\n|PLAYER_UNIT_AND_ROLE|回付組織 + 回付ロール|\n|PLAYER_UNIT_ESCALATE_AND_ROLE|回付組織の上位 + 回付ロール|\n|PLAYER_UNIT_CASCADE_AND_ROLE|回付組織の下位 + 回付ロール|\n|PLAYER_ROLE|回付ロール|\n|STEP_USER|ステップ指定(ユーザー)|\n|STEP_UNIT|ステップ指定(組織)|\n|STEP_UNIT_ESCALATE|ステップ指定(組織)の上位|\n|STEP_UNIT_CASCADE|ステップ指定(組織)の下位|\n|STEP_UNIT_AND_ROLE|ステップ指定(組織) + 回付ロール|\n|STEP_UNIT_ESCALATE_AND_ROLE|ステップ指定(組織)の上位 + 回付ロール|\n|STEP_UNIT_CASCADE_AND_ROLE|ステップ指定(組織)の下位 + 回付ロール|\n|STEP_ROLE|ステップ指定(ロール)|\n|NOT_FOUND|存在しない値が指定されている場合|\n'),
                            "userCode": zod_1.z.string().nullish().describe('ユーザコード。\*\*type=USERのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "unitCode": zod_1.z.string().nullish().describe('組織コード。\*\*type=UNIT\/UNIT_ESCALATE\/UNIT_CASCADEのときのみ必須\*\*(実在チェックあり)。それ以外のtypeでは指定不可。'),
                            "roleCode": zod_1.z.string().nullish().describe('ロールコード。\*\*type=ROLE、またはroleTypeを指定した場合に必須\*\*(実在チェックあり)。roleCodeとroleGroupCodeの同時指定は不可。role指定不可のtypeでは指定不可。'),
                            "roleType": zod_1.z.enum(['BUILTIN', 'SECTION', 'UNIVERSAL', 'PRIVATE']).nullish().describe('ロールタイプ。\*\*type=ROLE、またはroleCodeを指定した場合に必須\*\*。role指定不可のtypeでは指定不可\n(絶対ユーザー指定・PLAYER_\*_AND_ROLE・PLAYER_ROLE・STEP_\*_AND_ROLE・STEP_ROLEなど)。<br>\ntype=APPLICANT\/STEP_USERの場合はPRIVATEのみ指定可(SECTION\/UNIVERSAL不可)。<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|BUILTIN|ビルトインロール|\n|SECTION|セクションロール|\n|UNIVERSAL|ユニバーサルロール|\n|PRIVATE|プライベートロール|\n'),
                            "roleGroupCode": zod_1.z.string().nullish().describe('ロールグループコード。\*\*type=ROLE_GROUPのときのみ必須\*\*(実在チェックあり)。ロールグループ指定不可のtype(絶対ユーザー指定等)では指定不可。'),
                            "refStepCode": zod_1.z.string().nullish().describe('参照ステップコード。バリデーション対象外(実質未使用)。'),
                            "refStepStringCoord": zod_1.z.string().nullish().describe('参照ステップの座標(\'A1\'というフォーマットで入力する)。\*\*typeがSTEP系\n(STEP_USER\/STEP_UNIT系\/STEP_UNIT_AND_ROLE系\/STEP_ROLE)のときのみ必須\*\*。それ以外のtypeでは指定不可。\n'),
                            "isEditable": zod_1.z.boolean().nullish().describe('編集可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。'),
                            "isSharable": zod_1.z.boolean().nullish().describe('共有可否。\*\*STOREステップのcandidateのみ\*\*設定可(任意)。STORE以外のステップ、またはexcludeでは指定不可。')
                        }).describe('候補選出ルール。エントリを指定する場合、typeは必須。<br>\ntypeのステップ種別制限: APPLYでは相対指定(OWNER系・APPLICANT系・PLAYER系・STEP系)はすべて不可\n(USER\/UNIT系\/ROLE\/ROLE_GROUPの絶対指定のみ)。STORE以外ではPLAYER系・STEP_\*_AND_ROLE・STEP_ROLEは不可(STORE専用)。<br>\ncandidateとexcludeへの重複指定(同一対象)は不可。\n')).optional()
                    }).nullish().describe('除外者(候補選出ルール一覧)')
                }).describe('処理者\/除外者。必須・設定可否はステップ種別により異なる(StepModel.operatorの説明を参照)。').optional().describe('処理者\/除外者。<br>\ncandidate: APPLY(\*\*CREATEステップが存在する場合のみ必須\*\*。CREATEが無い場合は指定不可で、申請者=起票者になる)\/\nAPPROVE・CONFIRM・READ・STORE・AUTOAPPLYでは\*\*必須\*\*。CREATE\/START\/GOAL\/SWITCH系\/OUTPUTDOCDATA等では指定不可(AWPRUL3003)。<br>\nexclude: APPLY(CREATEが存在する場合のみ設定可)\/APPROVE\/AUTOAPPLYで任意。CONFIRM\/READ\/STOREでは指定不可。\n'),
                "flowControlCondition": zod_1.z.object({
                    "method": zod_1.z.enum(['AUTO', 'MANUAL']).nullish().describe('決定方法<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|AUTO|システムで自動決定|\n|MANUAL|候補者の中からユーザーが選択|\n'),
                    "minNumber": zod_1.z.number().min(1).max(exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMinNumberMax).nullish().describe('選択人数(最小)。指定する場合は1〜127。'),
                    "maxNumber": zod_1.z.number().min(exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMin).max(exports.findRuleResponseRuleDefinitionStepsEntriesItemFlowControlConditionMaxNumberMax).nullish().describe('選択人数(最大)。指定する場合は-1(無制限)〜127。'),
                    "nodeCoordList": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "coord": zod_1.z.string().optional().describe('座標')
                        }).describe('回付先または差戻し先を指定できるステップ')).optional()
                    }).nullish().describe('回付先を決定できるステップ一覧。指定するcoordは実在し、CREATE\/APPLY\/APPROVE\/AUTOAPPLYのいずれかを指すこと(CONFIRMのnodeCoordListも同様)。'),
                    "passBackNodeCoordList": zod_1.z.object({
                        "entries": zod_1.z.array(zod_1.z.object({
                            "coord": zod_1.z.string().optional().describe('座標')
                        }).describe('回付先または差戻し先を指定できるステップ')).optional()
                    }).nullish().describe('差戻し可能なステップ一覧(APPROVEのみ)。指定するcoordは実在し、CREATE\/APPLY\/APPROVE\/AUTOAPPLYのいずれかを指すこと。')
                }).describe('回付条件').optional().describe('回付条件。APPROVEで任意、CONFIRMで任意(passBackNodeCoordList以外)。それ以外のステップ種別では全項目指定不可(AWPRUL3003)。<br>\nnodeCoordList\/passBackNodeCoordListで指定するcoordは実在するステップを指し、\nCREATE\/APPLY\/APPROVE\/AUTOAPPLY(CONFIRMのnodeCoordListも同様)のいずれかである必要がある。\n'),
                "completeCondition": zod_1.z.object({
                    "method": zod_1.z.enum(['ONE_PERSON', 'ALL_PERSON', 'SPECIFIED']).nullish().describe('決定方法<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|ONE_PERSON|1人が承認|\n|ALL_PERSON|全員が承認|\n|SPECIFIED|人数を指定|\n'),
                    "voteCount": zod_1.z.number().nullish().describe('選択人数。method=SPECIFIEDのときのみ意味を持ち、その場合は1〜127。')
                }).describe('完了条件').optional().describe('完了条件。\*\*APPROVEのみ\*\*任意で設定可(voteCountはmethod=SPECIFIEDのときのみ1〜127の範囲チェックあり)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "skipCondition": zod_1.z.object({
                    "isSkipRepeater": zod_1.z.boolean().nullish().describe('同一人物の連続認証をスキップするかどうか'),
                    "isSkipInferiors": zod_1.z.boolean().nullish().describe('下位役職者の認証をスキップするかどうか'),
                    "isSkipUninhabited": zod_1.z.boolean().nullish().describe('該当者不在時にスキップするかどうか')
                }).describe('フロー制御ポリシー(スキップ条件)').optional().describe('スキップ条件。設定可能な項目はステップ種別により異なる: APPLY(isSkipRepeaterのみ)\/\nAPPROVE・STORE(全項目)\/CONFIRM・READ(isSkipInferiors・isSkipUninhabitedのみ)\/AUTOAPPLY(isSkipUninhabitedのみ)。<br>\nCREATE\/START\/GOAL\/SWITCH系等では全項目指定不可(AWPRUL3003)。\n'),
                "remained": zod_1.z.object({
                    "enable": zod_1.z.boolean().nullish().describe('滞留設定にチェックが入っているか'),
                    "days": zod_1.z.number().nullish().describe('何日後に督促メールを送るか')
                }).describe('滞留設定').optional().describe('滞留設定。\*\*APPROVEのみ\*\*任意で設定可(enable=trueのときdaysは1以上)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "flowExpiration": zod_1.z.object({
                    "enable": zod_1.z.boolean().nullish().describe('回付期限設定が有効か'),
                    "days": zod_1.z.number().nullish().describe('回付期限日数。enable=trueのときは0以上。'),
                    "expirationActionType": zod_1.z.enum(['APPROVE', 'SKIP', 'REVERSE', 'REJECT']).nullish().describe('次の処理。enable=trueのときのみ意味を持つ。flowControlCondition.method=MANUALとの併用時、\nAPPROVE\/SKIPは指定不可。<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPROVE|承認|\n|SKIP|スキップ|\n|REVERSE|差戻し|\n|REJECT|却下|\n'),
                    "reverseNodeCoord": zod_1.z.string().nullish().describe('差戻し先の座標。expirationActionType=REVERSEのときは必須で、指す先はCREATE\/APPLY\/APPROVEのいずれかであること。')
                }).describe('回付期限設定').optional().describe('回付期限設定。\*\*APPROVEのみ\*\*任意で設定可(enable=trueのときdaysは0以上)。それ以外のステップ種別では指定不可(AWPRUL3003)。<br>\nexpirationActionType=REVERSEのときreverseNodeCoordは必須で、指す先はCREATE\/APPLY\/APPROVEのいずれか。<br>\nflowControlCondition.method=MANUALとの併用(expirationActionType=APPROVE\/SKIP)は不可。\n'),
                "autoApply": zod_1.z.object({
                    "startPolicy": zod_1.z.enum(['START', 'DRAFT']).nullish().describe('自動申請時の動作<br>\n指定可能な値: START, DRAFT<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。\n'),
                    "enterPolicy": zod_1.z.enum(['DONOTHING', 'REDO']).nullish().describe('再回付時の動作<br>\n指定可能な値: DONOTHING, REDO<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。\n'),
                    "formCode": zod_1.z.string().nullish().describe('フォーム。AUTOAPPLYステップでは必須。'),
                    "ruleCode": zod_1.z.string().nullish().describe('回付ルール。AUTOAPPLYステップでは必須。')
                }).describe('自動申請ポリシー。AUTOAPPLYステップの場合、formCode・ruleCodeは必須(実在する公開フォーム+ルールの組み合わせであること)。').optional().describe('自動申請。\*\*AUTOAPPLYのみ\*\*設定可、その場合formCode・ruleCodeは必須(実在する公開フォーム+ルールの組み合わせであること)。それ以外のステップ種別では指定不可(AWPRUL3003)。'),
                "outputDocData": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "formCode": zod_1.z.string().describe('フォームコード(必須、実在すること)'),
                        "outputDocDataCode": zod_1.z.string().describe('書類データ出力設定コード(必須、実在すること)'),
                        "formViewCode": zod_1.z.string().nullish().describe('書類ビューコード。出力形式(書類データ出力設定)がCSV\/DBの場合は必須。その場合、出力形式と書類ビューの種別が整合している必要がある。'),
                        "reOutputType": zod_1.z.enum(['NOOUTPUT', 'REOUTPUT']).nullish().describe('再出力設定<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|NOOUTPUT|再出力しない|\n|REOUTPUT|再出力する|\n')
                    }).describe('自動出力。エントリを指定する場合、formCode・outputDocDataCodeは必須。'))
                }).nullish().describe('自動出力一覧。\*\*OUTPUTDOCDATAのみ\*\*設定可、その場合\*\*最低1件必須\*\*。それ以外のステップ種別では指定不可(AWPRUL3003)。<br>\n各entryのformCode・outputDocDataCodeは必須、formViewCodeは出力形式がCSV\/DBの場合のみ必須。\n'),
                "formSetting": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "formCode": zod_1.z.string().describe('フォームコード(必須)'),
                        "formVersionSettingList": zod_1.z.object({
                            "entries": zod_1.z.array(zod_1.z.object({
                                "formVersion": zod_1.z.object({
                                    "major": zod_1.z.number().describe('メジャーバージョン'),
                                    "minor": zod_1.z.number().describe('マイナーバージョン')
                                }).describe('バージョン。formVersionとして指定する場合、major・minorは必須(対象フォームの実在バージョンであること)。'),
                                "inheritsFieldAccess": zod_1.z.boolean().nullish().describe('回付されたステップの設定を適用するか。\*\*STOREステップ専用\*\*。それ以外のステップ種別では指定不可。'),
                                "stampFieldList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "fieldId": zod_1.z.string().describe('項目ID(必須)')
                                    }).describe('押印フィールド。エントリを指定する場合、fieldIdは必須(印影フィールドとしてフォームに実在すること)。')).optional()
                                }).nullish().describe('印影フィールド一覧。READ\/STOREでは指定不可。エントリのfieldIdは必須(印影フィールドとしてフォームに実在すること。重複不可)。'),
                                "autoNumFieldList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "fieldId": zod_1.z.string().describe('項目ID(必須、フォームに実在すること)'),
                                        "numberingCode": zod_1.z.string().describe('自動採番コード(必須、実在する自動採番設定であること)'),
                                        "sortNo": zod_1.z.number().nullish().describe('印影順序')
                                    }).describe('自動採番フィールド。エントリを指定する場合、fieldId・numberingCodeは必須。')).optional()
                                }).nullish().describe('自動採番フィールド一覧。CONFIRM\/READ\/STOREでは指定不可。エントリのfieldId・numberingCodeは必須(実在すること。重複不可)。'),
                                "autoRefFieldList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "autoReferenceType": zod_1.z.enum(['USER_NAME', 'UNIT_NAME', 'SECTIONROLE_NAME', 'PROCESS_DATE']).describe('自動参照設定種別(必須)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|USER_NAME|ユーザー - 名称|\n|UNIT_NAME|組織 - 画面表示名称|\n|SECTIONROLE_NAME|組織 - セクションロール名称|\n|PROCESS_DATE|処理日時|\n'),
                                        "fieldId": zod_1.z.string().describe('項目ID(必須、フォームに実在すること)'),
                                        "orderNo": zod_1.z.number().nullish().describe('指定順序')
                                    }).describe('自動参照設定。エントリを指定する場合、autoReferenceType・fieldIdは必須。')).optional()
                                }).nullish().describe('自動参照設定フィールド一覧。APPROVE\/CONFIRMのみ設定可(CREATE\/APPLY\/STOREでは指定不可)。エントリのautoReferenceType・fieldIdは必須(重複不可)。'),
                                "fieldAccessControlList": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "fieldId": zod_1.z.string().describe('フィールドID(必須)'),
                                        "isReadable": zod_1.z.boolean().nullish().describe('閲覧可であるか'),
                                        "isEditable": zod_1.z.boolean().nullish().describe('編集可であるか。CONFIRM\/READのステップでは指定不可。'),
                                        "isEssential": zod_1.z.boolean().nullish().describe('必須であるか。CONFIRM\/READのステップでは指定不可。')
                                    }).describe('フィールド別アクセス権限。エントリを指定する場合、fieldIdは必須(フォームに実在すること)。<br>\nCONFIRM\/READのステップではisEditable・isEssentialを指定不可(isReadableのみ)。\n')).optional()
                                }).nullish().describe('フィールド別アクセス権限一覧。STOREでは指定不可。CONFIRM\/READではisEditable・isEssentialを指定不可(isReadableのみ)。\nエントリのfieldIdは必須(フォームに実在すること。重複不可)。\n')
                            }).describe('フォームバージョンごとの設定。エントリを指定する場合、formVersionは必須。<br>\n各項目の設定可否はステップ種別により異なる: <br>\n|項目|CREATE|APPLY|APPROVE|CONFIRM|READ|STORE|\n|----|----|----|----|----|----|----|\n|inheritsFieldAccess|−|−|−|−|−|○(STORE専用)|\n|fieldAccessControlList|○|○|○|isReadableのみ|isReadableのみ|−|\n|autoNumFieldList|○|○|○|−|−|−|\n|autoRefFieldList|−|−|○|○|−|−|\n|stampFieldList|○|○|○|○|−|−|\n')).optional()
                        }).nullish().describe('フォームバージョンごとの設定一覧')
                    }).describe('フォーム設定。エントリを指定する場合、formCodeは必須(トップレベルformListに含まれ、実在すること)。')).optional()
                }).nullish().describe('フォーム設定一覧。CREATE\/APPLY\/APPROVE\/CONFIRM\/READ\/STOREで設定可(任意)。\nAUTOAPPLY\/OUTPUTDOCDATA\/SWITCH系\/START\/GOAL等では指定不可(AWPRUL3003)。<br>\n各項目の設定可否はステップ種別によりさらに異なる(`FormVersionSettingModel`の各フィールドの説明を参照)。\n'),
                "branchCondition": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "formCode": zod_1.z.string().describe('フォームコード(必須)'),
                        "formVersionConditionList": zod_1.z.object({
                            "entries": zod_1.z.array(zod_1.z.object({
                                "formVersion": zod_1.z.object({
                                    "major": zod_1.z.number().describe('メジャーバージョン'),
                                    "minor": zod_1.z.number().describe('マイナーバージョン')
                                }).describe('バージョン。formVersionとして指定する場合、major・minorは必須(対象フォームの実在バージョンであること)。'),
                                "logicalCondition": zod_1.z.enum(['AND', 'OR']).nullish().describe('分岐条件全体のAND\/OR(fieldToValue・fieldToField・orgRoleUserComparison間の結合)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|AND|論理積|\n|OR|論理和|\n'),
                                "fieldToValue": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "target": zod_1.z.string().describe('フィールド(フィールドID。必須)'),
                                        "comparisonMethod": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n'),
                                        "compare": zod_1.z.string().nullish().describe('比較する値')
                                    }).describe('フォームのフィールドと値を比較。エントリを指定する場合、target・comparisonMethodは必須(targetはフォームに実在するフィールドID)。')).optional()
                                }).nullish().describe('フォームのフィールドと値を比較する条件一覧'),
                                "fieldToField": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "target": zod_1.z.string().describe('フィールド(フィールドID。必須)'),
                                        "comparisonMethod": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n'),
                                        "compare": zod_1.z.string().describe('比較するフィールドID(必須)')
                                    }).describe('フォームのフィールド同士を比較。エントリを指定する場合、target・comparisonMethod・compareは必須\n(target・compareはフォームに実在するフィールドID)。comparisonMethodにEMPTY\/NOT_EMPTYは使用不可。\n')).optional()
                                }).nullish().describe('フォームのフィールド同士を比較する条件一覧'),
                                "orgRoleUserComparison": zod_1.z.object({
                                    "entries": zod_1.z.array(zod_1.z.object({
                                        "target": zod_1.z.string().describe('組織コード・ロールコード・ユーザーコード(必須)。typeにより実在チェック対象が変わる\n(APPLY_UNIT=組織コード、APPLY_ROLE=セクションロールコード、APPLY_USER=ユーザーコード)。\n'),
                                        "type": zod_1.z.enum(['APPLY_UNIT', 'APPLY_ROLE', 'APPLY_USER', 'FIELD']).describe('比較する組織関連種別(必須)<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|APPLY_UNIT|申請組織|\n|APPLY_ROLE|申請者ロール|\n|APPLY_USER|申請ユーザー|\n|FIELD|フィールド|\n'),
                                        "comparisonMethod": zod_1.z.enum(['EQUAL', 'LESS_THAN', 'LESS_EQUAL', 'GREATER_THAN', 'GREATER_EQUAL', 'NOT_EQUAL', 'LIKE', 'NOT_LIKE', 'START_WITH', 'END_WITH', 'BETWEEN', 'EMPTY', 'NOT_EMPTY']).describe('比較演算子<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|EQUAL|～と等しい|\n|LESS_THAN|～より小さい|\n|LESS_EQUAL|～以下|\n|GREATER_THAN|～より大きい|\n|GREATER_EQUAL|～以上|\n|NOT_EQUAL|～と異なる|\n|LIKE|～を含む|\n|NOT_LIKE|～を含まない|\n|START_WITH|～から始まる|\n|END_WITH|～で終わる|\n|BETWEEN|～と～の間|\n|EMPTY|未入力|\n|NOT_EMPTY|入力されている|\n')
                                    }).describe('申請組織・申請者ロール・申請ユーザー条件。エントリを指定する場合、type・target・comparisonMethodは必須。<br>\ntypeがAPPLY_UNIT\/APPLY_USERのときcomparisonMethodはEQUAL\/NOT_EQUALのみ、\nAPPLY_ROLEのときはEQUAL\/NOT_EQUAL\/LESS_THAN\/LESS_EQUAL\/GREATER_THAN\/GREATER_EQUALのみ使用可。\n')).optional()
                                }).nullish().describe('申請組織・申請者ロール・申請ユーザー条件一覧')
                            }).describe('フォームのバージョンごとの条件。エントリを指定する場合、formVersionは必須。<br>\nfieldToValue・fieldToField・orgRoleUserComparisonのいずれか最低1件が必須(すべて空だとエラー)。\n')).optional()
                        }).nullish().describe('フォームのバージョンごとの条件一覧')
                    }).describe('分岐条件(SWITCHステップのみ)。エントリを指定する場合、formCodeは必須(トップレベルformListに含まれ、実在すること)。')).optional()
                }).nullish().describe('分岐条件一覧。\*\*SWITCHステップのみ\*\*設定可。formListが空でない場合は\*\*最低1件必須\*\*。\nそれ以外のステップ種別では指定不可(AWPRUL3003)。\n'),
                "bricklet": zod_1.z.object({
                    "entries": zod_1.z.array(zod_1.z.object({
                        "caption": zod_1.z.string().describe('キャプション(必須)'),
                        "className": zod_1.z.string().describe('クラス名(必須)'),
                        "procedureName": zod_1.z.string().describe('プロシージャ名(必須)'),
                        "eventType": zod_1.z.enum(['OPEN', 'LOAD', 'ELECT', 'SAVE', 'EFFECT', 'ENTER', 'EXIT']).describe('イベントの種別(必須)<br>\n指定可能な値: OPEN, LOAD, ELECT, SAVE, EFFECT, ENTER, EXIT<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。<br>\nEFFECTの場合のみeffectorTypeも必須。\n'),
                        "effectorType": zod_1.z.enum(['CREATE', 'APPLY', 'APPLY_PROXY', 'APPROVE', 'APPROVE_WITH_COMMENTS', 'REMAND', 'REJECT', 'CANCEL', 'RETRACT', 'CONFIRM', 'DELETE', 'EDIT', 'SAVE', 'PDF', 'COPY', 'REFERENCE', 'CUSTOM', 'DEPRIVE', 'SHARE']).nullish().describe('書類操作<br>\n指定可能な値: CREATE, APPLY, APPLY_PROXY, APPROVE, APPROVE_WITH_COMMENTS, REMAND, REJECT, CANCEL, RETRACT, CONFIRM, DELETE, EDIT, SAVE, PDF, COPY, REFERENCE, CUSTOM, DEPRIVE, SHARE<br>\n※AgileWorks本体のソースコード上、各値の意味を説明するコメントは付与されていない。\n')
                    }).describe('Bricklet。エントリを指定する場合、caption・className・procedureName・eventTypeは必須。\neventType=EFFECTの場合のみeffectorTypeも必須。\n')).optional()
                }).nullish().describe('Bricklet一覧。SWITCH_ROOT\/SWITCH\/SYNC\/DISTRIBUTE_ROOT\/DISTRIBUTE\/COLLECTION以外の\n全ステップ種別で任意に設定可。\n'),
                "nodeIndex": zod_1.z.number().nullish().describe('ノード番号。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外。配置はcoordから自動算出される)。null\/省略でよい。'),
                "cursorGroup": zod_1.z.number().nullish().describe('並列グループ番号。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外)。null\/省略でよい。'),
                "nodeGroup": zod_1.z.number().nullish().describe('分岐グループ番号。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外)。null\/省略でよい。'),
                "gotoCoord": zod_1.z.string().nullish().describe('対応ステップ座標。\*\*リクエストの入力項目ではない\*\*(バリデーション対象外)。null\/省略でよい。')
            }).describe('ステップ。<br>\nルール全体としての必須構成: APPLY(申請)はちょうど1つ必須、STORE(保管)はちょうど1つ必須、\nCREATE(作成)は最大1つ(0または1)。\n'))
        }).describe('ステップ一覧')
    }).describe('回付ルール定義').optional(),
    "resultStatus": zod_1.z.object({
        "status": zod_1.z.string().optional().describe('結果ステータス'),
        "messageList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "text": zod_1.z.string().optional().describe('結果説明'),
                "code": zod_1.z.string().optional().describe('結果コード')
            })).optional()
        }).optional().describe('メッセージ詳細'),
        "text": zod_1.z.string().optional().describe('結果説明'),
        "code": zod_1.z.string().optional().describe('結果コード')
    }).describe('APIの実行結果').optional()
});
