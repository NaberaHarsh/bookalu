import { Reducer } from "redux";
import {
  UpdatePasswordTypes,
  UpdatePasswordResponse,
} from "../../action/authentication/updatePassword/updatePasswordType";

export const initialState: UpdatePasswordResponse = {
  loading: true,
  data: undefined,
  errors: "",
  error: true,
  success: false,
  dataReceived: false,
};

const reducer: Reducer<UpdatePasswordResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UpdatePasswordTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UpdatePasswordTypes.FETCH_SUCCESS: {
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
    case UpdatePasswordTypes.FETCH_ERROR: {
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

export { reducer as updatePasswordReducer };
