import { refreshTokenType } from "./refreshType";
import jwt_decode from "jwt-decode";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import userService from "../../../RouteHandler/axiosHandler/user.service";
import { COMMON_MESSAGE } from "../../../utils/constants/errorMessages";
import { logoutAction } from "../authentication/login/loginAction";
import authService from "../../../RouteHandler/axiosHandler/auth.service";

/* Refresh token  */
type RefreshTokenThunk = ActionCreator<
  ThunkAction<void, null, null, Action<string>>
>;

export const refreshTokenAction: RefreshTokenThunk = (payload) => {
  return async (dispatch: Dispatch) => {
    // On initial Call Start The loader
    dispatch({ type: refreshTokenType.FETCH_REQUEST });

    const localData = JSON.parse(localStorage.getItem("token") || "{}");

    try {
      const params = new URLSearchParams();
      params.append("oldtoken", localData.idToken);
      const response = await authService.updateTokenRequest(
        params,
        "users/refreshtoken"
      );

      const decode = jwt_decode(response.data.accessToken);
      response.data.accessToken = decode;
      dispatch({
        type: refreshTokenType.FETCH_SUCCESS,
        data: response.data,
      });
    } catch (error) {
      dispatch(logoutAction());
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : COMMON_MESSAGE;
      toast.error(message);
      dispatch({
        type: refreshTokenType.FETCH_ERROR,
        data: error.response,
      });
    }
  };
};
