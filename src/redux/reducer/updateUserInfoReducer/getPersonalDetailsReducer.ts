import { Reducer } from "redux";
import {
  getUserInfoType,
  userInfoResponse,
} from "../../action/updateUserInformation/userInfoType";

export const initialState: userInfoResponse = {
  data: undefined,
  errors: undefined,
  loading: true,
  success: false,
  error: true,
  dataReceived: false,
};

const reducer: Reducer<userInfoResponse> = (state = initialState, action) => {
  switch (action.type) {
    case getUserInfoType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case getUserInfoType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: undefined,
        dataReceived: true,
        success: true,
        error: false,
      };
    }
    case getUserInfoType.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: undefined,
        dataReceived: true,
        success: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as getPersonalDetailsReducer };
