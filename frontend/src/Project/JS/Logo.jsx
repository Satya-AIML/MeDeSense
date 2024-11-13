// src/Project/TopRightLogoContainer.jsx
import React from 'react';
import logo1 from '../icon/Merai.svg';
import logo2 from '../icon/SV_bgless_new.png';
import '../css/Logo.css';


const Logo = () => (
  <div className="top-right-logo-container">
    <img src={logo1} className="top-right-logo-project-merai" alt="image_Merai" />
    <div className="line-between-logos"></div>
    <img src={logo2} className="top-right-logo-project-SV" alt="logo_StreamVision" />
  </div>
);

export default Logo;
