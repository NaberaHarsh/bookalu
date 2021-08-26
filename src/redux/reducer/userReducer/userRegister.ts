import {
  USER_REG_API_CLL,
  USER_REG_API_CLL_ERR,
} from "../../action/types/userTypes";
import {
  RegisterActionTypes,
  RegisterResponse,
} from "../../action/authentication/userRegister/registerTypes";
import { Reducer } from "redux";

const initialState: RegisterResponse = {
  loading: false,
  data: undefined,
  errors: undefined,
  error: true,
  success: false,
  dataReceived: false,
};

export const userRegister = (
  state: RegisterResponse = initialState,
  payload: any
) => {
  switch (payload.type) {
    case USER_REG_API_CLL:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        errors: undefined,
        registerLoading: false,
        dataReceived: true,
        data: payload.payload,
      };
    case USER_REG_API_CLL_ERR:
      return {
        loading: false,
        data: undefined,
        errors: payload.payload,
        error: true,
        success: false,
        dataReceived: true,
      };

    default:
      return state;
  }
};

const reducer: Reducer<RegisterResponse> = (state = initialState, action) => {
  switch (action.type) {
    case RegisterActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case RegisterActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.payload,
        errors: undefined,
        dataReceived: true,
      };
    }
    case RegisterActionTypes.FETCH_ERROR: {
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

export { reducer as userRegisterReducer };
