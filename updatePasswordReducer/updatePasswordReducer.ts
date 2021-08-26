import { Reducer } from "redux";
import {
  updatePasswordType,
  updatePasswordResponse,
} from "../../action/authentication/updatePassword/updatePasswordType";

export const initialState: updatePasswordResponse = {
  data: undefined,
  errors: undefined,
  loading: true,
  success: false,
  error: true,
  dataReceived: false,
};

const reducer: Reducer<updatePasswordResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case updatePasswordType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case updatePasswordType.FETCH_SUCCESS: {
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
    case updatePasswordType.FETCH_ERROR: {
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

export { reducer as getPersonalDetailsReducer };
