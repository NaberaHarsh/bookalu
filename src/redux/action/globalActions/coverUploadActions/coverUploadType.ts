export interface Payload {
    files: any,
    calledFrom?: string
}

export enum coverImgType {
    FETCH_REQUEST = "@@COVER_IMG/FETCH_REQUEST",
    FETCH_SUCCESS = "@@COVER_IMG/FETCH_SUCCESS",
    FETCH_ERROR = "@@COVER_IMG/FETCH_ERROR",
}

export interface aboutUserResponse {
    readonly loading: boolean
    readonly data?: any;
    readonly calledFrom?: string;
    readonly error?: boolean;
}
