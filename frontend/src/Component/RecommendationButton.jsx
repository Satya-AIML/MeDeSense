// src/Project/Component/RecommendationButton.jsx

import React from 'react';

const RecommendationButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Go to Recommendation
    </button>
  );
};

export default RecommendationButton;
