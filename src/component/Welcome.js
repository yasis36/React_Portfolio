import React, { useEffect, useState } from 'react';
import image from '../img/Emojione_1F60E.png';

const messages = [
  'Web Experiences',
  'Mobile Products',
  'UI Systems',
  'Digital Strategy',
  'Visual Storytelling',
  
];

const stats = [
  { value: '4+', label: 'Core service areas' },
  { value: '10+', label: 'Tools and platforms' },
  { value: '100%', label: 'Focus on polished delivery' },
];

const Welcome = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentMessage.length) {
            setText(currentMessage.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
        } else if (charIndex > 0) {
          setText(currentMessage.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      },
      isDeleting ? 55 : 95
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <div className="hero-grid">
      <div className="hero-copy reveal-up">
        <p className="eyebrow">Sisay Portfolio</p>
        <h1>
          Designing and building standout</h1>
         <h2> <span className="accent-line"> {text || messages[0]}</span>
        </h2>
        <p className="hero-description">
          I create modern websites, mobile experiences, and digital visuals that help brands feel
          premium, clear, and memorable.
        </p>

        <div className="hero-actions">
          <a href="#Gallery" className="primary-cta">
            View Projects
          </a>
          <a href="#Contact" className="secondary-cta">
            Let&apos;s Work Together
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual reveal-up-delayed">
        <div className="portrait-card">
          <div className="portrait-glow" />
          <img src={image} alt="Sisay Tadesse portrait" className="profile-image" />
          <div className="floating-badge badge-top">Frontend + Branding</div>
          <div className="floating-badge badge-bottom">Based in Ethiopia</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
