import { BUSINESS_FORM_VALUE } from "./businessTypes";
import {Val as Payload} from '../../../components/Authentication/businessRegister/wizardInterface';
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export type AppThunk = ActionCreator<
  ThunkAction<void, Payload, null, Action<string>>
>;

export const businessRegPgVal: AppThunk = (payload: Payload) => {

  return (dispatch: Dispatch) => {
    dispatch({
      type: BUSINESS_FORM_VALUE,
      values: payload,
    });
  };
};
