import React from 'react';
import './HomePage.css';
import profilePic from '../assets/profile-placeholder.png'; // Replace this with your actual profile image
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { SiJavascript, SiPython, SiDocker, SiKubernetes, SiReact } from 'react-icons/si';

const HomePage = () => {
  return (
    <section className="homepage">
      {/* Profile Section */}
      <div className="homepage-heading">
        <h1>
          Hello, I'm <span className="gradient-text-home">Nilesh Verma</span>
        </h1>
        <p className="subtitle">DevOps Engineer • Cloud Enthusiast • Full-Stack Explorer</p>
      </div>

      {/* Profile Picture and Bio */}
      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-pic-rounded hover-zoom-border" />
        <div className="bio-card">
          <p className="bio-text-light">
            I'm a technology enthusiast and lifelong learner, passionate about building reliable, scalable, and automated systems. With a strong DevOps foundation and background in Java programming, I aim to bridge development and operations through elegant infrastructure.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="section-heading">Skills & Technologies</h2>
        <div className="skills-grid">
          <SiJavascript title="JavaScript" className="tech-icon" />
          <SiPython title="Python" className="tech-icon" />
          <SiDocker title="Docker" className="tech-icon" />
          <SiKubernetes title="Kubernetes" className="tech-icon" />
          <SiReact title="React" className="tech-icon" />
        </div>
      </div>

      {/* Social Links */}
      <div className="social-section">
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
         <a href="/assets/NileshResume.pdf" download>
          <FaFileDownload className="social-icon" title="Download Resume" />
        </a>
      </div>
    </section>
  );
};

export default HomePage;
