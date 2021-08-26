export interface Payload {
  oldPassword: string;
  newPassword: string;
}

export enum updatePasswordType {
  FETCH_REQUEST = "@@UPDATE_PASSWORD/FETCH_REQUEST",
  FETCH_SUCCESS = "@@UPDATE_PASSWORD/FETCH_SUCCESS",
  FETCH_ERROR = "@@UPDATE_PASSWORD/FETCH_ERROR",
}

export interface updatePasswordResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}

export interface EmailPass {
  email: string;
  password: string;
}
