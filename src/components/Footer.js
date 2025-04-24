import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#education" className="footer-link">Education</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#languages" className="footer-link">Languages</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Lea Vodopivec. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;