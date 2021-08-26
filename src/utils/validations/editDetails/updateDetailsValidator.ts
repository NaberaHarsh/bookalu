import {
  combineValidators,
  isRequired,
  createValidator,
  composeValidators,
} from "revalidate";

const isValidEmail = createValidator(
  (message) => (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);

const lessThan = createValidator(
  (message) => (value) => {
    if (value && /^.{10,10}$/i.test(value)) {
      return message;
    }
  },
  "Invalid Phone number!"
);

const customIsRequired = isRequired({ message: "Required" });

export const validate = combineValidators({
  firstName: isRequired({ message: "Name is required" }),
  lastName: isRequired({ message: "Last Name is required" }),
  mobile: composeValidators(lessThan)(),
  telephone: composeValidators(lessThan)(),
  email: composeValidators(customIsRequired, isValidEmail)(),
  addressLine1:isRequired({ message: "Address Line 1 is required" }),
  country:isRequired({ message: "country is required" }),
  postcode:isRequired({ message: "postcode is required" }),
});
