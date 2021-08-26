export interface Payload {
    email: string;
  }
  
  export enum ResendType {
    FETCH_REQUEST = "@@RESEND_CALL/FETCH_REQUEST",
    FETCH_SUCCESS = "@@RESEND_CALL/FETCH_SUCCESS",
    FETCH_ERROR = "@@RESEND_CALL/FETCH_ERROR"
  }
  
  export interface ResendResponse {
    readonly loading: boolean;
    readonly data?: any;
    readonly errors?: string;
    readonly error:boolean;
    readonly success:boolean
    readonly dataReceived:boolean
  }
  