import { ForgotPasswordEmail, Payload } from "./forgotPasswordType";
import {  NEW_API_BASE_URL } from "../../../../utils/baseUrl";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";

/* 
   import jwt_decode from "jwt-decode";
      // let token = jwt_decode(action.payload.data.accessToken)
      // console.log(token);
*/

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const checkEmailAction: AppThunk = (payload: Payload) => {
  console.log(payload);

  return (dispatch: Dispatch) => {
    axios
      .get(`${NEW_API_BASE_URL}/users/forgotpassword?email=${payload.email}`)
      .then((res) => {
        toast.success(res.data.message);

        return dispatch({
          type: ForgotPasswordEmail.FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return dispatch({
          type: ForgotPasswordEmail.FETCH_ERROR,
          payload: err.message,
        });
      });
  };
};

// export const userTokenDetails = () => {
//   if(localStorage.getItem('token')) {
//     let localstorageToken = localStorage.getItem('token');
//     let token = JSON.parse(localstorageToken);

//   }else {

//   }
// }
