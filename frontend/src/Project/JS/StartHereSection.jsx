// src/Project/OptionsSection.jsx
import React, { useState } from 'react';
import Table from './DeviceTable';
import file_img from '../icon/file_icon.png';
import text_img from '../icon/text_icon.png';
import FileUploadPopup from '../../Input/Upload_file/FileUploadIndex';
import TextInputPopup from '../../Input/Upload_text/TextInputIndex';
import { DeviceDataContextProvider } from '../../Project/JS/DeviceDataContext'; // Import the context provider
import '../css/StartHereSection.css';

const StartHereSection = ({ onStart }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showFilePopup, setShowFilePopup] = useState(false);
  const [showTextPopup, setShowTextPopup] = useState(false);

  const handleStartClick = () => {
    setShowOptions(true);
    
  };

  return (
    <DeviceDataContextProvider>
    <div 
    className="button_div"
    >
      {!showOptions && <h4 className="fancy-start" onClick={handleStartClick}>Start Here</h4>}
      {showOptions && (
        <>
        <div className="button_section">
          <div className="switch_input" onClick={() => setShowFilePopup(true)}>
            <img src={file_img} className="switch_input_img" alt="file upload" />
            <span className="switch_input_text">Upload File</span>
          </div>
          <div className="switch_input" onClick={() => setShowTextPopup(true)}>
            <img src={text_img} className="switch_input_img" alt="manual input" />
            <span className="switch_input_text">Enter Text</span>
          </div>  
        </div>
        <div><Table /></div>
        </>
      )}
      {showFilePopup && (
        <FileUploadPopup onClose={() => setShowFilePopup(false)} onSubmit={() => {}} />
      )}
      {showTextPopup && (
        <TextInputPopup onClose={() => setShowTextPopup(false)} onSubmit={() => {}} />
      )}      
    </div>
    </DeviceDataContextProvider>
    
  );
};

export default StartHereSection;
