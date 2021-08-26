import { passwordVerificationTypes, Payload, Decoded } from "./checkPassType";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";
import { NEW_API_BASE_URL } from "../../../utils/baseUrl";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const verifyPasswordAction: AppThunk = (payload: Payload) => {
  let tokenDetails = JSON.parse(localStorage.getItem("token") || "{}");
  // Header and params
  const config = {
    headers: {
      "Authorization": `Bearer ${tokenDetails.accessToken}`,
    }

  };
  return (dispatch: Dispatch) => {
    axios
      .post(`${NEW_API_BASE_URL}/users/verify-password`, {
        password: payload.password,
      }, config)
      .then((res) => {
        toast.success(res.data.message);
        dispatch({
          type: passwordVerificationTypes.FETCH_SUCCESS,
          data: res.data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        dispatch({
          type: passwordVerificationTypes.FETCH_ERROR,
          data: err.message,
        });
      });
  };
};
