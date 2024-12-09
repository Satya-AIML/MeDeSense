// src/Project/JS/ProjectModelsDetails.jsx
import React from 'react';
import ModelFlowChart from '../../Image/MDC_Flowchart.png';
import '../css/ProjectModelsDetails.css';
import '../css/Line.css';

const ProjectModels = () => {
  return (
    <div className="project-models">
      <h1 className="project-models__title">Project Models</h1>
      <div className="project-models__line"></div>
      {/* Top Row */}
      <div className="project-models__top-row">
        <div className="project-models__left-col">
          <img src={ModelFlowChart} alt="Flowchart" className="project-models__flowchart-image" />
        </div>
        <div className="project-models__right-col">
          <div className="project-models__model-flowchart">
            <h2 className="project-models__section-title">Model Flowchart</h2>
            <p className="project-models__description">
              The following flowchart illustrates the overall structure of the project models, showcasing the interrelation between classification, generation, and recommendation.
            </p>
          </div>
          <div className="project-models__classification-model">
            <h2 className="project-models__section-title">Classification Model</h2>
            <p className="project-models__description">
              The fine-tuned <strong>BioBERT</strong> model classifies medical devices (Class A-D) with high accuracy by focusing on biomedical terminology and capturing subtle relationships within device descriptions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="project-models__bottom-row">
        <div className="project-models__generation-models">
          <h2 className="project-models__section-title">Generation Models</h2>
          <div className="project-models__generation-model">
            <h3 className="project-models__model-name">Stable Diffusion</h3>
            <p className="project-models__model-description">
              Generates high-quality images for each classified medical device, providing visual support for better comprehension and decision-making.
            </p>
          </div>
          <div className="project-models__generation-model">
            <h3 className="project-models__model-name">MedLLaMA</h3>
            <p className="project-models__model-description">
              A medical-specific text generation model that produces detailed textual descriptions and supplementary information for each device, offering coherent and relevant information to support users.
            </p>
          </div>
        </div>

        <div className="project-models__recommendation-model">
          <h2 className="project-models__section-title">Recommendation Model</h2>
          <p className="project-models__description">
            This model leverages <strong>BioBERT</strong> to generate embeddings for medical devices, capturing their semantic essence. The embeddings are stored in a Pinecone database, enabling fast and precise similarity search through K-Nearest Neighbors (KNN). Based on embedding similarity, the model retrieves the top 10 device recommendations, aligned by function, risk, and other key characteristics, to assist users with relevant options for their needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModels;
