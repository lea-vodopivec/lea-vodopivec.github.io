import React from 'react';
import './App.css';

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section-title animate-fadeIn">Education</h2>
      <div className="timeline">
        <div className="timeline-item animate-fadeIn delay-1">
          <h3 className="degree-title">Digital Linguistics</h3>
          <span className="date">10/2024 – Present</span>
          <p className="institution">
            Master's Degree, Faculty of Arts, University of Ljubljana
          </p>
        </div>
        <div className="timeline-item animate-fadeIn delay-2">
          <h3 className="degree-title">German and South Slavic Studies</h3>
          <span className="date">10/2020 – 05/2024</span>
          <p className="institution">
            Bachelor's Degree, Faculty of Arts, University of Ljubljana
          </p>
        </div>
        <div className="timeline-item animate-fadeIn delay-3">
          <h3 className="degree-title">High School graduate, Computer Science Technician</h3>
          <span className="date">09/2016 – 06/2020</span>
          <p className="institution">
            Technical Gymnasium Nova Gorica, Computer Science program
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;