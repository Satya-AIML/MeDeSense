// src/Project/Result.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/PredictionCard.css';

const PredictionCard = () => {
    const location = useLocation();
    const { prediction, device, description } = location.state || {};

    return (
        <div>
            <div className="prediction-card-container">
                <h1>Result Page</h1>
                {prediction ? (
                    <div className="prediction-card">
                        <h3 className="card-title">Prediction Result</h3>
                        <div className="card-content">
                            <p><strong>Device Name:</strong> {device}</p>
                            <p><strong>Description:</strong> {description}</p>
                            <p><strong>Prediction:</strong> {prediction}</p>
                        </div>
                    </div>
                ) : (
                    <p>No prediction available.</p>
                )}
            </div>
        </div>
    );
}

export default PredictionCard;
