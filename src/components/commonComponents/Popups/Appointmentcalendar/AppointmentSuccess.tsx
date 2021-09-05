import React from "react";
import { Modal } from "react-bootstrap";
import "../modal.css";

interface Porps {
  show: boolean;
  onHide: () => void;
}

const AppointmentSuccess: React.FC<Porps> = (props) => {
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
              Appointment Booked <span>Successfully!</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            {/* <h5>Please Check your mail id for Email confirmation!</h5> */}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentSuccess;
