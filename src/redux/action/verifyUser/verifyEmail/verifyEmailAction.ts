import { verifyEmailType, Payload } from "./verifyEmailType";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";
import { NEW_API_BASE_URL } from "../../../../utils/baseUrl";
export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const verifyEmailAction: AppThunk = (payload: Payload) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`${NEW_API_BASE_URL}/users/verifyuser/${payload.token}`
      //  {
      //   params: { token: payload.token },
      // })
      )
      .then((res) => {
        toast.success(res.data.message);
        dispatch({
          type: verifyEmailType.FETCH_SUCCESS,
          data: res.data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        dispatch({
          type: verifyEmailType.FETCH_ERROR,
          data: err.response.data.message,
        });
      });
  };
};
