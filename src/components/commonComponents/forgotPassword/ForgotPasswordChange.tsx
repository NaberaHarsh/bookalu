import React, { useEffect, useState } from "react";
import { TextInput } from "../../../utils/form";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import AuthenticationHeader from "../../Authentication/AuthCommonUI/AuthenticationHeader";
import AuthSideDetails, {
  CommonColumnField,
  CommonFooter,
} from "../../Authentication/AuthCommonUI/AuthSideDetails";
import { validate } from "../../../utils/validations/forgotPassword/forgotPasswordValidation";
import { formData } from "../../../utils/interfaces/forgotPassword";
import { RootState } from "../../../redux/reducer/index";
import { newPasswordAction } from "../../../redux/action/authentication/forgotPassword/newPasswordAction";
import PasswordUpdatedSuccess from "../Popups/passwordUpdated/PasswordUpdatedSuccess";
import Loader from "../../../utils/Loader/Loader";

const ForgotPasswordChange: React.FC = () => {
  const dispatch = useDispatch();
  const newPasswordReducer = useSelector(
    (state: RootState) => state.newPasswordReducer
  );
  // Params
  // forgotPasswordToken2
  const { forgotPasswordToken } = useParams<{
    forgotPasswordToken: string;
  }>();

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const { success, dataReceived } = newPasswordReducer;
    if (success && dataReceived) setPasswordUpdateSuccess(true);
    if (dataReceived) setLoader(false);
  }, [newPasswordReducer]);

  const [passwordUpdateSuccess, setPasswordUpdateSuccess] = useState(false);

  const onHide = () => {
    setPasswordUpdateSuccess(false);
  };

  // Submit form
  const checkPassword = (e: formData) => {
    //   let concattoken = forgotPasswordToken + "/" + forgotPasswordToken2
    setLoader(true);
    dispatch(
      newPasswordAction({
        newpassword: e.password,
        token: decodeURIComponent(forgotPasswordToken),
      })
    );
  };

  return (
    <div>
      <AuthenticationHeader />
      <section className="site_main login_page">
        <Container>
          <Row>
            <CommonColumnField />

            <Col md={6}>
              <div className="site_main_right">
                <div className="right_inner_top login_page_right_inner_top">
                  <img src="/images/right_logo.png" alt="right_images" />
                  <h1 className="tab login_page_h1">
                    {" "}
                    Lorem consectetur labore a tempor{" "}
                  </h1>
                  <h1 className="mobile_s">Reset Password</h1>
                </div>
                <div className="right_inner_mid">
                  {/* lOGIN FORM START  */}
                  <Form onSubmit={(e) => checkPassword(e)} validate={validate}>
                    {({ handleSubmit, submitting, values, pristine }) => (
                      <form className="site_form" onSubmit={handleSubmit}>
                        <Field
                          name="password"
                          placeholder="Password"
                          type="password"
                          component={TextInput}
                        />
                        <Field
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          type="password"
                          component={TextInput}
                        />
                        <button
                          className="login_btn"
                          type="submit"
                          disabled={submitting || pristine}
                        >
                          Update
                        </button>
                      </form>
                    )}
                  </Form>

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
      <ToastContainer autoClose={2000} />
      <PasswordUpdatedSuccess show={passwordUpdateSuccess} onHide={onHide} />

      {loader && <Loader />}
    </div>
  );
};

export default ForgotPasswordChange;
