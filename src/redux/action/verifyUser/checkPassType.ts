export interface Payload {
  password: string;
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

export enum passwordVerificationTypes {
  FETCH_REQUEST = "@@VERIFY_PASSWORD/FETCH_REQUEST",
  FETCH_SUCCESS = "@@VERIFY_PASSWORD/FETCH_SUCCESS",
  FETCH_ERROR = "@@VERIFY_PASSWORD/FETCH_ERROR",
}

export interface verifyUserReducer {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
  readonly userLogInsucces: boolean;
}
