export interface Payload {}

export interface UpdateDetailsPayload {
  email: string;
  firstName: string;
  lastName: string;
  postCode: string;
  mobile: string;
  telephone: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  country: string;
}

export enum getUserInfoType {
  FETCH_REQUEST = "@@GET_USER_INFO/FETCH_REQUEST",
  FETCH_SUCCESS = "@@GET_USER_INFO/FETCH_SUCCESS",
  FETCH_ERROR = "@@GET_USER_INFO/FETCH_ERROR",
}

export enum updateUserInfoType {
  FETCH_REQUEST = "@@UPDATE_USER_INFO/FETCH_REQUEST",
  FETCH_SUCCESS = "@@UPDATE_USER_INFO/FETCH_SUCCESS",
  FETCH_ERROR = "@@UPDATE_USER_INFO/FETCH_ERROR",
}

export interface userInfoResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}
