import {
  combineValidators,
  createValidator,
  isRequired,
  composeValidators,
  // matchesField,
  isRequiredIf,
} from "revalidate";

const lessThan = createValidator(
  (message) => (value) => {
    if (value && /^.{10,10}$/i.test(value)) {
      return message;
    }
  },
  "Invalid Phone number!"
);

const checkBoxReq = createValidator(
  (message) => (value) => {
    if(!value) {
      return message
    }
  },
  "Terms and conditions are required"
)

// const RequiredIf = isRequiredIf((values:string) => values && values.mobile)('telephone');
const customIsRequired = isRequired({ message: "Number is requird" });

export const validate = combineValidators({
  firstName: isRequired({ message: "Name is required" }),
  lastName: isRequired({ message: "Last Name is required" }),
  mobile: composeValidators(lessThan)(),
  telephone: composeValidators(lessThan)(),
  addressLine1:isRequired({ message: "Address Line 1 is required" }),
  country:isRequired({ message: "country is required" }),
  postcode:isRequired({ message: "postcode is required" }),
  checkbox:composeValidators(checkBoxReq)()
});
