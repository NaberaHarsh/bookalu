import { ResendType, Payload } from "./resendVerifiType";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../../../utils/baseUrl";
import axios from "axios";


export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;



export const ResendVerificationLinkAction: AppThunk = (payload: Payload) => {

  return (dispatch: Dispatch) => {
    axios
      .get(`${API_BASE_URL}/UserAccount/resendlink`, {params:{email:payload.email}})
      .then((res) => {
        toast.success(res.data.message);
        return dispatch({
          type: ResendType.FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return dispatch({
          type: ResendType.FETCH_ERROR,
          payload: err.message,
        });
      });
  };
};

