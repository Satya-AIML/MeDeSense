// src/Project/NavBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaArrowLeft, FaInfo } from 'react-icons/fa';
import '../css/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate('/reload', { replace: true }); // Navigate to a temporary path
    setTimeout(() => navigate(path, { replace: true }), 0); // Redirect to the actual path
  };

  return (
    <nav className="navbar ">
      <button className="nav-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="nav-icon"/> Back
      </button>
      <button onClick={() => handleNavigation('/')} className="nav-button">
        <FaHome className="nav-icon" /> Home
      </button>
      <div className="dropdown">
      <button onClick={() => handleNavigation('')} className="nav-button">
        <FaProjectDiagram className="nav-icon" /> Project
      </button>
        <div className="dropdown-content">
          <button onClick={() => handleNavigation('/project')} className="dropdown-item">Medical Device Classification</button>
          <button onClick={() => handleNavigation('/ai-model')} className="dropdown-item">AI Model Training</button>
        </div>
      </div>
      <button onClick={() => handleNavigation('/about')} className="nav-button">
        <FaInfo className="nav-icon" /> About
      </button>
    </nav>
  );
};

export default NavBar;
