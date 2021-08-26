import {
  CheckEmailType,
  Payload,
  clearEmailVarifiedType,
} from "./checkMailType";
import {  NEW_API_BASE_URL} from "../../../../utils/baseUrl";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";
import { USERNAME_MSG } from "../../../../utils/constants/errorMessages";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const checkEmailAlreadyExistsAction: AppThunk = (payload: Payload) => {
  return (dispatch: Dispatch) => {
    axios
      .post(`${NEW_API_BASE_URL}/users/checkemail`,{ email: payload })
      .then((res) => {
        // toast.success(res.data.message);
        return dispatch({
          type: CheckEmailType.FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        const message =
          err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : USERNAME_MSG;
        toast.error(message);
        return dispatch({
          type: CheckEmailType.FETCH_ERROR,
          payload: {
            status: err.response.status,
            message: message,
          },
        });
      });
  };
};

export const clearEmailCheck = () => {
  return {
    type: clearEmailVarifiedType.FETCH_SUCCESS,
    payload: "",
  };
};
