import React from 'react';
import ModelFlowChart from '../../Image/MDC_Flowchart.png';
import '../css/ProjectModelsDetails.css'; 

const ProjectModels = () => {
  return (
    <div className="project-models-container">
      <h1 className="title">Project Models</h1>
      <div className="model-section">
      <h2 className="section-title">Model Flowchart</h2>
        <div>
            <img src={ModelFlowChart} alt="Flowchart" className="model-flowchart-image" style={{ marginTop: '1px' }}/>
        </div>
      </div>  
        <div className="model-section">      
        <h2 className="section-title">Classification Model</h2>
        <p className="section-description">
          The fine-tuned <strong>BioBERT</strong> model classifies medical devices (Class A-D) with high accuracy by focusing on biomedical terminology and capturing subtle relationships within device descriptions.
        </p>
      </div>

      <div className="model-section">
        <h2 className="section-title">Generation Models</h2>
        <div className="generation-models">
          <div className="generation-model">
            <h3 className="model-name">Stable Diffusion</h3>
            <p className="model-description">
              Generates high-quality images for each classified medical device, providing visual support for better comprehension and decision-making.
            </p>
          </div>
          <div className="generation-model">
            <h3 className="model-name">MedLLaMA</h3>
            <p className="model-description">
              A medical-specific text generation model that produces detailed textual descriptions and supplementary information for each device, offering coherent and relevant information to support users.
            </p>
          </div>
        </div>
      </div>

      <div className="model-section">
        <h2 className="section-title">Recommendation Model</h2>
        <p className="section-description">
          This model leverages <strong>BioBERT</strong> to generate embeddings for medical devices, capturing their semantic essence. The embeddings are stored in a Pinecone database, enabling fast and precise similarity search through K-Nearest Neighbors (KNN). Based on embedding similarity, the model retrieves the top 10 device recommendations, aligned by function, risk, and other key characteristics, to assist users with relevant options for their needs.
        </p>
      </div>
    </div>
  );
};

export default ProjectModels;
