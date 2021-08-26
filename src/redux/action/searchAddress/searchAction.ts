import { searchType, Payload } from "./searchType";
import { ADDR_API_BASE_URL, ADDR_AUTH_KEY } from "../../../utils/baseUrl";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const searchAction: AppThunk = (payload: Payload) => {
  console.log(payload);

  return (dispatch: Dispatch) => {
    axios
      .get(`${ADDR_API_BASE_URL}${payload.search}${ADDR_AUTH_KEY}`)
      .then((res) => {
        return dispatch({
          type: searchType.FETCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        // console.log(err.response);
        toast.error(err.response.data.Message);
        return dispatch({
          type: searchType.FETCH_ERROR,
          payload: err.message,
        });
      });
  };
};
