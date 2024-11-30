// src/Project/ProjectDetails.js

import Logo from './JS/Logo';
import NavBar from './JS/NavBar';
import ClassCard from './JS/ClassCard';
import ProjectModels from './JS/ProjectModelsDetails';
import StepGuide from './JS/StepGuide';
import './css/About.css';

const ProjectDetails = () => (
  <div><NavBar /> <Logo />
  <div>
  <h1 id='title-text'> About </h1>
    <div>     
      <p id='project-details-text'>
      This project focuses on automating the classification, generation, and recommendation of medical devices into distinct classes based on risk level and usage. It utilizes advanced machine learning models fine-tuned for the medical domain.            
      </p>
    </div>
    <div>
      <h1 className=''> Device Classes </h1>
      <div class="line"></div>     
        <ClassCard />
    </div>
    <div >
      <h1 className=''> Project Models </h1>
      <div class="line"></div> 
      <ProjectModels />
    </div>
    <div >
      <h1 className=''> Step-by-Step Guide to Using the App </h1>
      <div class="line"></div> 
      <StepGuide />
    </div>
    </div>

  </div>
    
    
);

export default ProjectDetails;
