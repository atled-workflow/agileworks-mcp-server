"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRuleHandler = exports.createRuleHandler = exports.notAdminGetVersionHandler = exports.listPublicFolderInfoHandler = exports.findFormDefinitionHandler = exports.listFormHandler = exports.listComponentAutoNumberHandler = exports.listComponentMasterWindowHandler = exports.findProjectHandler = exports.findUniversalRoleAppointmentHandler = exports.findUniversalRoleHandler = exports.findPrivateRoleAppointmentHandler = exports.findPrivateRoleHandler = exports.findDeprivationAppointmentHandler = exports.findDelegationAppointmentHandler = exports.findProxyAppointmentHandler = exports.findProxyApplyAppointmentHandler = exports.findUnitAppointmentHandler = exports.findSectionRoleGroupHandler = exports.findSectionRoleHandler = exports.findUnitHandler = exports.findUserHandler = exports.listWorkflowJournalHandler = exports.findWorkflowTaskHandler = exports.getWorkflowInfoHandler = exports.docRetractHandler = exports.docRemandHandler = exports.docApproveHandler = exports.docStartHandler = exports.docDraftHandler = exports.selectWorkflowMessageHandler = exports.countListWorkflowMessageHandler = exports.countWorkflowMessageHandler = exports.openDocHandler = exports.addDocReferenceHandler = exports.listDocReferencerHandler = exports.getDocReferenceHandler = exports.listDocAttachmentHandler = exports.updateDocAttachmentHandler = exports.addDocAttachmentHandler = exports.addDocCommentHandler = exports.listDocCommentHandler = exports.selectDocHandler = exports.updateDocHandler = exports.addDocHandler = exports.prepareDocRequestHandler = exports.getDocHandler = void 0;
const http_client_1 = require("./http-client");
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
const listDocAttachmentHandler = async (args) => {
    const res = await (0, http_client_1.listDocAttachment)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.listDocAttachmentHandler = listDocAttachmentHandler;
const getDocReferenceHandler = async (args) => {
    const res = await (0, http_client_1.getDocReference)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.getDocReferenceHandler = getDocReferenceHandler;
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
const createRuleHandler = async (args) => {
    const res = await (0, http_client_1.createRule)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.createRuleHandler = createRuleHandler;
const findRuleHandler = async (args) => {
    const res = await (0, http_client_1.findRule)(args.bodyParams);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
};
exports.findRuleHandler = findRuleHandler;
