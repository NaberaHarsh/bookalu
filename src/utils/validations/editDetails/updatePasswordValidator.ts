import {
  combineValidators,
  isRequired,
  matchesField,
  createValidator,
  composeValidators,
} from "revalidate";

const customIsRequired = isRequired({
  message: "Current password is required",
});
const passwordCustomRequired = isRequired({
  message: "Password field is required",
});

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

export const validate = combineValidators({
  oldPassword: customIsRequired,
  password: composeValidators(passwordCustomRequired, isPasswordValid)(),
  confirmPassword: matchesField(
    "password",
    "password"
  )({
    message: "Password do not match",
  }),
});
