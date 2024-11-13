// src/Project/Result.jsx

import React from 'react';
import Logo from './JS/Logo';
import NavBar from './JS/NavBar';
import PredictionCard from './JS/PredictionCard';
import './css/Result.css';

const Result = () => {

    return (
        <div className="background-result-container"> <NavBar /> <Logo />
            <div>
                <PredictionCard />
            </div>
        </div>


      );

}

export default Result;
