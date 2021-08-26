import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../modal.css";
interface Props {
  show: boolean;
  onHide: () => void;
  message: string;
  confirmDeletion: () => void;
}

const ConfirmationModal: React.FC<Props> = ({
  show,
  onHide,
  message,
  confirmDeletion,
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
              <span>Causation!</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <h5>Are you sure you want to delete the {message}</h5>
            <Button variant="danger" onClick={confirmDeletion}>
              Delete
            </Button>
            <Button variant="primary" className="ml-2" onClick={onHide}>
              Go back
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
