import {
  IndustriesType,
  OccupationType,
  Payload,
  OccupationPayload,
  OccupationCreateType,
} from "./dropdownTypes";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { toast } from "react-toastify";
import axios from "axios";
import { API_BASE_URL } from "../../../utils/baseUrl";
import userService from "../../../RouteHandler/axiosHandler/user.service";
import {
  CREATE_OCCUPATION_MSG,
  GET_INDISTIRES_LIST_MSG,
  GET_OCCUPATION_LIST_MSG,
} from "../../../utils/constants/errorMessages";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export type OccupationThunk = ActionCreator<
  ThunkAction<void, OccupationPayload, null, Action<string>>
>;

export const businessRegDropdown: AppThunk = (payload: Payload) => {
  return async (dispatch: Dispatch) => {
    // On initial Call Start The loader
    dispatch({ type: IndustriesType.FETCH_REQUEST });
    dispatch({ type: OccupationType.FETCH_REQUEST });

    /* Occupation Dropdown data  */

    try {
      const response = await userService.getRequest("occupation");

      dispatch({
        type: OccupationType.FETCH_SUCCESS,
        data: response.data.data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : GET_OCCUPATION_LIST_MSG;
      toast.error(message);
      dispatch({
        type: OccupationType.FETCH_ERROR,
        data: error.response,
      });
    }
    /* Industries Dropdown data  */

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

export const createOccupation: OccupationThunk = (
  payload: OccupationPayload
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: OccupationCreateType.FETCH_REQUEST });

    try {
      const response = await userService.postRequest("occupation", {
        name: payload.name,
      });
      dispatch({
        type: OccupationCreateType.FETCH_SUCCESS,
        data: response.data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : CREATE_OCCUPATION_MSG;

      toast.error(
        message === "Object reference not set to an instance of an object."
          ? "Occupation cannot be empty"
          : message
      );
      dispatch({
        type: OccupationCreateType.FETCH_ERROR,
        data: error.response,
      });
    }
  };
};
