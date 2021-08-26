import { Reducer } from "redux";
import {
  updateUserInfoType,
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
    case updateUserInfoType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case updateUserInfoType.FETCH_SUCCESS: {
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
    case updateUserInfoType.FETCH_ERROR: {
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

export { reducer as updatePersonalDetailsReducer };
