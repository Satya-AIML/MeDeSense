// src/Project/Project.jsx
import React from 'react';
import Logo from './JS/Logo';
import NavBar from './JS/NavBar';
import ProjectDescription from './JS/ProjectDescription';
import StartHereSection from './JS/StartHereSection';
import './css/Project.css';

const ProjectPage = () => (
  <div className="background-container">     
    <div>
    <NavBar />
      <Logo />
    </div> 

    <div className="all-description">
      <ProjectDescription />
    </div>
    <div className="start-here-section">
      <StartHereSection />
    </div>
  </div>
);

export default ProjectPage;
