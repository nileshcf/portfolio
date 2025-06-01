// Timeline.jsx
import React from 'react';
import TimelineItem from '../components/Timeline/TimelineItem';
import './Timeline.css';

const timelineData = [
  {
    year: '2025 - 2027',
    title: 'MBA in Progress – IIT Patna',
    description: 'Pursuing MBA at Indian Institute of Technology, Patna.',
    type: 'education'
  },
  {
    year: '2023 - Present',
    title: 'DevOps Engineer – Cloudframe',
    description: 'Leading deployments with Jenkins, Docker, and Azure.',
    type: 'work'
  },
  {
    year: '2019 - 2022',
    title: 'Graduated B.E. – NMIT Bengaluru',
    description: 'GPA 9.07 | Published a paper with Springer.',
    type: 'graduation'
  },
  {
    year: '2022 – 2023',
    title: 'Internship – CRIS (Railways)',
    description: 'Deployed Java-based applications under Govt. projects.',
    type: 'internship'
  },
  {
    year: '2017',
    title: 'Completed XII – CBSE',
    description: 'PCM-CS | Jagran Public School, Lucknow.',
    type: 'school'
  },
  {
    year: '2015',
    title: '10th Grade – CBSE',
    description: 'Perfect GPA: 10 | Jagran Public School, Lucknow.',
    type: 'school'
  }
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">
        My <span className="gradient-text-timeline">Journey</span>
      </h2>
      <div className="timeline-list">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
