import {
  verifyEmailType,
  verifyUserReducer,
} from "../../action/verifyUser/verifyEmail/verifyEmailType";

import { Reducer } from "redux";

export const initialState: verifyUserReducer = {
  loading: false,
  data: undefined,
  errors: "",
  error: true,
  success: false,
  dataReceived: false,
};

const reducer: Reducer<verifyUserReducer> = (state = initialState, action) => {
  switch (action.type) {
    case verifyEmailType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case verifyEmailType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        errors: undefined,
        dataReceived: true,
        success: true,
        error: false,
      };
    }
    case verifyEmailType.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errors: action.data,
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

export { reducer as verifyEmailReducer };
