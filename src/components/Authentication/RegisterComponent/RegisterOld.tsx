import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import { Link, Redirect } from "react-router-dom";
import TextInput from "../../Common/form/TextInput";

// Common UI for Admin panel Register, register as , register details and login
import AuthenticationHeader from "../AuthCommonUI/AuthenticationHeader";
import AuthSideDetails, {
  CommonColumnField,
  CommonFooter,
} from "../AuthCommonUI/AuthSideDetails";
// Redux Integration
import { registerUser } from "../../../redux/action/authentication/userRegister/userRegister";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducer/index";
import { RegisterEmlAndPass } from "../../Common/models/user";
// For checking email address
import { validate } from "../../Common/validations/Register";
import { ToastContainer } from "react-toastify";

interface RegState {
  email: string;
  password: string;
  confirmPassword?: string;
}

const Register: React.FC = () => {
  /*  Dispatch Action for redux - */
  const dispatch = useDispatch();
  const registerdReducerResponse = useSelector(
    (state: RootState) => state.userRegisterResponse
  );

  //   Form Data
  const [register, setRegister] = useState<RegState>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  // If the email is not registerd and all details given are truthy then redirect to more details page
  const [redirectUser, setRedirectUser] = useState(false);
  // If email is already registerd then show error message
  const [showError, setShowError] = useState(false);

  const showResult = (values: RegisterEmlAndPass) => {
    const { email, password, confirmPassword } = values;
    setRegister({ email, password, confirmPassword });
    dispatch(registerUser({ email, password }));
  };

  // Check if user email and password field are there in system.. if there are then redirect user to more details
  useEffect(() => {
    if (localStorage.getItem("userRegisterDetail")) {
      setRedirectUser(true);
    }
  }, []);

  // User details stored in local storgae response
  useEffect(() => {
    const {
      success,
      error,
      dataReceived,
      errors,
      data,
    } = registerdReducerResponse;
    console.log(registerdReducerResponse);
    if (error && dataReceived) {
      // setRegister({emailInvalid:true})
      setShowError(true);
    }
    if (success && dataReceived) {
      console.log(register);

      let userRegisterDetail = JSON.stringify({
        email: register.email,
        password: register.password,
      });
      localStorage.setItem("userRegisterDetail", userRegisterDetail);
      setRedirectUser(true);
    }
  }, [registerdReducerResponse]);

  /* API call made for checking if mail is already registed in system || not */
  const emailFocused = () => {
    setShowError(false);
  };

  return (
    <div>
      <div>
        {/*Header Area Start */}
        <AuthenticationHeader />
        {/* site_main Area Start */}
        <section className="site_main login_page">
          <Container>
            <Row>
              <CommonColumnField />
              <Col md={6}>
                <div className="site_main_right">
                  <div className="right_inner_top login_page_right_inner_top">
                    <img src="images/right_logo.png" alt="right_images" />
                    <h1 className="tab login_page_h1">
                      Lorem consectetur labore a tempor{" "}
                    </h1>
                    <h1 className="mobile_s">Register to your account </h1>
                  </div>
                  <div className="right_inner_mid">
                    <Form
                      onSubmit={showResult}
                      initialValues={register}
                      validate={validate}
                    >
                      {({ handleSubmit, submitting, values, pristine }) => (
                        <form
                          className="site_form"
                          id="signup"
                          onSubmit={handleSubmit}
                        >
                          {/* Email field */}
                          <Field
                            name="email"
                            placeholder="email address"
                            type="email"
                            value={register.email}
                          >
                            {({ input, meta, placeholder, inputOnChange }) => (
                              <Fragment>
                                <input
                                  type="email"
                                  {...input}
                                  placeholder={placeholder}
                                  onFocus={() => emailFocused()}
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                                {showError && (
                                  <span>Email already registerd!</span>
                                )}
                              </Fragment>
                            )}
                          </Field>

                          {/* Password */}
                          <Field
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={register.password}
                            component={TextInput}
                          />

                          {/* COnfirm pass */}
                          <Field
                            name="confirmPassword"
                            placeholder="confirm password"
                            value={register.confirmPassword}
                            type="password"
                            component={TextInput}
                          />

                          <label className="signup_lab">
                            * Password must contain atleast 8 characters
                          </label>
                          <button
                            type="submit"
                            disabled={submitting || pristine}
                          >
                            Next
                          </button>
                        </form>
                      )}
                    </Form>

                    <div className="have_acc">
                      <p>
                        Have an account? <Link to="/">Login</Link>
                      </p>
                    </div>
                  </div>
                  <CommonFooter />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <AuthSideDetails />
        <ToastContainer autoClose={2000} />
        {redirectUser && <Redirect to="/further-details" />}
      </div>
    </div>
  );
};

export default Register;
