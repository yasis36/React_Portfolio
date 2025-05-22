import React from 'react';
// import './Service.css'; // Make sure to create and style this CSS file

import image1 from "../img/mobile_app_Dev.png";
import image2 from "../img/ui-ux-.jpg";
// import image3 from "../img/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";
import image4 from "../img/web-developers.png";
import image5 from "../img/Graphics_Design.jpeg";
import image6 from "../img/data-management.webp";
import image7 from "../img/video-editing.jpg";


const services = [
    {
        title: 'Mobile App Development',
        description: 'Creating mobile applications for Android and iOS.',
        imageUrl: image1,
        link: '#'
    },
    {
        title: 'UI/UX Design',
        description: 'Designing user-friendly and intuitive interfaces.',
        imageUrl: image2,
        link: '#'
    },
    
    {
        title: 'Web Development',
        description: 'Building responsive and modern websites.',
        imageUrl: image4,
        link: '#'
    },
    {
        title: 'Graphic Design',
        description: 'Creating stunning graphics and visuals.',
        imageUrl: image5,
        link: '#'
    },
    {
        title: 'Data Management',
        description: 'Improve the practice of organising, managing, and accessing data to support productivity, efficiency, and decision-making.',
        imageUrl: image6,
        link: '#'
    },
    {
       title: 'video-editing',
       description: 'Telling a story by cutting, arranging, and organizing digital footage to create compelling video content.',
       imageUrl: image7,
       link: '#'
    }
];

const Service = () => {
    return (
        <div className="service-container">
          <h2>My Service</h2>
  {Array.from({ length: Math.ceil(services.length / 3) }, (_, rowIndex) => (
    <div key={rowIndex} className="service-row">
      {services.slice(rowIndex * 3, rowIndex * 3 + 3).map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.imageUrl} alt={service.title} className="service-image" />
          <div class="overlay-text">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href={service.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

    );
};

export default Service;