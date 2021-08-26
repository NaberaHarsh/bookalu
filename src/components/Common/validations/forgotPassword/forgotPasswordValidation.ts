import {
  combineValidators,
  isRequired,
  matchesField,
  composeValidators,
  createValidator,
} from "revalidate";

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

const passwordCustomRequired = isRequired({
  message: "Password field is required",
});

export const validate = combineValidators({
  password: composeValidators(passwordCustomRequired, isPasswordValid)(),
  confirmPassword: matchesField(
    "password",
    "password"
  )({
    message: "Password do not match",
  }),
});
