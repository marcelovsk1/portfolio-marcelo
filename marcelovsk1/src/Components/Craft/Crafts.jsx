import React from 'react';
import './Crafts.css';

const Crafts = () => {
  return (
    <section className="crafts-section">
      <h2 className="crafts-title">CRAFT</h2>
      <div className="crafts-container">
        
        {/* Project Card */}
        <div className="craft-card">
          <h3 className="craft-project-title">Hanwha</h3>
          <p className="craft-project-subtitle">No More Lonely Battles</p>
          <div className="craft-tags">
            <span className="craft-tag">U.S Veterans</span>
            <span className="craft-tag">AI Healthcare</span>
            <span className="craft-tag">Benefits Claim</span>
            <span className="craft-tag">Veterans Affairs</span>
            <span className="craft-tag">Disability Compensation</span>
          </div>
          <a href="/hanwha" className="craft-view-work">View Work</a>
        </div>
        
        {/* Repeat this structure for each project */}
        <div className="craft-card">
          <h3 className="craft-project-title">Marketwake</h3>
          <p className="craft-project-subtitle">The Client Command Center</p>
          <div className="craft-tags">
            <span className="craft-tag">2023 Fall</span>
            <span className="craft-tag">Dashboard</span>
            <span className="craft-tag">B2B</span>
            <span className="craft-tag">Client-facing</span>
            <span className="craft-tag">Rapid Prototyping</span>
          </div>
          <a href="/marketwake" className="craft-view-work">View Work</a>
        </div>

        {/* Add more cards as needed */}
        
      </div>
    </section>
  );
};

export default Crafts;
