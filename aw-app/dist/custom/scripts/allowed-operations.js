"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALLOWED_OPERATIONS = void 0;
exports.ALLOWED_OPERATIONS = [
    {
        operationId: 'getDoc',
        toolName: 'agileworks_get_document',
        readOnlyHint: true
    },
    {
        operationId: 'prepareDocRequest',
        toolName: 'agileworks_prepare_document',
        readOnlyHint: true
    },
    {
        operationId: 'addDoc',
        toolName: 'agileworks_add_document',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
    },
    {
        operationId: 'updateDoc',
        toolName: 'agileworks_update_document',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
    },
    {
        operationId: 'selectDoc',
        toolName: 'agileworks_search_documents',
        readOnlyHint: true
    },
    {
        operationId: 'openDoc',
        toolName: 'agileworks_open_document',
        readOnlyHint: true
    },
    {
        operationId: 'listDocComment',
        toolName: 'agileworks_list_document_comments',
        readOnlyHint: true
    },
    {
        operationId: 'addDocComment',
        toolName: 'agileworks_add_document_comment',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
    },
    {
        operationId: 'addDocAttachment',
        toolName: 'agileworks_add_document_attachment',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
    },
    {
        operationId: 'updateDocAttachment',
        toolName: 'agileworks_update_document_attachment',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
    },
    {
        operationId: 'listDocAttachment',
        toolName: 'agileworks_list_document_attachments',
        readOnlyHint: true
    },
    {
        operationId: 'getDocReference',
        toolName: 'agileworks_get_document_references',
        readOnlyHint: true
    },
    {
        operationId: 'listDocReferencer',
        toolName: 'agileworks_list_referencing_documents',
        readOnlyHint: true
    },
    {
        operationId: 'addDocReference',
        toolName: 'agileworks_add_document_reference',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
    },
    {
        operationId: 'countWorkflowMessage',
        toolName: 'agileworks_count_workflow_messages',
        readOnlyHint: true
    },
    {
        operationId: 'countListWorkflowMessage',
        toolName: 'agileworks_list_workflow_message_counts',
        readOnlyHint: true,
    },
    {
        operationId: 'selectWorkflowMessage',
        toolName: 'agileworks_search_workflow_messages',
        readOnlyHint: true
    },
    {
        operationId: 'docDraft',
        toolName: 'agileworks_save_document_draft',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true,
    },
    {
        operationId: 'docStart',
        toolName: 'agileworks_submit_document',
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
    },
    {
        operationId: 'docApprove',
        toolName: 'agileworks_approve_document',
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
    },
    {
        operationId: 'docRemand',
        toolName: 'agileworks_remand_document',
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
    },
    {
        operationId: 'docRetract',
        toolName: 'agileworks_retract_document',
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
    },
    {
        operationId: 'getWorkflowInfo',
        toolName: 'agileworks_get_workflow_info',
        readOnlyHint: true
    },
    {
        operationId: 'findWorkflowTask',
        toolName: 'agileworks_find_workflow_tasks',
        readOnlyHint: true
    },
    {
        operationId: 'listWorkflowJournal',
        toolName: 'agileworks_list_workflow_journals',
        readOnlyHint: true
    },
    {
        operationId: 'findUser',
        toolName: 'agileworks_find_users',
        readOnlyHint: true
    },
    {
        operationId: 'findUnit',
        toolName: 'agileworks_find_units',
        readOnlyHint: true
    },
    {
        operationId: 'findSectionRole',
        toolName: 'agileworks_find_section_roles',
        readOnlyHint: true
    },
    {
        operationId: 'findSectionRoleGroup',
        toolName: 'agileworks_find_section_role_groups',
        readOnlyHint: true
    },
    {
        operationId: 'findUnitAppointment',
        toolName: 'agileworks_find_unit_appointments',
        readOnlyHint: true
    },
    {
        operationId: 'findProxyApplyAppointment',
        toolName: 'agileworks_find_proxy_apply_appointments',
        readOnlyHint: true,
    },
    {
        operationId: 'findProxyAppointment',
        toolName: 'agileworks_find_proxy_appointments',
        readOnlyHint: true
    },
    {
        operationId: 'findDelegationAppointment',
        toolName: 'agileworks_find_delegation_appointments',
        readOnlyHint: true,
    },
    {
        operationId: 'findDeprivationAppointment',
        toolName: 'agileworks_find_deprivation_appointments',
        readOnlyHint: true,
    },
    {
        operationId: 'findPrivateRole',
        toolName: 'agileworks_find_private_roles',
        readOnlyHint: true
    },
    {
        operationId: 'findPrivateRoleAppointment',
        toolName: 'agileworks_find_private_role_appointments',
        readOnlyHint: true,
    },
    {
        operationId: 'findUniversalRole',
        toolName: 'agileworks_find_universal_roles',
        readOnlyHint: true
    },
    {
        operationId: 'findUniversalRoleAppointment',
        toolName: 'agileworks_find_universal_role_appointments',
        readOnlyHint: true,
    },
    {
        operationId: 'findProject',
        toolName: 'agileworks_list_projects',
        readOnlyHint: true
    },
    {
        operationId: 'listComponentMasterWindow',
        toolName: 'agileworks_list_master_reference_components',
        readOnlyHint: true,
    },
    {
        operationId: 'listComponentAutoNumber',
        toolName: 'agileworks_list_auto_number_components',
        readOnlyHint: true,
    },
    {
        operationId: 'listForm',
        toolName: 'agileworks_list_forms',
        readOnlyHint: true
    },
    {
        operationId: 'findFormDefinition',
        toolName: 'agileworks_get_form_definition',
        readOnlyHint: true
    },
    {
        operationId: 'listPublicFolderInfo',
        toolName: 'agileworks_list_public_folders',
        readOnlyHint: true
    },
    {
        operationId: 'notAdminGetVersion',
        toolName: 'agileworks_get_version',
        readOnlyHint: true
    },
    {
        operationId: 'createRule',
        toolName: 'agileworks_create_rule',
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
    },
    {
        operationId: 'findRule',
        toolName: 'agileworks_find_rule',
        readOnlyHint: true
    },
];
