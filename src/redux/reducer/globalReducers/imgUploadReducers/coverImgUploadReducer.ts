import { Reducer } from "redux";
import {
    aboutUserResponse,
    coverImgType
} from "../../../action/globalActions/coverUploadActions/coverUploadType";

export const initialState: aboutUserResponse = {
    loading: false,
    data: undefined,
    error: false,
    calledFrom: ""
};

export const coverImgUploadReducer: Reducer<aboutUserResponse> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case coverImgType.FETCH_REQUEST: {
            return { ...state, loading: true, calledFrom: action.calledFrom };
        }
        case coverImgType.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.data,
                calledFrom: action.calledFrom,
                error: false
            };
        }
        case coverImgType.FETCH_ERROR: {
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
