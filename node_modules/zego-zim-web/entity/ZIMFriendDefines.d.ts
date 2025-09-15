import { ZIM, ZIMErrorUserInfo, ZIMPushConfig, ZIMUserInfo } from './index';
export interface ZIMFriendInfo extends ZIMUserInfo {
    wording: string;
    friendAlias: string;
    friendAttributes: Record<string, string>;
    createTime: number;
    seq: number;
}
export interface ZIMFriendApplicationInfo {
    applyUser: ZIMUserInfo;
    wording: string;
    createTime: number;
    updateTime: number;
    type: ZIM.FriendApplicationType;
    state: ZIM.FriendApplicationState;
}
export interface ZIMFriendAddConfig {
    wording: string;
    friendAlias: string;
    friendAttributes: Record<string, string>;
}
export interface ZIMFriendAddedResult {
    friendInfo: ZIMFriendInfo;
}
export interface ZIMFriendApplicationSendConfig {
    wording: string;
    friendAlias: string;
    friendAttributes: Record<string, string>;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMFriendApplicationSentResult {
    applicationInfo: ZIMFriendApplicationInfo;
}
export interface ZIMFriendDeleteConfig {
    type: ZIM.FriendDeleteType;
}
export interface ZIMFriendsDeletedResult {
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMFriendRelationCheckConfig {
    type: ZIM.FriendRelationCheckType;
}
export interface ZIMFriendRelationInfo {
    userID: string;
    type: ZIM.UserRelationType;
}
export interface ZIMFriendsRelationCheckedResult {
    relationInfos: ZIMFriendRelationInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMFriendAliasUpdatedResult {
    friendInfo: ZIMFriendInfo;
}
export interface ZIMFriendAttributesUpdatedResult {
    friendInfo: ZIMFriendInfo;
}
export interface ZIMFriendApplicationAcceptConfig {
    friendAlias: string;
    friendAttributes: Record<string, string>;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMFriendApplicationAcceptedResult {
    friendInfo: ZIMFriendInfo;
}
export interface ZIMFriendApplicationRejectConfig {
    pushConfig?: ZIMPushConfig;
}
export interface ZIMFriendApplicationRejectedResult {
    userInfo: ZIMUserInfo;
}
export interface ZIMFriendListQueryConfig {
    count: number;
    nextFlag?: number;
}
export interface ZIMFriendsInfoQueriedResult {
    friendInfos: ZIMFriendInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMFriendListQueriedResult {
    nextFlag: number;
    friendList: ZIMFriendInfo[];
}
export interface ZIMFriendApplicationListQueryConfig {
    count: number;
    nextFlag?: number;
}
export interface ZIMFriendApplicationListQueriedResult {
    nextFlag: number;
    applicationList: ZIMFriendApplicationInfo[];
}
export interface ZIMFriendSearchConfig {
    keywords: string[];
    isAlsoMatchFriendAlias: boolean;
    count: number;
    nextFlag: number;
}
export interface ZIMFriendsSearchedResult {
    nextFlag: number;
    friendInfoList: ZIMFriendInfo[];
}
export interface ZIMBlacklistUsersAddedResult {
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMBlacklistUsersRemovedResult {
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMBlacklistQueryConfig {
    count: number;
    nextFlag?: number;
}
export interface ZIMBlacklistQueriedResult {
    nextFlag: number;
    blacklist: ZIMUserInfo[];
}
export interface ZIMBlacklistCheckedResult {
    isUserInBlacklist: boolean;
}
