import React from 'react';
import './App.css';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'General Digital Competences',
      icon: 'fas fa-laptop-code',
      skills: [
        'Microsoft Office (Word, Excel, PowerPoint, Outlook)',
        'Google Workspace (Docs, Sheets, Slides, Drive, Gmail)',
        'Cloud Services (Google Drive, Dropbox, OneDrive)',
        'Project Management and task collaboration tool (Asana)',
        'Graphic design (Canva)'
      ]
    },
    {
      title: 'Computer-Assisted Translation',
      icon: 'fas fa-language',
      skills: [
        'SDL Trados Studio',
        'MemoQ',
        'Translation Formats (XML, TMX, XLIFF)',
      ]
    },
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        'Python',
        'JavaScript',
        'CSS, HTML, PHP (website)',
        'XML (structured data)',
        'R (statistics and data visualization)'
      ]
    },
    {
      title: 'Digital Humanities',
      icon: 'fas fa-brain',
      skills: [
        'Corpus Analysis (Sketch Engine)',
        'Python libraries for AI (PyTorch, NLTK, CLASSLA)',
        'Machine Learning in Linguistics',
        'Language resources and infrastructures (CLARIN)',
        'Visual Data Analytics and Data mining (Orange)',
        'XML (TEI for Text Markup)'
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title animate-fadeIn">Digital Skills</h2>
      <div className="skills-grid">
        {skillsCategories.map((category, index) => (
          <div key={index} className={`skill-card animate-fadeIn delay-${index + 1}`}>
            <div className="skill-icon-container">
              <i className={`${category.icon} skill-icon`}></i>
            </div>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>
                  <i className="fas fa-check"></i> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;