import axios from 'axios';
import React, { useState } from 'react';

function PredictComponent() {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/predict', {
        data: inputData,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit for Prediction</button>
      {prediction && <p>{prediction}</p>}
    </div>
  );
}

export default PredictComponent;
