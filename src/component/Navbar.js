import React, { useState } from 'react';
import logo from '../img/Emojione_1F60E.png';

const navLinks = [
  { title: 'Home', target: '#home' },
  { title: 'About', target: '#About' },
  { title: 'Services', target: '#Service' },
  { title: 'Skills', target: '#Skill' },
  { title: 'Projects', target: '#Gallery' },
  { title: 'Contact', target: '#Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="brand" type="button" onClick={() => handleScroll('#home')}>
          <img src={logo} className="brand-logo" alt="Sisay Tadesse avatar" />
          <span>
            <strong>Sisay Tadesse</strong>
            <small>Creative Developer</small>
          </span>
        </button>

        <div className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button
              key={link.title}
              type="button"
              className="nav-item"
              onClick={() => handleScroll(link.target)}
            >
              {link.title}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.title}
              type="button"
              className="mobile-nav-item"
              onClick={() => handleScroll(link.target)}
            >
              {link.title}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
