import { Reducer } from "redux";
import {
  CheckEmailType,
  checkMailResponse,
  clearEmailVarifiedType,
} from "../../action/authentication/checkMail/checkMailType";

export const initialState: checkMailResponse = {
  data: undefined,
  errors: undefined,
  loading: true,
  success: false,
  error: true,
  dataReceived: false,
};

const reducer: Reducer<checkMailResponse> = (state = initialState, action) => {
  switch (action.type) {
    case CheckEmailType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case CheckEmailType.FETCH_SUCCESS: {
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
    case CheckEmailType.FETCH_ERROR: {
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
    case clearEmailVarifiedType.FETCH_SUCCESS: {
      return {
        data: undefined,
        errors: undefined,
        loading: true,
        success: false,
        error: true,
        dataReceived: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as checkMailReducer };
