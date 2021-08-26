import { updateUserInfoType, UpdateDetailsPayload } from "./userInfoType";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import UserService from '../../../RouteHandler/axiosHandler/user.service'
// import axios from "axios";
// import { API_BASE_URL } from "../../../utils/baseUrl";

export type AppThunk = ActionCreator<
  ThunkAction<void, UpdateDetailsPayload, null, Action<string>>
>;

export const updateUserInfoAction: AppThunk = (
  payload: UpdateDetailsPayload
) => {
  console.log(payload);
  const {
    firstName,
    lastName,
    mobile,
    telephone,
    email,
    postCode,
    addressLine1,
    addressLine2,
    town,
    county,
    country,
  } = payload;

 
  const body = {
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    telephone: telephone,
    postCode: postCode,
    emailId: email,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    town: town,
    county: county,
    country: country,
  };
  return (dispatch: Dispatch) => {
    UserService.patchRequest("users", body).then(
      (data) => {
        toast.success(data.data.message);
        dispatch({
          type: updateUserInfoType.FETCH_SUCCESS,
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
            type: updateUserInfoType.FETCH_ERROR,
          payload: error.response,
          });
          return Promise.reject();

      }
    )
    // axios
    //   .patch(`${API_BASE_URL}/UserAccount`, body, config)
    //   .then((res) => {
    //     toast.success(res.data.message);
    //     return dispatch({
    //       type: updateUserInfoType.FETCH_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //     return dispatch({
    //       type: updateUserInfoType.FETCH_ERROR,
    //       payload: err.message,
    //     });
    //   });
  };
};
