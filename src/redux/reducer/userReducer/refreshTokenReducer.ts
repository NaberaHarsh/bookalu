import { Reducer } from "redux";
import {
  refreshTokenType,
  refreshTokenResponse,
} from "../../action/refreshToken/refreshType";

export const initialState: refreshTokenResponse = {
  data: undefined,
  loading: true,
  error: true,
};

export const refreshTokenReducer: Reducer<refreshTokenResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case refreshTokenType.FETCH_REQUEST:
      return { ...state, loading: true };
    case refreshTokenType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    case refreshTokenType.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: true,
      };

    default: {
      return state;
    }
  }
};
