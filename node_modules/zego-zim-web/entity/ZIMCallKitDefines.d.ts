import { ZIM, ZIMErrorUserInfo, ZIMPushConfig } from './index';
export interface ZIMCallUserInfo {
    userID: string;
    state: ZIM.CallUserState;
    extendedData: string;
}
export interface ZIMCallInfo {
    callID: string;
    caller: string;
    mode: ZIM.CallInvitationMode;
    state: ZIM.CallState;
    inviter: string;
    extendedData: string;
    createTime: number;
    endTime: number;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMCallInviteConfig {
    mode: ZIM.CallInvitationMode;
    timeout: number;
    extendedData: string;
    pushConfig?: ZIMPushConfig;
    enableNotReceivedCheck?: boolean;
}
export interface ZIMCallCancelConfig {
    extendedData: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallAcceptConfig {
    extendedData: string;
}
export interface ZIMCallRejectConfig {
    extendedData: string;
}
export interface ZIMCallingInviteConfig {
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallQuitConfig {
    extendedData: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallJoinConfig {
    extendedData: string;
}
export interface ZIMCallEndConfig {
    extendedData: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMCallInvitationQueryConfig {
    count: number;
    nextFlag?: number;
}
export interface ZIMCallInvitationSentResult {
    callID: string;
    timeout: number;
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMCallCancelSentResult {
    callID: string;
    errorInvitees: string[];
}
export interface ZIMCallAcceptanceSentResult {
    callID: string;
}
export interface ZIMCallRejectionSentResult {
    callID: string;
}
export interface ZIMCallingInvitationSentResult {
    callID: string;
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMCallQuitSentResult {
    callID: string;
    createTime: number;
    acceptTime: number;
    quitTime: number;
}
export interface ZIMCallJoinSentResult {
    callID: string;
    createTime: number;
    joinTime: number;
    extendedData: string;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMCallEndSentResult {
    callID: string;
    createTime: number;
    acceptTime: number;
    endTime: number;
}
export interface ZIMCallInvitationListQueriedResult {
    nextFlag: number;
    callList: ZIMCallInfo[];
}
