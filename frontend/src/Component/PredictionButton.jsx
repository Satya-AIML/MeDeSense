// src/Component/PredictionButton.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PredictionButton = ({ deviceData }) => {
  const [showSubmit, setShowSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmitPrediction = async () => {
    // console.log(`${deviceData.device}`)
    if (deviceData.device.trim() === ""){
        alert("Please enter a device name");
        return;
    }
    else {
        console.log('Submitting API for prediction:');
    try {
      const response = await axios.post('http://localhost:8000/predict', {
        device: deviceData.device,
        description: deviceData.description,
      });
      // Access the fields directly from the response
      const { device, description, api_response } = response.data;
      
      // Use the extracted data as needed
      console.log(device, description, api_response);
      // console.log(`Successfully submitted with response: ${predictionMessage}`);

      // Navigate to the Result page with prediction data
      navigate('/result', { 
        state: { 
          device: deviceData.device,
          description: deviceData.description,
          prediction: api_response 
        } 
      });      

    } catch (error) {
      console.error('Error during API request:', error);
    }

    }
  };

  useEffect(() => {
    // Show submit button only if there's device or description data
    setShowSubmit(Boolean(deviceData.device || deviceData.description));
  }, [deviceData]);

  return (
    <div>
      {showSubmit && (
        <>
          <button className="button-submit-file" onClick={handleSubmitPrediction}>
            Submit for Prediction
          </button>
        </>
      )}
    </div>
  );
};

export default PredictionButton;
