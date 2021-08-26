import { getUserInfoType, Payload } from "./userInfoType";
import { API_BASE_URL } from "../../../utils/baseUrl";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import UserService from '../../../RouteHandler/axiosHandler/user.service'

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;



export const getUserInfoAction: AppThunk = () => {
  return (dispatch: Dispatch) => {
    // console.log(tokenDetails.idToken);
    UserService.getRequest("users").then(
     
      (data) => {
       
        dispatch({
          type: getUserInfoType.FETCH_SUCCESS,
          payload: data.data.data,
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
          type: getUserInfoType.FETCH_ERROR,
          payload: error.response,
        });
  
  
        return Promise.reject();
      }

    )


     
  };
};



 /* 
      (response) => {
      dispatch({
              type: getUserInfoType.FETCH_SUCCESS,
              payload: response.data.data,
            });
    })
    return Promise.resolve();
      */
    
    // instance.get(`/UserAccount`)
    //   .then((res) => {
        

    //     return dispatch({
    //       type: getUserInfoType.FETCH_SUCCESS,
    //       payload: res.data.data,
    //     });
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //     return dispatch({
    //       type: getUserInfoType.FETCH_ERROR,
    //       payload: err.message,
    //     });
    //   });



