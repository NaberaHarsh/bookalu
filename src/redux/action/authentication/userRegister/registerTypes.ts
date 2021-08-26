export interface Payload {
  firstName: string;
  lastName: string;
  mobile: string;
  telephone: string;
  postCode: string;
  checkbox: boolean;
  emailId: string;
  password: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  country: string;
}

export interface addrPayload {
  address: string;
}

export enum RegisterActionTypes {
  FETCH_REQUEST = "@@REGISTER_USER/FETCH_REQUEST",
  FETCH_SUCCESS = "@@REGISTER_USER/FETCH_SUCCESS",
  FETCH_ERROR = "@@REGISTER_USER/FETCH_ERROR",
}

export interface RegisterResponse {
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
