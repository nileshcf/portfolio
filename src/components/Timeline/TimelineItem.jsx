// TimelineItem.jsx
import React from 'react';
import '../../pages/Timeline.css';

const TimelineItem = ({ year, title, description, index }) => {
  const side = index % 2 === 0 ? 'left' : 'right';

  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-item-content">
        <h3 className="timeline-year">{year}</h3>
        <h4 className="timeline-title-item">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
