// src/Project/ProjectDetails.js

import Logo from './JS/Logo';
import NavBar from './JS/NavBar';
import AboutDetails from './JS/AboutDetails';
import ClassCard from './JS/ClassCard';
import ProjectModels from './JS/ProjectModelsDetails';
import StepGuide from './JS/StepGuide';
import './css/About.css';

const ProjectDetails = () => (
  <div><NavBar /> <Logo />
    <div className="scroll-container">
      <div className="scroll-section" id='first'>
        <AboutDetails />
      </div>
      <div className="scroll-section" id="second">   
          <ClassCard />
      </div>
      <div className="scroll-section" id="third">
        <ProjectModels />
      </div>
      <div className="scroll-section" id="forth">
        <StepGuide />
      </div>
    </div>

  </div>
    
    
);

export default ProjectDetails;
