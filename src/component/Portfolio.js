import React from 'react';
import image1 from '../img/mobile_app_Dev.png';
import image2 from '../img/ui-ux-.jpg';
import image4 from '../img/web-developers.png';
import image5 from '../img/Graphics_Design.jpeg';
import image6 from '../img/data-management.webp';
import image7 from '../img/video-editing.jpg';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Cross-platform product experiences built for smooth performance and clean user journeys.',
    imageUrl: image1,
  },
  {
    title: 'UI / UX Design',
    description: 'Interfaces that look premium, feel intuitive, and guide users with confidence.',
    imageUrl: image2,
  },
  {
    title: 'Web Development',
    description: 'Responsive websites crafted to communicate clearly and leave a stronger first impression.',
    imageUrl: image4,
  },
  {
    title: 'Graphic Design',
    description: 'Visual assets and branded materials that add style, personality, and consistency.',
    imageUrl: image5,
  },
  {
    title: 'Data Management',
    description: 'Well-organized information systems that support better decisions and smoother operations.',
    imageUrl: image6,
  },
  {
    title: 'Video Editing',
    description: 'Short-form and promotional edits shaped to tell a clear story and keep attention.',
    imageUrl: image7,
  },
];

const Service = () => {
  return (
    <div className="content-block">
      <div className="section-heading reveal-up">
        <p className="eyebrow">Services</p>
        <h2>Creative and technical support across the full digital presence</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card reveal-up">
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <div className="service-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Service;
