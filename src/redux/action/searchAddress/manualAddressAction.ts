import { manualAddressType } from "./searchType";

interface Palyload {
  addressLine1: string;
  addressLine2: string;
  town?:string;
  county?: string;
  country: string;
  postcode: string;
}

export const manualAddressAction = (payload: Palyload) => {
  return {
    type: manualAddressType.FETCH_SUCCESS,
    payload,
  };
};
