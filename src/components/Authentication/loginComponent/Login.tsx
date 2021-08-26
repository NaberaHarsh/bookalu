import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import { RootState } from "../../../redux/reducer/index";
import "./Login.css";
import { fetchRequest } from "../../../redux/action/authentication/login/loginAction";
// import { aboutUserAction } from "../../../redux/action/userDetails/aboutUserAction";
import AuthenticationHeader from "../AuthCommonUI/AuthenticationHeader";
import AuthSideDetails, {
  CommonColumnField,
  CommonFooter,
} from "../AuthCommonUI/AuthSideDetails";

import { TextInput } from "../../../utils/form";
import ForgotPassword from "../../commonComponents/Popups/forgotPassword/ForgotPassword";
import { validate } from "../../../utils/validations/userLogin/LoginValidation";
import Loader from "../../../utils/Loader/Loader";
import GetVerifyLink from "../../commonComponents/Popups/ResendVerifyLink/GetVerifyLink";
import { OnChange } from "react-final-form-listeners";
import {
  HistoryProp,
  LocationPorp,
} from "../../../utils/interfaces/common_props";
import { AuthRoutes, nonAuthRoutes } from "../../../RouteHandler/routeEnum";
interface LoginSubmit {
  email: string;
  password: string;
}

interface StateProp extends HistoryProp, LocationPorp {}

const Login: React.FC<StateProp> = (props: StateProp) => {
  const isFirstRender = useRef(true);
  const getLinkRef = useRef(true);
  // const loginRes = useRef(true);
  const dispatch = useDispatch();
  // Data Received After login form is submit
  const loginResponse = useSelector((state: RootState) => state.loginReducer);

  // Forgot Password reducer
  const forgotPasswordEmailReducer = useSelector(
    (state: RootState) => state.forgotPasswordEmailReducer
  );
  // Resend Link Response
  const ResendVerificationLinkReducer = useSelector(
    (state: RootState) => state.ResendVerificationLinkReducer
  );
  /* Use State  */
  // email and password field in form
  const [loginVal, setLoginVal] = useState({
    email: "",
    password: "",
  });
  // To turn loader on and off
  const [loader, setLoader] = useState(false);

  // SHow hide forgot Password modal
  const [forgotPassword, setForgotPassword] = useState(false);
  // Get Verification Link state
  const [getLink, setGetLink] = useState(false);
  // For getting verificatin link again
  const [showButton, setShowButton] = useState(false);
  const [modalLoader, setModalLoader] = useState(false);
  /*  
dispatching the received data also for getting user details also
 storing the user data in localstorage and in redux store  
*/

  /* Hide forgot password modal   */
  const showHideForgotPassword = () => setForgotPassword(!forgotPassword);
  /* Show hide get Link modal  */
  const showHideGetLink = () => setGetLink(!getLink);
  const toggleModalLoader = () => setModalLoader(!modalLoader);
  const toggleShowButton = () => setShowButton(!showButton);

  /* Login API Response captured  */
  useEffect(() => {
    const { error, data, isLoginSuccess, loading } = loginResponse;

    if (!loading) setLoader(false);
    if (!loading && isLoginSuccess && !error) {
      if (data.isFirstTimeLoggedIn) {
        props.history.push(AuthRoutes.registerAs);
      } else {
        // window.location.reload();
        // AuthRoutes.updateUserDetails
        props.history.push(nonAuthRoutes.home);
      }

      // If Not loading and error is true then --
      if (!loading && error)
        if (data && data.status === 400) setShowButton(true);
    }
    // console.log("HIT");
  }, [loginResponse]);

  /* The useEffect is used for capturing response from send verification Link again modal  */
  useEffect(() => {
    if (getLinkRef.current) {
      getLinkRef.current = false;
      return;
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

  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
    else {
      const { dataReceived, success } = forgotPasswordEmailReducer;
      if (dataReceived && success) showHideForgotPassword();
      isFirstRender.current = true;
    }
  }, [forgotPasswordEmailReducer]);

  /* Make API call for making login request  */
  const submitLogin = (value: LoginSubmit) => {
    const { email, password } = value;
    setLoader(true);
    dispatch(fetchRequest({ email, password }));
  };

  // const responseGoogle = (val: any) => {
  //   console.log(val);
  // };

  // const responseFacebook = (response: any) => {
  //   console.log(response);
  // };
  // const componentClicked = (res: any) => {
  //   console.log(res);
  // };

  return (
    <div>
      {/*Header Area Start */}
      {/* Background image need tobe saperated as it is repaeated in each component for login register pages */}
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
                    {" "}
                    Lorem consectetur labore a tempor{" "}
                  </h1>
                  <h1 className="mobile_s">Login to your account </h1>
                </div>
                <div className="right_inner_mid">
                  {/* lOGIN FORM START  */}
                  <Form
                    onSubmit={submitLogin}
                    validate={validate}
                    initialValues={loginVal}
                  >
                    {({ handleSubmit, submitting, values, pristine }) => (
                      <form className="site_form" onSubmit={handleSubmit}>
                        <Field
                          name="email"
                          placeholder="email address"
                          type="email"
                          value={loginVal.email}
                          component={TextInput}
                          onFocus={() => setShowButton(false)}
                        />
                        {showButton && (
                          <Button
                            variant="info"
                            onClick={() => showHideGetLink()}
                            className="getLinkLogin"
                          >
                            Get Link
                          </Button>
                        )}
                        <OnChange name="email">
                          {(value) =>
                            setLoginVal({ ...loginVal, email: value })
                          }
                        </OnChange>
                        <Field
                          name="password"
                          placeholder="Password"
                          type="password"
                          value={loginVal.password}
                          component={TextInput}
                        />
                        <OnChange name="password">
                          {(value) =>
                            setLoginVal({ ...loginVal, password: value })
                          }
                        </OnChange>
                        <button
                          className="login_btn"
                          type="submit"
                          disabled={submitting}
                        >
                          Login
                        </button>
                      </form>
                    )}
                  </Form>

                  <div className="for_pass">
                    <a
                      onClick={showHideForgotPassword}
                      style={{ cursor: "pointer" }}
                    >
                      Forgotten Password
                    </a>
                  </div>
                  <div className="need_acc">
                    <p>
                      Need an account? <Link to="/register">Signup</Link>
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
      {/* Redirect user when user is verified  */}

      <ForgotPassword show={forgotPassword} onHide={showHideForgotPassword} />
      <GetVerifyLink
        show={getLink}
        onHide={showHideGetLink}
        email={loginVal.email}
        modalLoader={modalLoader}
        toggleModalLoader={toggleModalLoader}
      />
      {loader && <Loader />}
    </div>
  );
};

Login.propTypes = {};

export default Login;
