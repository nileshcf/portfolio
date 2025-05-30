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
  image: '/sandbox_project.png', // update with your project image
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
  title: 'Dynamic Jenkins CI/CD Pipeline',
  description: 'A multi-module CI/CD pipeline for building, testing, and Dockerizing Java projects with custom user environments.',
  details: 'Designed and implemented an advanced Jenkins pipeline using scripted Groovy syntax. It dynamically allocates PostgreSQL ports per user, builds Maven-based multi-module Java projects, handles resource constraints gracefully, packages Docker containers, and archives build artifacts with rollback capabilities.',
  link: '#', // Replace with GitHub/demo link
  image: '/pipeline_project.png', // Replace with relevant pipeline image or diagram
  accordionItems: [
    {
      title: "Dynamic Port Allocation",
      content: "Each build session is assigned a unique PostgreSQL port by reserving entries in a shared database, ensuring isolated environments per user."
    },
    {
      title: "Modular Maven Builds",
      content: "Multiple Java modules are independently built and packaged using Maven, supporting efficient modular development."
    },
    {
      title: "Dockerization & Archiving",
      content: "Each successful build is Dockerized with custom tags and pushed to a private registry. Artifacts are archived for rollback and auditing."
    },
    {
      title: "Failure Handling & Cleanup",
      content: "Includes robust error handling and post-build cleanup logic. Frees up database reservations and resources to avoid port leakage."
    },
    {
      title: "Concurrency & Resource Checks",
      content: "Implements safeguards to prevent overlapping builds when no ports are available, with descriptive build termination messaging."
    }
  ]
},{
  title: 'Event-Driven Java Debugger Backend',
  description: 'A backend system for real-time debugging of Java programs by intercepting and analyzing JVM events to monitor variable states and program flow.',
  details: 'Contributed to the development of a Java-based debugger backend that leverages the Java Debug Interface (JDI) to capture runtime events such as method entry/exit, variable changes, and breakpoints. Implemented handlers to track and log variable values and control program execution flow for enhanced debugging capabilities. Enabled a visual front-end to correlate runtime data with source code in real-time.',
  link: '#', // Replace with GitHub/demo link
  image: '/debugger_backend.png', // Replace with relevant debugger architecture diagram or screenshot
  accordionItems: [
    {
      title: "JVM Event Interception",
      content: "Used JDI to listen for events like breakpoints, variable modifications, and method invocations to enable dynamic inspection of the target program."
    },
    {
      title: "Variable State Tracking",
      content: "Tracked variable values during program execution and maintained a history of changes to aid in runtime analysis and debugging."
    },
    {
      title: "Custom Debug Operations",
      content: "Implemented custom handlers to pause/resume execution, inspect call stacks, and manipulate program flow based on debug events."
    },
    {
      title: "Source Mapping & Visualization",
      content: "Integrated with a UI layer to visually represent live variable states and program flow, mapped directly to source code lines."
    },
    {
      title: "Extensible Architecture",
      content: "Designed the backend to support plug-and-play modules for new event types, making the debugger flexible for future use cases."
    }
  ]
}
,
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
              {/* <p className="project-description">{project.description}</p> */}
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
