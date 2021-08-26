import { Reducer } from "redux";
import {
  address2Type,
  searchResponse,
} from "../../../action/searchAddress/addressListAction/addressesType";

export const initialState: searchResponse = {
  data: [],
  errors: undefined,
  loading: true,
  success: false,
  error: true,
  dataReceived: false,
};

const reducer: Reducer<searchResponse> = (state = initialState, action) => {
  switch (action.type) {
    case address2Type.FETCH_SUCCESS: {
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
    default: {
      return state;
    }
  }
};

export { reducer as addressLine2Reducer };
