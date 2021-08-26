export interface Payload {
    files:any,
    calledFrom?:string
  }
  

  
  export enum singleImgType {
    FETCH_REQUEST = "@@SINGLE_IMG/FETCH_REQUEST",
    FETCH_SUCCESS = "@@SINGLE_IMG/FETCH_SUCCESS",
    FETCH_ERROR = "@@SINGLE_IMG/FETCH_ERROR",
  }
  
  export interface aboutUserResponse {
      readonly loading:boolean
    readonly data?: any;
    readonly calledFrom?:string;
    readonly error?: boolean;
  }
  