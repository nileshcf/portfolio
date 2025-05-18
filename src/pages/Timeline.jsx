// Timeline.jsx
import React from 'react';
import TimelineItem from '../components/Timeline/TimelineItem';
import './Timeline.css';
const timelineData = [
  {
    year: '2027',
    title: 'MBA in Progress – IIT Patna',
    description: 'Pursuing Master of Business Administration from Indian Institute of Technology, Patna, Bihar.'
  },
  {
    year: '2023',
    title: 'Started as DevOps Engineer at Cloudframe',
    description: 'Took lead as a DevOps engineer, deployed and managed multiple projects using Jenkins, Docker, and Azure. Worked closely with development, QA, and operations teams.'
  },
  {
    year: '2023',
    title: 'Graduated B.E. in Information Science',
    description: `Graduated from Nitte Meenakshi Institute of Technology, Bengaluru with a GPA of 9.07. Published paper: "Predictive Pricing Model for Shared Economy Ride Applications" [Springer Link](https://link.springer.com/chapter/10.1007/978-3-031-43940-7_3).`
  },
  {
    year: '2022 – 2023',
    title: 'Internship at Centre for Railway Information Systems',
    description: 'Worked on deploying native Java-based applications using modern frameworks under the Ministry of Railways.'
  },
  {
    year: '2017',
    title: 'Completed XII (CBSE)',
    description: 'Scored 80% in PCM-CS stream at Jagran Public School, Lucknow under the CBSE board.'
  },
  {
    year: '2015',
    title: 'High School Milestone',
    description: 'Completed 10th grade from Jagran Public School, Lucknow with a perfect GPA of 10.'
  }
];

const Timeline = () => {
  return (
    <section className="timeline-wrapper">
      <h2 className="timeline-title">
        My <span className="gradient-text-timeline">Journey</span>
      </h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
