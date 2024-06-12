import React from 'react';
import { PiWarningCircle } from 'react-icons/pi';
import './modal.css';
import ReactDOM from 'react-dom';

const Modal = ({ close }) => {
  const content = (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <PiWarningCircle />
        </div>
        <div className="modal-body">
          <h2>Deactivate Account</h2>
          <p>Are you sure?</p>
        </div>
        <div className="modal-footer">
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal'));
};

export default Modal;
