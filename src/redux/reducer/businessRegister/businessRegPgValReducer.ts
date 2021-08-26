import { Reducer } from "redux";
import { BUSINESS_FORM_VALUE } from "../../action/businessPagesAction/businessTypes";

export const initialState = {
  values: {},
};

export const businessRegPgValReducer: Reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BUSINESS_FORM_VALUE: {
      return {
        ...state,
        values: action.values,
      };
    }

    default: {
      return state;
    }
  }
};
