export enum refreshTokenType {
  FETCH_REQUEST = "@REFRESH_TOKEN/FETCH_REQUEST",
  FETCH_SUCCESS = "@REFRESH_TOKEN/FETCH_SUCCESS",
  FETCH_ERROR = "@REFRESH_TOKEN/FETCH_ERROR",
}

export interface refreshTokenResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly error?: boolean;
}
