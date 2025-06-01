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
},
{
  title: "Java Bus Management System",
  description: "A native Java Swing-based bus management system with MySQL integration, offering full CRUD operations for buses, drivers, conductors, routes, passengers, and tours.",
  details: "Developed a desktop application using Java Swing and MySQL Connector/J that enables administrators and operators to manage all aspects of bus transportation — from scheduling tours and assigning routes to managing passengers and staff. The system includes login/signup authentication and multiple user roles such as Admin, Conductor, Driver, and Passenger.",
  link: "https://github.com/newton00009/bus_management", // Replace with GitHub repo or demo link
  image: "/bus_management_preview.png", // Replace with screenshot or dashboard preview
  accordionItems: [
    {
      title: "Modular GUI with Swing",
      content: "Each feature (add/update/delete/view) for buses, conductors, drivers, passengers, and routes is built as a separate GUI module using Swing's form builder."
    },
    {
      title: "MySQL-Backed Data Persistence",
      content: "All data such as tours, schedules, and staff assignments are stored and retrieved using MySQL via JDBC connection."
    },
    {
      title: "Authentication and User Roles",
      content: "Includes login/signup functionality with separate dashboards for Admin, Conductor, Driver, and Passenger."
    },
    {
      title: "Tour & Route Management",
      content: "Admins can create and assign routes to buses, track upcoming tours, and validate conductor-driver pairing."
    },
    {
      title: "Full CRUD Operations",
      content: "Each entity supports full lifecycle management including add, update, delete, and view operations."
    }
  ]
},
 {
  title: 'Personal Budgeting Web App',
  description: 'A full-stack budgeting application that helps users track expenses, manage earnings, and visualize spending patterns with real-time charts.',
  details: 'Built a MERN-stack budgeting tool with secure authentication, dynamic chart rendering, and intuitive expense tracking. Users can register, log in, add or remove expenses, update earnings, and get real-time financial insights. The backend includes a robust JWT-based authentication system and MongoDB-powered data management.',
  link: 'https://github.com/Prateekg2050/Budgeting_WebApplication', 
  image: '/budgeting_app_preview.png',
  accordionItems: [
    {
      title: "Secure Auth & JWT Integration",
      content: "Implemented user registration and login with hashed passwords using bcrypt and JWT tokens for secure route access."
    },
    {
      title: "Expense CRUD API (Express + MongoDB)",
      content: "Users can add, view, and delete expenses through authenticated API routes that interact with MongoDB collections."
    },
    {
      title: "Earning Update & Storage",
      content: "Added PATCH route for updating and storing monthly earnings per user with real-time data sync."
    },
    {
      title: "Frontend with React & Fluent Charts",
      content: "Built a sleek and responsive UI in React with interactive charts to display monthly breakdowns and totals."
    },
    {
      title: "Role-based Data Access",
      content: "JWT payload includes admin roles and user metadata for customizing experience and future multi-role support."
    }
  ]
}


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
