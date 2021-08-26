import { address1Type, address2Type } from "./addressesType";

export const addressLine1Action = (payload: string[]) => {
  return {
    type: address1Type.FETCH_SUCCESS,
    payload,
  };
};

export const addressLine2Action = (payload: string[]) => {
  return {
    type: address2Type.FETCH_SUCCESS,
    payload,
  };
};
