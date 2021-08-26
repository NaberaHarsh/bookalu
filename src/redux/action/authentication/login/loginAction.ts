import { LOGINActionTypes, Payload } from "./loginTypes";
import jwt_decode from "jwt-decode";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";

import AuthService from "../../../../RouteHandler/axiosHandler/auth.service";
import { COMMON_MESSAGE } from "../../../../utils/constants/errorMessages";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const fetchRequest: AppThunk = (payload: Payload) => {
  const body = {
    username: payload.email,
    password: payload.password,
  };
  return (dispatch: Dispatch) => {
    dispatch({ type: LOGINActionTypes.FETCH_REQUEST });
    AuthService.login(body, "users/login").then(
      (data) => {
        toast.success(data.message);
        const decode = jwt_decode(data.data.accessToken);
        data.data.accessToken = decode;
        console.log("decode",decode)
        dispatch({
          type: LOGINActionTypes.FETCH_SUCCESS,
          payload: data.data,
        });

        return Promise.resolve();
      },
      (error) => {
        console.log(error.response);
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
        dispatch({
          type: LOGINActionTypes.FETCH_ERROR,
          payload: error.response,
        });

        return Promise.reject();
      }
    );
  };
};

/* Logout Action */

export const logoutAction = () => {
  console.log(" -- LOGOUT ACTION TRIGGER -- ");
  localStorage.removeItem("token");
  return { type: LOGINActionTypes.LOGOUT_USER };
};
