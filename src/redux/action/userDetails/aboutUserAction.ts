import { aboutUserActionTypes, Payload, Decoded } from "./userTypes";
import jwt_decode from "jwt-decode";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const aboutUserAction: AppThunk = (payload: Payload) => {
  return (dispatch: Dispatch) => {
    let token = JSON.stringify(payload);
    localStorage.setItem("token", token);
    let decoded: Decoded = jwt_decode(payload.accessToken);
    console.log("decoded",)

    toast.success(`Welcome ${decoded.firstname}`);
    dispatch({
      type: aboutUserActionTypes.FETCH_SUCCESS,
      data: decoded,
    });
  };
};
