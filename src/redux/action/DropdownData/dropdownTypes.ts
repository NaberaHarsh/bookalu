export interface Payload {
    calledFrom?:string
  }
  
  export interface OccupationPayload {
    name:string
  }

  
  export enum IndustriesType {
    FETCH_REQUEST = "@@INDUSTRIES_DATA/FETCH_REQUEST",
    FETCH_SUCCESS = "@@INDUSTRIES_DATA/FETCH_SUCCESS",
    FETCH_ERROR = "@@INDUSTRIES_DATA/FETCH_ERROR",
  }

  export enum OccupationType {
    FETCH_REQUEST = "@@OCCUPATION_DATA/FETCH_REQUEST",
    FETCH_SUCCESS = "@@OCCUPATION_DATA/FETCH_SUCCESS",
    FETCH_ERROR = "@@OCCUPATION_DATA/FETCH_ERROR",
  }

  export enum OccupationCreateType {
    FETCH_REQUEST = "@@OCCUPATION_CREATE/FETCH_REQUEST",
    FETCH_SUCCESS = "@@OCCUPATION_CREATE/FETCH_SUCCESS",
    FETCH_ERROR = "@@OCCUPATION_CREATE/FETCH_ERROR",
  }
  
  export interface IndustriesResponse {
      readonly loading:boolean
    readonly data?: any;
    readonly error?: boolean;
  }
  
  export interface OccupationResponse {
    readonly loading:boolean
  readonly data?: any;
  readonly error?: boolean;
}

export interface createOccupationResponse {
  readonly loading:boolean
  readonly data?: any;
  readonly error?: boolean;
}