export interface Payload {
  email: string;
}

export enum CheckEmailType {
  FETCH_REQUEST = "@@CHECK_MAIL/FETCH_REQUEST",
  FETCH_SUCCESS = "@@CHECK_MAIL/FETCH_SUCCESS",
  FETCH_ERROR = "@@CHECK_MAIL/FETCH_ERROR",
}

export interface checkMailResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: any;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}

export enum clearEmailVarifiedType {
  FETCH_REQUEST = "@@CLEAR_CHECK/FETCH_REQUEST",
  FETCH_SUCCESS = "@@CLEAR_CHECK/FETCH_SUCCESS",
  FETCH_ERROR = "@@CLEAR_CHECK/FETCH_ERROR",
}
