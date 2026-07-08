"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countListWorkflowMessage = exports.getCountListWorkflowMessageUrl = exports.countWorkflowMessage = exports.getCountWorkflowMessageUrl = exports.openDoc = exports.getOpenDocUrl = exports.deleteDocReference = exports.getDeleteDocReferenceUrl = exports.addDocReference = exports.getAddDocReferenceUrl = exports.listDocReferencer = exports.getListDocReferencerUrl = exports.getDocReferencee = exports.getGetDocReferenceeUrl = exports.deleteDocAttachment = exports.getDeleteDocAttachmentUrl = exports.listDocAttachement = exports.getListDocAttachementUrl = exports.updateDocAttachment = exports.getUpdateDocAttachmentUrl = exports.addDocAttachment = exports.getAddDocAttachmentUrl = exports.deleteDocComment = exports.getDeleteDocCommentUrl = exports.addDocComment = exports.getAddDocCommentUrl = exports.listDocComment = exports.getListDocCommentUrl = exports.getDocPdf = exports.getGetDocPdfUrl = exports.selectDoc = exports.getSelectDocUrl = exports.hardDeleteDoc = exports.getHardDeleteDocUrl = exports.updateDoc = exports.getUpdateDocUrl = exports.addDoc = exports.getAddDocUrl = exports.prepareDocRequest = exports.getPrepareDocRequestUrl = exports.getDoc = exports.getGetDocUrl = exports.getDocHeader = exports.getGetDocHeaderUrl = exports.download = exports.getDownloadUrl = exports.nonParameter = exports.getNonParameterUrl = exports.model = exports.getModelUrl = void 0;
exports.findSectionRole = exports.getFindSectionRoleUrl = exports.addSectionRole = exports.getAddSectionRoleUrl = exports.disableUnit = exports.getDisableUnitUrl = exports.deleteUnit = exports.getDeleteUnitUrl = exports.updateUnit = exports.getUpdateUnitUrl = exports.findUnit = exports.getFindUnitUrl = exports.addUnit = exports.getAddUnitUrl = exports.disableUser = exports.getDisableUserUrl = exports.deleteUser = exports.getDeleteUserUrl = exports.updateUser = exports.getUpdateUserUrl = exports.findUser = exports.getFindUserUrl = exports.addUser = exports.getAddUserUrl = exports.listShareJournal = exports.getListShareJournalUrl = exports.listElectJournal = exports.getListElectJournalUrl = exports.listWorkflowJournal = exports.getListWorkflowJournalUrl = exports.findWorkflowTask = exports.getFindWorkflowTaskUrl = exports.getWorkflowInfo = exports.getGetWorkflowInfoUrl = exports.docReject = exports.getDocRejectUrl = exports.docRetract = exports.getDocRetractUrl = exports.docRemand = exports.getDocRemandUrl = exports.docDelete = exports.getDocDeleteUrl = exports.docApprove = exports.getDocApproveUrl = exports.docStart = exports.getDocStartUrl = exports.docDraft = exports.getDocDraftUrl = exports.selectWorkflowMessage = exports.getSelectWorkflowMessageUrl = void 0;
exports.deleteDelegationAppointment = exports.getDeleteDelegationAppointmentUrl = exports.updateDelegationAppointment = exports.getUpdateDelegationAppointmentUrl = exports.findDelegationAppointment = exports.getFindDelegationAppointmentUrl = exports.addDelegationAppointment = exports.getAddDelegationAppointmentUrl = exports.disableProxyAppointment = exports.getDisableProxyAppointmentUrl = exports.deleteProxyAppointment = exports.getDeleteProxyAppointmentUrl = exports.updateProxyAppointment = exports.getUpdateProxyAppointmentUrl = exports.findProxyAppointment = exports.getFindProxyAppointmentUrl = exports.addProxyAppointment = exports.getAddProxyAppointmentUrl = exports.disableProxyApplyAppointment = exports.getDisableProxyApplyAppointmentUrl = exports.deleteProxyApplyAppointment = exports.getDeleteProxyApplyAppointmentUrl = exports.updateProxyApplyAppointment = exports.getUpdateProxyApplyAppointmentUrl = exports.findProxyApplyAppointment = exports.getFindProxyApplyAppointmentUrl = exports.addProxyApplyAppointment = exports.getAddProxyApplyAppointmentUrl = exports.disableUnitAppointment = exports.getDisableUnitAppointmentUrl = exports.deleteUnitAppointment = exports.getDeleteUnitAppointmentUrl = exports.updateUnitAppointment = exports.getUpdateUnitAppointmentUrl = exports.findUnitAppointment = exports.getFindUnitAppointmentUrl = exports.addUnitAppointment = exports.getAddUnitAppointmentUrl = exports.deleteSectionRoleGroup = exports.getDeleteSectionRoleGroupUrl = exports.updateSectionRoleGroup = exports.getUpdateSectionRoleGroupUrl = exports.findSectionRoleGroup = exports.getFindSectionRoleGroupUrl = exports.addSectionRoleGroup = exports.getAddSectionRoleGroupUrl = exports.deleteSectionRole = exports.getDeleteSectionRoleUrl = exports.updateSectionRole = exports.getUpdateSectionRoleUrl = void 0;
exports.findProject = exports.getFindProjectUrl = exports.disableUniversalRoleAppointment = exports.getDisableUniversalRoleAppointmentUrl = exports.deleteUniversalRoleAppointment = exports.getDeleteUniversalRoleAppointmentUrl = exports.updateUniversalRoleAppointment = exports.getUpdateUniversalRoleAppointmentUrl = exports.findUniversalRoleAppointment = exports.getFindUniversalRoleAppointmentUrl = exports.addUniversalRoleAppointment = exports.getAddUniversalRoleAppointmentUrl = exports.deleteUniversalRole = exports.getDeleteUniversalRoleUrl = exports.updateUniversalRole = exports.getUpdateUniversalRoleUrl = exports.findUniversalRole = exports.getFindUniversalRoleUrl = exports.addUniversalRole = exports.getAddUniversalRoleUrl = exports.disablePrivateRoleAppointment = exports.getDisablePrivateRoleAppointmentUrl = exports.deletePrivateRoleAppointment = exports.getDeletePrivateRoleAppointmentUrl = exports.updatePrivateRoleAppointment = exports.getUpdatePrivateRoleAppointmentUrl = exports.findPrivateRoleAppointment = exports.getFindPrivateRoleAppointmentUrl = exports.addPrivateRoleAppointment = exports.getAddPrivateRoleAppointmentUrl = exports.deletePrivateRole = exports.getDeletePrivateRoleUrl = exports.updatePrivateRole = exports.getUpdatePrivateRoleUrl = exports.findPrivateRole = exports.getFindPrivateRoleUrl = exports.addPrivateRole = exports.getAddPrivateRoleUrl = exports.disableDeprivationAppointment = exports.getDisableDeprivationAppointmentUrl = exports.deleteDeprivationAppointment = exports.getDeleteDeprivationAppointmentUrl = exports.updateDeprivationAppointment = exports.getUpdateDeprivationAppointmentUrl = exports.findDeprivationAppointment = exports.getFindDeprivationAppointmentUrl = exports.addDeprivationAppointment = exports.getAddDeprivationAppointmentUrl = exports.disableDelegationAppointment = exports.getDisableDelegationAppointmentUrl = void 0;
exports.sCIMPostUsersId = exports.getSCIMPostUsersIdUrl = exports.sCIMGetUsersId = exports.getSCIMGetUsersIdUrl = exports.sCIMPostUsers = exports.getSCIMPostUsersUrl = exports.sCIMGetUsers = exports.getSCIMGetUsersUrl = exports.notAdminGetVersion = exports.getNotAdminGetVersionUrl = exports.notAdminGetUserInfo = exports.getNotAdminGetUserInfoUrl = exports.notAdminListPublicFolderInfo = exports.getNotAdminListPublicFolderInfoUrl = exports.notAdminListProxyAppointment = exports.getNotAdminListProxyAppointmentUrl = exports.listProxyApplyAppointment = exports.getListProxyApplyAppointmentUrl = exports.notAdminStart = exports.getNotAdminStartUrl = exports.notAdminSelectWorkflowMessage = exports.getNotAdminSelectWorkflowMessageUrl = exports.notAdminCountListWorkflowMessage = exports.getNotAdminCountListWorkflowMessageUrl = exports.getDocView = exports.getGetDocViewUrl = exports.notAdminSelectDoc = exports.getNotAdminSelectDocUrl = exports.notAdminAddDoc = exports.getNotAdminAddDocUrl = exports.notAdminPrepareDocRequest = exports.getNotAdminPrepareDocRequestUrl = exports.listPublicFolderInfo = exports.getListPublicFolderInfoUrl = exports.findFormDefinition = exports.getFindFormDefinitionUrl = exports.listForm = exports.getListFormUrl = exports.listComponentAutoNumber = exports.getListComponentAutoNumberUrl = exports.listComponentMasterWindow = exports.getListComponentMasterWindowUrl = exports.exportUserMaster = exports.getExportUserMasterUrl = exports.importUserMaster = exports.getImportUserMasterUrl = exports.exportTinyUserMaster = exports.getExportTinyUserMasterUrl = exports.importTinyUserMaster = exports.getImportTinyUserMasterUrl = void 0;
exports.sCIMService = exports.getSCIMServiceUrl = exports.sCIMSchemas = exports.getSCIMSchemasUrl = exports.sCIMResourceTypes = exports.getSCIMResourceTypesUrl = exports.sCIMDeleteGroupsId = exports.getSCIMDeleteGroupsIdUrl = exports.sCIMPatchGroupsId = exports.getSCIMPatchGroupsIdUrl = exports.sCIMPutGroups = exports.getSCIMPutGroupsUrl = exports.sCIMGetGroupsId = exports.getSCIMGetGroupsIdUrl = exports.sCIMPostGroups = exports.getSCIMPostGroupsUrl = exports.sCIMGetGroups = exports.getSCIMGetGroupsUrl = exports.sCIMDeleteUsersId = exports.getSCIMDeleteUsersIdUrl = exports.sCIMPatchUsersId = exports.getSCIMPatchUsersIdUrl = void 0;
const custom_mcp_instance_1 = require("../../custom/custom-mcp-instance");
const getModelUrl = (params) => {
    const normalizedParams = new URLSearchParams();
    Object.entries(params || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            normalizedParams.append(key, value === null ? 'null' : value.toString());
        }
    });
    const stringifiedParams = normalizedParams.toString();
    return stringifiedParams.length > 0 ? `/Broker/WebApi/Model?${stringifiedParams}` : `/Broker/WebApi/Model`;
};
exports.getModelUrl = getModelUrl;
const model = async (params, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getModelUrl)(params), {
        ...options,
        method: 'GET'
    });
};
exports.model = model;
const getNonParameterUrl = (params) => {
    const normalizedParams = new URLSearchParams();
    Object.entries(params || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            normalizedParams.append(key, value === null ? 'null' : value.toString());
        }
    });
    const stringifiedParams = normalizedParams.toString();
    return stringifiedParams.length > 0 ? `/Broker/WebApi/Service?${stringifiedParams}` : `/Broker/WebApi/Service`;
};
exports.getNonParameterUrl = getNonParameterUrl;
const nonParameter = async (nonParameterBody, params, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNonParameterUrl)(params), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(nonParameterBody)
    });
};
exports.nonParameter = nonParameter;
const getDownloadUrl = (params) => {
    const normalizedParams = new URLSearchParams();
    Object.entries(params || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            normalizedParams.append(key, value === null ? 'null' : value.toString());
        }
    });
    const stringifiedParams = normalizedParams.toString();
    return stringifiedParams.length > 0 ? `/Broker/WebApi/Download?${stringifiedParams}` : `/Broker/WebApi/Download`;
};
exports.getDownloadUrl = getDownloadUrl;
const download = async (params, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDownloadUrl)(params), {
        ...options,
        method: 'GET'
    });
};
exports.download = download;
const getGetDocHeaderUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=getDocHeader`;
};
exports.getGetDocHeaderUrl = getGetDocHeaderUrl;
const getDocHeader = async (getDocHeaderBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getGetDocHeaderUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(getDocHeaderBody)
    });
};
exports.getDocHeader = getDocHeader;
const getGetDocUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=getDoc`;
};
exports.getGetDocUrl = getGetDocUrl;
const getDoc = async (getDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getGetDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(getDocBody)
    });
};
exports.getDoc = getDoc;
const getPrepareDocRequestUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=prepareDocRequest`;
};
exports.getPrepareDocRequestUrl = getPrepareDocRequestUrl;
const prepareDocRequest = async (prepareDocRequestBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getPrepareDocRequestUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(prepareDocRequestBody)
    });
};
exports.prepareDocRequest = prepareDocRequest;
const getAddDocUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=addDoc`;
};
exports.getAddDocUrl = getAddDocUrl;
const addDoc = async (addDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addDocBody)
    });
};
exports.addDoc = addDoc;
const getUpdateDocUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=updateDoc`;
};
exports.getUpdateDocUrl = getUpdateDocUrl;
const updateDoc = async (updateDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateDocBody)
    });
};
exports.updateDoc = updateDoc;
const getHardDeleteDocUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=hardDeleteDoc`;
};
exports.getHardDeleteDocUrl = getHardDeleteDocUrl;
const hardDeleteDoc = async (hardDeleteDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getHardDeleteDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(hardDeleteDocBody)
    });
};
exports.hardDeleteDoc = hardDeleteDoc;
const getSelectDocUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=selectDoc`;
};
exports.getSelectDocUrl = getSelectDocUrl;
const selectDoc = async (selectDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSelectDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(selectDocBody)
    });
};
exports.selectDoc = selectDoc;
const getGetDocPdfUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=getDocPdf`;
};
exports.getGetDocPdfUrl = getGetDocPdfUrl;
const getDocPdf = async (getDocPdfBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getGetDocPdfUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(getDocPdfBody)
    });
};
exports.getDocPdf = getDocPdf;
const getListDocCommentUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=listDocComment`;
};
exports.getListDocCommentUrl = getListDocCommentUrl;
const listDocComment = async (listDocCommentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListDocCommentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listDocCommentBody)
    });
};
exports.listDocComment = listDocComment;
const getAddDocCommentUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=addDocComment`;
};
exports.getAddDocCommentUrl = getAddDocCommentUrl;
const addDocComment = async (addDocCommentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddDocCommentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addDocCommentBody)
    });
};
exports.addDocComment = addDocComment;
const getDeleteDocCommentUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=deleteDocComment`;
};
exports.getDeleteDocCommentUrl = getDeleteDocCommentUrl;
const deleteDocComment = async (deleteDocCommentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteDocCommentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteDocCommentBody)
    });
};
exports.deleteDocComment = deleteDocComment;
const getAddDocAttachmentUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=addDocAttachment`;
};
exports.getAddDocAttachmentUrl = getAddDocAttachmentUrl;
const addDocAttachment = async (addDocAttachmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddDocAttachmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addDocAttachmentBody)
    });
};
exports.addDocAttachment = addDocAttachment;
const getUpdateDocAttachmentUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=updateDocAttachment`;
};
exports.getUpdateDocAttachmentUrl = getUpdateDocAttachmentUrl;
const updateDocAttachment = async (updateDocAttachmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateDocAttachmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateDocAttachmentBody)
    });
};
exports.updateDocAttachment = updateDocAttachment;
const getListDocAttachementUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=listDocAttachment`;
};
exports.getListDocAttachementUrl = getListDocAttachementUrl;
const listDocAttachement = async (listDocAttachementBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListDocAttachementUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listDocAttachementBody)
    });
};
exports.listDocAttachement = listDocAttachement;
const getDeleteDocAttachmentUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=deleteDocAttachment`;
};
exports.getDeleteDocAttachmentUrl = getDeleteDocAttachmentUrl;
const deleteDocAttachment = async (deleteDocAttachmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteDocAttachmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteDocAttachmentBody)
    });
};
exports.deleteDocAttachment = deleteDocAttachment;
const getGetDocReferenceeUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=getDocReferencee`;
};
exports.getGetDocReferenceeUrl = getGetDocReferenceeUrl;
const getDocReferencee = async (getDocReferenceeBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getGetDocReferenceeUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(getDocReferenceeBody)
    });
};
exports.getDocReferencee = getDocReferencee;
const getListDocReferencerUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=listDocReferencer`;
};
exports.getListDocReferencerUrl = getListDocReferencerUrl;
const listDocReferencer = async (listDocReferencerBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListDocReferencerUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listDocReferencerBody)
    });
};
exports.listDocReferencer = listDocReferencer;
const getAddDocReferenceUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=addDocReference`;
};
exports.getAddDocReferenceUrl = getAddDocReferenceUrl;
const addDocReference = async (addDocReferenceBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddDocReferenceUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addDocReferenceBody)
    });
};
exports.addDocReference = addDocReference;
const getDeleteDocReferenceUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=deleteDocReference`;
};
exports.getDeleteDocReferenceUrl = getDeleteDocReferenceUrl;
const deleteDocReference = async (deleteDocReferenceBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteDocReferenceUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteDocReferenceBody)
    });
};
exports.deleteDocReference = deleteDocReference;
const getOpenDocUrl = () => {
    return `/Broker/WebApi/Service?name=doc.Doc&method=openDoc`;
};
exports.getOpenDocUrl = getOpenDocUrl;
const openDoc = async (openDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getOpenDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(openDocBody)
    });
};
exports.openDoc = openDoc;
const getCountWorkflowMessageUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=countWorkflowMessage`;
};
exports.getCountWorkflowMessageUrl = getCountWorkflowMessageUrl;
const countWorkflowMessage = async (countWorkflowMessageBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getCountWorkflowMessageUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(countWorkflowMessageBody)
    });
};
exports.countWorkflowMessage = countWorkflowMessage;
const getCountListWorkflowMessageUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=countListWorkflowMessage`;
};
exports.getCountListWorkflowMessageUrl = getCountListWorkflowMessageUrl;
const countListWorkflowMessage = async (countListWorkflowMessageBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getCountListWorkflowMessageUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(countListWorkflowMessageBody)
    });
};
exports.countListWorkflowMessage = countListWorkflowMessage;
const getSelectWorkflowMessageUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=selectWorkflowMessage`;
};
exports.getSelectWorkflowMessageUrl = getSelectWorkflowMessageUrl;
const selectWorkflowMessage = async (selectWorkflowMessageBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSelectWorkflowMessageUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(selectWorkflowMessageBody)
    });
};
exports.selectWorkflowMessage = selectWorkflowMessage;
const getDocDraftUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=draft`;
};
exports.getDocDraftUrl = getDocDraftUrl;
const docDraft = async (docDraftBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDocDraftUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(docDraftBody)
    });
};
exports.docDraft = docDraft;
const getDocStartUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=start`;
};
exports.getDocStartUrl = getDocStartUrl;
const docStart = async (docStartBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDocStartUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(docStartBody)
    });
};
exports.docStart = docStart;
const getDocApproveUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=approve`;
};
exports.getDocApproveUrl = getDocApproveUrl;
const docApprove = async (docApproveBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDocApproveUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(docApproveBody)
    });
};
exports.docApprove = docApprove;
const getDocDeleteUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=delete`;
};
exports.getDocDeleteUrl = getDocDeleteUrl;
const docDelete = async (docDeleteBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDocDeleteUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(docDeleteBody)
    });
};
exports.docDelete = docDelete;
const getDocRemandUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=remand`;
};
exports.getDocRemandUrl = getDocRemandUrl;
const docRemand = async (docRemandBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDocRemandUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(docRemandBody)
    });
};
exports.docRemand = docRemand;
const getDocRetractUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=retract`;
};
exports.getDocRetractUrl = getDocRetractUrl;
const docRetract = async (docRetractBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDocRetractUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(docRetractBody)
    });
};
exports.docRetract = docRetract;
const getDocRejectUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=reject`;
};
exports.getDocRejectUrl = getDocRejectUrl;
const docReject = async (docRejectBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDocRejectUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(docRejectBody)
    });
};
exports.docReject = docReject;
const getGetWorkflowInfoUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=getWorkflowInfo`;
};
exports.getGetWorkflowInfoUrl = getGetWorkflowInfoUrl;
const getWorkflowInfo = async (getWorkflowInfoBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getGetWorkflowInfoUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(getWorkflowInfoBody)
    });
};
exports.getWorkflowInfo = getWorkflowInfo;
const getFindWorkflowTaskUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=findWorkflowTask`;
};
exports.getFindWorkflowTaskUrl = getFindWorkflowTaskUrl;
const findWorkflowTask = async (findWorkflowTaskBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindWorkflowTaskUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findWorkflowTaskBody)
    });
};
exports.findWorkflowTask = findWorkflowTask;
const getListWorkflowJournalUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=listWorkflowJournal`;
};
exports.getListWorkflowJournalUrl = getListWorkflowJournalUrl;
const listWorkflowJournal = async (listWorkflowJournalBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListWorkflowJournalUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listWorkflowJournalBody)
    });
};
exports.listWorkflowJournal = listWorkflowJournal;
const getListElectJournalUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=listElectJournal`;
};
exports.getListElectJournalUrl = getListElectJournalUrl;
const listElectJournal = async (listElectJournalBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListElectJournalUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listElectJournalBody)
    });
};
exports.listElectJournal = listElectJournal;
const getListShareJournalUrl = () => {
    return `/Broker/WebApi/Service?name=workflow.Workflow&method=listShareJournal`;
};
exports.getListShareJournalUrl = getListShareJournalUrl;
const listShareJournal = async (listShareJournalBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListShareJournalUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listShareJournalBody)
    });
};
exports.listShareJournal = listShareJournal;
const getAddUserUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addUser`;
};
exports.getAddUserUrl = getAddUserUrl;
const addUser = async (addUserBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddUserUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addUserBody)
    });
};
exports.addUser = addUser;
const getFindUserUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findUser`;
};
exports.getFindUserUrl = getFindUserUrl;
const findUser = async (findUserBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindUserUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findUserBody)
    });
};
exports.findUser = findUser;
const getUpdateUserUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateUser`;
};
exports.getUpdateUserUrl = getUpdateUserUrl;
const updateUser = async (updateUserBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateUserUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateUserBody)
    });
};
exports.updateUser = updateUser;
const getDeleteUserUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteUser`;
};
exports.getDeleteUserUrl = getDeleteUserUrl;
const deleteUser = async (deleteUserBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteUserUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteUserBody)
    });
};
exports.deleteUser = deleteUser;
const getDisableUserUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableUser`;
};
exports.getDisableUserUrl = getDisableUserUrl;
const disableUser = async (disableUserBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableUserUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableUserBody)
    });
};
exports.disableUser = disableUser;
const getAddUnitUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addUnit`;
};
exports.getAddUnitUrl = getAddUnitUrl;
const addUnit = async (addUnitBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddUnitUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addUnitBody)
    });
};
exports.addUnit = addUnit;
const getFindUnitUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findUnit`;
};
exports.getFindUnitUrl = getFindUnitUrl;
const findUnit = async (findUnitBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindUnitUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findUnitBody)
    });
};
exports.findUnit = findUnit;
const getUpdateUnitUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateUnit`;
};
exports.getUpdateUnitUrl = getUpdateUnitUrl;
const updateUnit = async (updateUnitBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateUnitUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateUnitBody)
    });
};
exports.updateUnit = updateUnit;
const getDeleteUnitUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteUnit`;
};
exports.getDeleteUnitUrl = getDeleteUnitUrl;
const deleteUnit = async (deleteUnitBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteUnitUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteUnitBody)
    });
};
exports.deleteUnit = deleteUnit;
const getDisableUnitUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableUnit`;
};
exports.getDisableUnitUrl = getDisableUnitUrl;
const disableUnit = async (disableUnitBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableUnitUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableUnitBody)
    });
};
exports.disableUnit = disableUnit;
const getAddSectionRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addSectionRole`;
};
exports.getAddSectionRoleUrl = getAddSectionRoleUrl;
const addSectionRole = async (addSectionRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddSectionRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addSectionRoleBody)
    });
};
exports.addSectionRole = addSectionRole;
const getFindSectionRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findSectionRole`;
};
exports.getFindSectionRoleUrl = getFindSectionRoleUrl;
const findSectionRole = async (findSectionRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindSectionRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findSectionRoleBody)
    });
};
exports.findSectionRole = findSectionRole;
const getUpdateSectionRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateSectionRole`;
};
exports.getUpdateSectionRoleUrl = getUpdateSectionRoleUrl;
const updateSectionRole = async (updateSectionRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateSectionRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateSectionRoleBody)
    });
};
exports.updateSectionRole = updateSectionRole;
const getDeleteSectionRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteSectionRole`;
};
exports.getDeleteSectionRoleUrl = getDeleteSectionRoleUrl;
const deleteSectionRole = async (deleteSectionRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteSectionRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteSectionRoleBody)
    });
};
exports.deleteSectionRole = deleteSectionRole;
const getAddSectionRoleGroupUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addSectionRoleGroup`;
};
exports.getAddSectionRoleGroupUrl = getAddSectionRoleGroupUrl;
const addSectionRoleGroup = async (addSectionRoleGroupBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddSectionRoleGroupUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addSectionRoleGroupBody)
    });
};
exports.addSectionRoleGroup = addSectionRoleGroup;
const getFindSectionRoleGroupUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findSectionRoleGroup`;
};
exports.getFindSectionRoleGroupUrl = getFindSectionRoleGroupUrl;
const findSectionRoleGroup = async (findSectionRoleGroupBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindSectionRoleGroupUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findSectionRoleGroupBody)
    });
};
exports.findSectionRoleGroup = findSectionRoleGroup;
const getUpdateSectionRoleGroupUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateSectionRoleGroup`;
};
exports.getUpdateSectionRoleGroupUrl = getUpdateSectionRoleGroupUrl;
const updateSectionRoleGroup = async (updateSectionRoleGroupBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateSectionRoleGroupUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateSectionRoleGroupBody)
    });
};
exports.updateSectionRoleGroup = updateSectionRoleGroup;
const getDeleteSectionRoleGroupUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteSectionRoleGroup`;
};
exports.getDeleteSectionRoleGroupUrl = getDeleteSectionRoleGroupUrl;
const deleteSectionRoleGroup = async (deleteSectionRoleGroupBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteSectionRoleGroupUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteSectionRoleGroupBody)
    });
};
exports.deleteSectionRoleGroup = deleteSectionRoleGroup;
const getAddUnitAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addUnitAppointment`;
};
exports.getAddUnitAppointmentUrl = getAddUnitAppointmentUrl;
const addUnitAppointment = async (addUnitAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddUnitAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addUnitAppointmentBody)
    });
};
exports.addUnitAppointment = addUnitAppointment;
const getFindUnitAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findUnitAppointment`;
};
exports.getFindUnitAppointmentUrl = getFindUnitAppointmentUrl;
const findUnitAppointment = async (findUnitAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindUnitAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findUnitAppointmentBody)
    });
};
exports.findUnitAppointment = findUnitAppointment;
const getUpdateUnitAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateUnitAppointment`;
};
exports.getUpdateUnitAppointmentUrl = getUpdateUnitAppointmentUrl;
const updateUnitAppointment = async (updateUnitAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateUnitAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateUnitAppointmentBody)
    });
};
exports.updateUnitAppointment = updateUnitAppointment;
const getDeleteUnitAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteUnitAppointment`;
};
exports.getDeleteUnitAppointmentUrl = getDeleteUnitAppointmentUrl;
const deleteUnitAppointment = async (deleteUnitAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteUnitAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteUnitAppointmentBody)
    });
};
exports.deleteUnitAppointment = deleteUnitAppointment;
const getDisableUnitAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableUnitAppointment`;
};
exports.getDisableUnitAppointmentUrl = getDisableUnitAppointmentUrl;
const disableUnitAppointment = async (disableUnitAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableUnitAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableUnitAppointmentBody)
    });
};
exports.disableUnitAppointment = disableUnitAppointment;
const getAddProxyApplyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addProxyApplyAppointment`;
};
exports.getAddProxyApplyAppointmentUrl = getAddProxyApplyAppointmentUrl;
const addProxyApplyAppointment = async (addProxyApplyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddProxyApplyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addProxyApplyAppointmentBody)
    });
};
exports.addProxyApplyAppointment = addProxyApplyAppointment;
const getFindProxyApplyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findProxyApplyAppointment`;
};
exports.getFindProxyApplyAppointmentUrl = getFindProxyApplyAppointmentUrl;
const findProxyApplyAppointment = async (findProxyApplyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindProxyApplyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findProxyApplyAppointmentBody)
    });
};
exports.findProxyApplyAppointment = findProxyApplyAppointment;
const getUpdateProxyApplyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateProxyApplyAppointment`;
};
exports.getUpdateProxyApplyAppointmentUrl = getUpdateProxyApplyAppointmentUrl;
const updateProxyApplyAppointment = async (updateProxyApplyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateProxyApplyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateProxyApplyAppointmentBody)
    });
};
exports.updateProxyApplyAppointment = updateProxyApplyAppointment;
const getDeleteProxyApplyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteProxyApplyAppointment`;
};
exports.getDeleteProxyApplyAppointmentUrl = getDeleteProxyApplyAppointmentUrl;
const deleteProxyApplyAppointment = async (deleteProxyApplyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteProxyApplyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteProxyApplyAppointmentBody)
    });
};
exports.deleteProxyApplyAppointment = deleteProxyApplyAppointment;
const getDisableProxyApplyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableProxyApplyAppointment`;
};
exports.getDisableProxyApplyAppointmentUrl = getDisableProxyApplyAppointmentUrl;
const disableProxyApplyAppointment = async (disableProxyApplyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableProxyApplyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableProxyApplyAppointmentBody)
    });
};
exports.disableProxyApplyAppointment = disableProxyApplyAppointment;
const getAddProxyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addProxyAppointment`;
};
exports.getAddProxyAppointmentUrl = getAddProxyAppointmentUrl;
const addProxyAppointment = async (addProxyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddProxyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addProxyAppointmentBody)
    });
};
exports.addProxyAppointment = addProxyAppointment;
const getFindProxyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findProxyAppointment`;
};
exports.getFindProxyAppointmentUrl = getFindProxyAppointmentUrl;
const findProxyAppointment = async (findProxyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindProxyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findProxyAppointmentBody)
    });
};
exports.findProxyAppointment = findProxyAppointment;
const getUpdateProxyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateProxyAppointment`;
};
exports.getUpdateProxyAppointmentUrl = getUpdateProxyAppointmentUrl;
const updateProxyAppointment = async (updateProxyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateProxyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateProxyAppointmentBody)
    });
};
exports.updateProxyAppointment = updateProxyAppointment;
const getDeleteProxyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteProxyAppointment`;
};
exports.getDeleteProxyAppointmentUrl = getDeleteProxyAppointmentUrl;
const deleteProxyAppointment = async (deleteProxyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteProxyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteProxyAppointmentBody)
    });
};
exports.deleteProxyAppointment = deleteProxyAppointment;
const getDisableProxyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableProxyAppointment`;
};
exports.getDisableProxyAppointmentUrl = getDisableProxyAppointmentUrl;
const disableProxyAppointment = async (disableProxyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableProxyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableProxyAppointmentBody)
    });
};
exports.disableProxyAppointment = disableProxyAppointment;
const getAddDelegationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addDelegationAppointment`;
};
exports.getAddDelegationAppointmentUrl = getAddDelegationAppointmentUrl;
const addDelegationAppointment = async (addDelegationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddDelegationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addDelegationAppointmentBody)
    });
};
exports.addDelegationAppointment = addDelegationAppointment;
const getFindDelegationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findDelegationAppointment`;
};
exports.getFindDelegationAppointmentUrl = getFindDelegationAppointmentUrl;
const findDelegationAppointment = async (findDelegationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindDelegationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findDelegationAppointmentBody)
    });
};
exports.findDelegationAppointment = findDelegationAppointment;
const getUpdateDelegationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateDelegationAppointment`;
};
exports.getUpdateDelegationAppointmentUrl = getUpdateDelegationAppointmentUrl;
const updateDelegationAppointment = async (updateDelegationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateDelegationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateDelegationAppointmentBody)
    });
};
exports.updateDelegationAppointment = updateDelegationAppointment;
const getDeleteDelegationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteDelegationAppointment`;
};
exports.getDeleteDelegationAppointmentUrl = getDeleteDelegationAppointmentUrl;
const deleteDelegationAppointment = async (deleteDelegationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteDelegationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteDelegationAppointmentBody)
    });
};
exports.deleteDelegationAppointment = deleteDelegationAppointment;
const getDisableDelegationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableDelegationAppointment`;
};
exports.getDisableDelegationAppointmentUrl = getDisableDelegationAppointmentUrl;
const disableDelegationAppointment = async (disableDelegationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableDelegationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableDelegationAppointmentBody)
    });
};
exports.disableDelegationAppointment = disableDelegationAppointment;
const getAddDeprivationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addDeprivationAppointment`;
};
exports.getAddDeprivationAppointmentUrl = getAddDeprivationAppointmentUrl;
const addDeprivationAppointment = async (addDeprivationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddDeprivationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addDeprivationAppointmentBody)
    });
};
exports.addDeprivationAppointment = addDeprivationAppointment;
const getFindDeprivationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findDeprivationAppointment`;
};
exports.getFindDeprivationAppointmentUrl = getFindDeprivationAppointmentUrl;
const findDeprivationAppointment = async (findDeprivationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindDeprivationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findDeprivationAppointmentBody)
    });
};
exports.findDeprivationAppointment = findDeprivationAppointment;
const getUpdateDeprivationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateDeprivationAppointment`;
};
exports.getUpdateDeprivationAppointmentUrl = getUpdateDeprivationAppointmentUrl;
const updateDeprivationAppointment = async (updateDeprivationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateDeprivationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateDeprivationAppointmentBody)
    });
};
exports.updateDeprivationAppointment = updateDeprivationAppointment;
const getDeleteDeprivationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteDeprivationAppointment`;
};
exports.getDeleteDeprivationAppointmentUrl = getDeleteDeprivationAppointmentUrl;
const deleteDeprivationAppointment = async (deleteDeprivationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteDeprivationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteDeprivationAppointmentBody)
    });
};
exports.deleteDeprivationAppointment = deleteDeprivationAppointment;
const getDisableDeprivationAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableDeprivationAppointment`;
};
exports.getDisableDeprivationAppointmentUrl = getDisableDeprivationAppointmentUrl;
const disableDeprivationAppointment = async (disableDeprivationAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableDeprivationAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableDeprivationAppointmentBody)
    });
};
exports.disableDeprivationAppointment = disableDeprivationAppointment;
const getAddPrivateRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addPrivateRole`;
};
exports.getAddPrivateRoleUrl = getAddPrivateRoleUrl;
const addPrivateRole = async (addPrivateRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddPrivateRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addPrivateRoleBody)
    });
};
exports.addPrivateRole = addPrivateRole;
const getFindPrivateRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findPrivateRole`;
};
exports.getFindPrivateRoleUrl = getFindPrivateRoleUrl;
const findPrivateRole = async (findPrivateRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindPrivateRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findPrivateRoleBody)
    });
};
exports.findPrivateRole = findPrivateRole;
const getUpdatePrivateRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updatePrivateRole`;
};
exports.getUpdatePrivateRoleUrl = getUpdatePrivateRoleUrl;
const updatePrivateRole = async (updatePrivateRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdatePrivateRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updatePrivateRoleBody)
    });
};
exports.updatePrivateRole = updatePrivateRole;
const getDeletePrivateRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deletePrivateRole`;
};
exports.getDeletePrivateRoleUrl = getDeletePrivateRoleUrl;
const deletePrivateRole = async (deletePrivateRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeletePrivateRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deletePrivateRoleBody)
    });
};
exports.deletePrivateRole = deletePrivateRole;
const getAddPrivateRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addPrivateRoleAppointment`;
};
exports.getAddPrivateRoleAppointmentUrl = getAddPrivateRoleAppointmentUrl;
const addPrivateRoleAppointment = async (addPrivateRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddPrivateRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addPrivateRoleAppointmentBody)
    });
};
exports.addPrivateRoleAppointment = addPrivateRoleAppointment;
const getFindPrivateRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findPrivateRoleAppointment`;
};
exports.getFindPrivateRoleAppointmentUrl = getFindPrivateRoleAppointmentUrl;
const findPrivateRoleAppointment = async (findPrivateRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindPrivateRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findPrivateRoleAppointmentBody)
    });
};
exports.findPrivateRoleAppointment = findPrivateRoleAppointment;
const getUpdatePrivateRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updatePrivateRoleAppointment`;
};
exports.getUpdatePrivateRoleAppointmentUrl = getUpdatePrivateRoleAppointmentUrl;
const updatePrivateRoleAppointment = async (updatePrivateRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdatePrivateRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updatePrivateRoleAppointmentBody)
    });
};
exports.updatePrivateRoleAppointment = updatePrivateRoleAppointment;
const getDeletePrivateRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deletePrivateRoleAppointment`;
};
exports.getDeletePrivateRoleAppointmentUrl = getDeletePrivateRoleAppointmentUrl;
const deletePrivateRoleAppointment = async (deletePrivateRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeletePrivateRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deletePrivateRoleAppointmentBody)
    });
};
exports.deletePrivateRoleAppointment = deletePrivateRoleAppointment;
const getDisablePrivateRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disablePrivateRoleAppointment`;
};
exports.getDisablePrivateRoleAppointmentUrl = getDisablePrivateRoleAppointmentUrl;
const disablePrivateRoleAppointment = async (disablePrivateRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisablePrivateRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disablePrivateRoleAppointmentBody)
    });
};
exports.disablePrivateRoleAppointment = disablePrivateRoleAppointment;
const getAddUniversalRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addUniversalRole`;
};
exports.getAddUniversalRoleUrl = getAddUniversalRoleUrl;
const addUniversalRole = async (addUniversalRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddUniversalRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addUniversalRoleBody)
    });
};
exports.addUniversalRole = addUniversalRole;
const getFindUniversalRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findUniversalRole`;
};
exports.getFindUniversalRoleUrl = getFindUniversalRoleUrl;
const findUniversalRole = async (findUniversalRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindUniversalRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findUniversalRoleBody)
    });
};
exports.findUniversalRole = findUniversalRole;
const getUpdateUniversalRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateUniversalRole`;
};
exports.getUpdateUniversalRoleUrl = getUpdateUniversalRoleUrl;
const updateUniversalRole = async (updateUniversalRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateUniversalRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateUniversalRoleBody)
    });
};
exports.updateUniversalRole = updateUniversalRole;
const getDeleteUniversalRoleUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteUniversalRole`;
};
exports.getDeleteUniversalRoleUrl = getDeleteUniversalRoleUrl;
const deleteUniversalRole = async (deleteUniversalRoleBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteUniversalRoleUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteUniversalRoleBody)
    });
};
exports.deleteUniversalRole = deleteUniversalRole;
const getAddUniversalRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=addUniversalRoleAppointment`;
};
exports.getAddUniversalRoleAppointmentUrl = getAddUniversalRoleAppointmentUrl;
const addUniversalRoleAppointment = async (addUniversalRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getAddUniversalRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(addUniversalRoleAppointmentBody)
    });
};
exports.addUniversalRoleAppointment = addUniversalRoleAppointment;
const getFindUniversalRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=findUniversalRoleAppointment`;
};
exports.getFindUniversalRoleAppointmentUrl = getFindUniversalRoleAppointmentUrl;
const findUniversalRoleAppointment = async (findUniversalRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindUniversalRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findUniversalRoleAppointmentBody)
    });
};
exports.findUniversalRoleAppointment = findUniversalRoleAppointment;
const getUpdateUniversalRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=updateUniversalRoleAppointment`;
};
exports.getUpdateUniversalRoleAppointmentUrl = getUpdateUniversalRoleAppointmentUrl;
const updateUniversalRoleAppointment = async (updateUniversalRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getUpdateUniversalRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(updateUniversalRoleAppointmentBody)
    });
};
exports.updateUniversalRoleAppointment = updateUniversalRoleAppointment;
const getDeleteUniversalRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=deleteUniversalRoleAppointment`;
};
exports.getDeleteUniversalRoleAppointmentUrl = getDeleteUniversalRoleAppointmentUrl;
const deleteUniversalRoleAppointment = async (deleteUniversalRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDeleteUniversalRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(deleteUniversalRoleAppointmentBody)
    });
};
exports.deleteUniversalRoleAppointment = deleteUniversalRoleAppointment;
const getDisableUniversalRoleAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=org.Org&method=disableUniversalRoleAppointment`;
};
exports.getDisableUniversalRoleAppointmentUrl = getDisableUniversalRoleAppointmentUrl;
const disableUniversalRoleAppointment = async (disableUniversalRoleAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getDisableUniversalRoleAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(disableUniversalRoleAppointmentBody)
    });
};
exports.disableUniversalRoleAppointment = disableUniversalRoleAppointment;
const getFindProjectUrl = () => {
    return `/Broker/WebApi/Service?name=site.Site&method=findProject`;
};
exports.getFindProjectUrl = getFindProjectUrl;
const findProject = async (findProjectBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindProjectUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findProjectBody)
    });
};
exports.findProject = findProject;
const getImportTinyUserMasterUrl = () => {
    return `/Broker/WebApi/Service?name=usermaster.UserMaster&method=importTinyUserMaster`;
};
exports.getImportTinyUserMasterUrl = getImportTinyUserMasterUrl;
const importTinyUserMaster = async (importTinyUserMasterBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getImportTinyUserMasterUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(importTinyUserMasterBody)
    });
};
exports.importTinyUserMaster = importTinyUserMaster;
const getExportTinyUserMasterUrl = () => {
    return `/Broker/WebApi/Service?name=usermaster.UserMaster&method=exportTinyUserMaster`;
};
exports.getExportTinyUserMasterUrl = getExportTinyUserMasterUrl;
const exportTinyUserMaster = async (exportTinyUserMasterBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getExportTinyUserMasterUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(exportTinyUserMasterBody)
    });
};
exports.exportTinyUserMaster = exportTinyUserMaster;
const getImportUserMasterUrl = () => {
    return `/Broker/WebApi/Service?name=usermaster.UserMaster&method=importUserMaster`;
};
exports.getImportUserMasterUrl = getImportUserMasterUrl;
const importUserMaster = async (importUserMasterBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getImportUserMasterUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(importUserMasterBody)
    });
};
exports.importUserMaster = importUserMaster;
const getExportUserMasterUrl = () => {
    return `/Broker/WebApi/Service?name=usermaster.UserMaster&method=exportUserMaster`;
};
exports.getExportUserMasterUrl = getExportUserMasterUrl;
const exportUserMaster = async (exportUserMasterBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getExportUserMasterUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(exportUserMasterBody)
    });
};
exports.exportUserMaster = exportUserMaster;
const getListComponentMasterWindowUrl = () => {
    return `/Broker/WebApi/Service?name=form.Form&method=listComponentMasterWindow`;
};
exports.getListComponentMasterWindowUrl = getListComponentMasterWindowUrl;
const listComponentMasterWindow = async (listComponentMasterWindowBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListComponentMasterWindowUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listComponentMasterWindowBody)
    });
};
exports.listComponentMasterWindow = listComponentMasterWindow;
const getListComponentAutoNumberUrl = () => {
    return `/Broker/WebApi/Service?name=form.Form&method=listComponentAutoNumber`;
};
exports.getListComponentAutoNumberUrl = getListComponentAutoNumberUrl;
const listComponentAutoNumber = async (listComponentAutoNumberBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListComponentAutoNumberUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listComponentAutoNumberBody)
    });
};
exports.listComponentAutoNumber = listComponentAutoNumber;
const getListFormUrl = () => {
    return `/Broker/WebApi/Service?name=form.Form&method=listForm`;
};
exports.getListFormUrl = getListFormUrl;
const listForm = async (listFormBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListFormUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listFormBody)
    });
};
exports.listForm = listForm;
const getFindFormDefinitionUrl = () => {
    return `/Broker/WebApi/Service?name=form.Form&method=findFormDefinition`;
};
exports.getFindFormDefinitionUrl = getFindFormDefinitionUrl;
const findFormDefinition = async (findFormDefinitionBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getFindFormDefinitionUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(findFormDefinitionBody)
    });
};
exports.findFormDefinition = findFormDefinition;
const getListPublicFolderInfoUrl = () => {
    return `/Broker/WebApi/Service?name=publication.Publication&method=listPublicFolderInfo`;
};
exports.getListPublicFolderInfoUrl = getListPublicFolderInfoUrl;
const listPublicFolderInfo = async (listPublicFolderInfoBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListPublicFolderInfoUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listPublicFolderInfoBody)
    });
};
exports.listPublicFolderInfo = listPublicFolderInfo;
const getNotAdminPrepareDocRequestUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.doc.Doc&method=prepareDocRequest`;
};
exports.getNotAdminPrepareDocRequestUrl = getNotAdminPrepareDocRequestUrl;
const notAdminPrepareDocRequest = async (notAdminPrepareDocRequestBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminPrepareDocRequestUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminPrepareDocRequestBody)
    });
};
exports.notAdminPrepareDocRequest = notAdminPrepareDocRequest;
const getNotAdminAddDocUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.doc.Doc&method=addDoc`;
};
exports.getNotAdminAddDocUrl = getNotAdminAddDocUrl;
const notAdminAddDoc = async (notAdminAddDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminAddDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminAddDocBody)
    });
};
exports.notAdminAddDoc = notAdminAddDoc;
const getNotAdminSelectDocUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.doc.Doc&method=selectDoc`;
};
exports.getNotAdminSelectDocUrl = getNotAdminSelectDocUrl;
const notAdminSelectDoc = async (notAdminSelectDocBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminSelectDocUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminSelectDocBody)
    });
};
exports.notAdminSelectDoc = notAdminSelectDoc;
const getGetDocViewUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.doc.Doc&method=getDocView`;
};
exports.getGetDocViewUrl = getGetDocViewUrl;
const getDocView = async (getDocViewBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getGetDocViewUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(getDocViewBody)
    });
};
exports.getDocView = getDocView;
const getNotAdminCountListWorkflowMessageUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.workflow.Workflow&method=countListWorkflowMessage`;
};
exports.getNotAdminCountListWorkflowMessageUrl = getNotAdminCountListWorkflowMessageUrl;
const notAdminCountListWorkflowMessage = async (notAdminCountListWorkflowMessageBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminCountListWorkflowMessageUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminCountListWorkflowMessageBody)
    });
};
exports.notAdminCountListWorkflowMessage = notAdminCountListWorkflowMessage;
const getNotAdminSelectWorkflowMessageUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.workflow.Workflow&method=selectWorkflowMessage`;
};
exports.getNotAdminSelectWorkflowMessageUrl = getNotAdminSelectWorkflowMessageUrl;
const notAdminSelectWorkflowMessage = async (notAdminSelectWorkflowMessageBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminSelectWorkflowMessageUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminSelectWorkflowMessageBody)
    });
};
exports.notAdminSelectWorkflowMessage = notAdminSelectWorkflowMessage;
const getNotAdminStartUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.workflow.Workflow&method=start`;
};
exports.getNotAdminStartUrl = getNotAdminStartUrl;
const notAdminStart = async (notAdminStartBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminStartUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminStartBody)
    });
};
exports.notAdminStart = notAdminStart;
const getListProxyApplyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.org.Org&method=listProxyApplyAppointment`;
};
exports.getListProxyApplyAppointmentUrl = getListProxyApplyAppointmentUrl;
const listProxyApplyAppointment = async (listProxyApplyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getListProxyApplyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(listProxyApplyAppointmentBody)
    });
};
exports.listProxyApplyAppointment = listProxyApplyAppointment;
const getNotAdminListProxyAppointmentUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.org.Org&method=listProxyAppointment`;
};
exports.getNotAdminListProxyAppointmentUrl = getNotAdminListProxyAppointmentUrl;
const notAdminListProxyAppointment = async (notAdminListProxyAppointmentBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminListProxyAppointmentUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminListProxyAppointmentBody)
    });
};
exports.notAdminListProxyAppointment = notAdminListProxyAppointment;
const getNotAdminListPublicFolderInfoUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.publication.Publication&method=listPublicFolderInfo`;
};
exports.getNotAdminListPublicFolderInfoUrl = getNotAdminListPublicFolderInfoUrl;
const notAdminListPublicFolderInfo = async (notAdminListPublicFolderInfoBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminListPublicFolderInfoUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminListPublicFolderInfoBody)
    });
};
exports.notAdminListPublicFolderInfo = notAdminListPublicFolderInfo;
const getNotAdminGetUserInfoUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.system.System&method=getUserInfo`;
};
exports.getNotAdminGetUserInfoUrl = getNotAdminGetUserInfoUrl;
const notAdminGetUserInfo = async (notAdminGetUserInfoBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminGetUserInfoUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminGetUserInfoBody)
    });
};
exports.notAdminGetUserInfo = notAdminGetUserInfo;
const getNotAdminGetVersionUrl = () => {
    return `/Broker/WebApi/Service?name=userfunc.system.System&method=getVersion`;
};
exports.getNotAdminGetVersionUrl = getNotAdminGetVersionUrl;
const notAdminGetVersion = async (notAdminGetVersionBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getNotAdminGetVersionUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(notAdminGetVersionBody)
    });
};
exports.notAdminGetVersion = notAdminGetVersion;
const getSCIMGetUsersUrl = (params) => {
    const normalizedParams = new URLSearchParams();
    Object.entries(params || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            normalizedParams.append(key, value === null ? 'null' : value.toString());
        }
    });
    const stringifiedParams = normalizedParams.toString();
    return stringifiedParams.length > 0 ? `/Broker/SCIM/Users?${stringifiedParams}` : `/Broker/SCIM/Users`;
};
exports.getSCIMGetUsersUrl = getSCIMGetUsersUrl;
const sCIMGetUsers = async (params, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMGetUsersUrl)(params), {
        ...options,
        method: 'GET'
    });
};
exports.sCIMGetUsers = sCIMGetUsers;
const getSCIMPostUsersUrl = () => {
    return `/Broker/SCIM/Users`;
};
exports.getSCIMPostUsersUrl = getSCIMPostUsersUrl;
const sCIMPostUsers = async (sCIMPostUsersBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMPostUsersUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(sCIMPostUsersBody)
    });
};
exports.sCIMPostUsers = sCIMPostUsers;
const getSCIMGetUsersIdUrl = (userId) => {
    return `/Broker/SCIM/Users/${userId}`;
};
exports.getSCIMGetUsersIdUrl = getSCIMGetUsersIdUrl;
const sCIMGetUsersId = async (userId, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMGetUsersIdUrl)(userId), {
        ...options,
        method: 'GET'
    });
};
exports.sCIMGetUsersId = sCIMGetUsersId;
const getSCIMPostUsersIdUrl = (userId) => {
    return `/Broker/SCIM/Users/${userId}`;
};
exports.getSCIMPostUsersIdUrl = getSCIMPostUsersIdUrl;
const sCIMPostUsersId = async (userId, sCIMPostUsersIdBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMPostUsersIdUrl)(userId), {
        ...options,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(sCIMPostUsersIdBody)
    });
};
exports.sCIMPostUsersId = sCIMPostUsersId;
const getSCIMPatchUsersIdUrl = (userId) => {
    return `/Broker/SCIM/Users/${userId}`;
};
exports.getSCIMPatchUsersIdUrl = getSCIMPatchUsersIdUrl;
const sCIMPatchUsersId = async (userId, sCIMPatchUsersIdBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMPatchUsersIdUrl)(userId), {
        ...options,
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(sCIMPatchUsersIdBody)
    });
};
exports.sCIMPatchUsersId = sCIMPatchUsersId;
const getSCIMDeleteUsersIdUrl = (userId) => {
    return `/Broker/SCIM/Users/${userId}`;
};
exports.getSCIMDeleteUsersIdUrl = getSCIMDeleteUsersIdUrl;
const sCIMDeleteUsersId = async (userId, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMDeleteUsersIdUrl)(userId), {
        ...options,
        method: 'DELETE'
    });
};
exports.sCIMDeleteUsersId = sCIMDeleteUsersId;
const getSCIMGetGroupsUrl = (params) => {
    const normalizedParams = new URLSearchParams();
    Object.entries(params || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            normalizedParams.append(key, value === null ? 'null' : value.toString());
        }
    });
    const stringifiedParams = normalizedParams.toString();
    return stringifiedParams.length > 0 ? `/Broker/SCIM/Groups?${stringifiedParams}` : `/Broker/SCIM/Groups`;
};
exports.getSCIMGetGroupsUrl = getSCIMGetGroupsUrl;
const sCIMGetGroups = async (params, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMGetGroupsUrl)(params), {
        ...options,
        method: 'GET'
    });
};
exports.sCIMGetGroups = sCIMGetGroups;
const getSCIMPostGroupsUrl = () => {
    return `/Broker/SCIM/Groups`;
};
exports.getSCIMPostGroupsUrl = getSCIMPostGroupsUrl;
const sCIMPostGroups = async (sCIMPostGroupsBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMPostGroupsUrl)(), {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(sCIMPostGroupsBody)
    });
};
exports.sCIMPostGroups = sCIMPostGroups;
const getSCIMGetGroupsIdUrl = (orgId) => {
    return `/Broker/SCIM/Groups/${orgId}`;
};
exports.getSCIMGetGroupsIdUrl = getSCIMGetGroupsIdUrl;
const sCIMGetGroupsId = async (orgId, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMGetGroupsIdUrl)(orgId), {
        ...options,
        method: 'GET'
    });
};
exports.sCIMGetGroupsId = sCIMGetGroupsId;
const getSCIMPutGroupsUrl = (orgId) => {
    return `/Broker/SCIM/Groups/${orgId}`;
};
exports.getSCIMPutGroupsUrl = getSCIMPutGroupsUrl;
const sCIMPutGroups = async (orgId, sCIMPutGroupsBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMPutGroupsUrl)(orgId), {
        ...options,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(sCIMPutGroupsBody)
    });
};
exports.sCIMPutGroups = sCIMPutGroups;
const getSCIMPatchGroupsIdUrl = (orgId) => {
    return `/Broker/SCIM/Groups/${orgId}`;
};
exports.getSCIMPatchGroupsIdUrl = getSCIMPatchGroupsIdUrl;
const sCIMPatchGroupsId = async (orgId, sCIMPatchGroupsIdBody, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMPatchGroupsIdUrl)(orgId), {
        ...options,
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: JSON.stringify(sCIMPatchGroupsIdBody)
    });
};
exports.sCIMPatchGroupsId = sCIMPatchGroupsId;
const getSCIMDeleteGroupsIdUrl = (orgId) => {
    return `/Broker/SCIM/Groups/${orgId}`;
};
exports.getSCIMDeleteGroupsIdUrl = getSCIMDeleteGroupsIdUrl;
const sCIMDeleteGroupsId = async (orgId, options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMDeleteGroupsIdUrl)(orgId), {
        ...options,
        method: 'DELETE'
    });
};
exports.sCIMDeleteGroupsId = sCIMDeleteGroupsId;
const getSCIMResourceTypesUrl = () => {
    return `/Broker/SCIM/ResourceTypes`;
};
exports.getSCIMResourceTypesUrl = getSCIMResourceTypesUrl;
const sCIMResourceTypes = async (options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMResourceTypesUrl)(), {
        ...options,
        method: 'GET'
    });
};
exports.sCIMResourceTypes = sCIMResourceTypes;
const getSCIMSchemasUrl = () => {
    return `/Broker/SCIM/Schemas`;
};
exports.getSCIMSchemasUrl = getSCIMSchemasUrl;
const sCIMSchemas = async (options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMSchemasUrl)(), {
        ...options,
        method: 'GET'
    });
};
exports.sCIMSchemas = sCIMSchemas;
const getSCIMServiceUrl = () => {
    return `/Broker/SCIM/ServiceProviderConfigs`;
};
exports.getSCIMServiceUrl = getSCIMServiceUrl;
const sCIMService = async (options) => {
    return (0, custom_mcp_instance_1.customFetchInstance)((0, exports.getSCIMServiceUrl)(), {
        ...options,
        method: 'GET'
    });
};
exports.sCIMService = sCIMService;
