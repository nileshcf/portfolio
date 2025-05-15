import React from 'react';
import './Love.css';
import loveImage from '../assets/LOVE.png'; // Rename uploaded image to this for simplicity

const Love = () => {
  return (
    <section className="love-hero">
      <div className="love-content">
        <h1 className="love-title"> My Cutu</h1>
        <h2 className="love-subtitle">You are the reason I smile brighter.</h2>
        <div className="love-image-wrapper">
          <img src={loveImage} alt="My Love" className="love-image" />
        </div>
       <p className="love-description">
  From the moment I met you, I’ve known there was something truly special about you — a magic that radiates far beyond just beauty. Every day, you show me what real love looks like. 💖<br /><br />

  Here's everything that makes you unforgettable:
  <ul style={{ textAlign: 'left', paddingLeft: '1.2rem', marginTop: '1rem' }}>
    <li>
      <strong>🌟 Radiant Confidence:</strong> Watching you dance is like watching joy in its purest form. You inspire everyone to dream bigger and smile wider.
    </li>
    <li>
      <strong>🤗 Unwavering Kindness:</strong> Your heart is open to everyone — your empathy turns ordinary days into beautiful memories.
    </li>
    <li>
      <strong>🕊️ Healing Light:</strong> Whether it's through a scolding or a hug, you always find a way to bring me back to myself when I’m lost.
    </li>
    <li>
      <strong>🌸 Innocent Joy:</strong> You see magic in the little things — your laughter, your curiosity, your silly moments... they melt my heart.
    </li>
    <li>
      <strong>💪 Strength & Wisdom:</strong> No matter what life throws at you, you rise — with grace, with patience, and with unmatched elegance.
    </li>
    <li>
      <strong>❤️ Deepest Love:</strong> You love with all your soul — in a way that sees the real me and loves me more for it.
    </li>
  </ul>

  <br />
  <strong>Pragati</strong>, you are not just special — <strong>you are extraordinary</strong>. ✨ You’ve brought light, meaning, and magic into my life in ways I never imagined.<br /><br />

  Thank you for being my sunshine, my safe place, my most beautiful person inside and out. ☀️💫<br />
  I admire you endlessly and love you more than words can ever say. 💌
</p>
      </div>
    </section>
  );
};

export default Love;
