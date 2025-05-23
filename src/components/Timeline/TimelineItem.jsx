// TimelineItem.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  School,
  BadgeCheck,
  Laptop2
} from 'lucide-react';
import './TimelineItem.css';

const iconMap = {
  work: <Briefcase className="timeline-icon" />,
  education: <BookOpen className="timeline-icon" />,
  graduation: <GraduationCap className="timeline-icon" />,
  internship: <Laptop2 className="timeline-icon" />,
  school: <School className="timeline-icon" />,
  achievement: <BadgeCheck className="timeline-icon" />
};

const TimelineItem = ({ year, title, description, type = 'education' }) => {
  return (
    <motion.div
      className="timeline-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="timeline-card-header">
        <div className="timeline-icon-wrapper">
          {iconMap[type] || <BookOpen className="timeline-icon" />}
        </div>
        <div className="timeline-year">{year}</div>
      </div>
      <h3 className="timeline-card-title">{title}</h3>
      <p className="timeline-card-description">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;
