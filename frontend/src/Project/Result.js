// src/Project/Result.jsx

import React from 'react';
import Logo from './JS/Logo';
import NavBar from './JS/NavBar';
import PredictionCard from './JS/PredictionCard';
import './css/Result.css';

const Result = () => {

    return (
        <div className="result__background-result-container"> <NavBar /> <Logo />
            <div className="result__scroll-container">
                <div className="result__scroll-section" id='prediction'>
                    <PredictionCard />
                </div>
                <div className="result__scroll-section" id='recommendation'>
                    <PredictionCard />
                </div>
                <div className="result__scroll-section" id='compare'>
                    <PredictionCard />
                </div>
            </div>
        </div>


      );

}

export default Result;
