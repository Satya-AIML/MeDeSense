import React from 'react';
import Logo from '../Project/JS/Logo';
import logo from '../icon/Merai.svg';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <Logo />
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to this Medical Device Classification application.<br />
          Click the Welcome button to navigate to the Web App.
        </p>

      <Link to="/project">
        <button className="App-button">Welcome</button>
      </Link>
    </div>
  );
}

export default Home;
