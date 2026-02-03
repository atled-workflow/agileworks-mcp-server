"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSectionRoleGroupHandler = exports.deleteSectionRoleHandler = exports.updateSectionRoleHandler = exports.findSectionRoleHandler = exports.addSectionRoleHandler = exports.disableUnitHandler = exports.deleteUnitHandler = exports.updateUnitHandler = exports.findUnitHandler = exports.addUnitHandler = exports.disableUserHandler = exports.deleteUserHandler = exports.updateUserHandler = exports.findUserHandler = exports.addUserHandler = exports.listShareJournalHandler = exports.listElectJournalHandler = exports.listWorkflowJournalHandler = exports.findWorkflowTaskHandler = exports.getWorkflowInfoHandler = exports.docRejectHandler = exports.docRetractHandler = exports.docRemandHandler = exports.docDeleteHandler = exports.docApproveHandler = exports.docStartHandler = exports.docDraftHandler = exports.selectWorkflowMessageHandler = exports.countListWorkflowMessageHandler = exports.countWorkflowMessageHandler = exports.openDocHandler = exports.deleteDocReferenceHandler = exports.addDocReferenceHandler = exports.listDocReferencerHandler = exports.getDocReferenceeHandler = exports.deleteDocAttachmentHandler = exports.listDocAttachementHandler = exports.updateDocAttachmentHandler = exports.addDocAttachmentHandler = exports.deleteDocCommentHandler = exports.addDocCommentHandler = exports.listDocCommentHandler = exports.getDocPdfHandler = exports.selectDocHandler = exports.hardDeleteDocHandler = exports.updateDocHandler = exports.addDocHandler = exports.prepareDocRequestHandler = exports.getDocHandler = exports.getDocHeaderHandler = void 0;
exports.importUserMasterHandler = exports.exportTinyUserMasterHandler = exports.importTinyUserMasterHandler = exports.findProjectHandler = exports.disableUniversalRoleAppointmentHandler = exports.deleteUniversalRoleAppointmentHandler = exports.updateUniversalRoleAppointmentHandler = exports.findUniversalRoleAppointmentHandler = exports.addUniversalRoleAppointmentHandler = exports.deleteUniversalRoleHandler = exports.updateUniversalRoleHandler = exports.findUniversalRoleHandler = exports.addUniversalRoleHandler = exports.disablePrivateRoleAppointmentHandler = exports.deletePrivateRoleAppointmentHandler = exports.updatePrivateRoleAppointmentHandler = exports.findPrivateRoleAppointmentHandler = exports.addPrivateRoleAppointmentHandler = exports.deletePrivateRoleHandler = exports.updatePrivateRoleHandler = exports.findPrivateRoleHandler = exports.addPrivateRoleHandler = exports.disableDeprivationAppointmentHandler = exports.deleteDeprivationAppointmentHandler = exports.updateDeprivationAppointmentHandler = exports.findDeprivationAppointmentHandler = exports.addDeprivationAppointmentHandler = exports.disableDelegationAppointmentHandler = exports.deleteDelegationAppointmentHandler = exports.updateDelegationAppointmentHandler = exports.findDelegationAppointmentHandler = exports.addDelegationAppointmentHandler = exports.disableProxyAppointmentHandler = exports.deleteProxyAppointmentHandler = exports.updateProxyAppointmentHandler = exports.findProxyAppointmentHandler = exports.addProxyAppointmentHandler = exports.disableProxyApplyAppointmentHandler = exports.deleteProxyApplyAppointmentHandler = exports.updateProxyApplyAppointmentHandler = exports.findProxyApplyAppointmentHandler = exports.addProxyApplyAppointmentHandler = exports.disableUnitAppointmentHandler = exports.deleteUnitAppointmentHandler = exports.updateUnitAppointmentHandler = exports.findUnitAppointmentHandler = exports.addUnitAppointmentHandler = exports.deleteSectionRoleGroupHandler = exports.updateSectionRoleGroupHandler = exports.findSectionRoleGroupHandler = void 0;
exports.notAdminGetVersionHandler = exports.listPublicFolderInfoHandler = exports.findFormDefinitionHandler = exports.listFormHandler = exports.listComponentAutoNumberHandler = exports.listComponentMasterWindowHandler = exports.exportUserMasterHandler = void 0;
const http_client_1 = require("./http-client");
const getDocHeaderHandler = async (args) => {
    const res = await (0, http_client_1.getDocHeader)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.getDocHeaderHandler = getDocHeaderHandler;
const getDocHandler = async (args) => {
    const res = await (0, http_client_1.getDoc)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.getDocHandler = getDocHandler;
const prepareDocRequestHandler = async (args) => {
    const res = await (0, http_client_1.prepareDocRequest)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.prepareDocRequestHandler = prepareDocRequestHandler;
const addDocHandler = async (args) => {
    const res = await (0, http_client_1.addDoc)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addDocHandler = addDocHandler;
const updateDocHandler = async (args) => {
    const res = await (0, http_client_1.updateDoc)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateDocHandler = updateDocHandler;
const hardDeleteDocHandler = async (args) => {
    const res = await (0, http_client_1.hardDeleteDoc)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.hardDeleteDocHandler = hardDeleteDocHandler;
const selectDocHandler = async (args) => {
    const res = await (0, http_client_1.selectDoc)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.selectDocHandler = selectDocHandler;
const getDocPdfHandler = async (args) => {
    const res = await (0, http_client_1.getDocPdf)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.getDocPdfHandler = getDocPdfHandler;
const listDocCommentHandler = async (args) => {
    const res = await (0, http_client_1.listDocComment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listDocCommentHandler = listDocCommentHandler;
const addDocCommentHandler = async (args) => {
    const res = await (0, http_client_1.addDocComment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addDocCommentHandler = addDocCommentHandler;
const deleteDocCommentHandler = async (args) => {
    const res = await (0, http_client_1.deleteDocComment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteDocCommentHandler = deleteDocCommentHandler;
const addDocAttachmentHandler = async (args) => {
    const res = await (0, http_client_1.addDocAttachment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addDocAttachmentHandler = addDocAttachmentHandler;
const updateDocAttachmentHandler = async (args) => {
    const res = await (0, http_client_1.updateDocAttachment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateDocAttachmentHandler = updateDocAttachmentHandler;
const listDocAttachementHandler = async (args) => {
    const res = await (0, http_client_1.listDocAttachement)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listDocAttachementHandler = listDocAttachementHandler;
const deleteDocAttachmentHandler = async (args) => {
    const res = await (0, http_client_1.deleteDocAttachment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteDocAttachmentHandler = deleteDocAttachmentHandler;
const getDocReferenceeHandler = async (args) => {
    const res = await (0, http_client_1.getDocReferencee)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.getDocReferenceeHandler = getDocReferenceeHandler;
const listDocReferencerHandler = async (args) => {
    const res = await (0, http_client_1.listDocReferencer)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listDocReferencerHandler = listDocReferencerHandler;
const addDocReferenceHandler = async (args) => {
    const res = await (0, http_client_1.addDocReference)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addDocReferenceHandler = addDocReferenceHandler;
const deleteDocReferenceHandler = async (args) => {
    const res = await (0, http_client_1.deleteDocReference)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteDocReferenceHandler = deleteDocReferenceHandler;
const openDocHandler = async (args) => {
    const res = await (0, http_client_1.openDoc)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.openDocHandler = openDocHandler;
const countWorkflowMessageHandler = async (args) => {
    const res = await (0, http_client_1.countWorkflowMessage)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.countWorkflowMessageHandler = countWorkflowMessageHandler;
const countListWorkflowMessageHandler = async (args) => {
    const res = await (0, http_client_1.countListWorkflowMessage)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.countListWorkflowMessageHandler = countListWorkflowMessageHandler;
const selectWorkflowMessageHandler = async (args) => {
    const res = await (0, http_client_1.selectWorkflowMessage)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.selectWorkflowMessageHandler = selectWorkflowMessageHandler;
const docDraftHandler = async (args) => {
    const res = await (0, http_client_1.docDraft)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.docDraftHandler = docDraftHandler;
const docStartHandler = async (args) => {
    const res = await (0, http_client_1.docStart)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.docStartHandler = docStartHandler;
const docApproveHandler = async (args) => {
    const res = await (0, http_client_1.docApprove)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.docApproveHandler = docApproveHandler;
const docDeleteHandler = async (args) => {
    const res = await (0, http_client_1.docDelete)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.docDeleteHandler = docDeleteHandler;
const docRemandHandler = async (args) => {
    const res = await (0, http_client_1.docRemand)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.docRemandHandler = docRemandHandler;
const docRetractHandler = async (args) => {
    const res = await (0, http_client_1.docRetract)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.docRetractHandler = docRetractHandler;
const docRejectHandler = async (args) => {
    const res = await (0, http_client_1.docReject)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.docRejectHandler = docRejectHandler;
const getWorkflowInfoHandler = async (args) => {
    const res = await (0, http_client_1.getWorkflowInfo)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.getWorkflowInfoHandler = getWorkflowInfoHandler;
const findWorkflowTaskHandler = async (args) => {
    const res = await (0, http_client_1.findWorkflowTask)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findWorkflowTaskHandler = findWorkflowTaskHandler;
const listWorkflowJournalHandler = async (args) => {
    const res = await (0, http_client_1.listWorkflowJournal)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listWorkflowJournalHandler = listWorkflowJournalHandler;
const listElectJournalHandler = async (args) => {
    const res = await (0, http_client_1.listElectJournal)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listElectJournalHandler = listElectJournalHandler;
const listShareJournalHandler = async (args) => {
    const res = await (0, http_client_1.listShareJournal)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listShareJournalHandler = listShareJournalHandler;
const addUserHandler = async (args) => {
    const res = await (0, http_client_1.addUser)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addUserHandler = addUserHandler;
const findUserHandler = async (args) => {
    const res = await (0, http_client_1.findUser)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findUserHandler = findUserHandler;
const updateUserHandler = async (args) => {
    const res = await (0, http_client_1.updateUser)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateUserHandler = updateUserHandler;
const deleteUserHandler = async (args) => {
    const res = await (0, http_client_1.deleteUser)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteUserHandler = deleteUserHandler;
const disableUserHandler = async (args) => {
    const res = await (0, http_client_1.disableUser)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableUserHandler = disableUserHandler;
const addUnitHandler = async (args) => {
    const res = await (0, http_client_1.addUnit)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addUnitHandler = addUnitHandler;
const findUnitHandler = async (args) => {
    const res = await (0, http_client_1.findUnit)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findUnitHandler = findUnitHandler;
const updateUnitHandler = async (args) => {
    const res = await (0, http_client_1.updateUnit)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateUnitHandler = updateUnitHandler;
const deleteUnitHandler = async (args) => {
    const res = await (0, http_client_1.deleteUnit)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteUnitHandler = deleteUnitHandler;
const disableUnitHandler = async (args) => {
    const res = await (0, http_client_1.disableUnit)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableUnitHandler = disableUnitHandler;
const addSectionRoleHandler = async (args) => {
    const res = await (0, http_client_1.addSectionRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addSectionRoleHandler = addSectionRoleHandler;
const findSectionRoleHandler = async (args) => {
    const res = await (0, http_client_1.findSectionRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findSectionRoleHandler = findSectionRoleHandler;
const updateSectionRoleHandler = async (args) => {
    const res = await (0, http_client_1.updateSectionRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateSectionRoleHandler = updateSectionRoleHandler;
const deleteSectionRoleHandler = async (args) => {
    const res = await (0, http_client_1.deleteSectionRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteSectionRoleHandler = deleteSectionRoleHandler;
const addSectionRoleGroupHandler = async (args) => {
    const res = await (0, http_client_1.addSectionRoleGroup)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addSectionRoleGroupHandler = addSectionRoleGroupHandler;
const findSectionRoleGroupHandler = async (args) => {
    const res = await (0, http_client_1.findSectionRoleGroup)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findSectionRoleGroupHandler = findSectionRoleGroupHandler;
const updateSectionRoleGroupHandler = async (args) => {
    const res = await (0, http_client_1.updateSectionRoleGroup)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateSectionRoleGroupHandler = updateSectionRoleGroupHandler;
const deleteSectionRoleGroupHandler = async (args) => {
    const res = await (0, http_client_1.deleteSectionRoleGroup)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteSectionRoleGroupHandler = deleteSectionRoleGroupHandler;
const addUnitAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.addUnitAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addUnitAppointmentHandler = addUnitAppointmentHandler;
const findUnitAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.findUnitAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findUnitAppointmentHandler = findUnitAppointmentHandler;
const updateUnitAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.updateUnitAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateUnitAppointmentHandler = updateUnitAppointmentHandler;
const deleteUnitAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.deleteUnitAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteUnitAppointmentHandler = deleteUnitAppointmentHandler;
const disableUnitAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.disableUnitAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableUnitAppointmentHandler = disableUnitAppointmentHandler;
const addProxyApplyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.addProxyApplyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addProxyApplyAppointmentHandler = addProxyApplyAppointmentHandler;
const findProxyApplyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.findProxyApplyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findProxyApplyAppointmentHandler = findProxyApplyAppointmentHandler;
const updateProxyApplyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.updateProxyApplyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateProxyApplyAppointmentHandler = updateProxyApplyAppointmentHandler;
const deleteProxyApplyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.deleteProxyApplyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteProxyApplyAppointmentHandler = deleteProxyApplyAppointmentHandler;
const disableProxyApplyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.disableProxyApplyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableProxyApplyAppointmentHandler = disableProxyApplyAppointmentHandler;
const addProxyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.addProxyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addProxyAppointmentHandler = addProxyAppointmentHandler;
const findProxyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.findProxyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findProxyAppointmentHandler = findProxyAppointmentHandler;
const updateProxyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.updateProxyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateProxyAppointmentHandler = updateProxyAppointmentHandler;
const deleteProxyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.deleteProxyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteProxyAppointmentHandler = deleteProxyAppointmentHandler;
const disableProxyAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.disableProxyAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableProxyAppointmentHandler = disableProxyAppointmentHandler;
const addDelegationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.addDelegationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addDelegationAppointmentHandler = addDelegationAppointmentHandler;
const findDelegationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.findDelegationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findDelegationAppointmentHandler = findDelegationAppointmentHandler;
const updateDelegationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.updateDelegationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateDelegationAppointmentHandler = updateDelegationAppointmentHandler;
const deleteDelegationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.deleteDelegationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteDelegationAppointmentHandler = deleteDelegationAppointmentHandler;
const disableDelegationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.disableDelegationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableDelegationAppointmentHandler = disableDelegationAppointmentHandler;
const addDeprivationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.addDeprivationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addDeprivationAppointmentHandler = addDeprivationAppointmentHandler;
const findDeprivationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.findDeprivationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findDeprivationAppointmentHandler = findDeprivationAppointmentHandler;
const updateDeprivationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.updateDeprivationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateDeprivationAppointmentHandler = updateDeprivationAppointmentHandler;
const deleteDeprivationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.deleteDeprivationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteDeprivationAppointmentHandler = deleteDeprivationAppointmentHandler;
const disableDeprivationAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.disableDeprivationAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableDeprivationAppointmentHandler = disableDeprivationAppointmentHandler;
const addPrivateRoleHandler = async (args) => {
    const res = await (0, http_client_1.addPrivateRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addPrivateRoleHandler = addPrivateRoleHandler;
const findPrivateRoleHandler = async (args) => {
    const res = await (0, http_client_1.findPrivateRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findPrivateRoleHandler = findPrivateRoleHandler;
const updatePrivateRoleHandler = async (args) => {
    const res = await (0, http_client_1.updatePrivateRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updatePrivateRoleHandler = updatePrivateRoleHandler;
const deletePrivateRoleHandler = async (args) => {
    const res = await (0, http_client_1.deletePrivateRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deletePrivateRoleHandler = deletePrivateRoleHandler;
const addPrivateRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.addPrivateRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addPrivateRoleAppointmentHandler = addPrivateRoleAppointmentHandler;
const findPrivateRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.findPrivateRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findPrivateRoleAppointmentHandler = findPrivateRoleAppointmentHandler;
const updatePrivateRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.updatePrivateRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updatePrivateRoleAppointmentHandler = updatePrivateRoleAppointmentHandler;
const deletePrivateRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.deletePrivateRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deletePrivateRoleAppointmentHandler = deletePrivateRoleAppointmentHandler;
const disablePrivateRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.disablePrivateRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disablePrivateRoleAppointmentHandler = disablePrivateRoleAppointmentHandler;
const addUniversalRoleHandler = async (args) => {
    const res = await (0, http_client_1.addUniversalRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addUniversalRoleHandler = addUniversalRoleHandler;
const findUniversalRoleHandler = async (args) => {
    const res = await (0, http_client_1.findUniversalRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findUniversalRoleHandler = findUniversalRoleHandler;
const updateUniversalRoleHandler = async (args) => {
    const res = await (0, http_client_1.updateUniversalRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateUniversalRoleHandler = updateUniversalRoleHandler;
const deleteUniversalRoleHandler = async (args) => {
    const res = await (0, http_client_1.deleteUniversalRole)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteUniversalRoleHandler = deleteUniversalRoleHandler;
const addUniversalRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.addUniversalRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.addUniversalRoleAppointmentHandler = addUniversalRoleAppointmentHandler;
const findUniversalRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.findUniversalRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findUniversalRoleAppointmentHandler = findUniversalRoleAppointmentHandler;
const updateUniversalRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.updateUniversalRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.updateUniversalRoleAppointmentHandler = updateUniversalRoleAppointmentHandler;
const deleteUniversalRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.deleteUniversalRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.deleteUniversalRoleAppointmentHandler = deleteUniversalRoleAppointmentHandler;
const disableUniversalRoleAppointmentHandler = async (args) => {
    const res = await (0, http_client_1.disableUniversalRoleAppointment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.disableUniversalRoleAppointmentHandler = disableUniversalRoleAppointmentHandler;
const findProjectHandler = async (args) => {
    const res = await (0, http_client_1.findProject)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findProjectHandler = findProjectHandler;
const importTinyUserMasterHandler = async (args) => {
    const res = await (0, http_client_1.importTinyUserMaster)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.importTinyUserMasterHandler = importTinyUserMasterHandler;
const exportTinyUserMasterHandler = async (args) => {
    const res = await (0, http_client_1.exportTinyUserMaster)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.exportTinyUserMasterHandler = exportTinyUserMasterHandler;
const importUserMasterHandler = async (args) => {
    const res = await (0, http_client_1.importUserMaster)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.importUserMasterHandler = importUserMasterHandler;
const exportUserMasterHandler = async (args) => {
    const res = await (0, http_client_1.exportUserMaster)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.exportUserMasterHandler = exportUserMasterHandler;
const listComponentMasterWindowHandler = async (args) => {
    const res = await (0, http_client_1.listComponentMasterWindow)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listComponentMasterWindowHandler = listComponentMasterWindowHandler;
const listComponentAutoNumberHandler = async (args) => {
    const res = await (0, http_client_1.listComponentAutoNumber)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listComponentAutoNumberHandler = listComponentAutoNumberHandler;
const listFormHandler = async (args) => {
    const res = await (0, http_client_1.listForm)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listFormHandler = listFormHandler;
const findFormDefinitionHandler = async (args) => {
    const res = await (0, http_client_1.findFormDefinition)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findFormDefinitionHandler = findFormDefinitionHandler;
const listPublicFolderInfoHandler = async (args) => {
    const res = await (0, http_client_1.listPublicFolderInfo)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listPublicFolderInfoHandler = listPublicFolderInfoHandler;
const notAdminGetVersionHandler = async (args) => {
    const res = await (0, http_client_1.notAdminGetVersion)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.notAdminGetVersionHandler = notAdminGetVersionHandler;
