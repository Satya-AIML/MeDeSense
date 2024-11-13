import React from 'react';
import '../css/FlipCard.css';

const FlipCard = ({ imageSrc, title, subtitle, classDetails }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundImage: `url(${imageSrc})` }}>
          <div className="card-content">
            <h2 className="card-content-tittle">{title}</h2>
            <p className="card-content-text">{subtitle}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <p className="flip-card-text">{classDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
