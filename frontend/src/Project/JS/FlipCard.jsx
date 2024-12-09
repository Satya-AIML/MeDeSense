// src/Project/JS/ProjectDetails.js

import React from 'react';
import '../css/FlipCard.css';

const FlipCard = ({ imageSrc, title, subtitle, classDetails, bgcolor }) => {
  return (
    <div 
      className="flip-card"       
      style={{
      border: `2px solid ${bgcolor}`,
      boxShadow: `0 5px 10px ${bgcolor}`, 
    }}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{backgroundImage: `url(${imageSrc})`, backgroundPosition: 'center 5vw', backgroundSize: '20vw'}}>
          <div id="flip-card-content">
            <h2 id="flip-card-title">{title}</h2>
            <p id="flip-card-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="flip-card-back"  style={{backgroundColor: `${bgcolor}` }}>
          <p id="flip-card-back-details">{classDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
