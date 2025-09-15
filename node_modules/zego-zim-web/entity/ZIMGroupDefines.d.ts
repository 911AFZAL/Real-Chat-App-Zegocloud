import { ZIM, ZIMErrorUserInfo, ZIMPushConfig, ZIMUserInfo } from './index';
export interface ZIMGroupInfo {
    groupID: string;
    groupName: string;
    groupAvatarUrl: string;
}
export interface ZIMGroupMuteInfo {
    mode: ZIM.GroupMuteMode;
    expiredTime: number;
    roles: number[];
}
export interface ZIMGroupVerifyInfo {
    joinMode: ZIM.GroupJoinMode;
    inviteMode: ZIM.GroupInviteMode;
    beInviteMode: ZIM.GroupBeInviteMode;
}
export interface ZIMGroupApplicationInfo {
    type: ZIM.GroupApplicationType;
    state: ZIM.GroupApplicationState;
    createTime: number;
    updateTime: number;
    wording: string;
    applyUser: ZIMUserInfo;
    groupInfo: ZIMGroupInfo;
    operatedUser?: ZIMGroupMemberSimpleInfo;
    seq: number;
}
export interface ZIMGroup {
    baseInfo: ZIMGroupInfo;
    groupAlias: string;
    notificationStatus: ZIM.GroupMessageNotificationStatus;
}
export interface ZIMGroupFullInfo {
    baseInfo: ZIMGroupInfo;
    groupAlias: string;
    groupNotice: string;
    groupAttributes: Record<string, string>;
    notificationStatus: ZIM.GroupMessageNotificationStatus;
    createTime: number;
    maxMemberCount: number;
    mutedInfo: ZIMGroupMuteInfo;
    verifyInfo: ZIMGroupVerifyInfo;
}
export interface ZIMGroupMemberInfo extends ZIMUserInfo {
    memberNickname: string;
    memberRole: number;
    muteExpiredTime: number;
    groupEnterInfo: ZIMGroupEnterInfo;
}
export interface ZIMGroupMemberSimpleInfo extends ZIMUserInfo {
    memberNickname: string;
    memberRole: number;
}
export interface ZIMGroupEnterInfo {
    enterTime: number;
    enterType: ZIM.GroupEnterType;
    operatedUser?: ZIMGroupMemberSimpleInfo;
}
export interface ZIMGroupOperatedInfo {
    userID: string;
    userName: string;
    memberRole: number;
    memberNickname: string;
}
export interface ZIMGroupAttributesUpdateInfo {
    action: ZIM.GroupAttributesUpdateAction;
    groupAttributes: Record<string, string>;
}
export interface ZIMGroupSearchInfo {
    groupInfo: ZIMGroupInfo;
    userList: ZIMGroupMemberInfo[];
}
export interface ZIMGroupAdvancedConfig {
    groupNotice: string;
    groupAttributes: Record<string, string>;
    maxMemberCount: number;
    joinMode: ZIM.GroupJoinMode;
    inviteMode: ZIM.GroupInviteMode;
    beInviteMode: ZIM.GroupBeInviteMode;
}
export interface ZIMGroupMemberQueryConfig {
    count: number;
    nextFlag: number;
}
export interface ZIMGroupSearchConfig {
    keywords: string[];
    isAlsoMatchGroupMemberUserName: boolean;
    isAlsoMatchGroupMemberNickname: boolean;
    count: number;
    nextFlag: number;
}
export interface ZIMGroupMemberSearchConfig {
    keywords: string[];
    isAlsoMatchGroupMemberNickname: boolean;
    count: number;
    nextFlag: number;
}
export interface ZIMGroupMuteConfig {
    mode: ZIM.GroupMuteMode;
    duration: number;
    roles: number[];
}
export interface ZIMGroupMemberMuteConfig {
    duration: number;
}
export interface ZIMGroupLeftResult {
    groupID: string;
}
export interface ZIMGroupDismissedResult {
    groupID: string;
}
export interface ZIMGroupCreatedResult {
    groupInfo: ZIMGroupFullInfo;
    userList: ZIMGroupMemberInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupJoinedResult {
    groupInfo: ZIMGroupFullInfo;
}
export interface ZIMGroupInfoQueriedResult {
    groupInfo: ZIMGroupFullInfo;
}
export interface ZIMGroupListQueriedResult {
    groupList: ZIMGroup[];
}
export interface ZIMGroupNameUpdatedResult {
    groupID: string;
    groupName: string;
}
export interface ZIMGroupNoticeUpdatedResult {
    groupID: string;
    groupNotice: string;
}
export interface ZIMGroupAvatarUrlUpdatedResult {
    groupID: string;
    groupAvatarUrl: string;
}
export interface ZIMGroupAttributesOperatedResult {
    groupID: string;
    errorKeys: string[];
}
export interface ZIMGroupAttributesQueriedResult {
    groupID: string;
    groupAttributes: Record<string, string>;
}
export interface ZIMGroupUsersInvitedResult {
    groupID: string;
    userList: ZIMGroupMemberInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupOwnerTransferredResult {
    groupID: string;
    toUserID: string;
}
export interface ZIMGroupMemberKickedResult {
    groupID: string;
    kickedUserIDs: string[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupMemberListQueriedResult {
    groupID: string;
    nextFlag: number;
    userList: ZIMGroupMemberInfo[];
}
export interface ZIMGroupMemberCountQueriedResult {
    groupID: string;
    count: number;
}
export interface ZIMGroupMemberInfoQueriedResult {
    groupID: string;
    userInfo: ZIMGroupMemberInfo;
}
export interface ZIMGroupAliasUpdatedResult {
    groupID: string;
    groupAlias: string;
}
export interface ZIMGroupMemberNicknameUpdatedResult {
    groupID: string;
    forUserID: string;
    nickname: string;
}
export interface ZIMGroupMemberRoleUpdatedResult {
    groupID: string;
    forUserID: string;
    role: number;
}
export interface ZIMGroupsSearchedResult {
    nextFlag: number;
    groupSearchInfoList: ZIMGroupSearchInfo[];
}
export interface ZIMGroupMembersSearchedResult {
    groupID: string;
    nextFlag: number;
    userList: ZIMGroupMemberInfo[];
}
export interface ZIMGroupMutedResult {
    groupID: string;
    isMute: boolean;
    mutedInfo: ZIMGroupMuteInfo;
}
export interface ZIMGroupMembersMutedResult {
    groupID: string;
    isMute: boolean;
    duration: number;
    mutedUserIDs: string[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupMemberMutedListQueriedResult {
    groupID: string;
    nextFlag: number;
    userList: ZIMGroupMemberInfo[];
}
export interface ZIMGroupMessageReceiptMemberListQueriedResult {
    groupID: string;
    nextFlag: number;
    userList: ZIMGroupMemberInfo[];
}
export interface ZIMGroupJoinModeUpdatedResult {
    groupID: string;
    mode: ZIM.GroupJoinMode;
}
export interface ZIMGroupInviteModeUpdatedResult {
    groupID: string;
    mode: ZIM.GroupInviteMode;
}
export interface ZIMGroupBeInviteModeUpdatedResult {
    groupID: string;
    mode: ZIM.GroupBeInviteMode;
}
export interface ZIMGroupJoinApplicationSendConfig {
    wording: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMGroupJoinApplicationSentResult {
    groupID: string;
}
export interface ZIMGroupJoinApplicationAcceptConfig {
    pushConfig?: ZIMPushConfig;
}
export interface ZIMGroupJoinApplicationAcceptedResult {
    groupID: string;
    userID: string;
}
export interface ZIMGroupJoinApplicationRejectConfig {
    pushConfig?: ZIMPushConfig;
}
export interface ZIMGroupJoinApplicationRejectedResult {
    groupID: string;
    userID: string;
}
export interface ZIMGroupInviteApplicationSendConfig {
    wording: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMGroupInviteApplicationsSentResult {
    groupID: string;
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMGroupInviteApplicationAcceptConfig {
    pushConfig?: ZIMPushConfig;
}
export interface ZIMGroupInviteApplicationAcceptedResult {
    groupInfo: ZIMGroupFullInfo;
    inviterUserID: string;
}
export interface ZIMGroupInviteApplicationRejectConfig {
    pushConfig?: ZIMPushConfig;
}
export interface ZIMGroupInviteApplicationRejectedResult {
    groupID: string;
    inviterUserID: string;
}
export interface ZIMGroupApplicationListQueryConfig {
    count: number;
    nextFlag: number;
}
export interface ZIMGroupApplicationListQueriedResult {
    nextFlag: number;
    applicationList: ZIMGroupApplicationInfo[];
}
