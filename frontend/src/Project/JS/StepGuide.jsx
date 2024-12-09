// src/Project/JS/StepGuide.jsx
import React from 'react';
import WorkFlowChart from '../../Image/MDC_Flowchart.png';
import '../css/StepGuide.css';
import '../css/Line.css';

const StepGuide = () => {
  return (
    <div className="step-guide">
      <h1 className="step-guide__title">Step-by-Step Guide to Using the App</h1>
      <div className="step-guide__line"></div>

      <div className="step-guide__top-row">
        <div className="step-guide__left-col">
          <div className="step-guide__intro">
            <h2 className="step-guide__section-title">Overview</h2>
            <p className="step-guide__description">
              Follow this step-by-step guide to understand how to navigate through the application. From accessing the Home Page to reviewing results, these instructions will help you use the app efficiently.
            </p>
          </div>
          <div className="step-guide__steps">
            <div className="step-guide__step" id='1'>
              <h3 className="step-guide__step-title">Step 1: Access the Home Page</h3>
              <p className="step-guide__step-description">
                Open the Web App by navigating to the app's URL. On the Home Page, click the "Welcome" button to proceed to the Project page.
              </p>
            </div>

            <div className="step-guide__step" id ='2'>
              <h3 className="step-guide__step-title">Step 2: Project Page Overview</h3>
              <p className="step-guide__step-description">
                On the Project Page, you’ll find components designed for input and prediction:
              </p>
              <ul className="step-guide__bullet-list">
                <li><strong>Navbar :</strong> For easy navigation across app sections.</li>
                <li><strong>Icon Container :</strong> Displays icons for each file type you can upload.</li>
                <li><strong>Input Options :</strong> Choose between <em>File Input</em> (PDF, CSV, or TXT) and <em>Manual Input</em> via TextPopup.</li>
                <li><strong>Device Data Table :</strong> Displays device name and description after input.</li>
              </ul>
            </div>

            <div className="step-guide__step" id ='3'>
              <h3 className="step-guide__step-title">Step 3: Submit for Prediction</h3>
              <p className="step-guide__step-description">
                Review your device data in the table, then click "Submit for Prediction" to send it for analysis.
              </p>
            </div>

            <div className="step-guide__step">
              <h3 className="step-guide__step-title">Step 4: Review Results on the Result Page</h3>
              <p className="step-guide__step-description">
                On the Result Page, view the predicted class, justification, and recommended similar devices shown in visually appealing cards.
              </p>
            </div>
          </div>

        </div>

        <div className="step-guide__right-col">
          <div className="step-guide__flowchart-section">
            <h2 className="step-guide__section-title">Workflow Chart</h2>
            <p className="step-guide__description">
              The flowchart on the right provides a quick visual summary of the user journey through the app.
            </p>
            <img 
              src={WorkFlowChart} 
              alt="Flowchart" 
              className="step-guide__flowchart-image" 
            />
          </div>
          <div className="step-guide__summary-section">
            <h3 className="step-guide__section-title">Summary of User Flow</h3>
            <p className="step-guide__step-description">
              Home Page → Project Page → Submit Prediction → Result Page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepGuide;
