import React from 'react';
import './App.css';
import megabon from './assets/megabon.png';
import futunatura from './assets/logo-futu-natura.svg';
import mpg from './assets/mpg.png';

const Experience = () => {
  const experienceItems = [
    {
      title: 'FREELANCE TRANSLATOR',
      date: '2021 – Present',
      description: [
        'Translation of literary texts (primarily Serbian and Macedonian poetry)',
        'Translation of technical texts (technical manuals, academic texts, computer science, mechanical engineering and electrical engineering) in the language combination Slovenian, German and Croatian',
        'Proofreading and language consulting',
        'Private lessons'
      ],
      color: 'rgba(108, 92, 231, 0.9)'
    },
    {
      title: 'TRANSLATOR',
      company: 'Moderna Ventures SA, Megabon.eu',
      date: '09/2023 – Present',
      description: [
        'Preparation and translation of tourist offers in admin (language combinations Slovenian, Croatian, Serbian, Montenegrin, Bosnian)',
        'Preparation and translation of mailings',
        'Graphic design in Canva',
        'Project management and task collaboration in Asana',
        'Marketing team'
      ],
      color: 'rgba(0, 206, 201, 0.9)',
      logo: megabon
    },
    {
      title: 'TRANSLATOR',
      company: 'Be Healthy d.o.o., FutuNatura',
      date: '08/2021 – 11/2024',
      description: [
        'Translation of product descriptions and declarations (dietary supplements) from Slovenian to German',
        'Translation of texts for mailings and advertisements from Slovenian to German',
        'Website editing and designing'
      ],
      color: 'rgba(155, 89, 182, 0.9)',
      logo: futunatura
    },
    {
      title: 'PROMOTER, HOSTESS',
      company: 'MPG Plus marketing agency d.o.o.',
      date: '02/2021 – 10/2023',
      description: [
        'Promoting products in bars and shopping malls (product tastings, participating in prize games)',
        'Hostess work at various events (guiding and directing visitors, checking tickets)'
      ],
      color: 'rgba(233, 30, 99, 0.9)',
      logo: mpg
    }
  ];

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title animate-fadeIn">Work Experience</h2>
      <div className="experience-grid">
        {experienceItems.map((item, index) => (
          <div className={`experience-card animate-fadeIn delay-${index + 1}`} key={index}>
            <div className="card-front">
              <div className="card-header">
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
                <p className="date">{item.date}</p>
              </div>
            </div>
            <div className="card-back" style={{ background: item.color }}>
              <ul>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {item.logo && (
                <div className="company-logo-container">
                  <img src={item.logo} alt="Company Logo" className="company-logo" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;