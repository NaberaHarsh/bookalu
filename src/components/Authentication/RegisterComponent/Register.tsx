import React, { useState, useEffect, Fragment, useRef } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import { Link, Redirect } from "react-router-dom";
import { TextInput } from "../../../utils/form";
import { validate } from "../../../utils/validations/Register";
import Loader from "../../../utils/Loader/Loader";
// import { OnChange } from "react-final-form-listeners"
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
import { RegisterEmlAndPass } from "../../../utils/interfaces/user";

import { RegState } from "./index";
import { checkEmailAlreadyExistsAction } from "../../../redux/action/authentication/checkMail/checkMailAction";

import GetVerifyLink from "../../commonComponents/Popups/ResendVerifyLink/GetVerifyLink";
import { EmailVerificationMessage } from "../../../utils/interfaces/register";

const Register: React.FC = () => {
  const FirstRender = useRef(true);
  const isFirstRender = useRef(true);
  /*  Dispatch Action for redux - */
  const dispatch = useDispatch();
  const registerdReducerResponse = useSelector(
    (state: RootState) => state.userRegisterResponse
  );
  const checkMailReducer = useSelector(
    (state: RootState) => state.checkMailReducer
  );
  // Resend Link Response
  const ResendVerificationLinkReducer = useSelector(
    (state: RootState) => state.ResendVerificationLinkReducer
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
  const [showError, setShowError] = useState<EmailVerificationMessage>({
    message: "",
    state: false,
  });
  const [loader, setLoader] = useState(false);
  // Get Verification Link state
  const [getLink, setGetLink] = useState(false);
  // For getting verificatin link again
  const [showButton, setShowButton] = useState(false);
  const [modalLoader, setModalLoader] = useState(false);

  /* Show hide get Link modal  */
  const showHideGetLink = () => setGetLink(!getLink);
  const toggleModalLoader = () => setModalLoader(!modalLoader);
  const toggleShowButton = () => setShowButton(!showButton);

  const showResult = (values: RegisterEmlAndPass) => {
    const { email, password, confirmPassword } = values;
    setRegister({ email, password, confirmPassword });
    setLoader(true);
    dispatch(checkEmailAlreadyExistsAction(email));
    // dispatch(registerUser({ email, password }));
  };

  // Email is verified update email and password in redux store
  useEffect(() => {
    if (FirstRender.current) {
      FirstRender.current = false;
    } else {
      const { success, dataReceived, error, errors } = checkMailReducer;
      setLoader(false);
      if (success && dataReceived) {
        dispatch(
          registerUser({
            email: register.email,
            password: register.password,
            state: 1,
          })
        );
      }
      if (error && dataReceived) {
        if (errors.status === 400)
          setShowError({
            message: errors.message,
            state: true,
          });
        if (errors.status === 406) setShowButton(true);
      }
    }
  }, [checkMailReducer]);

  // User details stored in reducer response
  useEffect(() => {
    if (FirstRender.current) {
      FirstRender.current = false;
    } else {
      const { success, error, dataReceived, data } = registerdReducerResponse;
      if (success && dataReceived) {
        if (data.state === 2) {
          setRegister({ email: data.email, password: data.password });
        } else if (data.state === 1) {
          setRedirectUser(true);
        }
      }
    }
  }, [registerdReducerResponse]);

  /* The useEffect is used for capturing response from send verification Link again modal  */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const { success, dataReceived, error } = ResendVerificationLinkReducer;
      if (success && dataReceived) {
        toggleShowButton();
        showHideGetLink();
        toggleModalLoader();
      }
      if (error && dataReceived) {
        showHideGetLink();
        toggleModalLoader();
      }
    }
  }, [ResendVerificationLinkReducer]);

  /* API call made for checking if mail is already registed in system || not */
  const emailFocused = () =>
    setShowError({
      message: "",
      state: false,
    });

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
                            placeholder="Email address"
                            type="email"
                            value={register.email}
                          >
                            {({ input, meta, placeholder, inputOnChange }) => (
                              <Fragment>
                                <input
                                  type="email"
                                  {...input}
                                  placeholder={placeholder}
                                  onFocus={() => {
                                    emailFocused();
                                    setShowButton(false);
                                  }}
                                />
                                {meta.error && meta.touched && (
                                  <span className="error">*{meta.error}</span>
                                )}
                                {showError.state && (
                                  <span className="error">
                                    *{showError.message}
                                  </span>
                                )}
                              </Fragment>
                            )}
                          </Field>

                          {showButton && (
                            <Button
                              variant="info"
                              onClick={() => showHideGetLink()}
                              className="getLinkLogin"
                            >
                              Get Link
                            </Button>
                          )}

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
                            placeholder="Verify Password"
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
        {redirectUser && <Redirect to="/further-details" />}
        {loader && <Loader />}
        <GetVerifyLink
          show={getLink}
          onHide={showHideGetLink}
          email={register.email}
          modalLoader={modalLoader}
          toggleModalLoader={toggleModalLoader}
        />
      </div>
    </div>
  );
};

export default Register;
