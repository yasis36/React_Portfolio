import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faCss3Alt, faHtml5, faPython, faJava, faCuttlefish,faWordpress, faFigma,faJoomla } from '@fortawesome/free-brands-svg-icons';

const skills = [
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'CSS',  icon: faCss3Alt },
    { name: 'HTML',  icon: faHtml5 },
    { name: 'Python',  icon: faPython },
    { name: 'Java',icon: faJava },
    { name: 'C++',  icon: faCuttlefish },
    { name: 'Wordpress',  icon:faWordpress},
    { name: 'Figma',  icon:faFigma},
    { name: 'Joomla',  icon:faJoomla},


    
    ];


 const Skill = () => {
    // const [currentSkillIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    //     }, 3000); // Change skill every 2 seconds

    //     return () => clearInterval(interval);
    // }, []);

    return (
        
        <div className="skill-container" >
            <h2>My Skills</h2>
            <div className="skill-slide">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='skill-item'
                    >
                        
                        <div className="skill-name">
                            <FontAwesomeIcon icon={skill.icon} className="skill-icon"/> {skill.name}
                        </div>
                      
                        </div>
                ))}
            </div>
                      
        </div>
        
        
    );
};

export default Skill;