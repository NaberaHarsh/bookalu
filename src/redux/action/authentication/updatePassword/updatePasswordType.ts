export interface Payload {
  oldPassword: string;
  password: string;
}

export enum UpdatePasswordTypes {
  FETCH_REQUEST = "@@UPDATE_PASSWORD/FETCH_REQUEST",
  FETCH_SUCCESS = "@@UPDATE_PASSWORD/FETCH_SUCCESS",
  FETCH_ERROR = "@@UPDATE_PASSWORD/FETCH_ERROR",
}

export interface UpdatePasswordResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}
