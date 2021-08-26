import { Reducer } from "redux";
import {
  BusinessRegType,
  userInfoResponse,
} from "../../action/businessPagesAction/businessTypes";

export const initialState: userInfoResponse = {
  loading: true,
  data: undefined,
  error: true,
};

export const businessFormSubmitReducer: Reducer<userInfoResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BusinessRegType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case BusinessRegType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
      };
    }
    case BusinessRegType.FETCH_ERROR: {
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
