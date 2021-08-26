export interface Payload {
  accessToken: string;
  idToken: string;
  roles: unknown;
}

export interface Decoded {
  SessionId: string;
  email: string;
  exp: number;
  firstname: string;
  iat: string;
  lastname: string;
  nbf: number;
  roles: string;
  title: string;
}

export enum aboutUserActionTypes {
  FETCH_REQUEST = "@@USER_DETAIL/FETCH_REQUEST",
  FETCH_SUCCESS = "@@USER_DETAIL/FETCH_SUCCESS",
  FETCH_ERROR = "@@USER_DETAIL/FETCH_ERROR",
}

export interface aboutUserResponse {
  readonly data?: any;
  readonly error: boolean;
  readonly userLogInsucces: boolean;
}
