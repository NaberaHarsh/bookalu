import { SELECTED_OR_CREATED_OPTION } from "./typeaheadType";

export const typeAheadAction = (payload: string) => {
  return {
    type: SELECTED_OR_CREATED_OPTION,
    payload,
  };
};
