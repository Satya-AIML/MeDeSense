// src/Project/ProjectDescription.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectImage from '../icon/Medesense-App-logo.png';
import '../css/ProjectDescription.css';

const ProjectDescription = () => (
  <>
    <div className="description-div">
      <img src={ProjectImage} alt="Project logo" className="project-image" />
      <h2 className="project-title">Medical Device Sense App</h2>
      <div className="description-container">
        <p className="text-container">
          This project focuses on the classification of medical devices into distinct categories. 
          It utilizes the device names and their diverse applications within the medical field as key features for classification. 
          The goal is to automate the classification process using AI models to aid healthcare professionals in selecting the appropriate devices.
        </p>
        <div className="button-container">
          <Link to="/about">
            <button className="details-button">View Project Details</button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default ProjectDescription;
