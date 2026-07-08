"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProjectBodyContent = exports.ImportUserMasterBodyStrategy = exports.ImportTinyUserMasterBodyStrategy = exports.FindWorkflowTaskBodyConditionRuleStepType = exports.NotAdminGetDocOwnerType = exports.GetDocOwnerType = exports.SCIMPatchGroupsIdRequestOperationsItemPath = exports.SCIMPatchUsersIdRequestOperationsItemPath = exports.FindUniversalRoleAppointmentRequestConditionColumnValueConditionListEntriesItemColumn = exports.FindUniversalRoleRequestConditionColumnValueConditionListEntriesItemColumn = exports.FindPrivateRoleAppointmentRequestConditionColumnValueConditionListEntriesItemColumn = exports.FindPrivateRoleRequestConditionColumnValueConditionListEntriesItemColumn = exports.UpdatePrivateRoleRequestCandidateListEntriesItemRoleType = exports.UpdatePrivateRoleRequestCandidateListEntriesItemType = exports.AddPrivateRoleRequestCandidateListEntriesItemRoleType = exports.AddPrivateRoleRequestCandidateListEntriesItemType = exports.UpdateDelegationAppointmentRequestTaskUnitPolicy = exports.AddDelegationAppointmentRequestTaskUnitPolicy = exports.FindUnitAppointmentRequestConditionColumnValueConditionListEntriesItemColumn = exports.FindUnitAppointmentRequestConditionUnitDirection = exports.FindSectionRoleGroupRequestConditionColumnValueConditionListEntriesItemColumn = exports.FindSectionRoleRequestConditionColumnValueConditionListEntriesItemColumn = exports.FindUnitRequestConditionColumnValueConditionListEntriesItemColumn = exports.FindUserRequestConditionColumnValueConditionListEntriesItemColumn = exports.NotAdminWorkflowMessageRequestWorkflowMessageType = exports.UpdateDocAttachmentRequestType = exports.AddDocAttachmentRequestType = exports.EnumFieldValueType = exports.EnumRelativeUserType = exports.EnumRelativeType = exports.EnumRangeType = exports.EnumDateConditionType = exports.EnumWorkflowStateType = exports.EnumDocViewColumnType = exports.WorkflowMessageType = exports.EnumDataType = exports.CompareOperatorType = void 0;
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.CompareOperatorType = {
    EQUAL: 'EQUAL',
    LESS_THAN: 'LESS_THAN',
    LESS_EQUAL: 'LESS_EQUAL',
    GREATER_THAN: 'GREATER_THAN',
    GREATER_EQUAL: 'GREATER_EQUAL',
    NOT_EQUAL: 'NOT_EQUAL',
    LIKE: 'LIKE',
    NOT_LIKE: 'NOT_LIKE',
    START_WITH: 'START_WITH',
    END_WITH: 'END_WITH',
    BETWEEN: 'BETWEEN',
    EMPTY: 'EMPTY',
    NOT_EMPTY: 'NOT_EMPTY',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumDataType = {
    BOOLEAN: 'BOOLEAN',
    DATE: 'DATE',
    DATETIME: 'DATETIME',
    DECIMAL: 'DECIMAL',
    INT: 'INT',
    LONG: 'LONG',
    STRING: 'STRING',
    TEXT: 'TEXT',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.WorkflowMessageType = {
    APPLY_REQUEST: 'APPLY_REQUEST',
    APPROVE_REQUEST: 'APPROVE_REQUEST',
    CONFIRM_REQUEST: 'CONFIRM_REQUEST',
    PREPARE: 'PREPARE',
    REMANDED: 'REMANDED',
    REMIND_EXIST: 'REMIND_EXIST',
    REQUEST_POSSIBLE: 'REQUEST_POSSIBLE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumDocViewColumnType = {
    FIELD: 'FIELD',
    GROUP_FIELD: 'GROUP_FIELD',
    DOC_ID: 'DOC_ID',
    DOC_ADMIN_NO: 'DOC_ADMIN_NO',
    DOC_LISTNAME1: 'DOC_LISTNAME1',
    DOC_LISTNAME2: 'DOC_LISTNAME2',
    DOC_LISTNAME3: 'DOC_LISTNAME3',
    DOC_LISTNAME4: 'DOC_LISTNAME4',
    DOC_LISTNAME5: 'DOC_LISTNAME5',
    DOC_LISTNAME6: 'DOC_LISTNAME6',
    DOC_LISTNAME7: 'DOC_LISTNAME7',
    DOC_LISTNAME8: 'DOC_LISTNAME8',
    DOC_LISTNAME9: 'DOC_LISTNAME9',
    DOC_LISTNAME10: 'DOC_LISTNAME10',
    DOC_LISTNAME11: 'DOC_LISTNAME11',
    DOC_LISTNAME12: 'DOC_LISTNAME12',
    DOC_LISTNAME13: 'DOC_LISTNAME13',
    DOC_LISTNAME14: 'DOC_LISTNAME14',
    DOC_LISTNAME15: 'DOC_LISTNAME15',
    DOC_LISTNAME16: 'DOC_LISTNAME16',
    DOC_LISTNAME17: 'DOC_LISTNAME17',
    DOC_LISTNAME18: 'DOC_LISTNAME18',
    DOC_LISTNAME19: 'DOC_LISTNAME19',
    DOC_LISTNAME20: 'DOC_LISTNAME20',
    DOC_FULL_VERSION: 'DOC_FULL_VERSION',
    DOC_EXIST_ATTACHMENT: 'DOC_EXIST_ATTACHMENT',
    DOC_EXIST_COMMENT: 'DOC_EXIST_COMMENT',
    DOC_REFERENCE_STATUS: 'DOC_REFERENCE_STATUS',
    FORM_CODE: 'FORM_CODE',
    FORM_NAME: 'FORM_NAME',
    FORM_STATUS: 'FORM_STATUS',
    RULE_CODE: 'RULE_CODE',
    RULE_NAME: 'RULE_NAME',
    FLOW_STATUS: 'FLOW_STATUS',
    FLOW_CURRENTSTEP_NAME: 'FLOW_CURRENTSTEP_NAME',
    FLOW_CRITERION_DATE: 'FLOW_CRITERION_DATE',
    FLOW_FIX_DATE: 'FLOW_FIX_DATE',
    CREATOR_UNIT_CODE: 'CREATOR_UNIT_CODE',
    CREATOR_UNIT_NAME: 'CREATOR_UNIT_NAME',
    CREATOR_ROLE_CODE: 'CREATOR_ROLE_CODE',
    CREATOR_ROLE_NAME: 'CREATOR_ROLE_NAME',
    CREATOR_USER_CODE: 'CREATOR_USER_CODE',
    CREATOR_USER_NAME: 'CREATOR_USER_NAME',
    CREATE_DATE: 'CREATE_DATE',
    APPLY_UNIT_CODE: 'APPLY_UNIT_CODE',
    APPLY_UNIT_NAME: 'APPLY_UNIT_NAME',
    APPLY_ROLE_CODE: 'APPLY_ROLE_CODE',
    APPLY_ROLE_NAME: 'APPLY_ROLE_NAME',
    APPLY_USER_CODE: 'APPLY_USER_CODE',
    APPLY_USER_NAME: 'APPLY_USER_NAME',
    APPLY_DATE: 'APPLY_DATE',
    LASTOPERATOR_UNIT_CODE: 'LASTOPERATOR_UNIT_CODE',
    LASTOPERATOR_UNIT_NAME: 'LASTOPERATOR_UNIT_NAME',
    LASTOPERATOR_ROLE_CODE: 'LASTOPERATOR_ROLE_CODE',
    LASTOPERATOR_ROLE_NAME: 'LASTOPERATOR_ROLE_NAME',
    LASTOPERATOR_USER_CODE: 'LASTOPERATOR_USER_CODE',
    LASTOPERATOR_USER_NAME: 'LASTOPERATOR_USER_NAME',
    LASTOPERATOR_DATE: 'LASTOPERATOR_DATE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumWorkflowStateType = {
    PREPARE: 'PREPARE',
    ACTIVE: 'ACTIVE',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    CANCELED: 'CANCELED',
    DELETED: 'DELETED',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumDateConditionType = {
    APPLY: 'APPLY',
    CRITERION: 'CRITERION',
    APPROVED: 'APPROVED',
    REGISTRATION: 'REGISTRATION',
    MODIFY: 'MODIFY',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumRangeType = {
    ABSOLUTE_DATE: 'ABSOLUTE_DATE',
    RELATIVE_DAY: 'RELATIVE_DAY',
    RELATIVE_MONTH: 'RELATIVE_MONTH',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumRelativeType = {
    OWNER: 'OWNER',
    CREATE: 'CREATE',
    APPLY: 'APPLY',
    APPROVE: 'APPROVE',
    PROXY_APPROVE: 'PROXY_APPROVE',
    PRINCIPAL_APPROVE: 'PRINCIPAL_APPROVE',
    REJECT: 'REJECT',
    CANCEL: 'CANCEL',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumRelativeUserType = {
    UNIT_APPOINTMENT: 'UNIT_APPOINTMENT',
    UNIT: 'UNIT',
    USER: 'USER',
    LOGIN_USER: 'LOGIN_USER',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.EnumFieldValueType = {
    FIELD: 'FIELD',
    LISTNAME1: 'LISTNAME1',
    LISTNAME2: 'LISTNAME2',
    LISTNAME3: 'LISTNAME3',
    LISTNAME4: 'LISTNAME4',
    LISTNAME5: 'LISTNAME5',
    LISTNAME6: 'LISTNAME6',
    LISTNAME7: 'LISTNAME7',
    LISTNAME8: 'LISTNAME8',
    LISTNAME9: 'LISTNAME9',
    LISTNAME10: 'LISTNAME10',
    LISTNAME11: 'LISTNAME11',
    LISTNAME12: 'LISTNAME12',
    LISTNAME13: 'LISTNAME13',
    LISTNAME14: 'LISTNAME14',
    LISTNAME15: 'LISTNAME15',
    LISTNAME16: 'LISTNAME16',
    LISTNAME17: 'LISTNAME17',
    LISTNAME18: 'LISTNAME18',
    LISTNAME19: 'LISTNAME19',
    LISTNAME20: 'LISTNAME20',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.AddDocAttachmentRequestType = {
    URL: 'URL',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.UpdateDocAttachmentRequestType = {
    URL: 'URL',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.NotAdminWorkflowMessageRequestWorkflowMessageType = {
    APPLY_REQUEST: 'APPLY_REQUEST',
    APPROVE_REQUEST: 'APPROVE_REQUEST',
    CONFIRM_REQUEST: 'CONFIRM_REQUEST',
    PREPARE: 'PREPARE',
    REMANDED: 'REMANDED',
    REMIND_EXIST: 'REMIND_EXIST',
    REQUEST_POSSIBLE: 'REQUEST_POSSIBLE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindUserRequestConditionColumnValueConditionListEntriesItemColumn = {
    Code: 'Code',
    ImportId: 'ImportId',
    Name: 'Name',
    LocalizedName: 'LocalizedName',
    LocaleName: 'LocaleName',
    Kana: 'Kana',
    LoginId: 'LoginId',
    MailAddress: 'MailAddress',
    StampName: 'StampName',
    Remarks: 'Remarks',
    AvailableDateFrom: 'AvailableDateFrom',
    AvailableDateTo: 'AvailableDateTo',
    ReserveItem1: 'ReserveItem1',
    ReserveItem2: 'ReserveItem2',
    ReserveItem3: 'ReserveItem3',
    ReserveItem4: 'ReserveItem4',
    ReserveItem5: 'ReserveItem5',
    ReserveItem6: 'ReserveItem6',
    ReserveItem7: 'ReserveItem7',
    ReserveItem8: 'ReserveItem8',
    ReserveItem9: 'ReserveItem9',
    ReserveItem10: 'ReserveItem10',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindUnitRequestConditionColumnValueConditionListEntriesItemColumn = {
    Code: 'Code',
    ImportId: 'ImportId',
    Name: 'Name',
    LocalizedName: 'LocalizedName',
    LocaleName: 'LocaleName',
    Kana: 'Kana',
    LoginId: 'LoginId',
    MailAddress: 'MailAddress',
    StampName: 'StampName',
    Remarks: 'Remarks',
    AvailableDateFrom: 'AvailableDateFrom',
    AvailableDateTo: 'AvailableDateTo',
    ReserveItem1: 'ReserveItem1',
    ReserveItem2: 'ReserveItem2',
    ReserveItem3: 'ReserveItem3',
    ReserveItem4: 'ReserveItem4',
    ReserveItem5: 'ReserveItem5',
    ReserveItem6: 'ReserveItem6',
    ReserveItem7: 'ReserveItem7',
    ReserveItem8: 'ReserveItem8',
    ReserveItem9: 'ReserveItem9',
    ReserveItem10: 'ReserveItem10',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindSectionRoleRequestConditionColumnValueConditionListEntriesItemColumn = {
    Code: 'Code',
    ImportId: 'ImportId',
    Name: 'Name',
    Rank: 'Rank',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindSectionRoleGroupRequestConditionColumnValueConditionListEntriesItemColumn = {
    Code: 'Code',
    Name: 'Name',
    SectionRoleCode: 'SectionRoleCode',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindUnitAppointmentRequestConditionUnitDirection = {
    ABSOLUTE: 'ABSOLUTE',
    ESCALATE: 'ESCALATE',
    CASCADE: 'CASCADE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindUnitAppointmentRequestConditionColumnValueConditionListEntriesItemColumn = {
    UnitCode: 'UnitCode',
    UnitName: 'UnitName',
    UnitOfficialName: 'UnitOfficialName',
    UnitValidityDateFrom: 'UnitValidityDateFrom',
    UnitValidityDateTo: 'UnitValidityDateTo',
    UnitAvailableDateFrom: 'UnitAvailableDateFrom',
    UnitAvailableDateTo: 'UnitAvailableDateTo',
    UserCode: 'UserCode',
    UserName: 'UserName',
    UserKana: 'UserKana',
    UserLoginId: 'UserLoginId',
    UserMailAddress: 'UserMailAddress',
    UserStampName: 'UserStampName',
    UserAvailableDateFrom: 'UserAvailableDateFrom',
    UserAvailableDateTo: 'UserAvailableDateTo',
    RoleCode: 'RoleCode',
    RoleName: 'RoleName',
    RoleRank: 'RoleRank',
    ValidityDateFrom: 'ValidityDateFrom',
    ValidityDateTo: 'ValidityDateTo',
    UnitReserveItem1: 'UnitReserveItem1',
    UnitReserveItem2: 'UnitReserveItem2',
    UnitReserveItem3: 'UnitReserveItem3',
    UnitReserveItem4: 'UnitReserveItem4',
    UnitReserveItem5: 'UnitReserveItem5',
    UnitReserveItem6: 'UnitReserveItem6',
    UnitReserveItem7: 'UnitReserveItem7',
    UnitReserveItem8: 'UnitReserveItem8',
    UnitReserveItem9: 'UnitReserveItem9',
    UnitReserveItem10: 'UnitReserveItem10',
    UserReserveItem1: 'UserReserveItem1',
    UserReserveItem2: 'UserReserveItem2',
    UserReserveItem3: 'UserReserveItem3',
    UserReserveItem4: 'UserReserveItem4',
    UserReserveItem5: 'UserReserveItem5',
    UserReserveItem6: 'UserReserveItem6',
    UserReserveItem7: 'UserReserveItem7',
    UserReserveItem8: 'UserReserveItem8',
    UserReserveItem9: 'UserReserveItem9',
    UserReserveItem10: 'UserReserveItem10',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.AddDelegationAppointmentRequestTaskUnitPolicy = {
    FROM: 'FROM',
    TO: 'TO',
    BLANK: 'BLANK',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.UpdateDelegationAppointmentRequestTaskUnitPolicy = {
    FROM: 'FROM',
    TO: 'TO',
    BLANK: 'BLANK',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.AddPrivateRoleRequestCandidateListEntriesItemType = {
    USER: 'USER',
    UNIT: 'UNIT',
    UNIT_ESCALATE: 'UNIT_ESCALATE',
    UNIT_CASCADE: 'UNIT_CASCADE',
    ROLE: 'ROLE',
    ROLE_GROUP: 'ROLE_GROUP',
    OWNER_UNIT: 'OWNER_UNIT',
    OWNER_ESCALATE: 'OWNER_ESCALATE',
    OWNER_CASCADE: 'OWNER_CASCADE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.AddPrivateRoleRequestCandidateListEntriesItemRoleType = {
    SECTION: 'SECTION',
    UNIVERSAL: 'UNIVERSAL',
    PRIVATE: 'PRIVATE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.UpdatePrivateRoleRequestCandidateListEntriesItemType = {
    USER: 'USER',
    UNIT: 'UNIT',
    UNIT_ESCALATE: 'UNIT_ESCALATE',
    UNIT_CASCADE: 'UNIT_CASCADE',
    ROLE: 'ROLE',
    ROLE_GROUP: 'ROLE_GROUP',
    OWNER_UNIT: 'OWNER_UNIT',
    OWNER_ESCALATE: 'OWNER_ESCALATE',
    OWNER_CASCADE: 'OWNER_CASCADE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.UpdatePrivateRoleRequestCandidateListEntriesItemRoleType = {
    SECTION: 'SECTION',
    UNIVERSAL: 'UNIVERSAL',
    PRIVATE: 'PRIVATE',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindPrivateRoleRequestConditionColumnValueConditionListEntriesItemColumn = {
    Code: 'Code',
    Name: 'Name',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindPrivateRoleAppointmentRequestConditionColumnValueConditionListEntriesItemColumn = {
    ValidityDateFrom: 'ValidityDateFrom',
    ValidityDateTo: 'ValidityDateTo',
    RoleCode: 'RoleCode',
    RoleName: 'RoleName',
    UserCode: 'UserCode',
    UserImportCode: 'UserImportCode',
    UserName: 'UserName',
    UserKana: 'UserKana',
    UserLoginId: 'UserLoginId',
    UserMailAddress: 'UserMailAddress',
    UserStampName: 'UserStampName',
    UserAvailableDateFrom: 'UserAvailableDateFrom',
    UserAvailableDateTo: 'UserAvailableDateTo',
    UserReserveItem1: 'UserReserveItem1',
    UserReserveItem2: 'UserReserveItem2',
    UserReserveItem3: 'UserReserveItem3',
    UserReserveItem4: 'UserReserveItem4',
    UserReserveItem5: 'UserReserveItem5',
    UserReserveItem6: 'UserReserveItem6',
    UserReserveItem7: 'UserReserveItem7',
    UserReserveItem8: 'UserReserveItem8',
    UserReserveItem9: 'UserReserveItem9',
    UserReserveItem10: 'UserReserveItem10',
    CandidateCode: 'CandidateCode',
    CandidateImportCode: 'CandidateImportCode',
    CandidateName: 'CandidateName',
    CandidateKana: 'CandidateKana',
    CandidateLoginId: 'CandidateLoginId',
    CandidateMailAddress: 'CandidateMailAddress',
    CandidateStampName: 'CandidateStampName',
    CandidateAvailableDateFrom: 'CandidateAvailableDateFrom',
    CandidateAvailableDateTo: 'CandidateAvailableDateTo',
    CandidateReserveItem1: 'CandidateReserveItem1',
    CandidateReserveItem2: 'CandidateReserveItem2',
    CandidateReserveItem3: 'CandidateReserveItem3',
    CandidateReserveItem4: 'CandidateReserveItem4',
    CandidateReserveItem5: 'CandidateReserveItem5',
    CandidateReserveItem6: 'CandidateReserveItem6',
    CandidateReserveItem7: 'CandidateReserveItem7',
    CandidateReserveItem8: 'CandidateReserveItem8',
    CandidateReserveItem9: 'CandidateReserveItem9',
    CandidateReserveItem10: 'CandidateReserveItem10',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindUniversalRoleRequestConditionColumnValueConditionListEntriesItemColumn = {
    Code: 'Code',
    ImportId: 'ImportId',
    Name: 'Name',
    Rank: 'Rank',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindUniversalRoleAppointmentRequestConditionColumnValueConditionListEntriesItemColumn = {
    ValidityDateFrom: 'ValidityDateFrom',
    ValidityDateTo: 'ValidityDateTo',
    RoleCode: 'RoleCode',
    RoleName: 'RoleName',
    UserCode: 'UserCode',
    UserImportCode: 'UserImportCode',
    UserName: 'UserName',
    UserKana: 'UserKana',
    UserLoginId: 'UserLoginId',
    UserMailAddress: 'UserMailAddress',
    UserStampName: 'UserStampName',
    UserAvailableDateFrom: 'UserAvailableDateFrom',
    UserAvailableDateTo: 'UserAvailableDateTo',
    UserReserveItem1: 'UserReserveItem1',
    UserReserveItem2: 'UserReserveItem2',
    UserReserveItem3: 'UserReserveItem3',
    UserReserveItem4: 'UserReserveItem4',
    UserReserveItem5: 'UserReserveItem5',
    UserReserveItem6: 'UserReserveItem6',
    UserReserveItem7: 'UserReserveItem7',
    UserReserveItem8: 'UserReserveItem8',
    UserReserveItem9: 'UserReserveItem9',
    UserReserveItem10: 'UserReserveItem10',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.SCIMPatchUsersIdRequestOperationsItemPath = {
    externalId: 'externalId',
    displayName: 'displayName',
    userName: 'userName',
    password: 'password',
    active: 'active',
    emails: 'emails',
    locale: 'locale',
    roles: 'roles',
    groups: 'groups',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.SCIMPatchGroupsIdRequestOperationsItemPath = {
    externalId: 'externalId',
    displayName: 'displayName',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.GetDocOwnerType = {
    UNIT: 'UNIT',
    USER: 'USER',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.NotAdminGetDocOwnerType = {
    UNIT: 'UNIT',
    USER: 'USER',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindWorkflowTaskBodyConditionRuleStepType = {
    CREATE: 'CREATE',
    APPLY: 'APPLY',
    APPROVE: 'APPROVE',
    CONFIRM: 'CONFIRM',
    READ: 'READ',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.ImportTinyUserMasterBodyStrategy = {
    FULLSET: 'FULLSET',
    SUBSET: 'SUBSET',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.ImportUserMasterBodyStrategy = {
    FULLSET: 'FULLSET',
    SUBSET: 'SUBSET',
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.FindProjectBodyContent = {
    FormMan: 'FormMan',
};
