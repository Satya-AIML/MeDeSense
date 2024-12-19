// src/Project/JS/RecommendationCard.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import CompareButton from '../../Component/CompareButton';

const RecommendationCard = ({ onCompareClick }) => {
    const location = useLocation();
    const { device, description, recommendation } = location.state || {};

    return (
        <div>
            <div className="recommendation-card-container">
                <h1>Recommendation Page</h1>
                {recommendation ? (
                    <div className="recommendation-card">
                        <h3 className="card-title">Recommendation</h3>
                        <div className="card-content">
                            <p><strong>Device Name:</strong> {device}</p>
                            <p><strong>Description:</strong> {description}</p>
                            <p><strong>Recommendation:</strong> {recommendation}</p>
                        </div>
                    </div>
                ) : (
                    <p>No recommendation available.</p>
                )}
            </div>
            {/* Compare button now triggers the onCompareClick */}
            <CompareButton onClick={onCompareClick} />
        </div>
    );
}

export default RecommendationCard;
