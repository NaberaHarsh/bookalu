export const BUSINESS_FORM_VALUE = "BUSINESS_FORM_VALUE";

export interface getBusinessDetails {
  data?: any;
}

export interface GetCompanyInfoInterface {
  data?: any;
}

export interface GetBusinessPgDetails {
  username?: string;
}

export interface UpdateCompanyInfoInterface {
  logoid: number;
  coverphotoid: number;
  companyname: string;
  username: string;
  bio: string;
}

export interface GetContactDetailsInterface {
  data?: any;
}

export interface UpdateContactDetailsInterface {
  data: any;
}

export interface GetSocialMediaFeedsInterface {
  data?: any;
}

export interface UpdateSocialMediaFeedsInterface {
  socialmediafeed: any;
}

export interface GetOpeningTimesInterface {
  data?: any;
}

export interface UpdateOpeningTimesInterface {
  data: any;
}

export interface GetOccupationInterface {
  data?: any;
}
export interface UpdateOccupationInterface {
  data: any;
}

export interface UpdateIndustriesInterface {
  data: any;
}

export interface GetServicesface {
  data?: any;
}
export interface UpdateServicesInterface {
  data: any;
}

export interface DeleteServicesInterface {
  id: any;
}

export enum BusinessPgDetailsType {
  FETCH_REQUEST = "@BUSINESS_PG_DETAILS/FETCH_REQUEST",
  FETCH_SUCCESS = "@BUSINESS_PG_DETAILS/FETCH_SUCCESS",
  FETCH_ERROR = "@BUSINESS_PG_DETAILS/FETCH_ERROR",
}

export enum BusinessRegType {
  FETCH_REQUEST = "@@REGISTER_BUSINESS/FETCH_REQUEST",
  FETCH_SUCCESS = "@@REGISTER_BUSINESS/FETCH_SUCCESS",
  FETCH_ERROR = "@@REGISTER_BUSINESS/FETCH_ERROR",
}

export enum BusinessUpdateType {
  FETCH_REQUEST = "@@UPDATE_BUSINESS/FETCH_REQUEST",
  FETCH_SUCCESS = "@@UPDATE_BUSINESS/FETCH_SUCCESS",
  FETCH_ERROR = "@@UPDATE_BUSINESS/FETCH_ERROR",
}

/* For getting and updating company information  */
export enum GetCompanyInfo {
  FETCH_REQUEST = "@GET_COMPANY_INFO/FETCH_REQUEST",
  FETCH_SUCCESS = "@GET_COMPANY_INFO/FETCH_SUCCESS",
  FETCH_ERROR = "@GET_COMPANY_INFO/FETCH_ERROR",
}
export enum UpdateCompanyInfo {
  FETCH_REQUEST = "@UPDATE_COMPANY_INFO/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_COMPANY_INFO/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_COMPANY_INFO/FETCH_ERROR",
}

/* For getting and updating contact details  */
export enum GetContactDetails {
  FETCH_REQUEST = "@GET_CONTACT_DETAILS/FETCH_REQUEST",
  FETCH_SUCCESS = "@GET_CONTACT_DETAILS/FETCH_SUCCESS",
  FETCH_ERROR = "@GET_CONTACT_DETAILS/FETCH_ERROR",
}
export enum UpdateContactDetails {
  FETCH_REQUEST = "@UPDATE_CONTACT_DETAILS/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_CONTACT_DETAILS/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_CONTACT_DETAILS/FETCH_ERROR",
}

/* For getting and updating Social media feeds  */
export enum GetSocialMediaFeeds {
  FETCH_REQUEST = "@GET_SOCIAL_MEDIA_DETAILS/FETCH_REQUEST",
  FETCH_SUCCESS = "@GET_SOCIAL_MEDIA_DETAILS/FETCH_SUCCESS",
  FETCH_ERROR = "@GET_SOCIAL_MEDIA_DETAILS/FETCH_ERROR",
}
export enum UpdateSocialMediaFeeds {
  FETCH_REQUEST = "@UPDATE_SOCIAL_MEDIA_DETAILS/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_SOCIAL_MEDIA_DETAILS/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_SOCIAL_MEDIA_DETAILS/FETCH_ERROR",
}

/* For GET AND UPDATE opening times  */
export enum GetOpeningTimes {
  FETCH_REQUEST = "@GET_OPENING_TIMES/FETCH_REQUEST",
  FETCH_SUCCESS = "@GET_OPENING_TIMES/FETCH_SUCCESS",
  FETCH_ERROR = "@GET_OPENING_TIMES/FETCH_ERROR",
}

export enum UpdateOpeningTimes {
  FETCH_REQUEST = "@UPDATE_OPENING_TIMES/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_OPENING_TIMES/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_OPENING_TIMES/FETCH_ERROR",
}

/* For GET AND UPDATE OCCUPATION  */
export enum GetOccupation {
  FETCH_REQUEST = "@GET_OCCUPATION/FETCH_REQUEST",
  FETCH_SUCCESS = "@GET_OCCUPATION/FETCH_SUCCESS",
  FETCH_ERROR = "@GET_OCCUPATION/FETCH_ERROR",
}

export enum UpdateOccupation {
  FETCH_REQUEST = "@UPDATE_OCCUPATION/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_OCCUPATION/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_OCCUPATION/FETCH_ERROR",
}

/* For GET AND UPDATE INDUSTRIES  */
export enum GetIndustires {
  FETCH_REQUEST = "@GET_INDUSTRIES/FETCH_REQUEST",
  FETCH_SUCCESS = "@GET_INDUSTRIES/FETCH_SUCCESS",
  FETCH_ERROR = "@GET_INDUSTRIES/FETCH_ERROR",
}

export enum UpdateIndustries {
  FETCH_REQUEST = "@UPDATE_INSUSTRIES/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_INSUSTRIES/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_INSUSTRIES/FETCH_ERROR",
}

/* For GET AND UPDATE SERVICES  */
export enum GetServices {
  FETCH_REQUEST = "@GET_SERVICES/FETCH_REQUEST",
  FETCH_SUCCESS = "@GET_SERVICES/FETCH_SUCCESS",
  FETCH_ERROR = "@GET_SERVICES/FETCH_ERROR",
}

export enum UpdateServices {
  FETCH_REQUEST = "@UPDATE_SERVICES/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_SERVICES/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_SERVICES/FETCH_ERROR",
}

export enum DeleteService {
  FETCH_REQUEST = "@DELETE_SERVICES/FETCH_REQUEST",
  FETCH_SUCCESS = "@DELETE_SERVICES/FETCH_SUCCESS",
  FETCH_ERROR = "@DELETE_SERVICES/FETCH_ERROR",
}
export enum DeleteServiceTab {
  FETCH_REQUEST = "@DELETE_SERVICES_TAB/FETCH_REQUEST",
  FETCH_SUCCESS = "@DELETE_SERVICES_TAB/FETCH_SUCCESS",
  FETCH_ERROR = "@DELETE_SERVICES_TAB/FETCH_ERROR",
}
export enum UpdateServiceTabs {
  FETCH_REQUEST = "@UPDATE_SERVICES_TAB/FETCH_REQUEST",
  FETCH_SUCCESS = "@UPDATE_SERVICES_TAB/FETCH_SUCCESS",
  FETCH_ERROR = "@UPDATE_SERVICES_TAB/FETCH_ERROR",
}

export interface userInfoResponse {
  readonly loading: boolean;
  readonly data?: any;
  readonly error: boolean;
}
