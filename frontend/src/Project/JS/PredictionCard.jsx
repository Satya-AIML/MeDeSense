// src/Project/JS/PredictionCard.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import RecommendationButton from '../../Component/RecommendationButton';
import '../css/PredictionCard.css';

const PredictionCard = ({ onRecommendClick }) => {
    const location = useLocation();
    const { prediction, device, description } = location.state || {};

    return (
        <div>
            <div className="prediction-card-container">
                <h1>Prediction Page</h1>
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
            {/* Add recommendation button here */}
            <RecommendationButton onClick={onRecommendClick} />
        </div>
    );
}

export default PredictionCard;
