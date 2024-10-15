import React, { useState } from 'react';
import './About.css';

const About = () => {
  const AboutItem = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className="about-item">
        <div className="item-header" onClick={toggleExpand}>
          <p>{title}</p>
          <div className="icon-wrapper">{isExpanded ? '-' : '+'}</div>
        </div>
        <div className={`item-content ${isExpanded ? 'expanded' : ''}`}>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I'm a Passionate Frontend Developer with a focus on creating engaging, user-centered experiences.
          Blending a background in cognitive science with skills in React,
          TypeScript, and Shopify, I build intuitive, responsive applications that prioritize both design and functionality.
        </p>

        <AboutItem
            title="Background"
            content="With a solid foundation in software development and strategic business insight, 
            I have built full-stack applications with React, Tailwind, and Ruby on Rails, 
            focusing on responsive and accessible design."
        />


        <AboutItem
          title="Design Philosophy"
          content="My background has shaped my design philosophy to prioritize minimizing cognitive load for users. In a world where people juggle countless products daily, I strive to craft experiences that are seamless and enjoyable."
        />

        <AboutItem
          title="Things I Love"
          content="I find inspiration in the world around me. I love to travel and experience different cultures, which often informs my design choices. Outside of work, I enjoy biking, snowboarding, and indulging in a Hawaiian pizza."
        />
      </div>
    </div>
  );
};

export default About;
