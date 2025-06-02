import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { WiDaySunny, WiCloud, WiRain, WiSnow } from 'react-icons/wi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState({ temp: null, icon: null });
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, [location]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );

        const { latitude, longitude } = position.coords;
        const apiKey = '7f187640b09ae4bf0086584dc9b266c0'; // Replace with your actual API key
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        const weatherMain = data.weather[0].main;

        let icon = <WiDaySunny />;
        if (weatherMain === 'Clouds') icon = <WiCloud />;
        else if (weatherMain === 'Rain') icon = <WiRain />;
        else if (weatherMain === 'Snow') icon = <WiSnow />;

        setWeather({ temp: Math.round(data.main.temp), icon });
      } catch (err) {
        console.error('Weather fetch error:', err);
      }
    };

    fetchWeather();
  }, []);

  const links = [
    { path: '/', name: 'Bio' },
    { path: '/timeline', name: 'Journey' },
    { path: '/projects', name: 'Projects' },
    // { path: '/contact', name: 'Contact' }

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
        <div className="header-info">
          <div className="time">{time}</div>
          {weather.temp !== null && (
            <div className="weather">
              <span className="weather-icon">{weather.icon}</span>
              <span>{weather.temp}°C</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
