import React from 'react';
import profilePhoto from '../img/Emojione_1F60E.png';

const highlights = [
  'Responsive web applications with modern React workflows',
  'Clean interfaces that balance usability and visual impact',
  'Creative support across branding, motion, and digital content',
];

const About = () => {
  return (
    <div className="content-block about-block">
      <div className="section-heading reveal-up">
        <p className="eyebrow">About Me</p>
        <h2>Turning ideas into polished digital experiences</h2>
      </div>

      <div className="about-grid">
        <div className="about-photo-frame reveal-up">
          <img src={profilePhoto} alt="Sisay Tadesse" className="about-photo" />
        </div>

        <div className="about-description reveal-up-delayed">
          <p>
            I&apos;m Sisay Tadesse, a developer and creative problem-solver focused on building digital
            work that feels both useful and impressive. I enjoy combining code, layout, and visual
            storytelling to create experiences people remember.
          </p>
          <p>
            My workflow blends frontend development, UI thinking, content presentation, and practical
            business awareness so each project feels intentional from first glance to final click.
          </p>

          <div className="highlight-list">
            {highlights.map((item) => (
              <div key={item} className="highlight-item">
                <span className="highlight-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
