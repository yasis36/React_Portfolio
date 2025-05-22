import React from 'react';
// import './About.css'; // Make sure to create and style this CSS file
import profilePhoto from "../img/Emojione_1F60E.png"; // Update the path to your photo

const About = () => {
    return (
        <div className="about-container">
            <div className="about-photo">
                <img src={profilePhoto} alt="Profile" />
            </div>
            <div className="about-description">
                <h1>About Me</h1>
                <p>
                    Hello! I am [Sisay Tadesse], a passionate software developer with experience in building web applications using modern technologies like React, Node.js, and more. I love to create efficient and scalable solutions to solve real-world problems.
                </p>
                <p>
                    In my free time, I enjoy learning new programming languages, contributing to open-source projects, and exploring the latest trends in technology.
                </p>
            </div>
        </div>
        
    );
};

export default About;