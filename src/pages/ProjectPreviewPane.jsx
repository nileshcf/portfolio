// ProjectPreviewPane.jsx
import React, { useState } from 'react';
import './ProjectPreviewPane.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onClick}>
      <h3>{title}</h3>
      <span className={`arrow ${isOpen ? 'open' : ''}`}>&#8964;</span>
    </div>
    {isOpen && <div className="accordion-body"><p>{content}</p></div>}
  </div>
);

const ProjectPreviewPane = ({ project, onClose }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!project) return null;

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-window" onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={project.title} className="preview-image" />
        <div className="preview-content">
          <h2>{project.title}</h2>
          <p>{project.details}</p>

         <div className="accordion">
  {project.accordionItems?.map((item, index) => (
    <AccordionItem
      key={index}
      title={item.title}
      content={item.content}
      isOpen={openIndex === index}
      onClick={() => handleAccordionClick(index)}
    />
  ))}
</div>


          {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="project-button">Launch Project</button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewPane;
