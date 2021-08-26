export interface Payload {
  email: string;
  password: string;
}

export enum LOGINActionTypes {
  FETCH_REQUEST = "@@inventory/FETCH_REQUEST",
  FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS",
  FETCH_ERROR = "@@inventory/FETCH_ERROR",
  LOGOUT_USER = "@@LOGOUT_USER/SUCCESS",
}

export interface loginResponse {
  readonly loading: boolean;
  readonly data: any;
  readonly error: boolean;
  readonly isLoginSuccess: boolean;
}

export interface refreshTokenResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly error?: boolean;
}
