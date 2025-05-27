import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [hoverHeart, setHoverHeart] = useState(false);

  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <p className="copyright">© {new Date().getFullYear()} My Portfolio</p>
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">Privacy</Link>
          <Link to="/terms" className="footer-link">Terms</Link>
          <Link 
            to="/love" 
            className="footer-link heart-link"
            onMouseEnter={() => setHoverHeart(true)}
            onMouseLeave={() => setHoverHeart(false)}
          >
            {/* <span className={`heart ${hoverHeart ? 'animate' : ''}`}>❤️</span> */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
