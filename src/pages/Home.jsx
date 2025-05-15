import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="homepage-heading">
        <h1>
          About <span className="gradient-text-home">Me</span>
        </h1>
      </div>
      <div className="bio-card">
        <p className="bio-text-bold">Nilesh Vermaa</p>
        <p className="bio-text-light">I'm a technology enthusiast and lifelong learner, passionate about building reliable, scalable, and automated systems. With a solid foundation in DevOps engineering and a strong background in programming, I thrive in fast-paced environments where innovation and continuous improvement are key.

During my internship as a DevOps Engineer at CloudFrame Inc., I had the opportunity to work hands-on with modern DevOps tools and practices. I helped design and implement CI/CD pipelines that accelerated deployment cycles and improved delivery efficiency. I’ve worked extensively with Docker and Kubernetes to containerize and orchestrate applications, ensuring consistent and scalable environments across development, staging, and production.

I’ve also built and maintained automation workflows using GitHub Actions, enabling seamless integration and testing for development teams. These experiences have given me deep insight into deployment strategies, infrastructure-as-code, and monitoring best practices.

Beyond DevOps, I’m also well-versed in Java programming, which enhances my ability to understand application logic, write automation scripts, and collaborate effectively with software developers. My programming background allows me to bridge the gap between development and operations—bringing a full-stack mindset to infrastructure engineering.

I’m always exploring new technologies and staying current with trends in cloud computing, containerization, and automation. Whether it's experimenting with new tools or contributing to open-source projects, I am driven by a passion to innovate and simplify the complex.</p>
      </div>
    </section>
  );
};

export default HomePage;
