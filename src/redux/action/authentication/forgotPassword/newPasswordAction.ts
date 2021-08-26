import { newPasswordType, newPasswordPayload } from "./forgotPasswordType";
import { NEW_API_BASE_URL } from "../../../../utils/baseUrl";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";

/* 
   import jwt_decode from "jwt-decode";
      // let token = jwt_decode(action.newPasswordPayload.data.accessToken)
      // console.log(token);
*/

export type AppThunk = ActionCreator<
  ThunkAction<void, newPasswordPayload, null, Action<string>>
>;

export const newPasswordAction: AppThunk = (payload: newPasswordPayload) => {
  console.log(payload);

  return (dispatch: Dispatch) => {
    const body = {
      newpassword: payload.newpassword,
      token: payload.token,
    };
    axios
      .post(`${NEW_API_BASE_URL}/users/forgotpassword`, body)
      .then((res) => {
        toast.success(res.data.message);

        return dispatch({
          type: newPasswordType.FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return dispatch({
          type: newPasswordType.FETCH_ERROR,
          payload: err.message,
        });
      });
  };
};
