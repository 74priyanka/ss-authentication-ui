import React from "react";
import { StyledConfirmationModal } from "./style";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <StyledConfirmationModal>
      <div className=" modalContent">
        <h3>Are you sure you want to delete this job post?</h3>

        <div className="buttonContainer">
          <div className="modalButton" onClick={onConfirm}>
            Delete
          </div>

          <div className="modalButton" onClick={onClose}>
            Cancel
          </div>
        </div>
      </div>
    </StyledConfirmationModal>
  );
};

export default ConfirmationModal;
