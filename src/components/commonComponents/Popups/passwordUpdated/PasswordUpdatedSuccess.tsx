import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";
import { Link } from "react-router-dom";

interface UpdatePassword {
  show: boolean;
  onHide: () => void;
}

const PasswordUpdatedSuccess: React.FC<UpdatePassword> = (props) => {
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
              Password Updated <span>Successfully!</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Link to="/">
              <Button onClick={props.onHide}>Login</Button>
            </Link>
          </Modal.Body>
          {/* <Modal.Footer>
      
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        </div>
      </Modal>
    </div>
  );
};

export default PasswordUpdatedSuccess;
