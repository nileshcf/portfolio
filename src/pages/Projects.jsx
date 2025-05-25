import React, { useState } from 'react';
import './Projects.css';
import ProjectPreviewPane from './ProjectPreviewPane';

const projectData = [

    {
        title: 'Sandbox for Codenavigator',
        description: 'An automated sandbox deployment platform integrating UI, backend, and CI/CD to spin up demo environments on demand.',
        details: `This internal tooling project enables seamless deployment of isolated environments for product demos:
      - A JavaScript-based UI button embedded in a WordPress site triggers the process.
      - The button hits an Express.js backend hosted in Docker, which securely handles Jenkins credentials and manages job execution.
      - Jenkins pulls, builds, dockerizes, and deploys a Java project to a remote server, returning the live URL.`,
        link: '#', // replace with actual link if available
        image: '../../src/assets/sandbox_project.png', // update with your project image
        accordionItems: [
          {
            title: "WordPress UI Integration",
            content: "A JS script deployed in WordPress displays a trigger button that initiates a sandbox deployment flow and polls the backend for deployment status."
          },
          {
            title: "Node.js Express Middleware",
            content: "Handles secure API calls from the UI, triggers Jenkins pipelines, and serves console outputs and deployment details to the frontend."
          },
          {
            title: "Jenkins CI/CD",
            content: "Builds and dockerizes a Java project from an internal Git repo and deploys it to a remote server, exposing the sandbox to customers."
          }
        ]
      },
   {
    title: 'Portfolio Website2',
    description: 'A personal portfolio built using React and styled with Apple-inspired design.',
    details: 'This project showcases a full-stack developer portfolio using modern React hooks, reusable components, routing, and smooth scroll behavior. It reflects Apple-inspired glassmorphism, soft shadows, and subtle motion for interaction.',
    link: '#',
    image: '/assets/project1.png',
  accordionItems: [
    {
      title: "iPhone and Mac",
      content: "Use your iPhone with your Mac for seamless file transfers, Continuity features, and Universal Clipboard."
    },
    {
      title: "iPhone and Apple Watch",
      content: "Unlock your iPhone with Apple Watch, receive calls, and sync fitness data effortlessly."
    },
    {
      title: "iPhone and AirPods",
      content: "Set up AirPods on iPhone with just a tap. Adaptive Audio automatically adjusts noise control for optimal listening based on your environment."
    }
  ]
  },
  {
    title: 'AI Chatbot',
    description: 'Conversational AI bot integrated with custom APIs and styled UI.',
    details: 'Developed using Python and React, this bot connects with external APIs and NLP models, delivering real-time responses with a beautifully styled chat UI and dynamic animations.',
    link: '#',
    image: '/assets/project2.png',
  accordionItems: [
    {
      title: "iPhone and Mac",
      content: "Use your iPhone with your Mac for seamless file transfers, Continuity features, and Universal Clipboard."
    },
    {
      title: "iPhone and Apple Watch",
      content: "Unlock your iPhone with Apple Watch, receive calls, and sync fitness data effortlessly."
    },
    {
      title: "iPhone and AirPods",
      content: "Set up AirPods on iPhone with just a tap. Adaptive Audio automatically adjusts noise control for optimal listening based on your environment."
    }
  ]
  },
  {
    title: 'Finance Dashboard',
    description: 'Interactive dashboard with charts and tables for financial data analysis.',
    details: 'A powerful React + Chart.js interface that pulls financial metrics from various sources, rendering charts, tables, and insights in a responsive dark-mode layout.',
    link: '#',
    image: '/assets/project3.png',
  accordionItems: [
    {
      title: "iPhone and Mac",
      content: "Use your iPhone with your Mac for seamless file transfers, Continuity features, and Universal Clipboard."
    },
    {
      title: "iPhone and Apple Watch",
      content: "Unlock your iPhone with Apple Watch, receive calls, and sync fitness data effortlessly."
    },
    {
      title: "iPhone and AirPods",
      content: "Set up AirPods on iPhone with just a tap. Adaptive Audio automatically adjusts noise control for optimal listening based on your environment."
    }
  ]
  },

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section">
      <h2 className="projects-title">
        My <span className="gradient-text-project">Projects</span>
      </h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* New: Apple-style preview pane */}
      <ProjectPreviewPane project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
