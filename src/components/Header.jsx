import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const links = [
    { path: '/', name: 'Bio' },
    { path: '/timeline', name: 'Journey' },
    { path: '/projects', name: 'Projects' }
  ];

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${activeLink === link.path ? 'active' : ''}`}
            >
              <span className="link-text">{link.name}</span>
              <span className="link-underline"></span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;