// src/components/ProjectDetails.js

import Logo from './JS/Logo';
import NavBar from './JS/NavBar';
import ClassCard from './JS/ClassCard';
import ProjectModels from './JS/ProjectModelsDetails';
import StepGuide from './JS/StepGuide';
import './css/About.css';

const ProjectDetails = () => (
  <div><NavBar /> <Logo />
    <div>
                 
    </div>
    <div>
      <p className='title-text'>About</p>
      <p className='project-details'>App Details</p>
      <p className='project-details-text'>
      This project focuses on automating the classification, generation, and recommendation of medical devices into distinct classes based on risk level and usage. It utilizes advanced machine learning models fine-tuned for the medical domain.            
      </p>
    </div>
    <div>
      <ClassCard />
    </div>

    <div className="container">
      <div className="left-container">
        <ProjectModels />
      </div>
      <div className="right-container">
        <StepGuide />
      </div>
    </div>

  </div>
    
    
);

export default ProjectDetails;
