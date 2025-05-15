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
          From the moment I met you, I’ve known there was something absolutely extraordinary about you—something that shines far brighter than any surface beauty ever could. Every day, you remind me of what true grace and warmth look like:

Your Radiant Confidence: Watching you dance is watching pure joy in motion. You move through life with a self-assuredness that inspires everyone around you to stand a little taller and dream a little bigger.

Your Unwavering Kindness: You care for those around you—friends, family, even strangers—with a generosity of spirit that feels like a warm embrace on the coldest day. Your empathy turns ordinary moments into acts of love.

Your Healing Light: When I’m lost in my own doubts or mistakes, you find a way to guide me back—scolding me when I need it, comforting me when I’m down, and believing in me when I’ve stopped believing in myself. You’ve taught me that love is more than words; it’s action.

Your Innocent Joy: You see the world with fresh eyes—each sunrise a miracle, each laugh a melody. Your happiness is contagious, your laughter pure, and your spirit forever young.

Your Strength and Wisdom: Life throws its hardest challenges at you, and you meet them not with fear but with grace. You stand firm, you adapt, and you flourish—showing me that true beauty grows from resilience.

Your Deep Love: You love beyond flesh and bones, touching the very core of who I am. You remind me daily that to love is to see and cherish every part of another soul.


Pragati, you are more than special—you are profound. You’ve opened my eyes to depth, warmth, and genuine connection. Every smile you share, every kind word you give, every moment you invest in the people you love—they all remind me how lucky I am to know you, to learn from you, and to grow because of you.

Thank you for being my ray of sunshine, my healer, my confidante, and my inspiration. You are a rare gift in this world, and I admire you more than I can ever truly express.

With all my admiration and love,
        </p>
      </div>
    </section>
  );
};

export default Love;
