import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const socials = [
  { icon: faLinkedin, href: 'https://www.linkedin.com' },
  { icon: faFacebook, href: 'https://www.facebook.com' },
  { icon: faInstagram, href: 'https://www.instagram.com' },
  { icon: faTwitter, href: 'https://www.twitter.com' },
  { icon: faYoutube, href: 'https://www.youtube.com' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="eyebrow">Sisay Tadesse</p>
          <h3>Built to present skills with more style, clarity, and confidence.</h3>
        </div>

        <div className="footer-meta">
          <div className="footer-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.href} className="soc-icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
          <p>&copy; 2026 Sisay Tadesse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
