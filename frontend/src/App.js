import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Project from './Project/Project';
import About from './Project/About';
import Result from './Project/Result';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
