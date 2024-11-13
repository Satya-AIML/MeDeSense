// src/Project/JS/PredictionButton.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PredictionButton = ({ deviceData }) => {
  const [showSubmit, setShowSubmit] = useState(false);
  const navigate = useNavigate();

  const handleFileSubmitPrediction = async () => {
    // console.log(`${deviceData.device}`)
    if (deviceData.device.trim() === ""){
        alert("Please enter a device name");
        return;
    }
    else {
        console.log('Submitting API for prediction:');
    try {
      const response = await axios.post('http://10.11.6.51:4001/predict', {
        data: {
          device: deviceData.device,
          description: deviceData.description,
        }
      });
      const predictionMessage = response.data.message;
      console.log(`Successfully submitted with response: ${predictionMessage}`);

      // Navigate to the Result page with prediction data
      navigate('/result', { 
        state: { 
          device: deviceData.device,
          description: deviceData.description,
          prediction: predictionMessage 
        } 
      });      

    } catch (error) {
      console.error('Error fetching prediction:');
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
          <button className="button-submit-file" onClick={handleFileSubmitPrediction}>
            Submit for Prediction
          </button>
        </>
      )}
    </div>
  );
};

export default PredictionButton;
