export interface Payload {
    industires?:any
  }
  

  
  export enum IndustriesType {
    FETCH_REQUEST = "@@INDUSTRIES_LIST/FETCH_REQUEST",
    FETCH_SUCCESS = "@@INDUSTRIES_LIST/FETCH_SUCCESS",  
    FETCH_ERROR = "@@INDUSTRIES_LIST/FETCH_ERROR",
  }
  
  export interface industiresResponse {
      readonly loading:boolean
    readonly data?: any;
    readonly error?: boolean;
  }
  