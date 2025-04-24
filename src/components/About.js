import React from 'react';
import './App.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title animate-fadeIn">About Me</h2>
      <div className="about-content animate-fadeIn delay-1">
        <div className="about-text">
          <p>
            I'm a master's student in digital linguistics with a degree in German and South Slavic studies. 
            I specialize in translation, digital text analysis, and artificial intelligence. 
            I'm passionate about language technologies, corpus analysis, and their applications in humanities.
          </p>
          <p>
            My interdisciplinary background combines linguistic expertise with technical skills, 
            allowing me to bridge the gap between humanities and technology.
          </p>
        </div>
        <div className="about-image">
          {/* Replace with your image */}
          <div style={{
            width: '100%',
            height: '400px',
            background: 'linear-gradient(145deg, #4361ee, #3a0ca3)',
            borderRadius: '10px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;