// StepGuide.jsx
import React from 'react';
import WorkFlowChart from '../../Image/MDC_Flowchart.png';
import '../css/StepGuide.css';

const StepGuide = () => {
  return (
    <div className="step-guide-container">
      <h2 className="title">Step-by-Step Guide to Using the App</h2>

      <div className="step-section">
        <h3 className="section-title">Workflow Chart</h3>
        <div>
            <img src={WorkFlowChart} alt="Flowchart" className="work-flowchart-image" style={{ marginTop: '1px' }}/>
        </div> 
      </div>
      
      <div className="step-section">
        <h3 className="section-title">Step 1: Access the Home Page</h3>
        <p className="section-description">Open the Web App by navigating to the app's URL. On the Home Page, click the "Welcome" button to proceed to the Project page.</p>
      </div>

      <div className="step-section">
        <h3 className="section-title">Step 2: Project Page Overview</h3>
        <p className="section-description">
          On the Project Page, you’ll find components designed for input and prediction:
          <ul className="bullet-list">
            <li><strong>Navbar:</strong> For easy navigation across app sections.</li>
            <li><strong>Icon Container:</strong> Displays icons for each file type you can upload.</li>
            <li><strong>Input Options:</strong> Choose between <em>File Input</em> (PDF, CSV, or TXT) and <em>Manual Input</em> via TextPopup.</li>
            <li><strong>Device Data Table:</strong> Displays device name and description after input.</li>
          </ul>
        </p>
      </div>

      <div className="step-section">
        <h3 className="section-title">Step 3: Submit for Prediction</h3>
        <p className="section-description">Review your device data in the table, then click "Submit for Prediction" to send it for analysis.</p>
      </div>

      <div className="step-section">
        <h3 className="section-title">Step 4: Review Results on the Result Page</h3>
        <p className="section-description">
          On the Result Page, view the predicted class, justification, and recommended similar devices shown in visually appealing cards.
        </p>
      </div>

      <div className="summary-section">
        <h3 className="section-title">Summary of User Flow</h3>
        <p className="section-description">
          Home Page → Project Page → Submit Prediction → Result Page → About Page
        </p>
      </div>
    </div>
  );
};

export default StepGuide;
