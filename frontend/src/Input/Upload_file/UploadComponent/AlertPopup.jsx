// AlertPopup.jsx

import React from 'react';
import '../FileUploadPopup.css';

const AlertPopup = ({ message, onClose }) => {
  return (
    <div className="alert-popup-overlay">
      <div className="alert-popup-container">
        <p className="custom-alert">{message}</p>
        <button className="alert-popup-close-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default AlertPopup;
