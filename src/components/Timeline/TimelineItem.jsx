import React from 'react';
import './TimelineItem.css';

import { FiBriefcase, FiBookOpen, FiAward } from 'react-icons/fi'; // pick icons based on your events

const TimelineItem = ({ year, title, description, index }) => {
  const side = index % 2 === 0 ? 'left' : 'right';

  // Choose icon conditionally (or by title)
  const icon = title.toLowerCase().includes('engineer') ? <FiBriefcase /> :
               title.toLowerCase().includes('graduated') ? <FiAward /> :
               <FiBookOpen />;

  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-item-content">
        <div className="timeline-header">
          <span className="timeline-icon">{icon}</span>
          <span>{title}</span>
          <span className="timeline-separator"> | </span>
          <span>{year}</span>
        </div>
        <div className="timeline-underline"></div>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};


export default TimelineItem;
