// Validation
import {
  combineValidators,
  createValidator,
  isRequired,
  composeValidators,
  matchesField,
} from "revalidate";

// import { hasErrorOnlyAt } from "revalidate/assertions";
const isValidEmail = createValidator(
  (message) => (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);
let test = !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/i;
var splChars = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
// && value.match(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&amp;\*])(?=.{8,}))
const isPasswordValid = createValidator(
  (message) => (value) => {
    if (value) {
      if (
        value.search(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/
        ) == -1
      ) {
        return message;
      }
    }
  },
  "Password must contain atleast 8 to 20 letters including 1 capital 1 special symbol! ans 1 number"
);

const customIsRequired = isRequired({ message: "Email is Required" });
const passwordCustomRequired = isRequired({
  message: "Password  is required",
});

export const validate = combineValidators({
  email: composeValidators(customIsRequired, isValidEmail)(),
  password: composeValidators(passwordCustomRequired, isPasswordValid)(),
  confirmPassword: matchesField(
    "password",
    "password"
  )({
    message: "Password do not match",
  }),
});
