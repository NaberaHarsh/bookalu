import { Reducer } from "redux";
import {
  addressSelectedType,
  searchResponse,
} from "../../action/searchAddress/searchType";

export const initialState: searchResponse = {
  data: undefined,
  errors: undefined,
  loading: true,
  success: false,
  error: true,
  dataReceived: false,
};

const reducer: Reducer<searchResponse> = (state = initialState, action) => {
  switch (action.type) {
    case addressSelectedType.FETCH_SUCCESS: {
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
    case addressSelectedType.FETCH_ERROR: {
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

export { reducer as searchSelectedRducer };
