import { Reducer } from "redux";
import {
  ResendType,
  ResendResponse,
} from "../../action/authentication/resendVerificationLink/resendVerifiType";

export const initialState: ResendResponse = {
  data: undefined,
  errors: undefined,
  loading: true,
  success: false,
  error: true,
  dataReceived: false,
};

const reducer: Reducer<ResendResponse> = (state = initialState, action) => {
  switch (action.type) {
    case ResendType.FETCH_SUCCESS: {
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
    case ResendType.FETCH_ERROR: {
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

export { reducer as ResendVerificationLinkReducer };
