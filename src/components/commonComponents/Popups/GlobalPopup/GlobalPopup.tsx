import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";

interface Props {
  show: boolean;
  onHide: () => void;
  message: string;
  btnMessage?: string;
  headerMessage: string;
  showBtn: boolean;
}

const GlobalPopup: React.FC<Props> = ({
  show,
  onHide,
  message,
  btnMessage,
  headerMessage,
  showBtn,
}: Props) => {
  return (
    <div>
      {/*  */}
      <Modal
        className="boxBorder forgotPassModal"
        // {...props}
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modalParent">
          <Modal.Header closeButton className="modalHeader">
            <Modal.Title id="contained-modal-title-vcenter">
              <span>{headerMessage}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <h5>{message}</h5>
            {showBtn && (
              <Button variant="primary" className="ml-2" onClick={onHide}>
                {btnMessage}
              </Button>
            )}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default GlobalPopup;
