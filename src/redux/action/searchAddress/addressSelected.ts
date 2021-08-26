import { addressSelectedType } from "./searchType";

interface Palyload {
  postcode: string,
  town: string,
  addressLine1: string,
  addressLine2: string,
  country: string,
  county: string,
  address:string,
  calledFrom?:string
}

export const addressSelectedAction = (payload: Palyload) => {
  return {
    type: addressSelectedType.FETCH_SUCCESS,
    payload,
  };
};
