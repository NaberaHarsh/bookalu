import { Reducer } from "redux";
import { SELECTED_OR_CREATED_OPTION } from "../../action/typeahead/typeaheadType";

export const typeaheadReducer: Reducer = (
  state = { occupation: "" },
  action
) => {
  switch (action.type) {
    case SELECTED_OR_CREATED_OPTION: {
      return { ...state, occupation: action.payload };
    }

    default: {
      return state;
    }
  }
};
