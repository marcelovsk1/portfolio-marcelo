import React from 'react';
import './Footer.css';
import logoImage from '../Assets/img/globe-seeklogo.svg'; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      <a href="./">
      <img
            src={logoImage} 
            alt="Logo"
            className="logo-image"
          />
      </a>
    </div>

    <div className="footer-links">
      <div>
        <p className="footer-heading">Craft</p>
        <ul>
          <li><a href="./hanwha">Project 1</a></li>
          <li><a href="./marketwake">Project 2</a></li>
          <li><a href="./dopago">Project 3</a></li>
          <li><a href="./torqata">Project 4</a></li>
        </ul>
      </div>
      <div>
        <p className="footer-heading">Contact</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/jaypark99/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://read.cv/jaypark" target="_blank" rel="noopener noreferrer">Read.cv</a></li>
          <li><a href="mailto:jhp0426@berkeley.edu">Mail</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-message">
      <p>© 2024 Marcelo Amaral. All Rights Reserved.</p>
      <p>Made with 🩶 and Bubble Tea (No sugar, less ice).</p>
    </div>
  </footer>
);

export default Footer;
