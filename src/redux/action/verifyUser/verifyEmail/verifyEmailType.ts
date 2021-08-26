export interface Payload {
  token: string;
}

export enum verifyEmailType {
  FETCH_REQUEST = "@@VERIFY_EMAIL/FETCH_REQUEST",
  FETCH_SUCCESS = "@@VERIFY_EMAIL/FETCH_SUCCESS",
  FETCH_ERROR = "@@VERIFY_EMAIL/FETCH_ERROR",
}

export interface verifyUserReducer {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}
