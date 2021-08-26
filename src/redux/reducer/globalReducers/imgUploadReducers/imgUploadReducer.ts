import { Reducer } from "redux";
import {
singleImgType,
aboutUserResponse
} from "../../../action/globalActions/ImageUploadActions/ImgUploadType";

export const initialState: aboutUserResponse = {
  loading:false,
  data: undefined,
  error: false,
  calledFrom:""
};

export const imgUploadReducer: Reducer<aboutUserResponse> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case singleImgType.FETCH_REQUEST: {
      return { ...state, loading: true, calledFrom:action.calledFrom };
    }
    case singleImgType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
        calledFrom:action.calledFrom,
        error:false
      };
    }
    case singleImgType.FETCH_ERROR: {
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
