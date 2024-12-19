// src/Project/Result.jsx

import React, { useEffect, useRef, useState } from 'react';
import Logo from './JS/Logo';
import NavBar from './JS/NavBar';
import PredictionCard from './JS/PredictionCard';
import RecommendationCard from './JS/RecommendationCard';
import CompareCard from './JS/CompareCard';
import './css/Result.css';

const Result = () => {
  const [gradientClass, setGradientClass] = useState('');

  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  const predictionRef = useRef(null);
  const recommendationRef = useRef(null);
  const compareRef = useRef(null);

  // Set initial gradient state to prediction's gradient once mounted
  useEffect(() => {
    setGradientClass('gradient-state-1');
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5, // Lower the threshold to ensure trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'prediction') {
            setGradientClass('gradient-state-1');
          } else if (entry.target.id === 'recommendation') {
            setGradientClass('gradient-state-2');
          } else if (entry.target.id === 'compare') {
            setGradientClass('gradient-state-3');
          }
        }
      });
    }, options);

    if (predictionRef.current) observer.observe(predictionRef.current);
    // The other sections might not exist yet at first mount,
    // so we conditionally observe them after they appear:
    if (showRecommendation && recommendationRef.current) {
      observer.observe(recommendationRef.current);
    }
    if (showCompare && compareRef.current) {
      observer.observe(compareRef.current);
    }

    return () => observer.disconnect();
  }, [showRecommendation, showCompare]); 
  // Re-run effect when these states change so we can observe newly visible sections

  const goToRecommendation = () => {
    setShowRecommendation(true);
    setTimeout(() => {
      recommendationRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const goToCompare = () => {
    setShowCompare(true);
    setTimeout(() => {
      compareRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`result__background-result-container ${gradientClass}`}>
      <NavBar />
      <Logo />
      <div className="result__scroll-container" style={{ overflowY: 'auto', height: '95vh' }}>
        <div className="result__scroll-section" id='prediction' ref={predictionRef}>
          <PredictionCard onRecommendClick={goToRecommendation} />
        </div>

        {showRecommendation && (
          <div className="result__scroll-section" id='recommendation' ref={recommendationRef}>
            <RecommendationCard onCompareClick={goToCompare} />
          </div>
        )}

        {showCompare && (
          <div className="result__scroll-section" id='compare' ref={compareRef}>
            <CompareCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
