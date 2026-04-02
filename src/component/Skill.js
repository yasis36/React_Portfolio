import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faNodeJs,
  faCss3Alt,
  faHtml5,
  faPython,
  faJava,
  faWordpress,
  faFigma,
  faJoomla,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPalette } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'HTML', icon: faHtml5 },
  { name: 'Python', icon: faPython },
  { name: 'Java', icon: faJava },
  { name: 'Database Design', icon: faDatabase },
  { name: 'WordPress', icon: faWordpress },
  { name: 'Figma', icon: faFigma },
  { name: 'Joomla', icon: faJoomla },
  { name: 'Brand Styling', icon: faPalette },
];

const Skill = () => {
  return (
    <div className="content-block skill-block">
      <div className="section-heading reveal-up">
        <p className="eyebrow">Skills</p>
        <h2>Tools and capabilities I use to turn concepts into finished work</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item reveal-up">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
