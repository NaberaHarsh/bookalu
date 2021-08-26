import { Reducer } from "redux";
import {
  BusinessUpdateType,
  userInfoResponse,
  GetCompanyInfo,
  UpdateCompanyInfo,
  GetContactDetails,
  UpdateContactDetails,
  GetSocialMediaFeeds,
  UpdateSocialMediaFeeds,
  GetOpeningTimes,
  UpdateOpeningTimes,
  GetIndustires,
  UpdateIndustries,
  GetOccupation,
  UpdateOccupation,
  GetServices,
  UpdateServices,
  DeleteService,
  DeleteServiceTab,
  UpdateServiceTabs,
  BusinessPgDetailsType,
} from "../../action/businessPagesAction/businessTypes";

export const initialState: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const getBusinessPgDetailsReducer: Reducer<userInfoResponse> = (
  state = initialState,
  action
) => {
  const { data, type } = action;
  switch (type) {
    case BusinessPgDetailsType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case BusinessPgDetailsType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: data,
        error: false,
      };
    }
    case BusinessPgDetailsType.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
export const getUpdateBusinessReducer: Reducer<userInfoResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BusinessUpdateType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case BusinessUpdateType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case BusinessUpdateType.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

/* Company Information reducers  */

const GET_COMPANY_INFO_INITIAL_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const getCompanyinfoReducer: Reducer<userInfoResponse> = (
  state = GET_COMPANY_INFO_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GetCompanyInfo.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case GetCompanyInfo.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case GetCompanyInfo.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

/* Update company Info reducer  */
const UPDATE_COMPANY_INFO_INITIAL_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const updateCompanyinfoReducer: Reducer<userInfoResponse> = (
  state = UPDATE_COMPANY_INFO_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case UpdateCompanyInfo.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdateCompanyInfo.FETCH_SUCCESS: {
      console.log("In update Success state");
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case UpdateCompanyInfo.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

/* GET  social media feeds reducer */
const GET_SOCIAL_MEDIA_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const getSocialMediaFeedsReducer: Reducer<userInfoResponse> = (
  state = GET_SOCIAL_MEDIA_STATE,
  action
) => {
  switch (action.type) {
    case GetSocialMediaFeeds.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case GetSocialMediaFeeds.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case GetSocialMediaFeeds.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

/* Update social media feeds  */
const UPDATE_SOCIAL_MEDIA_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const updateSocialMediaHandlerReducer: Reducer<userInfoResponse> = (
  state = UPDATE_SOCIAL_MEDIA_STATE,
  action
) => {
  switch (action.type) {
    case UpdateSocialMediaFeeds.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdateSocialMediaFeeds.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case UpdateSocialMediaFeeds.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

/*GET AND UPDATE contactdetails   */
const GET_CONTACT_DETAILS_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const getContactDetailsReducer: Reducer<userInfoResponse> = (
  state = GET_CONTACT_DETAILS_STATE,
  action
) => {
  switch (action.type) {
    case GetContactDetails.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case GetContactDetails.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case GetContactDetails.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

/* UPDATE  contact details  feeds reducer */
const UPDATE_CONTACT_DETAILS_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const updateContactDetailsReducer: Reducer<userInfoResponse> = (
  state = UPDATE_CONTACT_DETAILS_STATE,
  action
) => {
  switch (action.type) {
    case UpdateContactDetails.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdateContactDetails.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case UpdateContactDetails.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

// /* GET  Opening Times   feeds reducer */
// const GET_OPENING_TIMES_STATE: userInfoResponse = {
//   loading: false,
//   data: undefined,
//   error: true,
// };

// export  const getOpeningTimesReducer: Reducer<userInfoResponse> = (
//   state = GET_OPENING_TIMES_STATE,
//   action
// ) => {
//   switch (action.type) {
//     case GetOpeningTimes.FETCH_REQUEST:{
//         return {...state, loading:true}
//     }
//     case GetOpeningTimes.FETCH_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         data: action.data,
//         error: false,
//       };
//     }
//     case GetOpeningTimes.FETCH_ERROR: {
//       return {
//         ...state,
//         loading: false,
//         data: action.data,
//         error: true,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// /* Update  Opening Times   feeds reducer */
// const UPDATE_OPENING_TIMES_STATE: userInfoResponse = {
//   loading: false,
//   data: undefined,
//   error: true,
// };

// export  const updateOpeningTimesReducer: Reducer<userInfoResponse> = (
//   state = UPDATE_OPENING_TIMES_STATE,
//   action
// ) => {
//   switch (action.type) {
//     case UpdateOpeningTimes.FETCH_REQUEST:{
//         return {...state, loading:true}
//     }
//     case UpdateOpeningTimes.FETCH_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         data: action.data,
//         error: false,
//       };
//     }
//     case UpdateOpeningTimes.FETCH_ERROR: {
//       return {
//         ...state,
//         loading: false,
//         data: action.data,
//         error: true,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

/* GET  Industries feeds reducer */
const GET_INDUSTRIES_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const getIndustriesReducer: Reducer<userInfoResponse> = (
  state = GET_INDUSTRIES_STATE,
  action
) => {
  switch (action.type) {
    case GetIndustires.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case GetIndustires.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case GetIndustires.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

/* Update  Industries feeds reducer */
const UPDATE_INSUSTRIES_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const updateIndustriesReducer: Reducer<userInfoResponse> = (
  state = UPDATE_INSUSTRIES_STATE,
  action
) => {
  switch (action.type) {
    case UpdateIndustries.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdateIndustries.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case UpdateIndustries.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

const GET_OCCUPATION_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const getOccupationReducer: Reducer<userInfoResponse> = (
  state = GET_OCCUPATION_STATE,
  action
) => {
  switch (action.type) {
    case GetOccupation.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case GetOccupation.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case GetOccupation.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

const UPDATE_OCCUPATION_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const updateOccupationReducer: Reducer<userInfoResponse> = (
  state = UPDATE_OCCUPATION_STATE,
  action
) => {
  switch (action.type) {
    case UpdateOccupation.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdateOccupation.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case UpdateOccupation.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

const GET_SERVICES_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const getServicesReducer: Reducer<userInfoResponse> = (
  state = GET_SERVICES_STATE,
  action
) => {
  switch (action.type) {
    case GetServices.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case GetServices.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case GetServices.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

const UPDATE_SERVICES_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const updateServicesReducer: Reducer<userInfoResponse> = (
  state = UPDATE_SERVICES_STATE,
  action
) => {
  switch (action.type) {
    case UpdateServices.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdateServices.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case UpdateServices.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

const DELETE_SERVICES_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const DeleteServiceReducer: Reducer<userInfoResponse> = (
  state = DELETE_SERVICES_STATE,
  action
) => {
  switch (action.type) {
    case DeleteService.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case DeleteService.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case DeleteService.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
const DELETE_SERVICES_TAB_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const DeleteServiceTabReducer: Reducer<userInfoResponse> = (
  state = DELETE_SERVICES_TAB_STATE,
  action
) => {
  switch (action.type) {
    case DeleteServiceTab.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case DeleteServiceTab.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case DeleteServiceTab.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
const UPDATE_SERVICES_TABS_STATE: userInfoResponse = {
  loading: false,
  data: undefined,
  error: true,
};

export const updateServiceTabReducer: Reducer<userInfoResponse> = (
  state = UPDATE_SERVICES_TABS_STATE,
  action
) => {
  switch (action.type) {
    case UpdateServiceTabs.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdateServiceTabs.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case UpdateServiceTabs.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
