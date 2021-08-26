// export interface Payload: string[];

export enum address1Type {
  FETCH_REQUEST = "@@ADDR1/FETCH_REQUEST",
  FETCH_SUCCESS = "@@ADDR1/FETCH_SUCCESS",
  FETCH_ERROR = "@@ADDR1/FETCH_ERROR",
}

export enum address2Type {
  FETCH_REQUEST = "@@ADDR2/FETCH_REQUEST",
  FETCH_SUCCESS = "@@ADDR2/FETCH_SUCCESS",
  FETCH_ERROR = "@@ADDR2/FETCH_ERROR",
}

export interface searchResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}
