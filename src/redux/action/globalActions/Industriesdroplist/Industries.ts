import { IndustriesType, Payload } from "./IndustriesType";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import userService from "../../../../RouteHandler/axiosHandler/user.service";
import { GET_INDISTIRES_LIST_MSG } from "../../../../utils/constants/errorMessages";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const getIndustries: AppThunk = (payload: Payload) => {
  return async (dispatch: Dispatch) => {
    // On initial Call Start The loader
    dispatch({ type: IndustriesType.FETCH_ERROR });

    // axios.get(`${API_BASE_URL}/Industry`)
    // .then((res) => {
    //     console.log(res.data.data)
    //     dispatch({
    //         type:IndustriesType.FETCH_SUCCESS,
    //         data:res.data.data
    //     })
    // }).catch((err) => {
    //     dispatch({
    //         type:IndustriesType.FETCH_ERROR,
    //         data:err.response
    //     })
    // })
    try {
      const response = await userService.getRequest("industry");
      dispatch({
        type: IndustriesType.FETCH_SUCCESS,
        data: response.data.data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : GET_INDISTIRES_LIST_MSG;
      toast.error(message);
      dispatch({
        type: IndustriesType.FETCH_ERROR,
        data: error.response,
      });
    }
  };
};
