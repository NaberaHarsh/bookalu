import { Payload, coverImgType } from "./coverUploadType";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";
import { NEW_API_BASE_URL } from "../../../../utils/baseUrl";

export type AppThunk = ActionCreator<
    ThunkAction<void, Payload, null, Action<string>>
>;
const config = {
    headers: { "content-type": "multipart/form-data" },
};

export const coverImgUpload: AppThunk = (payload: Payload) => {
    return (dispatch: Dispatch) => {
        // On initial Call Start The loader
        dispatch({
            type: coverImgType.FETCH_REQUEST,
            calledFrom: payload.calledFrom,
        });
        console.log(payload);
        const formData = new FormData();
        // formData.append(payload.files);
        payload.files.map((val: any, ind: number) => {
            formData.append("files", val);
        });

        axios
            .post(`${NEW_API_BASE_URL}/file`, formData, config)
            .then((res) => {
                dispatch({
                    type: coverImgType.FETCH_SUCCESS,
                    data: res.data.data.fileIds,
                    calledFrom: payload.calledFrom,
                });
            })
            .catch((err) => {
                dispatch({
                    type: coverImgType.FETCH_ERROR,
                    data: err.response,
                });
            });
    };
};
