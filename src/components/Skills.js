import React from 'react';
import './App.css';

const Skills = () => {
  const skillsCategories = [
      {
      title: 'AI & LLM Tools',
      icon: 'fas fa-robot',
      skills: [
        'Claude (Anthropic), ChatGPT (OpenAI), Gemini (Google), Mistral, LLaMA (Meta), DeepSeek',
        'Integration and local deployment of open-source LLMs (GaMS, Voxtral, Mistral) in Ollama, LM Studio',
        'Fine-tuning LLMs for domain-specific tasks',
        'Prompt engineering and iterative querying',
        'AI-assisted translation review and post-editing',
        'AI-supported text analysis and corpus exploration',
        'Research, summarization, and content drafting with LLMs',
        'Critical evaluation of AI output (accuracy, bias, hallucination)',
      ]
    },
    {
      title: 'Digital Humanities',
      icon: 'fas fa-brain',
      skills: [
        'Subtitle editing and creation (SubRip .SRT), timestamping, caption synchronization',
        'Corpus Analysis (Sketch Engine)',
        'Machine Learning in Linguistics',
        'Visual Data Analytics and Data mining (Orange)',
        'Language resources and infrastructures (CLARIN)',
        'XML (TEI for Text Markup)'
      ]
    },
    {
      title: 'Computer-Assisted Translation',
      icon: 'fas fa-language',
      skills: [
        'Trados Studio',
        'MateCat',
        'SDL MultiTerm',
        'CafeTran',
        'Translation Formats (XML, TMX, XLIFF)',
      ]
    },
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        'Python',
        'CSS, HTML, PHP (website)',
        'JavaScript',
        'XML (structured data)',
        'R (statistics and data visualization)'
      ]
    },
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
