import { combineValidators, isRequired } from "revalidate";

export const validate = combineValidators({
  addressLine1: isRequired({ message: "Address Line 1 is required" }),
  country: isRequired({ message: "Country is required" }),
  postcode: isRequired({ message: "Postal Code is required" }),
});
