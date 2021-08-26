import {
  combineValidators,
  createValidator,
  isRequired,
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

const customIsRequired = isRequired({ message: "Password is required" });
const emailIsRequired = isRequired({ message: "Email is required" });
export const validate = combineValidators({
  email: composeValidators(emailIsRequired, isValidEmail)(),
  password: customIsRequired,
});
