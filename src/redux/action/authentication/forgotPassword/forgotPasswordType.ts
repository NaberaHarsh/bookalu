export interface Payload {
  email: string;
}

export interface newPasswordPayload {
  newpassword: string;
  token: string;
}

export enum ForgotPasswordEmail {
  FETCH_REQUEST = "@@FORGOT_PASS_EMAIL/FETCH_REQUEST",
  FETCH_SUCCESS = "@@FORGOT_PASS_EMAIL/FETCH_SUCCESS",
  FETCH_ERROR = "@@FORGOT_PASS_EMAIL/FETCH_ERROR",
}

export enum newPasswordType {
  FETCH_REQUEST = "@@NEW_PASS/FETCH_REQUEST",
  FETCH_SUCCESS = "@@NEW_PASS/FETCH_SUCCESS",
  FETCH_ERROR = "@@NEW_PASS/FETCH_ERROR",
}

export interface ForgotPasswordResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}
