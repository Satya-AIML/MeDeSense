// src/Project/Input/Upload_text/FileUploadIndex.js

import React, { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDeviceData } from '../../Project/JS/DeviceDataContext';
import upload_icon from './icons/upload_icon.png';
import close_icon from './icons/close_icon.svg';
import CSVReader from './UploadComponent/CSVReader';
import PDFReader from './UploadComponent/PDFReader';
import TXTReader from './UploadComponent/TXTReader';
import AlertPopup from './UploadComponent/AlertPopup';
import './FileUploadPopup.css';

function FileUploadPopup({ onClose, onSubmit }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState('');
  const [deviceData, setDeviceData] = useState({ name: "", description: "" });
  const [showAlert, setShowAlert] = useState(false);
  const { addDevice } = useDeviceData();

  // Use the `useDropzone` hook from `react-dropzone` to handle drag and drop
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'text/csv': ['.csv'],
      'text/plain': ['.txt']
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        setFileType(file.type);
      }
    }
  });

  // Function to store device data parsed from TXTReader
  const handleParseComplete = (name, description) => {
    setDeviceData({ name, description });
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      console.log('Submitting file:', selectedFile.name);
      if (deviceData.name || deviceData.description) {
        addDevice(deviceData.name, deviceData.description);
      }
      onSubmit(selectedFile);
      onClose(); // Close the popup only if 'showSubmit' is not true

    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h3>Upload File</h3>
          <button className="close-button-file" onClick={onClose}>
            <img src={close_icon} className="close-button-img" alt="close" />
          </button>
        </div>

        <div 
          className={`upload ${isDragActive ? 'dragging' : ''}`} 
          {...getRootProps()} // Add dropzone properties here
        >
          <input 
            ref={fileInputRef} 
            {...getInputProps()} // Bind input props from dropzone
            type="file" 
            style={{ display: 'none' }} 
          />
          <div>
            <img src={upload_icon} className="upload_icon" alt="Upload" />
          </div>
          <div className="browse">Browse</div>
          <div className="Drop-text">
            {isDragActive ? 'Drop the file here...' : 'Drop a file here'}
          </div>
          <div className="Info-text">*Supported formats: .pdf, .csv, .txt</div>

        
        </div>
        {selectedFile && (
          <div className="file-info">
            <p>Selected File: {selectedFile.name}</p>
            {/* Conditionally render the appropriate reader component */}
            {fileType === 'application/pdf' && <PDFReader file={selectedFile} onParseComplete={handleParseComplete} />}
            {fileType === 'text/csv' && <CSVReader file={selectedFile} onParseComplete={handleParseComplete} />}
            {fileType === 'text/plain' && <TXTReader file={selectedFile} onParseComplete={handleParseComplete} />}
          </div>
        )}

        <div className="button-section-file">
          <div className="button-cancel-file" onClick={onClose}>Cancel</div>
          <div className="button-submit-file" onClick={handleFileSubmit}>Submit</div>
        </div>
        {/* Show AlertPopup when showAlert is true */}
        {showAlert && (
          <AlertPopup 
            message="No file selected. Please choose a file" 
            onClose={() => setShowAlert(false)} 
          />
        )}

      </div>
    </div>
  );
}

export default FileUploadPopup;
