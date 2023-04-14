import React from 'react';
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <div className="modal-content">
          <p>Here is some content for the modal.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;




