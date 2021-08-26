import {
  combineValidators,
  createValidator,
  isRequired,
  composeValidators,
  // matchesField,
  isRequiredIf,
} from "revalidate";

const checkPhoneNumberValidation = createValidator(
  (message) => (value) => {
    /* prettier-ignore */
    if (value && !isNaN(Number(value)) && value.length !== 10) return message;
    if (value && isNaN(Number(value))) return message;
  },
  "Please Provide Valid Phone Number!"
);

const checkBoxReq = createValidator(
  (message) => (value) => {
    if (!value) {
      return message;
    }
  },
  "Terms and conditions are required"
);

// const RequiredIf = isRequiredIf((values:string) => values && values.mobile)('telephone');
const customIsRequired = isRequired({ message: "Number is requird" });

export const validate = combineValidators({
  firstName: isRequired({ message: "Name is required" }),
  lastName: isRequired({ message: "Last Name is required" }),
  mobile: composeValidators(checkPhoneNumberValidation)(),
  telephone: composeValidators(checkPhoneNumberValidation)(),
  addressLine1: isRequired({ message: "Address Line 1 is required" }),
  country: isRequired({ message: "country is required" }),
  postcode: isRequired({ message: "postcode is required" }),
  checkbox: composeValidators(checkBoxReq)(),
});
