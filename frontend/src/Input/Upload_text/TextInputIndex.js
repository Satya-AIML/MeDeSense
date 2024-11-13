// src/Project/Input/Upload_text/TextInputIndex.js

import React, { useState } from 'react';
import close_icon from './icons/close_icon.svg';
import { useDeviceData } from '../../Project/JS/DeviceDataContext';
import './TextInputPopup.css'; // Import your styles for the popup

function TextInputPopup({ onClose, onSubmit, initialDevice = '', initialDescription = ''  }) {
  const [textDeviceInput, setTextDeviceInput] = useState(initialDevice);
  const [textDescriptionInput, setTextDescriptionInput] = useState(initialDescription);
  const { addDevice } = useDeviceData();

  const handleDeviceTextChange = (e) => {
    setTextDeviceInput(e.target.value);
  };

  const handleDescriptionTextChange = (e) => {
    setTextDescriptionInput(e.target.value);
  };

  const handleTextSubmit = () => {
    if (onSubmit) {
      addDevice(textDeviceInput, textDescriptionInput);
      
    } else {
      onSubmit(textDeviceInput, textDescriptionInput);
    }
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h3>Enter Text</h3>
          <button className="close-button-text" onClick={onClose}>
            <img src={close_icon} className="close-button-img" alt="close" />
          </button>
        </div>
        <div></div>
        <form className="text-form" onSubmit={handleTextSubmit}>
          <textarea 
            className="device-text"
            value={textDeviceInput}
            onChange={handleDeviceTextChange}
            rows="1"
            placeholder="Device Name"
            required
          />
          <textarea 
            className="description-text"
            value={textDescriptionInput}
            onChange={handleDescriptionTextChange}
            rows="7"
            placeholder="Description"
            required
          />
          <div className="button-section-text">
            <button type="button" className="button-cancel-text" onClick={onClose}>Cancel</button>
            <button type="submit" className="button-submit-text">Submit</button>
          </div> 
        </form>
                
      </div>
    </div>
  );
}

export default TextInputPopup;
