import { USER_REG_API_CLL, USER_REG_API_CLL_ERR } from "../../types/userTypes";
import { API_BASE_URL } from "../../../../utils/baseUrl";
import { RegisterActionTypes, Payload, EmailPass } from "./registerTypes";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";
import AuthService from '../../../../RouteHandler/axiosHandler/auth.service';

export type RegisterUser = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;



export const registerUser: RegisterUser = (payload: EmailPass) => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: USER_REG_API_CLL,
      payload,
    });
  };
};

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const fetchRequest: AppThunk = (payload: Payload) => {
  return async (dispatch: Dispatch) => {
    // Body for axios
    const body = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      mobile: payload.mobile,
      telephone: payload.telephone,
      postCode: payload.postCode,
      emailId: payload.emailId,
      password: payload.password,
      title: "Mr.",
      addressLine1: payload.addressLine1,
      addressLine2: payload.addressLine2,
      town: payload.town,
      county: payload.county,
      country: payload.country,
    };

    AuthService.register(body,"users").then(
      (response) => {
        dispatch({
          type: RegisterActionTypes.FETCH_SUCCESS,
          payload: response.data,
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
          type: RegisterActionTypes.FETCH_ERROR,
          payload: message,
        });
  
        
  
        return Promise.reject();
      }
    );
   
  };
};
