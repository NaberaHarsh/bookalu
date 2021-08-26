import React, { useState, useRef } from "react";
import { TextInput } from "../../../utils/form";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import Loader from "../../../utils/Loader/Loader";
import { verifyPasswordAction } from "../../../redux/action/verifyUser/verifyPassAction";
import { PasswordField } from "../../../utils/interfaces/updateUserDetails";
import { combineValidators, isRequired } from "revalidate";
const customIsRequired = isRequired({ message: "Password incorrect" });

const validate = combineValidators({
  password: customIsRequired,
});

// Component Start
const EnterPassword: React.FC = () => {
  // Dispatch actions
  const dispatch = useDispatch();

  // Component state
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  // Form submit action call
  const checkPassword = (e: PasswordField) => {
    dispatch(verifyPasswordAction(e));
  };

  return (
    <div>
      <section className="enter_pass_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="enter_pass_left">
                <p>
                  Enter your password to edit or update your account details
                  below:
                </p>
              </div>
              <div className="enter_pass_right">
                <Form
                  onSubmit={(e) => checkPassword(e)}
                  initialValues={password}
                  validate={validate}
                >
                  {({ handleSubmit, pristine, submitting }) => (
                    <form onSubmit={handleSubmit}>
                      <Field
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        component={TextInput}
                      />

                      <button
                        // style={{ marginTop: "8px" }}
                        type="submit"
                        disabled={submitting || pristine}
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loader && <Loader />}
    </div>
  );
};

export default EnterPassword;
