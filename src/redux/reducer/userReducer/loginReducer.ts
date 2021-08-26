import { Reducer } from "redux";

import {
  LOGINActionTypes,
  loginResponse,
} from "../../action/authentication/login/loginTypes";
import { refreshTokenType } from "../../action/refreshToken/refreshType";

export const initialState: loginResponse = {
  data: undefined,
  loading: true,
  error: true,
  isLoginSuccess: false,
};

export const loginReducer: Reducer<loginResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGINActionTypes.FETCH_REQUEST:
      return { ...state, loading: true };

    case LOGINActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
        isLoginSuccess: true,
      };
    case LOGINActionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: true,
        isLoginSuccess: false,
      };
    case LOGINActionTypes.LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: undefined,
        error: true,
        isLoginSuccess: false,
      };

    default:
      return state;
  }
};
