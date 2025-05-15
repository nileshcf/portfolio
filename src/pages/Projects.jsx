// Projects.jsx
import React from 'react';
import './Projects.css';

const projectData = [
  { title: 'Portfolio Website', description: 'A personal portfolio built using React and styled with Apple-inspired design.' },
  { title: 'AI Chatbot', description: 'Conversational AI bot integrated with custom APIs and styled UI.' },
  { title: 'Finance Dashboard', description: 'Interactive dashboard with charts and tables for financial data analysis.' },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">
        My <span className="gradient-text-project">Projects</span>
      </h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
