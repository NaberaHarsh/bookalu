import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  ForgotPasswordPorps,
  ForgotPasswordEmailSubmit,
} from "../../../../utils/interfaces/forgotPassword";
import { Field, Form } from "react-final-form";
import { TextInput } from "../../../../utils/form";
import { useDispatch, useSelector } from "react-redux";
import { checkEmailAction } from "../../../../redux/action/authentication/forgotPassword/checkEmailAction";
import { validate } from "./validation";
import "./forgotPassword.css";
import "../modal.css";
import Loader from "../../../../utils/Loader/Loader";
import { RootState } from "../../../../redux/reducer";

const ForgotPassword: React.FC<ForgotPasswordPorps> = (props) => {
  const dispatch = useDispatch();
  const forgotPasswordEmailReducer = useSelector(
    (state: RootState) => state.forgotPasswordEmailReducer
  );
  const [loader, setLoader] = useState(false);
  const submitEmail = (e: ForgotPasswordEmailSubmit) => {
    setLoader(true);
    dispatch(checkEmailAction(e));
  };

  useEffect(() => {
    const { dataReceived } = forgotPasswordEmailReducer;
    if (dataReceived) setLoader(false);
  }, [forgotPasswordEmailReducer]);

  return (
    <div>
      {/*  */}
      <Modal
        className="boxBorder forgotPassModal"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modalParent">
          <Modal.Header closeButton className="modalHeader">
            <Modal.Title id="contained-modal-title-vcenter">
              Forgot <span>Password ?</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Form onSubmit={(e) => submitEmail(e)} validate={validate}>
              {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit={handleSubmit} className="site_form">
                  <Field
                    name="email"
                    placeholder="email address"
                    type="email"
                    component={TextInput}
                  />

                  <button type="submit" className="custom-btn" disabled={pristine || submitting}>
                    Update Password
                  </button>
                </form>
              )}
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
      
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        </div>
      </Modal>
      {loader && <Loader />}
    </div>
  );
};

export default ForgotPassword;
