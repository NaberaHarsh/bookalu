import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";
import { ResendVerificationLinkAction } from "../../../../redux/action/authentication/resendVerificationLink/ResedVerificationLinkAction";
import { useDispatch } from "react-redux";
import Loader from "../../../../utils/Loader/Loader";

export interface Porps {
  show: boolean;
  onHide: () => void;
  email: string;
  modalLoader: boolean;
  toggleModalLoader: () => void;
}

const GetVerifyLink: React.FC<Porps> = (props) => {
  const dispatch = useDispatch();

  const sendVerificationLink = () => {
    dispatch(ResendVerificationLinkAction({ email: props.email }));
    props.toggleModalLoader();
  };

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
              Get <span>Verification Link ?</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <h5>The Verification Link will be sent on {props.email}</h5>
            <Button  variant="dark" onClick={() => sendVerificationLink()}>
              Get Link
            </Button>
          </Modal.Body>
        </div>
      </Modal>
      {props.modalLoader && <Loader />}
    </div>
  );
};

export default GetVerifyLink;
