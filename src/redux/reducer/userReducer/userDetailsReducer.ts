import { Reducer } from "redux";
import {
  aboutUserActionTypes,
  aboutUserResponse,
} from "../../action/userDetails/userTypes";

export const initialState: aboutUserResponse = {
  data: undefined,
  error: false,
  userLogInsucces: false,
};

export const userDetailsReducer: Reducer<aboutUserResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case aboutUserActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case aboutUserActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        userLogInsucces: true,
      };
    }
    case aboutUserActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: true,
        userLogInsucces: false,
      };
    }
    default: {
      return state;
    }
  }
};
