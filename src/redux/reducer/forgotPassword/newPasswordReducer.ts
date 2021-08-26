import { Reducer } from "redux";
import {
  newPasswordType,
  ForgotPasswordResponse,
} from "../../action/authentication/forgotPassword/forgotPasswordType";

export const initialState: ForgotPasswordResponse = {
  loading: true,
  data: undefined,
  errors: "",
  error: true,
  success: false,
  dataReceived: false,
};

const reducer: Reducer<ForgotPasswordResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case newPasswordType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case newPasswordType.FETCH_SUCCESS: {
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
    case newPasswordType.FETCH_ERROR: {
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

export { reducer as newPasswordReducer };
