import { ZIM, ZIMErrorUserInfo, ZIMRoomMemberInfo, ZIMUserInfo } from './index';
export interface ZIMRoomInfo {
    roomID: string;
    roomName: string;
}
export interface ZIMRoomFullInfo {
    baseInfo: ZIMRoomInfo;
}
export interface ZIMRoomAttributesUpdateInfo {
    action: ZIM.RoomAttributesUpdateAction;
    roomAttributes: Record<string, string>;
}
export interface ZIMRoomMemberQueryConfig {
    count: number;
    nextFlag: string;
}
export interface ZIMRoomAdvancedConfig {
    roomAttributes: Record<string, string>;
    roomDestroyDelayTime: number;
}
export interface ZIMRoomAttributesDeleteConfig {
    isForce: boolean;
}
export interface ZIMRoomAttributesSetConfig {
    isForce: boolean;
    isUpdateOwner: boolean;
    isDeleteAfterOwnerLeft: boolean;
}
export interface ZIMRoomAttributesBatchOperationConfig {
    isForce: boolean;
    isUpdateOwner: boolean;
    isDeleteAfterOwnerLeft: boolean;
}
export interface ZIMRoomCreatedResult {
    roomInfo: ZIMRoomFullInfo;
}
export interface ZIMRoomEnteredResult {
    roomInfo: ZIMRoomFullInfo;
}
export interface ZIMRoomJoinedResult {
    roomInfo: ZIMRoomFullInfo;
}
export interface ZIMRoomSwitchedResult {
    roomInfo: ZIMRoomFullInfo;
}
export interface ZIMRoomLeftResult {
    roomID: string;
}
export interface ZIMRoomAllLeftResult {
    roomIDs: string[];
}
export interface ZIMRoomMemberQueriedResult {
    roomID: string;
    nextFlag: string;
    memberList: ZIMUserInfo[];
}
export interface ZIMRoomMembersQueriedResult {
    roomID: string;
    memberList: ZIMRoomMemberInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMRoomAttributesBatchOperatedResult {
    roomID: string;
}
export interface ZIMRoomOnlineMemberCountQueriedResult {
    roomID: string;
    count: number;
}
export interface ZIMRoomAttributesOperatedResult {
    roomID: string;
    errorKeys: string[];
}
export interface ZIMRoomAttributesQueriedResult {
    roomID: string;
    roomAttributes: Record<string, string>;
}
export interface ZIMRoomMemberAttributesInfo {
    userID: string;
    attributes: Record<string, string>;
}
export interface ZIMRoomMemberAttributesOperatedInfo {
    attributesInfo: ZIMRoomMemberAttributesInfo;
    errorKeys: string[];
}
export interface ZIMRoomMemberAttributesUpdateInfo {
    attributesInfo: ZIMRoomMemberAttributesInfo;
}
export interface ZIMRoomMemberAttributesSetConfig {
    isDeleteAfterOwnerLeft: boolean;
}
export interface ZIMRoomMemberAttributesQueryConfig {
    count: number;
    nextFlag: string;
}
export interface ZIMRoomOperatedInfo {
    userID: string;
}
export interface ZIMRoomMembersAttributesOperatedResult {
    roomID: string;
    infos: ZIMRoomMemberAttributesOperatedInfo[];
    errorUserList: string[];
}
export interface ZIMRoomMembersAttributesQueriedResult {
    roomID: string;
    infos: ZIMRoomMemberAttributesInfo[];
}
export interface ZIMRoomMemberAttributesListQueriedResult {
    roomID: string;
    nextFlag: string;
    infos: ZIMRoomMemberAttributesInfo[];
}
