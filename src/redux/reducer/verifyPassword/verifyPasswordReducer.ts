import { Reducer } from "redux";
import {
  passwordVerificationTypes,
  verifyUserReducer,
} from "../../action/verifyUser/checkPassType";

export const initialState: verifyUserReducer = {
  loading: true,
  data: undefined,
  errors: "",
  error: true,
  success: false,
  dataReceived: false,
  userLogInsucces: false,
};

const reducer: Reducer<verifyUserReducer> = (state = initialState, action) => {
  switch (action.type) {
    case passwordVerificationTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case passwordVerificationTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        errors: undefined,
        dataReceived: true,
        success: true,
        error: false,
        userLogInsucces: true,
      };
    }
    case passwordVerificationTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: undefined,
        dataReceived: true,
        success: false,
        error: true,
        userLogInsucces: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as verifyPasswordReducer };
