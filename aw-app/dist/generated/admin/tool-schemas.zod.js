"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp = exports.updateDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp = exports.updateDocAttachmentResponseDocAttachmentTypeRegExp = exports.updateDocAttachmentBody = exports.addDocAttachmentResponse = exports.addDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp = exports.addDocAttachmentResponseDocAttachmentOperationInfoRegistrationDateRegExp = exports.addDocAttachmentResponseDocAttachmentRuleStepHeaderTypeRegExp = exports.addDocAttachmentResponseDocAttachmentTypeRegExp = exports.addDocAttachmentBody = exports.deleteDocCommentResponse = exports.deleteDocCommentBody = exports.addDocCommentResponse = exports.addDocCommentResponseDocCommentOperationInfoModifyDateRegExp = exports.addDocCommentResponseDocCommentOperationInfoRegistrationDateRegExp = exports.addDocCommentResponseDocCommentEffectorTypeRegExpOne = exports.addDocCommentResponseDocCommentRuleStepHeaderTypeRegExp = exports.addDocCommentBody = exports.listDocCommentResponse = exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoModifyDateRegExp = exports.listDocCommentResponseDocCommentListEntriesItemOperationInfoRegistrationDateRegExp = exports.listDocCommentResponseDocCommentListEntriesItemEffectorTypeRegExpOne = exports.listDocCommentResponseDocCommentListEntriesItemRuleStepHeaderTypeRegExp = exports.listDocCommentBody = exports.getDocPdfBody = exports.selectDocResponse = exports.selectDocBody = exports.selectDocBodyConditionDateConditionToRegExp = exports.selectDocBodyConditionDateConditionFromRegExp = exports.selectDocBodyConditionCriterionDateRegExp = exports.hardDeleteDocResponse = exports.hardDeleteDocBody = exports.updateDocResponse = exports.updateDocResponseDocCriterionDateRegExp = exports.updateDocBody = exports.updateDocBodyCriterionDateRegExp = exports.addDocResponse = exports.addDocResponseDocCriterionDateRegExp = exports.addDocBody = exports.addDocBodyCriterionDateRegExp = exports.prepareDocRequestResponse = exports.prepareDocRequestResponseDocCriterionDateRegExp = exports.prepareDocRequestBody = exports.prepareDocRequestBodyCriterionDateRegExp = exports.getDocResponse = exports.getDocResponseDocCriterionDateRegExp = exports.getDocBody = exports.getDocHeaderResponse = exports.getDocHeaderResponseDocHeaderCriterionDateRegExp = exports.getDocHeaderBody = void 0;
exports.getWorkflowInfoResponseWorkflowInfoLastOperateDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoApplyDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoApprovedDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoCreateDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoCriterionDateRegExp = exports.getWorkflowInfoResponseWorkflowInfoCurrentRuleStepHeaderListEntriesItemTypeRegExp = exports.getWorkflowInfoBody = exports.docRejectResponse = exports.docRejectBody = exports.docRetractResponse = exports.docRetractBody = exports.docRemandResponse = exports.docRemandBody = exports.docDeleteResponse = exports.docDeleteBody = exports.docApproveResponse = exports.docApproveBody = exports.docStartResponse = exports.docStartBody = exports.docStartBodyCriterionDateRegExp = exports.docDraftResponse = exports.docDraftBody = exports.docDraftBodyCriterionDateRegExp = exports.selectWorkflowMessageResponse = exports.selectWorkflowMessageBody = exports.countListWorkflowMessageResponse = exports.countListWorkflowMessageBody = exports.countWorkflowMessageResponse = exports.countWorkflowMessageBody = exports.openDocBody = exports.deleteDocReferenceResponse = exports.deleteDocReferenceBody = exports.addDocReferenceResponse = exports.addDocReferenceBody = exports.listDocReferencerResponse = exports.listDocReferencerResponseDocHeaderListEntriesItemCriterionDateRegExp = exports.listDocReferencerBody = exports.getDocReferenceeResponse = exports.getDocReferenceeResponseDocHeaderCriterionDateRegExp = exports.getDocReferenceeBody = exports.deleteDocAttachmentResponse = exports.deleteDocAttachmentBody = exports.listDocAttachementResponse = exports.listDocAttachementResponseDocAttachmentListEntriesItemOperationInfoModifyDateRegExp = exports.listDocAttachementResponseDocAttachmentListEntriesItemOperationInfoRegistrationDateRegExp = exports.listDocAttachementResponseDocAttachmentListEntriesItemRuleStepHeaderTypeRegExp = exports.listDocAttachementResponseDocAttachmentListEntriesItemTypeRegExp = exports.listDocAttachementBody = exports.updateDocAttachmentResponse = exports.updateDocAttachmentResponseDocAttachmentOperationInfoModifyDateRegExp = void 0;
exports.updateUserResponseUserAvailableDateFromRegExp = exports.updateUserResponseUserAvailableDateToRegExp = exports.updateUserResponseUserValidityDateToRegExp = exports.updateUserBody = exports.updateUserBodyValidityDateFromRegExp = exports.updateUserBodyAvailableDateFromRegExp = exports.updateUserBodyAvailableDateToRegExp = exports.updateUserBodyValidityDateToRegExp = exports.findUserResponse = exports.findUserResponseUserListEntriesItemValidityDateFromRegExp = exports.findUserResponseUserListEntriesItemAvailableDateFromRegExp = exports.findUserResponseUserListEntriesItemAvailableDateToRegExp = exports.findUserResponseUserListEntriesItemValidityDateToRegExp = exports.findUserBody = exports.findUserBodyConditionCriterionDateRegExp = exports.addUserResponse = exports.addUserResponseUserValidityDateFromRegExp = exports.addUserResponseUserAvailableDateFromRegExp = exports.addUserResponseUserAvailableDateToRegExp = exports.addUserResponseUserValidityDateToRegExp = exports.addUserBody = exports.addUserBodyValidityDateFromRegExp = exports.addUserBodyAvailableDateFromRegExp = exports.addUserBodyAvailableDateToRegExp = exports.addUserBodyValidityDateToRegExp = exports.listShareJournalResponse = exports.listShareJournalResponseShareJournalListEntriesItemRuleStepHeaderTypeRegExp = exports.listShareJournalResponseShareJournalListEntriesItemWorkflowShareOperatorTypeRegExp = exports.listShareJournalResponseShareJournalListEntriesItemActionTypeRegExp = exports.listShareJournalResponseShareJournalListEntriesItemCreateDateRegExp = exports.listShareJournalBody = exports.listElectJournalResponse = exports.listElectJournalResponseElectJournalListEntriesItemRuleStepHeaderTypeRegExp = exports.listElectJournalResponseElectJournalListEntriesItemEventTypeRegExp = exports.listElectJournalResponseElectJournalListEntriesItemActionTypeRegExp = exports.listElectJournalResponseElectJournalListEntriesItemCreateDateRegExp = exports.listElectJournalBody = exports.listWorkflowJournalResponse = exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleStepHeaderTypeRegExp = exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemRuleEffectorTypeRegExpOne = exports.listWorkflowJournalResponseWorkflowJournalListEntriesItemCreateDateRegExp = exports.listWorkflowJournalBody = exports.findWorkflowTaskResponse = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleStepHeaderTypeRegExp = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemDeprivedRuleStepHeaderTypeRegExp = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemEffectDateRegExp = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemRuleEffectorTypeRegExpOne = exports.findWorkflowTaskResponseWorkflowTaskListEntriesItemStateRegExp = exports.findWorkflowTaskBody = exports.getWorkflowInfoResponse = void 0;
exports.addSectionRoleBody = exports.disableUnitResponse = exports.disableUnitResponseUnitAvailableDateToRegExp = exports.disableUnitResponseUnitAvailableDateFromRegExp = exports.disableUnitResponseUnitValidityDateToRegExp = exports.disableUnitResponseUnitValidityDateFromRegExp = exports.disableUnitBody = exports.disableUnitBodyAvailableDateToRegExp = exports.deleteUnitResponse = exports.deleteUnitBody = exports.deleteUnitBodyCriterionDateRegExp = exports.updateUnitResponse = exports.updateUnitResponseUnitAvailableDateToRegExp = exports.updateUnitResponseUnitAvailableDateFromRegExp = exports.updateUnitResponseUnitValidityDateToRegExp = exports.updateUnitResponseUnitValidityDateFromRegExp = exports.updateUnitBody = exports.updateUnitBodyAvailableDateToRegExp = exports.updateUnitBodyAvailableDateFromRegExp = exports.updateUnitBodyValidityDateToRegExp = exports.updateUnitBodyValidityDateFromRegExp = exports.findUnitResponse = exports.findUnitResponseUnitListEntriesItemAvailableDateToRegExp = exports.findUnitResponseUnitListEntriesItemAvailableDateFromRegExp = exports.findUnitResponseUnitListEntriesItemValidityDateToRegExp = exports.findUnitResponseUnitListEntriesItemValidityDateFromRegExp = exports.findUnitBody = exports.findUnitBodyConditionCriterionDateRegExp = exports.addUnitResponse = exports.addUnitResponseUnitAvailableDateToRegExp = exports.addUnitResponseUnitAvailableDateFromRegExp = exports.addUnitResponseUnitValidityDateToRegExp = exports.addUnitResponseUnitValidityDateFromRegExp = exports.addUnitBody = exports.addUnitBodyAvailableDateToRegExp = exports.addUnitBodyAvailableDateFromRegExp = exports.addUnitBodyValidityDateToRegExp = exports.addUnitBodyValidityDateFromRegExp = exports.disableUserResponse = exports.disableUserResponseUserValidityDateFromRegExp = exports.disableUserResponseUserAvailableDateFromRegExp = exports.disableUserResponseUserAvailableDateToRegExp = exports.disableUserResponseUserValidityDateToRegExp = exports.disableUserBody = exports.disableUserBodyAvailableDateToRegExp = exports.deleteUserResponse = exports.deleteUserBody = exports.deleteUserBodyCriterionDateRegExp = exports.updateUserResponse = exports.updateUserResponseUserValidityDateFromRegExp = void 0;
exports.addProxyApplyAppointmentBodyCriterionDateRegExp = exports.addProxyApplyAppointmentBodyAvailableDateToRegExp = exports.addProxyApplyAppointmentBodyAvailableDateFromRegExp = exports.disableUnitAppointmentResponse = exports.disableUnitAppointmentResponseUnitAppointmentCriterionDateRegExp = exports.disableUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp = exports.disableUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp = exports.disableUnitAppointmentBody = exports.disableUnitAppointmentBodyAvailableDateToRegExp = exports.deleteUnitAppointmentResponse = exports.deleteUnitAppointmentBody = exports.deleteUnitAppointmentBodyCriterionDateRegExp = exports.updateUnitAppointmentResponse = exports.updateUnitAppointmentResponseUnitAppointmentCriterionDateRegExp = exports.updateUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp = exports.updateUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp = exports.updateUnitAppointmentBody = exports.updateUnitAppointmentBodyCriterionDateRegExp = exports.updateUnitAppointmentBodyAvailableDateToRegExp = exports.updateUnitAppointmentBodyAvailableDateFromRegExp = exports.findUnitAppointmentResponse = exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemCriterionDateRegExp = exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateToRegExp = exports.findUnitAppointmentResponseUnitAppointmentListEntriesItemAvailableDateFromRegExp = exports.findUnitAppointmentBody = exports.findUnitAppointmentBodyConditionCriterionDateRegExp = exports.addUnitAppointmentResponse = exports.addUnitAppointmentResponseUnitAppointmentCriterionDateRegExp = exports.addUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp = exports.addUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp = exports.addUnitAppointmentBody = exports.addUnitAppointmentBodyCriterionDateRegExp = exports.addUnitAppointmentBodyAvailableDateToRegExp = exports.addUnitAppointmentBodyAvailableDateFromRegExp = exports.deleteSectionRoleGroupResponse = exports.deleteSectionRoleGroupBody = exports.updateSectionRoleGroupResponse = exports.updateSectionRoleGroupBody = exports.findSectionRoleGroupResponse = exports.findSectionRoleGroupBody = exports.addSectionRoleGroupResponse = exports.addSectionRoleGroupBody = exports.deleteSectionRoleResponse = exports.deleteSectionRoleBody = exports.updateSectionRoleResponse = exports.updateSectionRoleBody = exports.findSectionRoleResponse = exports.findSectionRoleBody = exports.findSectionRoleBodyConditionCriterionDateRegExp = exports.addSectionRoleResponse = void 0;
exports.deleteProxyAppointmentBody = exports.updateProxyAppointmentResponse = exports.updateProxyAppointmentResponseProxyAppointmentCriterionDateRegExp = exports.updateProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp = exports.updateProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp = exports.updateProxyAppointmentBody = exports.updateProxyAppointmentBodyCriterionDateRegExp = exports.updateProxyAppointmentBodyAvailableDateToRegExp = exports.updateProxyAppointmentBodyAvailableDateFromRegExp = exports.findProxyAppointmentResponse = exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemCriterionDateRegExp = exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateToRegExp = exports.findProxyAppointmentResponseProxyAppointmentListEntriesItemAvailableDateFromRegExp = exports.findProxyAppointmentBody = exports.findProxyAppointmentBodyConditionCriterionDateRegExp = exports.addProxyAppointmentResponse = exports.addProxyAppointmentResponseProxyAppointmentCriterionDateRegExp = exports.addProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp = exports.addProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp = exports.addProxyAppointmentBody = exports.addProxyAppointmentBodyCriterionDateRegExp = exports.addProxyAppointmentBodyAvailableDateToRegExp = exports.addProxyAppointmentBodyAvailableDateFromRegExp = exports.disableProxyApplyAppointmentResponse = exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp = exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp = exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp = exports.disableProxyApplyAppointmentBody = exports.disableProxyApplyAppointmentBodyAvailableDateToRegExp = exports.deleteProxyApplyAppointmentResponse = exports.deleteProxyApplyAppointmentBody = exports.updateProxyApplyAppointmentResponse = exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp = exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp = exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp = exports.updateProxyApplyAppointmentBody = exports.updateProxyApplyAppointmentBodyCriterionDateRegExp = exports.updateProxyApplyAppointmentBodyAvailableDateToRegExp = exports.updateProxyApplyAppointmentBodyAvailableDateFromRegExp = exports.findProxyApplyAppointmentResponse = exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemCriterionDateRegExp = exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateToRegExp = exports.findProxyApplyAppointmentResponseProxyApplicationAppointmentListEntriesItemAvailableDateFromRegExp = exports.findProxyApplyAppointmentBody = exports.findProxyApplyAppointmentBodyConditionCriterionDateRegExp = exports.addProxyApplyAppointmentResponse = exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp = exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp = exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp = exports.addProxyApplyAppointmentBody = void 0;
exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemCriterionDateRegExp = exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateToRegExp = exports.findDeprivationAppointmentResponseDeprivationAppointmentListEntriesItemAvailableDateFromRegExp = exports.findDeprivationAppointmentBody = exports.findDeprivationAppointmentBodyConditionCriterionDateRegExp = exports.addDeprivationAppointmentResponse = exports.addDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp = exports.addDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp = exports.addDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp = exports.addDeprivationAppointmentBody = exports.addDeprivationAppointmentBodyCriterionDateRegExp = exports.addDeprivationAppointmentBodyAvailableDateToRegExp = exports.addDeprivationAppointmentBodyAvailableDateFromRegExp = exports.disableDelegationAppointmentResponse = exports.disableDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp = exports.disableDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp = exports.disableDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp = exports.disableDelegationAppointmentBody = exports.disableDelegationAppointmentBodyAvailableDateToRegExp = exports.deleteDelegationAppointmentResponse = exports.deleteDelegationAppointmentBody = exports.updateDelegationAppointmentResponse = exports.updateDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp = exports.updateDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp = exports.updateDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp = exports.updateDelegationAppointmentBody = exports.updateDelegationAppointmentBodyCriterionDateRegExp = exports.updateDelegationAppointmentBodyAvailableDateToRegExp = exports.updateDelegationAppointmentBodyAvailableDateFromRegExp = exports.findDelegationAppointmentResponse = exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemCriterionDateRegExp = exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateToRegExp = exports.findDelegationAppointmentResponseDelegationAppointmentListEntriesItemAvailableDateFromRegExp = exports.findDelegationAppointmentBody = exports.findDelegationAppointmentBodyConditionCriterionDateRegExp = exports.addDelegationAppointmentResponse = exports.addDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp = exports.addDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp = exports.addDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp = exports.addDelegationAppointmentBody = exports.addDelegationAppointmentBodyCriterionDateRegExp = exports.addDelegationAppointmentBodyAvailableDateToRegExp = exports.addDelegationAppointmentBodyAvailableDateFromRegExp = exports.disableProxyAppointmentResponse = exports.disableProxyAppointmentResponseProxyAppointmentCriterionDateRegExp = exports.disableProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp = exports.disableProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp = exports.disableProxyAppointmentBody = exports.disableProxyAppointmentBodyAvailableDateToRegExp = exports.deleteProxyAppointmentResponse = void 0;
exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp = exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp = exports.updatePrivateRoleAppointmentBody = exports.updatePrivateRoleAppointmentBodyCriterionDateRegExp = exports.updatePrivateRoleAppointmentBodyAvailableDateToRegExp = exports.updatePrivateRoleAppointmentBodyAvailableDateFromRegExp = exports.findPrivateRoleAppointmentResponse = exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemCriterionDateRegExp = exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDatetoRegExp = exports.findPrivateRoleAppointmentResponsePrivateRoleAppointmentListEntriesItemAvailableDateFromRegExp = exports.findPrivateRoleAppointmentBody = exports.findPrivateRoleAppointmentBodyConditionCriterionDateRegExp = exports.addPrivateRoleAppointmentResponse = exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp = exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp = exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp = exports.addPrivateRoleAppointmentBody = exports.addPrivateRoleAppointmentBodyCriterionDateRegExp = exports.addPrivateRoleAppointmentBodyAvailableDatetoRegExp = exports.addPrivateRoleAppointmentBodyAvailableDateFromRegExp = exports.deletePrivateRoleResponse = exports.deletePrivateRoleBody = exports.updatePrivateRoleResponse = exports.updatePrivateRoleResponsePrivateRoleCandidateListEntriesItemCriterionDateRegExp = exports.updatePrivateRoleBody = exports.updatePrivateRoleBodyCandidateListEntriesItemCriterionDateRegExp = exports.findPrivateRoleResponse = exports.findPrivateRoleResponsePrivateRoleListEntriesItemCandidateListEntriesItemCriterionDateRegExp = exports.findPrivateRoleBody = exports.addPrivateRoleResponse = exports.addPrivateRoleResponsePrivateRoleCandidateListEntriesItemCriterionDateRegExp = exports.addPrivateRoleBody = exports.addPrivateRoleBodyCandidateListEntriesItemCriterionDateRegExp = exports.disableDeprivationAppointmentResponse = exports.disableDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp = exports.disableDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp = exports.disableDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp = exports.disableDeprivationAppointmentBody = exports.disableDeprivationAppointmentBodyAvailableDateToRegExp = exports.deleteDeprivationAppointmentResponse = exports.deleteDeprivationAppointmentBody = exports.updateDeprivationAppointmentResponse = exports.updateDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp = exports.updateDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp = exports.updateDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp = exports.updateDeprivationAppointmentBody = exports.updateDeprivationAppointmentBodyCriterionDateRegExp = exports.updateDeprivationAppointmentBodyAvailableDateToRegExp = exports.updateDeprivationAppointmentBodyAvailableDateFromRegExp = exports.findDeprivationAppointmentResponse = void 0;
exports.findProjectResponse = exports.findProjectBody = exports.disableUniversalRoleAppointmentResponse = exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp = exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp = exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp = exports.disableUniversalRoleAppointmentBody = exports.disableUniversalRoleAppointmentBodyAvailableDateToRegExp = exports.deleteUniversalRoleAppointmentResponse = exports.deleteUniversalRoleAppointmentBody = exports.updateUniversalRoleAppointmentResponse = exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp = exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp = exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp = exports.updateUniversalRoleAppointmentBody = exports.updateUniversalRoleAppointmentBodyCriterionDateRegExp = exports.updateUniversalRoleAppointmentBodyAvailableDateToRegExp = exports.updateUniversalRoleAppointmentBodyAvailableDateFromRegExp = exports.findUniversalRoleAppointmentResponse = exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDatetoRegExp = exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemAvailableDateFromRegExp = exports.findUniversalRoleAppointmentResponseUniversalRoleAppointmentListEntriesItemCriterionDateRegExp = exports.findUniversalRoleAppointmentBody = exports.findUniversalRoleAppointmentBodyConditionCriterionDateRegExp = exports.addUniversalRoleAppointmentResponse = exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp = exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp = exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp = exports.addUniversalRoleAppointmentBody = exports.addUniversalRoleAppointmentBodyAvailableDatetoRegExp = exports.addUniversalRoleAppointmentBodyAvailableDateFromRegExp = exports.addUniversalRoleAppointmentBodyCriterionDateRegExp = exports.deleteUniversalRoleResponse = exports.deleteUniversalRoleBody = exports.updateUniversalRoleResponse = exports.updateUniversalRoleBody = exports.findUniversalRoleResponse = exports.findUniversalRoleBody = exports.addUniversalRoleResponse = exports.addUniversalRoleBody = exports.disablePrivateRoleAppointmentResponse = exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp = exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp = exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp = exports.disablePrivateRoleAppointmentBody = exports.disablePrivateRoleAppointmentBodyAvailableDateToRegExp = exports.deletePrivateRoleAppointmentResponse = exports.deletePrivateRoleAppointmentBody = exports.updatePrivateRoleAppointmentResponse = exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp = void 0;
exports.notAdminGetVersionResponse = exports.notAdminGetVersionBody = exports.listPublicFolderInfoResponse = exports.listPublicFolderInfoBody = exports.listPublicFolderInfoBodyCriterionDateRegExp = exports.findFormDefinitionResponse = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDateFormatRegExp = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemLookupValueRegExp = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemDataTypeRegExp = exports.findFormDefinitionResponseFormPagesEntriesItemFieldsEntriesItemFieldTypeRegExp = exports.findFormDefinitionBody = exports.findFormDefinitionBodyCriterionDateRegExp = exports.listFormResponse = exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateFromRegExp = exports.listFormResponseFormProjectEntriesItemFormEntriesItemValidityDateToRegExp = exports.listFormResponseFormProjectEntriesItemFormEntriesItemTypeRegExp = exports.listFormBody = exports.listFormBodyCriterionDateRegExp = exports.listComponentAutoNumberResponse = exports.listComponentAutoNumberBody = exports.listComponentMasterWindowResponse = exports.listComponentMasterWindowBody = exports.exportUserMasterBody = exports.importUserMasterResponse = exports.importUserMasterBody = exports.exportTinyUserMasterBody = exports.importTinyUserMasterResponse = exports.importTinyUserMasterBody = void 0;
/**
 * Generated by orval v7.21.0 🍺
 * Do not edit manually.
 * AgileWorks WebAPI (R3.2.0)
 * OpenAPI spec version: 1.0.0
 */
const zod_1 = require("zod");
exports.getDocHeaderBody = zod_1.z.number().describe('書類ID');
exports.getDocHeaderResponseDocHeaderCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getDocHeaderResponse = zod_1.z.object({
    "docHeader": zod_1.z.object({
        "owner": zod_1.z.object({
            "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
            "code": zod_1.z.string().optional().describe('書類オーナーコード')
        }).optional().describe('書類オーナー'),
        "id": zod_1.z.number().optional().describe('書類ID'),
        "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
        "criterionDate": zod_1.z.string().regex(exports.getDocHeaderResponseDocHeaderCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
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
exports.getDocBody = zod_1.z.number().describe('書類ID');
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
exports.hardDeleteDocBody = zod_1.z.number().describe('書類ID');
exports.hardDeleteDocResponse = zod_1.z.object({
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
        "docid": zod_1.z.number().optional().describe('書類ID'),
        "adminNo": zod_1.z.string().optional().describe('書類管理番号'),
        "formCode": zod_1.z.string().optional().describe('フォームコード'),
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
exports.getDocPdfBody = zod_1.z.object({
    "instructionList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "docId": zod_1.z.string().describe('書類ID'),
            "isInsertTrail": zod_1.z.boolean().optional().describe('証跡PDFを挿入するかどうか<br>\n\*true または false\n')
        })).describe('書類PDF生成情報')
    }).describe('書類PDF生成情報のリスト')
});
exports.listDocCommentBody = zod_1.z.number().describe('書類ID');
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
exports.deleteDocCommentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('コメントID<br>\n\*「書類メモ追加API」または「書類コメント\/メモ一覧取得API」で取得したコメントのIDを指定\n')
});
exports.deleteDocCommentResponse = zod_1.z.object({
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
exports.listDocAttachementBody = zod_1.z.number().describe('書類ID');
exports.listDocAttachementResponseDocAttachmentListEntriesItemTypeRegExp = new RegExp('doc.EnumDocAttachmentType');
exports.listDocAttachementResponseDocAttachmentListEntriesItemRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.listDocAttachementResponseDocAttachmentListEntriesItemOperationInfoRegistrationDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listDocAttachementResponseDocAttachmentListEntriesItemOperationInfoModifyDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listDocAttachementResponse = zod_1.z.object({
    "docAttachmentList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "name": zod_1.z.string().optional().describe('ファイル名称'),
            "id": zod_1.z.number().optional().describe('書類添付ID'),
            "type": zod_1.z.string().regex(exports.listDocAttachementResponseDocAttachmentListEntriesItemTypeRegExp).optional().describe('書類添付タイプ<br>\n|パラメータ|説明|\n|----|----|\n|FILE|添付ファイル|\n|URL|URL|\n'),
            "size": zod_1.z.number().optional().describe('ファイルサイズ'),
            "path": zod_1.z.string().optional().describe('エンコードされたパス情報'),
            "explanation": zod_1.z.string().optional().describe('添付書類の説明'),
            "ruleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.listDocAttachementResponseDocAttachmentListEntriesItemRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
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
                "registrationDate": zod_1.z.string().regex(exports.listDocAttachementResponseDocAttachmentListEntriesItemOperationInfoRegistrationDateRegExp).optional().describe('登録日時'),
                "modifyDate": zod_1.z.string().regex(exports.listDocAttachementResponseDocAttachmentListEntriesItemOperationInfoModifyDateRegExp).optional().describe('更新日時'),
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
exports.deleteDocAttachmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('添付ID<br>\n\*「書類添付情報一覧取得API」で取得した書類添付IDを指定\n')
});
exports.deleteDocAttachmentResponse = zod_1.z.object({
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
exports.getDocReferenceeBody = zod_1.z.number().describe('書類ID');
exports.getDocReferenceeResponseDocHeaderCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.getDocReferenceeResponse = zod_1.z.object({
    "docHeader": zod_1.z.object({
        "owner": zod_1.z.object({
            "type": zod_1.z.enum(['UNIT', 'USER']).optional().describe('書類オーナータイプ<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|UNIT|組織|\n|USER|ユーザー|\n'),
            "code": zod_1.z.string().optional().describe('書類オーナーコード')
        }).optional().describe('書類オーナー'),
        "id": zod_1.z.number().optional().describe('書類ID'),
        "version": zod_1.z.string().optional().describe('バージョン<br>\n\*書類履歴のバージョン\n'),
        "criterionDate": zod_1.z.string().regex(exports.getDocReferenceeResponseDocHeaderCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
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
exports.listDocReferencerBody = zod_1.z.number().describe('書類ID');
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
exports.deleteDocReferenceBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID(参照先関連書類ID)'),
    "refDocId": zod_1.z.number().describe('関連書類ID(参照元関連書類ID)')
});
exports.deleteDocReferenceResponse = zod_1.z.object({
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
exports.docDeleteBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID')
});
exports.docDeleteResponse = zod_1.z.object({
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
exports.docRejectBody = zod_1.z.object({
    "docId": zod_1.z.number().describe('書類ID'),
    "operatorCode": zod_1.z.string().optional().describe('却下する処理者のユーザーコード<br>\n\*未指定の場合は、却下ステップに設定されている任意の処理者で却下される（どの処理者で却下されるかは不定）\n'),
    "ruleStepCode": zod_1.z.string().describe('却下ステップのコード'),
    "comment": zod_1.z.string().describe('コメント')
});
exports.docRejectResponse = zod_1.z.object({
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
exports.getWorkflowInfoBody = zod_1.z.number().describe('書類ID');
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
exports.listWorkflowJournalBody = zod_1.z.number().describe('書類ID');
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
exports.listElectJournalBody = zod_1.z.number().describe('書類ID');
exports.listElectJournalResponseElectJournalListEntriesItemCreateDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listElectJournalResponseElectJournalListEntriesItemActionTypeRegExp = new RegExp('workflow.EnumElectActionType');
exports.listElectJournalResponseElectJournalListEntriesItemEventTypeRegExp = new RegExp('workflow.EnumElectEventType');
exports.listElectJournalResponseElectJournalListEntriesItemRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.listElectJournalResponse = zod_1.z.object({
    "electJournalList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "createDate": zod_1.z.string().regex(exports.listElectJournalResponseElectJournalListEntriesItemCreateDateRegExp).optional().describe('登録日時<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。'),
            "addOperator": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('追加ユーザー'),
            "actionType": zod_1.z.string().regex(exports.listElectJournalResponseElectJournalListEntriesItemActionTypeRegExp).optional().describe('操作内容<br>\n|パラメータ|説明|\n|----|----|\n|ADD|追加|\n|SELECT_APPLY_USER|申請ユーザー選択（申請ステップ用）|\n|DELETE|削除|\n|DELEGATE|委譲|\n'),
            "eventType": zod_1.z.string().regex(exports.listElectJournalResponseElectJournalListEntriesItemEventTypeRegExp).optional().describe('イベント<br>\n|パラメータ|説明|\n|----|----|\n|USER_SELECT|ユーザー選択|\n|ADMIN_SELECT|管理者選択|\n|DELEGATION|権限委譲|\n'),
            "docId": zod_1.z.number().optional().describe('書類ID'),
            "deletedOperator": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('削除ユーザー'),
            "ruleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.listElectJournalResponseElectJournalListEntriesItemRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            }).optional().describe('ステップ情報')
        })).optional().describe('処理者変更履歴一覧')
    }).optional().describe('処理者変更履歴検索結果'),
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
exports.listShareJournalBody = zod_1.z.number().describe('書類ID');
exports.listShareJournalResponseShareJournalListEntriesItemCreateDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.listShareJournalResponseShareJournalListEntriesItemActionTypeRegExp = new RegExp('workflow.EnumElectActionType');
exports.listShareJournalResponseShareJournalListEntriesItemWorkflowShareOperatorTypeRegExp = new RegExp('workflow.EnumWorkflowShareOperatorType');
exports.listShareJournalResponseShareJournalListEntriesItemRuleStepHeaderTypeRegExp = new RegExp('rule.EnumRuleStepType');
exports.listShareJournalResponse = zod_1.z.object({
    "shareJournalList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "createDate": zod_1.z.string().regex(exports.listShareJournalResponseShareJournalListEntriesItemCreateDateRegExp).optional().describe('登録日時<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。'),
            "addOperator": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('追加ユーザー'),
            "actionType": zod_1.z.string().regex(exports.listShareJournalResponseShareJournalListEntriesItemActionTypeRegExp).optional().describe('操作内容<br>\n|パラメータ|説明|\n|----|----|\n|ADD|追加|\n|SELECT_APPLY_USER|申請ユーザー選択（申請ステップ用）|\n|DELETE|削除|\n|DELEGATE|委譲|\n'),
            "docId": zod_1.z.number().optional().describe('書類ID'),
            "deletedOperator": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('削除ユーザー'),
            "sharedOperator": zod_1.z.object({
                "userName": zod_1.z.string().optional().describe('ユーザー名称'),
                "userCode": zod_1.z.string().optional().describe('ユーザーコード'),
                "unitName": zod_1.z.string().optional().describe('組織名称'),
                "unitCode": zod_1.z.string().optional().describe('組織コード'),
                "roleName": zod_1.z.string().optional().describe('ロール名称'),
                "roleCode": zod_1.z.string().optional().describe('ロールコード')
            }).optional().describe('共有ユーザー'),
            "workflowShareOperatorType": zod_1.z.string().regex(exports.listShareJournalResponseShareJournalListEntriesItemWorkflowShareOperatorTypeRegExp).optional().describe('回付履歴上の処理者<br>\n|パラメータ|説明|\n|----|----|\n|RECIVER|被共有者|\n|SENDER|共有者|\n'),
            "ruleStepHeader": zod_1.z.object({
                "name": zod_1.z.string().optional().describe('ステップ名称'),
                "type": zod_1.z.string().regex(exports.listShareJournalResponseShareJournalListEntriesItemRuleStepHeaderTypeRegExp).optional().describe('ステップ種別<br>\n|パラメータ|説明|\n|----|----|\n|START|開始|\n|CREATE|作成|\n|APPLY|申請|\n|APPROVE|承認|\n|AUTOAPPLY|自動申請|\n|OUTPUTDOCDATA|自動出力|\n|CONFIRM|報告|\n|READ|閲覧|\n|STORE|保管|\n|SWITCH|分岐開始|\n|SYNC|分岐合流|\n|DISTRIBUTE|並列開始|\n|COLLECTION|並列合流|\n|END|終了|\n'),
                "index": zod_1.z.number().optional().describe('インデックス'),
                "code": zod_1.z.string().optional().describe('ステップコード')
            }).optional().describe('ステップ情報')
        })).optional().describe('共有履歴一覧')
    }).optional().describe('共有履歴検索結果'),
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
exports.addUserBodyValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserBodyValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserBody = zod_1.z.object({
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
    "validityDateTo": zod_1.z.string().regex(exports.addUserBodyValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "loginId": zod_1.z.string().describe('ログインID'),
    "code": zod_1.z.string().describe('ユーザーコード'),
    "kana": zod_1.z.string().optional().describe('ユーザー名称カナ'),
    "availableDateTo": zod_1.z.string().regex(exports.addUserBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "stampName": zod_1.z.string().optional().describe('印影'),
    "mailAddress": zod_1.z.string().optional().describe('メールアドレス'),
    "remarks": zod_1.z.string().optional().describe('備考'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "availableDateFrom": zod_1.z.string().regex(exports.addUserBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "validityDateFrom": zod_1.z.string().regex(exports.addUserBodyValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "isNeedStampImage": zod_1.z.string().optional(),
    "isForceChangePassword": zod_1.z.boolean().optional().describe('次回ログイン時にパスワード変更を求めるかどうか<br>\n\*true の指定は無効\n'),
    "isAccountLock": zod_1.z.boolean().optional().describe('アカウントロックフラグ')
});
exports.addUserResponseUserValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserResponseUserAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserResponseUserAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserResponseUserValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUserResponse = zod_1.z.object({
    "user": zod_1.z.object({
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
        "validityDateTo": zod_1.z.string().regex(exports.addUserResponseUserValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "loginId": zod_1.z.string().describe('ログインID'),
        "code": zod_1.z.string().describe('ユーザーコード'),
        "kana": zod_1.z.string().optional().describe('ユーザー名称カナ'),
        "availableDateTo": zod_1.z.string().regex(exports.addUserResponseUserAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "stampName": zod_1.z.string().optional().describe('印影'),
        "mailAddress": zod_1.z.string().optional().describe('メールアドレス'),
        "remarks": zod_1.z.string().optional().describe('備考'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.addUserResponseUserAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "validityDateFrom": zod_1.z.string().regex(exports.addUserResponseUserValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "isNeedStampImage": zod_1.z.string().optional(),
        "isForceChangePassword": zod_1.z.boolean().optional().describe('次回ログイン時にパスワード変更を求めるかどうか<br>\n\*true の指定は無効\n'),
        "isAccountLock": zod_1.z.boolean().optional().describe('アカウントロックフラグ')
    }).optional().describe('ユーザー情報'),
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
exports.updateUserBodyValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserBodyValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象ユーザーのID<br>\n\*「ユーザー作成API」または「ユーザー参照API」で取得した値を指定\n'),
    "criterionDate": zod_1.z.string().optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "name": zod_1.z.string().describe('ユーザー名称'),
    "diplayLanguage": zod_1.z.string().optional().describe('表示言語<br>\n以下のいずれかを指定<br>\nauto：ブラウザ設定に従う<br>\nja：日本語<br>\nen：英語<br>\nzh_CN：中文（簡体）<br>\nzh_TW：中文（繁体）\n'),
    "localeName": zod_1.z.string().optional().describe('ローカル名称の言語名'),
    "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
    "password": zod_1.z.string().optional().describe('パスワード'),
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
    "validityDateTo": zod_1.z.string().regex(exports.updateUserBodyValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "loginId": zod_1.z.string().describe('ログインID'),
    "code": zod_1.z.string().describe('ユーザーコード'),
    "kana": zod_1.z.string().optional().describe('ユーザー名称カナ'),
    "availableDateTo": zod_1.z.string().regex(exports.updateUserBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "stampName": zod_1.z.string().optional().describe('印影'),
    "mailAddress": zod_1.z.string().optional().describe('メールアドレス'),
    "remarks": zod_1.z.string().optional().describe('備考'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "availableDateFrom": zod_1.z.string().regex(exports.updateUserBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "validityDateFrom": zod_1.z.string().regex(exports.updateUserBodyValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "isNeedStampImage": zod_1.z.string().optional(),
    "isForceChangePassword": zod_1.z.boolean().optional().describe('次回ログイン時にパスワード変更を求めるかどうか<br>\n\*true の指定は無効\n'),
    "isAccountLock": zod_1.z.boolean().optional().describe('アカウントロックフラグ')
});
exports.updateUserResponseUserValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserResponseUserAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserResponseUserAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserResponseUserValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUserResponse = zod_1.z.object({
    "user": zod_1.z.object({
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
        "validityDateTo": zod_1.z.string().regex(exports.updateUserResponseUserValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "loginId": zod_1.z.string().describe('ログインID'),
        "code": zod_1.z.string().describe('ユーザーコード'),
        "kana": zod_1.z.string().optional().describe('ユーザー名称カナ'),
        "availableDateTo": zod_1.z.string().regex(exports.updateUserResponseUserAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "stampName": zod_1.z.string().optional().describe('印影'),
        "mailAddress": zod_1.z.string().optional().describe('メールアドレス'),
        "remarks": zod_1.z.string().optional().describe('備考'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.updateUserResponseUserAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "validityDateFrom": zod_1.z.string().regex(exports.updateUserResponseUserValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "isNeedStampImage": zod_1.z.string().optional(),
        "isForceChangePassword": zod_1.z.boolean().optional().describe('次回ログイン時にパスワード変更を求めるかどうか<br>\n\*true の指定は無効\n'),
        "isAccountLock": zod_1.z.boolean().optional().describe('アカウントロックフラグ')
    }).optional().describe('ユーザー情報'),
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
exports.deleteUserBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.deleteUserBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象ユーザーのID<br>\n\*「ユーザー作成API」または「ユーザー参照API」で取得した値を指定\n'),
    "criterionDate": zod_1.z.string().regex(exports.deleteUserBodyCriterionDateRegExp).optional().describe('削除用基準日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.deleteUserResponse = zod_1.z.object({
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
exports.disableUserBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUserBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象ユーザーのID<br>\n\*「ユーザー作成API」または「ユーザー参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableUserBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.disableUserResponseUserValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUserResponseUserAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUserResponseUserAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUserResponseUserValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUserResponse = zod_1.z.object({
    "user": zod_1.z.object({
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
        "validityDateTo": zod_1.z.string().regex(exports.disableUserResponseUserValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "loginId": zod_1.z.string().describe('ログインID'),
        "code": zod_1.z.string().describe('ユーザーコード'),
        "kana": zod_1.z.string().optional().describe('ユーザー名称カナ'),
        "availableDateTo": zod_1.z.string().regex(exports.disableUserResponseUserAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "stampName": zod_1.z.string().optional().describe('印影'),
        "mailAddress": zod_1.z.string().optional().describe('メールアドレス'),
        "remarks": zod_1.z.string().optional().describe('備考'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.disableUserResponseUserAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "validityDateFrom": zod_1.z.string().regex(exports.disableUserResponseUserValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "isNeedStampImage": zod_1.z.string().optional(),
        "isForceChangePassword": zod_1.z.boolean().optional().describe('次回ログイン時にパスワード変更を求めるかどうか<br>\n\*true の指定は無効\n'),
        "isAccountLock": zod_1.z.boolean().optional().describe('アカウントロックフラグ')
    }).optional().describe('ユーザー情報'),
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
exports.addUnitBodyValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitBodyValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitBody = zod_1.z.object({
    "code": zod_1.z.string().describe('組織コード'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "parentCode": zod_1.z.string().nullish().describe('親組織コード<br>\n\*ルート組織直下に組織を追加する場合は null\n'),
    "name": zod_1.z.string().describe('組織名称'),
    "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
    "localeName": zod_1.z.string().optional().describe('ローカル名'),
    "officialName": zod_1.z.string().optional().describe('組織正式名称'),
    "kana": zod_1.z.string().optional().describe('組織名称カナ'),
    "remarks": zod_1.z.string().optional().describe('備考'),
    "validityDateFrom": zod_1.z.string().regex(exports.addUnitBodyValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "validityDateTo": zod_1.z.string().regex(exports.addUnitBodyValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateFrom": zod_1.z.string().regex(exports.addUnitBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.addUnitBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
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
});
exports.addUnitResponseUnitValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitResponseUnitValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitResponseUnitAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitResponseUnitAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitResponse = zod_1.z.object({
    "unit": zod_1.z.object({
        "code": zod_1.z.string().describe('組織コード'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "parentCode": zod_1.z.string().nullish().describe('親組織コード<br>\n\*ルート組織直下に組織を追加する場合は null\n'),
        "name": zod_1.z.string().describe('組織名称'),
        "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
        "localeName": zod_1.z.string().optional().describe('ローカル名'),
        "officialName": zod_1.z.string().optional().describe('組織正式名称'),
        "kana": zod_1.z.string().optional().describe('組織名称カナ'),
        "remarks": zod_1.z.string().optional().describe('備考'),
        "validityDateFrom": zod_1.z.string().regex(exports.addUnitResponseUnitValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "validityDateTo": zod_1.z.string().regex(exports.addUnitResponseUnitValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateFrom": zod_1.z.string().regex(exports.addUnitResponseUnitAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.addUnitResponseUnitAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
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
    }).optional().describe('組織情報'),
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
exports.updateUnitBodyValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitBodyValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象組織のID<br>\n\*「組織作成API」または「組織参照API」で取得した値を指定\n'),
    "code": zod_1.z.string().describe('組織コード'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "parentCode": zod_1.z.string().nullable().describe('親組織コード<br>\n\*ルート組織直下に組織を追加する場合は null\n'),
    "name": zod_1.z.string().describe('組織名称'),
    "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
    "localeName": zod_1.z.string().optional().describe('ローカル名'),
    "officialName": zod_1.z.string().optional().describe('組織正式名称'),
    "kana": zod_1.z.string().optional().describe('組織名称カナ'),
    "remarks": zod_1.z.string().optional().describe('備考'),
    "validityDateFrom": zod_1.z.string().regex(exports.updateUnitBodyValidityDateFromRegExp).describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "validityDateTo": zod_1.z.string().regex(exports.updateUnitBodyValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateFrom": zod_1.z.string().regex(exports.updateUnitBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updateUnitBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
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
});
exports.updateUnitResponseUnitValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitResponseUnitValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitResponseUnitAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitResponseUnitAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitResponse = zod_1.z.object({
    "unit": zod_1.z.object({
        "code": zod_1.z.string().describe('組織コード'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "parentCode": zod_1.z.string().nullish().describe('親組織コード<br>\n\*ルート組織直下に組織を追加する場合は null\n'),
        "name": zod_1.z.string().describe('組織名称'),
        "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
        "localeName": zod_1.z.string().optional().describe('ローカル名'),
        "officialName": zod_1.z.string().optional().describe('組織正式名称'),
        "kana": zod_1.z.string().optional().describe('組織名称カナ'),
        "remarks": zod_1.z.string().optional().describe('備考'),
        "validityDateFrom": zod_1.z.string().regex(exports.updateUnitResponseUnitValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "validityDateTo": zod_1.z.string().regex(exports.updateUnitResponseUnitValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateFrom": zod_1.z.string().regex(exports.updateUnitResponseUnitAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.updateUnitResponseUnitAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
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
    }).optional().describe('組織情報'),
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
exports.deleteUnitBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.deleteUnitBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象組織のID<br>\n\*「組織作成API」または「組織参照API」で取得した値を指定\n'),
    "code": zod_1.z.string().describe('削除対象組織のコード'),
    "criterionDate": zod_1.z.string().regex(exports.deleteUnitBodyCriterionDateRegExp).optional().describe('基準日<br>\n\*nullの場合は現在日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.deleteUnitResponse = zod_1.z.object({
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
exports.disableUnitBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象組織のID<br>\n\*「組織作成API」または「組織参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableUnitBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は 2060\/12\/31<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.disableUnitResponseUnitValidityDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitResponseUnitValidityDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitResponseUnitAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitResponseUnitAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitResponse = zod_1.z.object({
    "unit": zod_1.z.object({
        "code": zod_1.z.string().describe('組織コード'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "parentCode": zod_1.z.string().nullish().describe('親組織コード<br>\n\*ルート組織直下に組織を追加する場合は null\n'),
        "name": zod_1.z.string().describe('組織名称'),
        "localizedName": zod_1.z.string().optional().describe('ローカル名称'),
        "localeName": zod_1.z.string().optional().describe('ローカル名'),
        "officialName": zod_1.z.string().optional().describe('組織正式名称'),
        "kana": zod_1.z.string().optional().describe('組織名称カナ'),
        "remarks": zod_1.z.string().optional().describe('備考'),
        "validityDateFrom": zod_1.z.string().regex(exports.disableUnitResponseUnitValidityDateFromRegExp).optional().describe('履歴開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "validityDateTo": zod_1.z.string().regex(exports.disableUnitResponseUnitValidityDateToRegExp).optional().describe('履歴終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateFrom": zod_1.z.string().regex(exports.disableUnitResponseUnitAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.disableUnitResponseUnitAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
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
    }).optional().describe('組織情報'),
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
exports.addSectionRoleBody = zod_1.z.object({
    "code": zod_1.z.string().describe('セクションロールコード'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "name": zod_1.z.string().describe('ロール名称'),
    "explanation": zod_1.z.string().optional().describe('備考'),
    "folderCode": zod_1.z.string().optional().describe('セクションロールフォルダ<br>\n\*セクションロールフォルダ直下に作成する場合はnullを指定\n'),
    "rank": zod_1.z.number().optional().describe('ランク')
});
exports.addSectionRoleResponse = zod_1.z.object({
    "sectionRole": zod_1.z.object({
        "code": zod_1.z.string().describe('セクションロールコード'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "name": zod_1.z.string().describe('ロール名称'),
        "explanation": zod_1.z.string().optional().describe('備考'),
        "folderCode": zod_1.z.string().optional().describe('セクションロールフォルダ<br>\n\*セクションロールフォルダ直下に作成する場合はnullを指定\n'),
        "rank": zod_1.z.number().optional().describe('ランク')
    }).optional().describe('セクションロール情報'),
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
exports.updateSectionRoleBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象セクションロールのID<br>\n\*「セクションロール作成API」または「セクションロール参照API」で取得した値を指定\n'),
    "code": zod_1.z.string().describe('セクションロールコード'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "name": zod_1.z.string().describe('ロール名称'),
    "explanation": zod_1.z.string().optional().describe('備考'),
    "folderCode": zod_1.z.string().optional().describe('セクションロールフォルダ<br>\n\*セクションロールフォルダ直下に作成する場合はnullを指定\n'),
    "rank": zod_1.z.number().optional().describe('ランク')
});
exports.updateSectionRoleResponse = zod_1.z.object({
    "sectionRole": zod_1.z.object({
        "code": zod_1.z.string().describe('セクションロールコード'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "name": zod_1.z.string().describe('ロール名称'),
        "explanation": zod_1.z.string().optional().describe('備考'),
        "folderCode": zod_1.z.string().optional().describe('セクションロールフォルダ<br>\n\*セクションロールフォルダ直下に作成する場合はnullを指定\n'),
        "rank": zod_1.z.number().optional().describe('ランク')
    }).optional().describe('セクションロール情報'),
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
exports.deleteSectionRoleBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象セクションロールのID<br>\n\*「セクションロール作成API」または「セクションロール参照API」で取得した値を指定\n')
});
exports.deleteSectionRoleResponse = zod_1.z.object({
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
exports.addSectionRoleGroupBody = zod_1.z.object({
    "code": zod_1.z.string().describe('セクションロールグループコード'),
    "name": zod_1.z.string().describe('セッションロールグループ名称'),
    "sortNo": zod_1.z.string().optional().describe('ソート順序'),
    "explanation": zod_1.z.string().optional().describe('説明'),
    "roleCodeList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "code": zod_1.z.string().optional().describe('セクションロールコード')
        })).optional().describe('セクションロールコード情報')
    }).optional().describe('所属しているセクションロールコードのリスト')
});
exports.addSectionRoleGroupResponse = zod_1.z.object({
    "sectionRoleGroup": zod_1.z.object({
        "code": zod_1.z.string().describe('セクションロールグループコード'),
        "name": zod_1.z.string().describe('セッションロールグループ名称'),
        "sortNo": zod_1.z.string().optional().describe('ソート順序'),
        "explanation": zod_1.z.string().optional().describe('説明'),
        "roleCodeList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "code": zod_1.z.string().optional().describe('セクションロールコード')
            })).optional().describe('セクションロールコード情報')
        }).optional().describe('所属しているセクションロールコードのリスト')
    }).optional().describe('セクションロールグループ情報'),
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
exports.updateSectionRoleGroupBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象セクションロールグループのID<br>\n\*「セクションロールグループ作成API」または「セクションロールグループ参照API」で取得した値を指定\n'),
    "code": zod_1.z.string().describe('セクションロールグループコード'),
    "name": zod_1.z.string().describe('セッションロールグループ名称'),
    "sortNo": zod_1.z.string().optional().describe('ソート順序'),
    "explanation": zod_1.z.string().optional().describe('説明'),
    "roleCodeList": zod_1.z.object({
        "entries": zod_1.z.array(zod_1.z.object({
            "code": zod_1.z.string().optional().describe('セクションロールコード')
        })).optional().describe('セクションロールコード情報')
    }).optional().describe('所属しているセクションロールコードのリスト')
});
exports.updateSectionRoleGroupResponse = zod_1.z.object({
    "sectionRoleGroup": zod_1.z.object({
        "code": zod_1.z.string().describe('セクションロールグループコード'),
        "name": zod_1.z.string().describe('セッションロールグループ名称'),
        "sortNo": zod_1.z.string().optional().describe('ソート順序'),
        "explanation": zod_1.z.string().optional().describe('説明'),
        "roleCodeList": zod_1.z.object({
            "entries": zod_1.z.array(zod_1.z.object({
                "code": zod_1.z.string().optional().describe('セクションロールコード')
            })).optional().describe('セクションロールコード情報')
        }).optional().describe('所属しているセクションロールコードのリスト')
    }).optional().describe('セクションロールグループ情報'),
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
exports.deleteSectionRoleGroupBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象セクションロールグループのID<br>\n\*「セクションロールグループ作成API」または「セクションロールグループ参照API」で取得した値を指定\n')
});
exports.deleteSectionRoleGroupResponse = zod_1.z.object({
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
exports.addUnitAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitAppointmentBody = zod_1.z.object({
    "unitCode": zod_1.z.string().describe('組織コード'),
    "userCode": zod_1.z.string().describe('ユーザーコード'),
    "sectionRoleCode": zod_1.z.string().optional().describe('セクションロールコード'),
    "availableDateFrom": zod_1.z.string().regex(exports.addUnitAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.addUnitAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.addUnitAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.addUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitAppointmentResponseUnitAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUnitAppointmentResponse = zod_1.z.object({
    "unitAppointment": zod_1.z.object({
        "unitCode": zod_1.z.string().describe('組織コード'),
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "sectionRoleCode": zod_1.z.string().optional().describe('セクションロールコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.addUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.addUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.addUnitAppointmentResponseUnitAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('組織所属情報'),
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
exports.updateUnitAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象組織所属のID<br>\n\*「組織所属作成API」または「組織所属参照API」で取得した値を指定\n'),
    "unitCode": zod_1.z.string().describe('組織コード'),
    "userCode": zod_1.z.string().describe('ユーザーコード'),
    "sectionRoleCode": zod_1.z.string().optional().describe('セクションロールコード<br>\n\*指定しない場合は null\n'),
    "availableDateFrom": zod_1.z.string().regex(exports.updateUnitAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updateUnitAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.updateUnitAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.updateUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitAppointmentResponseUnitAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUnitAppointmentResponse = zod_1.z.object({
    "unitAppointment": zod_1.z.object({
        "unitCode": zod_1.z.string().describe('組織コード'),
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "sectionRoleCode": zod_1.z.string().optional().describe('セクションロールコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.updateUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.updateUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.updateUnitAppointmentResponseUnitAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('組織所属情報'),
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
exports.deleteUnitAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.deleteUnitAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象組織所属のID<br>\n\*「組織所属作成API」または「組織所属参照API」で取得した値を指定\n'),
    "criterionDate": zod_1.z.string().regex(exports.deleteUnitAppointmentBodyCriterionDateRegExp).optional().describe('削除用基準日<br>\n\*null の場合は現在日<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.deleteUnitAppointmentResponse = zod_1.z.object({
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
exports.disableUnitAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象組織所属のID<br>\n\*「組織所属作成API」または「組織所属参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableUnitAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は適用終了日を組織の適用終了日とユーザーの適用終了日のうち早い方の日付に設定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。\n')
});
exports.disableUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitAppointmentResponseUnitAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUnitAppointmentResponse = zod_1.z.object({
    "unitAppointment": zod_1.z.object({
        "unitCode": zod_1.z.string().describe('組織コード'),
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "sectionRoleCode": zod_1.z.string().optional().describe('セクションロールコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.disableUnitAppointmentResponseUnitAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.disableUnitAppointmentResponseUnitAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.disableUnitAppointmentResponseUnitAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('組織所属情報'),
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
exports.addProxyApplyAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyApplyAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyApplyAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyApplyAppointmentBody = zod_1.z.object({
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
    "availableDateFrom": zod_1.z.string().regex(exports.addProxyApplyAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.addProxyApplyAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.addProxyApplyAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyApplyAppointmentResponse = zod_1.z.object({
    "proxyApplicationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.addProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('代理申請情報'),
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
exports.updateProxyApplyAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyApplyAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyApplyAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyApplyAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象代理申請のID<br>\n\*「代理申請作成API」または「代理申請参照API」で取得した値を指定\n'),
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
    "availableDateFrom": zod_1.z.string().regex(exports.updateProxyApplyAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updateProxyApplyAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.updateProxyApplyAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyApplyAppointmentResponse = zod_1.z.object({
    "proxyApplicationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.updateProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('代理申請情報'),
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
exports.deleteProxyApplyAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象代理申請のID<br>\n\*「代理申請作成API」または「代理申請参照API」で取得した値を指定\n')
});
exports.deleteProxyApplyAppointmentResponse = zod_1.z.object({
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
exports.disableProxyApplyAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyApplyAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象代理申請のID<br>\n\*「代理申請作成API」または「代理申請参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableProxyApplyAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は 2060\/12\/31 に設定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付与します。\n')
});
exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyApplyAppointmentResponse = zod_1.z.object({
    "proxyApplicationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.disableProxyApplyAppointmentResponseProxyApplicationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('代理申請情報'),
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
exports.addProxyAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyAppointmentBody = zod_1.z.object({
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
    "availableDateFrom": zod_1.z.string().regex(exports.addProxyAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.addProxyAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.addProxyAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.addProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyAppointmentResponseProxyAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addProxyAppointmentResponse = zod_1.z.object({
    "proxyAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.addProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.addProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.addProxyAppointmentResponseProxyAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('代理承認情報'),
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
exports.updateProxyAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象代理承認のID<br>\n\*「代理承認作成API」または「代理承認参照API」で取得した値を指定\n'),
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
    "availableDateFrom": zod_1.z.string().regex(exports.updateProxyAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updateProxyAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.updateProxyAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.updateProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyAppointmentResponseProxyAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateProxyAppointmentResponse = zod_1.z.object({
    "proxyAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.updateProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.updateProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.updateProxyAppointmentResponseProxyAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('代理承認情報'),
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
exports.deleteProxyAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象代理承認のID<br>\n\*「代理承認作成API」または「代理承認参照API」で取得した値を指定\n')
});
exports.deleteProxyAppointmentResponse = zod_1.z.object({
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
exports.disableProxyAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象代理承認のID<br>\n\*「代理承認作成API」または「代理承認参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableProxyAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は 2060\/12\/31 に設定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.disableProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyAppointmentResponseProxyAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableProxyAppointmentResponse = zod_1.z.object({
    "proxyAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.disableProxyAppointmentResponseProxyAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.disableProxyAppointmentResponseProxyAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.disableProxyAppointmentResponseProxyAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('代理承認情報'),
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
exports.addDelegationAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDelegationAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDelegationAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDelegationAppointmentBody = zod_1.z.object({
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
    "availableDateFrom": zod_1.z.string().regex(exports.addDelegationAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.addDelegationAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "taskUnitPolicy": zod_1.z.enum(['FROM', 'TO', 'BLANK']).optional().describe('権限委譲時に処理者情報にセットされる組織情報の決定ポリシー<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|FROM|委譲前の組織を維持|\n|TO|委譲後のユーザーの主務組織|\n|BLANK|表示しない|\n'),
    "criterionDate": zod_1.z.string().regex(exports.addDelegationAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.addDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDelegationAppointmentResponse = zod_1.z.object({
    "delegationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.addDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.addDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "taskUnitPolicy": zod_1.z.enum(['FROM', 'TO', 'BLANK']).optional().describe('権限委譲時に処理者情報にセットされる組織情報の決定ポリシー<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|FROM|委譲前の組織を維持|\n|TO|委譲後のユーザーの主務組織|\n|BLANK|表示しない|\n'),
        "criterionDate": zod_1.z.string().regex(exports.addDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('権限委譲情報'),
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
exports.updateDelegationAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDelegationAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDelegationAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDelegationAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象権限委譲のID<br>\n\*「権限委譲作成API」または「権限委譲参照API」で取得した値を指定\n'),
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
    "availableDateFrom": zod_1.z.string().regex(exports.updateDelegationAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updateDelegationAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "taskUnitPolicy": zod_1.z.enum(['FROM', 'TO', 'BLANK']).optional().describe('権限委譲時に処理者情報にセットされる組織情報の決定ポリシー<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|FROM|委譲前の組織を維持|\n|TO|委譲後のユーザーの主務組織|\n|BLANK|表示しない|\n'),
    "criterionDate": zod_1.z.string().regex(exports.updateDelegationAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.updateDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDelegationAppointmentResponse = zod_1.z.object({
    "delegationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.updateDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.updateDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "taskUnitPolicy": zod_1.z.enum(['FROM', 'TO', 'BLANK']).optional().describe('権限委譲時に処理者情報にセットされる組織情報の決定ポリシー<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|FROM|委譲前の組織を維持|\n|TO|委譲後のユーザーの主務組織|\n|BLANK|表示しない|\n'),
        "criterionDate": zod_1.z.string().regex(exports.updateDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('権限委譲情報'),
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
exports.deleteDelegationAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象権限委譲のID<br>\n\*「権限委譲作成API」または「権限委譲参照API」で取得した値を指定\n')
});
exports.deleteDelegationAppointmentResponse = zod_1.z.object({
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
exports.disableDelegationAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDelegationAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象権限委譲のID<br>\n\*「権限委譲作成API」または「権限委譲参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableDelegationAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は 2060\/12\/31 に設定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.disableDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDelegationAppointmentResponse = zod_1.z.object({
    "delegationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.disableDelegationAppointmentResponseDelegationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.disableDelegationAppointmentResponseDelegationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "taskUnitPolicy": zod_1.z.enum(['FROM', 'TO', 'BLANK']).optional().describe('権限委譲時に処理者情報にセットされる組織情報の決定ポリシー<br>\n指定可能な値<br>\n|パラメータ|説明|\n|----|----|\n|FROM|委譲前の組織を維持|\n|TO|委譲後のユーザーの主務組織|\n|BLANK|表示しない|\n'),
        "criterionDate": zod_1.z.string().regex(exports.disableDelegationAppointmentResponseDelegationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('権限委譲情報'),
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
exports.addDeprivationAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDeprivationAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDeprivationAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDeprivationAppointmentBody = zod_1.z.object({
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
    "availableDateFrom": zod_1.z.string().regex(exports.addDeprivationAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.addDeprivationAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.addDeprivationAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.addDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addDeprivationAppointmentResponse = zod_1.z.object({
    "deprivationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.addDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.addDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.addDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('引上げ権限情報'),
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
exports.updateDeprivationAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDeprivationAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDeprivationAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDeprivationAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象引上げ権限のID<br>\n\*「引上げ権限作成API」または「引上げ権限参照API」で取得した値を指定\n'),
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
    "availableDateFrom": zod_1.z.string().regex(exports.updateDeprivationAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updateDeprivationAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.updateDeprivationAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.updateDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateDeprivationAppointmentResponse = zod_1.z.object({
    "deprivationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.updateDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.updateDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.updateDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('引上げ権限情報'),
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
exports.deleteDeprivationAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象引上げ権限のID<br>\n\*「引上げ権限作成API」または「引上げ権限参照API」で取得した値を指定\n')
});
exports.deleteDeprivationAppointmentResponse = zod_1.z.object({
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
exports.disableDeprivationAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDeprivationAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象引上げ権限のID<br>\n\*「引上げ権限作成API」または「引上げ権限参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableDeprivationAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は 2060\/12\/31 に設定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.disableDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableDeprivationAppointmentResponse = zod_1.z.object({
    "deprivationAppointment": zod_1.z.object({
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
        "availableDateFrom": zod_1.z.string().regex(exports.disableDeprivationAppointmentResponseDeprivationAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateTo": zod_1.z.string().regex(exports.disableDeprivationAppointmentResponseDeprivationAppointmentAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.disableDeprivationAppointmentResponseDeprivationAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('引上げ権限情報'),
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
exports.addPrivateRoleBodyCandidateListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleBody = zod_1.z.object({
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
            "criterionDate": zod_1.z.string().regex(exports.addPrivateRoleBodyCandidateListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('プライベートロール候補者のリスト')
    }).optional().describe('プライベートロール候補者リスト'),
    "guidance": zod_1.z.object({
        "subject": zod_1.z.string().optional().describe('件名'),
        "text": zod_1.z.string().optional().describe('内容')
    }).optional().describe('ユーザーサイトの説明文')
});
exports.addPrivateRoleResponsePrivateRoleCandidateListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleResponse = zod_1.z.object({
    "privateRole": zod_1.z.object({
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
                "criterionDate": zod_1.z.string().regex(exports.addPrivateRoleResponsePrivateRoleCandidateListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
            })).optional().describe('プライベートロール候補者のリスト')
        }).optional().describe('プライベートロール候補者リスト'),
        "guidance": zod_1.z.object({
            "subject": zod_1.z.string().optional().describe('件名'),
            "text": zod_1.z.string().optional().describe('内容')
        }).optional().describe('ユーザーサイトの説明文')
    }).optional().describe('プライベートロール情報'),
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
exports.updatePrivateRoleBodyCandidateListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象プライベートロールのID<br>\n\*「プライベートロール作成API」または「プライベートロール参照API」で取得した値を指定\n'),
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
            "criterionDate": zod_1.z.string().regex(exports.updatePrivateRoleBodyCandidateListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
        })).optional().describe('プライベートロール候補者のリスト')
    }).optional().describe('プライベートロール候補者リスト'),
    "guidance": zod_1.z.object({
        "subject": zod_1.z.string().optional().describe('件名'),
        "text": zod_1.z.string().optional().describe('内容')
    }).optional().describe('ユーザーサイトの説明文')
});
exports.updatePrivateRoleResponsePrivateRoleCandidateListEntriesItemCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleResponse = zod_1.z.object({
    "privateRole": zod_1.z.object({
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
                "criterionDate": zod_1.z.string().regex(exports.updatePrivateRoleResponsePrivateRoleCandidateListEntriesItemCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
            })).optional().describe('プライベートロール候補者のリスト')
        }).optional().describe('プライベートロール候補者リスト'),
        "guidance": zod_1.z.object({
            "subject": zod_1.z.string().optional().describe('件名'),
            "text": zod_1.z.string().optional().describe('内容')
        }).optional().describe('ユーザーサイトの説明文')
    }).optional().describe('プライベートロール情報'),
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
exports.deletePrivateRoleBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象プライベートロールのID<br>\n\*「プライベートロール作成API」または「プライベートロール参照API」で取得した値を指定\n')
});
exports.deletePrivateRoleResponse = zod_1.z.object({
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
exports.addPrivateRoleAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleAppointmentBodyAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleAppointmentBody = zod_1.z.object({
    "userCode": zod_1.z.string().describe('ユーザーコード'),
    "privateRoleCode": zod_1.z.string().describe('プライベートロールコード'),
    "candidateCode": zod_1.z.string().describe('候補者のユーザーコード'),
    "availableDateFrom": zod_1.z.string().regex(exports.addPrivateRoleAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateto": zod_1.z.string().regex(exports.addPrivateRoleAppointmentBodyAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.addPrivateRoleAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addPrivateRoleAppointmentResponse = zod_1.z.object({
    "privateRoleAppointment": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "privateRoleCode": zod_1.z.string().describe('プライベートロールコード'),
        "candidateCode": zod_1.z.string().describe('候補者のユーザーコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateto": zod_1.z.string().regex(exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.addPrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('プライベートロール所属情報'),
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
exports.updatePrivateRoleAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象プライベートロール所属のID<br>\n\*「プライベートロール所属作成API」または「プライベートロール所属参照API」で取得した値を指定\n'),
    "userCode": zod_1.z.string().describe('ユーザーコード<br>\n\*変更不可\n'),
    "privateRoleCode": zod_1.z.string().describe('プライベートロールコード<br>\n\*変更不可\n'),
    "candidateCode": zod_1.z.string().describe('候補者のユーザーコード<br>\n\*変更不可\n'),
    "availableDateFrom": zod_1.z.string().regex(exports.updatePrivateRoleAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updatePrivateRoleAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.updatePrivateRoleAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updatePrivateRoleAppointmentResponse = zod_1.z.object({
    "privateRoleAppointment": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "privateRoleCode": zod_1.z.string().describe('プライベートロールコード'),
        "candidateCode": zod_1.z.string().describe('候補者のユーザーコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateto": zod_1.z.string().regex(exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.updatePrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('プライベートロール所属情報'),
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
exports.deletePrivateRoleAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象プライベートロール所属のID<br>\n\*「プライベートロール所属作成API」または「プライベートロール所属参照API」で取得した値を指定\n')
});
exports.deletePrivateRoleAppointmentResponse = zod_1.z.object({
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
exports.disablePrivateRoleAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disablePrivateRoleAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象プライベートロール所属のID<br>\n\*「プライベートロール所属作成API」または「プライベートロール所属参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disablePrivateRoleAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は 2060\/12\/31 に設定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disablePrivateRoleAppointmentResponse = zod_1.z.object({
    "privateRoleAppointment": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "privateRoleCode": zod_1.z.string().describe('プライベートロールコード'),
        "candidateCode": zod_1.z.string().describe('候補者のユーザーコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateto": zod_1.z.string().regex(exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "criterionDate": zod_1.z.string().regex(exports.disablePrivateRoleAppointmentResponsePrivateRoleAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('プライベートロール所属情報'),
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
exports.addUniversalRoleBody = zod_1.z.object({
    "code": zod_1.z.string().describe('ユニバーサルロールコード'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "name": zod_1.z.string().describe('ユニバーサルロール名称'),
    "explanation": zod_1.z.string().optional().describe('説明'),
    "folderCode": zod_1.z.string().describe('ユニバーサルロールフォルダコード')
});
exports.addUniversalRoleResponse = zod_1.z.object({
    "universalRole": zod_1.z.object({
        "code": zod_1.z.string().describe('ユニバーサルロールコード'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "name": zod_1.z.string().describe('ユニバーサルロール名称'),
        "explanation": zod_1.z.string().optional().describe('説明'),
        "folderCode": zod_1.z.string().describe('ユニバーサルロールフォルダコード')
    }).optional().describe('ユニバーサルロール情報'),
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
exports.updateUniversalRoleBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象ユニバーサルロールのID<br>\n\*「ユニバーサルロール作成API」または「ユニバーサルロール参照API」で取得した値を指定\n'),
    "code": zod_1.z.string().describe('ユニバーサルロールコード'),
    "importCode": zod_1.z.string().optional().describe('インポートコード'),
    "name": zod_1.z.string().describe('ユニバーサルロール名称'),
    "explanation": zod_1.z.string().optional().describe('説明'),
    "folderCode": zod_1.z.string().describe('ユニバーサルロールフォルダコード')
});
exports.updateUniversalRoleResponse = zod_1.z.object({
    "universalRole": zod_1.z.object({
        "code": zod_1.z.string().describe('ユニバーサルロールコード'),
        "importCode": zod_1.z.string().optional().describe('インポートコード'),
        "name": zod_1.z.string().describe('ユニバーサルロール名称'),
        "explanation": zod_1.z.string().optional().describe('説明'),
        "folderCode": zod_1.z.string().describe('ユニバーサルロールフォルダコード')
    }).optional().describe('ユニバーサルロール情報'),
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
exports.deleteUniversalRoleBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象ユニバーサルロールのID<br>\n\*「ユニバーサルロール作成API」または「ユニバーサルロール参照API」で取得した値を指定\n')
});
exports.deleteUniversalRoleResponse = zod_1.z.object({
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
exports.addUniversalRoleAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUniversalRoleAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUniversalRoleAppointmentBodyAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUniversalRoleAppointmentBody = zod_1.z.object({
    "userCode": zod_1.z.string().describe('ユーザーコード'),
    "criterionDate": zod_1.z.string().regex(exports.addUniversalRoleAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "universalRoleCode": zod_1.z.string().describe('ユニバーサルロールコード'),
    "availableDateFrom": zod_1.z.string().regex(exports.addUniversalRoleAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateto": zod_1.z.string().regex(exports.addUniversalRoleAppointmentBodyAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.addUniversalRoleAppointmentResponse = zod_1.z.object({
    "universalRoleAppointment": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "criterionDate": zod_1.z.string().regex(exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "universalRoleCode": zod_1.z.string().describe('ユニバーサルロールコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateto": zod_1.z.string().regex(exports.addUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('ユニバーサルロール所属情報'),
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
exports.updateUniversalRoleAppointmentBodyAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUniversalRoleAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUniversalRoleAppointmentBodyCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUniversalRoleAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('更新対象ユニバーサルロール所属のID<br>\n\*「ユニバーサルロール所属作成API」または「ユニバーサルロール所属参照API」で取得した値を指定\n'),
    "userCode": zod_1.z.string().describe('ユーザーコード<br>\n\*変更不可\n'),
    "universalRoleCode": zod_1.z.string().describe('ユニバーサルロールコード<br>\n\*変更不可\n'),
    "availableDateFrom": zod_1.z.string().regex(exports.updateUniversalRoleAppointmentBodyAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "availableDateTo": zod_1.z.string().regex(exports.updateUniversalRoleAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
    "criterionDate": zod_1.z.string().regex(exports.updateUniversalRoleAppointmentBodyCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
});
exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.updateUniversalRoleAppointmentResponse = zod_1.z.object({
    "universalRoleAppointment": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "criterionDate": zod_1.z.string().regex(exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "universalRoleCode": zod_1.z.string().describe('ユニバーサルロールコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateto": zod_1.z.string().regex(exports.updateUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('ユニバーサルロール所属情報'),
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
exports.deleteUniversalRoleAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('削除対象ユニバーサルロール所属のID<br>\n\*「ユニバーサルロール所属作成API」または「ユニバーサルロール所属参照API」で取得した値を指定\n')
});
exports.deleteUniversalRoleAppointmentResponse = zod_1.z.object({
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
exports.disableUniversalRoleAppointmentBodyAvailableDateToRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUniversalRoleAppointmentBody = zod_1.z.object({
    "id": zod_1.z.number().describe('適用終了対象ユニバーサルロール所属のID<br>\n\*「ユニバーサルロール所属作成API」または「ユニバーサルロール所属参照API」で取得した値を指定\n'),
    "availableDateTo": zod_1.z.string().regex(exports.disableUniversalRoleAppointmentBodyAvailableDateToRegExp).optional().describe('適用終了日<br>\n\*null の場合は 2060\/12\/31 に設定<br>\nフォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。\n')
});
exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp = new RegExp('^((19|20)[0-9]{2})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9]) (2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9]) JST$');
exports.disableUniversalRoleAppointmentResponse = zod_1.z.object({
    "universalRoleAppointment": zod_1.z.object({
        "userCode": zod_1.z.string().describe('ユーザーコード'),
        "criterionDate": zod_1.z.string().regex(exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentCriterionDateRegExp).optional().describe('基準日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "universalRoleCode": zod_1.z.string().describe('ユニバーサルロールコード'),
        "availableDateFrom": zod_1.z.string().regex(exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDateFromRegExp).optional().describe('適用開始日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。'),
        "availableDateto": zod_1.z.string().regex(exports.disableUniversalRoleAppointmentResponseUniversalRoleAppointmentAvailableDatetoRegExp).optional().describe('適用終了日<br> フォーマットは「yyyy-MM-dd HH:mm:ss JST」です。省略せず、必ず JST まで付けてください。')
    }).optional().describe('ユニバーサルロール所属情報'),
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
exports.importTinyUserMasterBody = zod_1.z.object({
    "schemaName": zod_1.z.string().describe('スキーマ名<br>\n\*外部マスタのスキーマ名(初期値：agileworks_user)\n'),
    "strategy": zod_1.z.enum(['FULLSET', 'SUBSET']).optional().describe('取込形式<br>\nFULLSET：全件取込<br>\nSUBSET：差分取込<br>\n\*未指定の場合はFULLSETに設定\n'),
    "table": zod_1.z.string().describe('テーブル名'),
    "data": zod_1.z.string().optional().describe('CSVデータ<br>\n\*文字コードはUTF-8固定\n')
});
exports.importTinyUserMasterResponse = zod_1.z.object({
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
exports.exportTinyUserMasterBody = zod_1.z.object({
    "code": zod_1.z.string().describe('コード')
});
exports.importUserMasterBody = zod_1.z.object({
    "schemaName": zod_1.z.string().describe('スキーマ名<br>\n\*外部マスタのスキーマ名(初期値：agileworks_user、省略可)\n'),
    "strategy": zod_1.z.enum(['FULLSET', 'SUBSET']).optional().describe('取込形式<br>\nFULLSET：全件取込<br>\nSUBSET：差分取込<br>\n\*FULLSETのみ対応し、SUBSETを指定してもFULLSETとしてインポートする\n'),
    "table": zod_1.z.string().describe('テーブル名'),
    "data": zod_1.z.string().optional().describe('CSVデータ<br>\n\*文字コードはUTF-8固定\n')
});
exports.importUserMasterResponse = zod_1.z.object({
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
exports.exportUserMasterBody = zod_1.z.object({
    "code": zod_1.z.string().describe('コード')
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
