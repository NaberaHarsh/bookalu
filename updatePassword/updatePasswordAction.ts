import { updatePasswordType, Payload } from "./updatePasswordType";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

const config = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const updatePasswordAction: AppThunk = (payload: Payload) => {
  console.log(payload);
  const body = {
    oldPassword: payload.oldPassword,
    newPassword: payload.newPassword,
  };
  return (dispatch: Dispatch) => {
    axios
      .post("/users/update-password", body, config)
      .then((res) => {
        toast.success(res.data.data);

        return dispatch({
          type: updatePasswordType.FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        toast.error(err.message);
        return dispatch({
          type: updatePasswordType.FETCH_ERROR,
          payload: err.message,
        });
      });
  };
};
