import { UpdatePasswordTypes, Payload } from "./updatePasswordType";
import { API_BASE_URL } from "../../../../utils/baseUrl";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";
import UserService from '../../../../RouteHandler/axiosHandler/user.service';

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const updatePasswordAction: AppThunk = (payload: Payload) => {
  return (dispatch: Dispatch) => {
    const body = {
      newPassword: payload.password,
      oldPassword: payload.oldPassword,
    };



    UserService.postRequest("users/update-password", body).then(
      (data) => {
        toast.success(data.data.message);
        dispatch({
          type: UpdatePasswordTypes.FETCH_SUCCESS,
          payload: data.data,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          toast.error(message);
          dispatch({
            type: UpdatePasswordTypes.FETCH_ERROR,
          payload: error.response,
          });
          return Promise.reject();

      }
    )
    // axios
    //   .patch(`${API_BASE_URL}/UserAccount/updatepassword`, body, config)
    //   .then((res) => {
    //     // console.log(res.data);
    //     toast.success(res.data.message);

    //     return dispatch({
    //       type: UpdatePasswordTypes.FETCH_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //     toast.error(err.response.data.message);
    //     return dispatch({
    //       type: UpdatePasswordTypes.FETCH_ERROR,
    //       payload: err.message,
    //     });
    //   });

  };
};
