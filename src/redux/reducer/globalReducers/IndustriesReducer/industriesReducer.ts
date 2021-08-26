import { Reducer } from "redux";
import {
IndustriesType, 
industiresResponse
} from "../../../action/globalActions/Industriesdroplist/IndustriesType";

export const initialState: industiresResponse = {
    loading:false,
  data: undefined,
  error: false,
};

export const industriesReducer: Reducer<industiresResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case IndustriesType.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case IndustriesType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error:false
      };
    }
    case IndustriesType.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
