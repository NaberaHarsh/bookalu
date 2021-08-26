export interface Payload {
  search: string;
}

export enum searchType {
  FETCH_REQUEST = "@@SEARCH_ADDR/FETCH_REQUEST",
  FETCH_SUCCESS = "@@SEARCH_ADDR/FETCH_SUCCESS",
  FETCH_ERROR = "@@SEARCH_ADDR/FETCH_ERROR",
}

export enum addressSelectedType {
  FETCH_SUCCESS = "@@ADD_SELECTED/FETCH_SUCCESS",
  FETCH_ERROR = "@@ADD_SELECTED/FETCH_ERROR",
}

export enum manualAddressType {
  FETCH_SUCCESS = "@@MANUL_SELECTED/FETCH_SUCCESS",
  FETCH_ERROR = "@@MANUL_SELECTED/FETCH_ERROR",
}

export interface searchResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly errors?: string;
  readonly error: boolean;
  readonly success: boolean;
  readonly dataReceived: boolean;
}
