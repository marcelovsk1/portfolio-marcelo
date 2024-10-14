// src/components/Navbar.js

import React from 'react';
import './Navbar.css';
import logoImage from '../Assets/img/globe-seeklogo.svg'; // Caminho relativo para o SVG

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img
            src={logoImage} // Usando a nova imagem importada
            alt="Logo"
            className="logo-image"
          />
        </a>
      </div>
      
      <div className="navbar-links">
        {/* Links */}
        <a href="/" className="nav-link">Craft</a>
        <a href="/" className="nav-link">Lab</a>
        <a href="/about" className="nav-link">About</a>
        <a href="https://drive.google.com/file/d/1tDqy6FN7sBxtxvrkF8Z_dqyOoUWeoZQH/view?usp=sharing" target="_blank" rel="noopener" className="nav-link">CV</a>
      </div>

      {/* Linha de Fundo */}
      <div className="navbar-bottom-line"></div>
    </nav>
  );
};

export default Navbar;
