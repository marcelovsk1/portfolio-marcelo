// src/components/Intro.js
import React from 'react';
import './Intro.css';
import AnimatedBackground from './AnimatedBackground';

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="intro-background">
        <AnimatedBackground />
      </div>

      <div className="intro-content">
        <div className="intro-info">
          <p className="Role">Frontend Developer</p>
          <h2 className="Marcelo">Marcelo Amaral</h2>
        </div>
        <div className="intro-bar"></div>
        <div className='sub-title'>
          <p className="intro-text bottom-right">
            I craft simplicity, inspire experiences.
            <br />
            <a href="#about" className="intro-link">More about me</a> →
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
