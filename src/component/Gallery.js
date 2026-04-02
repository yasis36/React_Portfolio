import React, { useState } from 'react';
import image1 from '../img/project/km1.png';
import image3 from '../img/project/km3.png';
import image4 from '../img/project/km4.png';
import image5 from '../img/project/km5.png';
import image6 from '../img/project/km6.png';
import image7 from '../img/project/lp1.png';
import image8 from '../img/project/lp2.png';
import image9 from '../img/project/lp3.png';
import image10 from '../img/project/lp4.png';
import image11 from '../img/project/lp5.png';
import image12 from '../img/project/lp6.png';
import image13 from '../img/project/lw1.png';
import image14 from '../img/project/lw2.png';
import image15 from '../img/project/lw3.png';
import image16 from '../img/project/lw4.png';
import image17 from '../img/project/lw5.png';
import image18 from '../img/project/lw6.png';

const galleries = [
  {
    id: 1,
    title: 'Technology Solutions Portfolio',
    summary: 'A bold multi-page company presentation focused on services, clarity, and trust.',
    mainImage: image1,
    images: [image1, image3, image4, image5, image6],
  },
  {
    id: 2,
    title: 'Personal Portfolio Concept',
    summary: 'A modern personal brand direction balancing personality, typography, and motion.',
    mainImage: image7,
    images: [image7, image8, image9, image10, image11, image12],
  },
  {
    id: 3,
    title: 'Landing Page Exploration',
    summary: 'High-impact landing screens designed to guide attention and increase engagement.',
    mainImage: image13,
    images: [image13, image14, image15, image16, image17, image18],
  },
];

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <div className="content-block gallery-block">
      <div className="section-heading reveal-up">
        <p className="eyebrow">Projects</p>
        <h2>Selected visual work and interface explorations</h2>
      </div>

      <div className="gallery-grid">
        {galleries.map((gallery) => (
          <article
            key={gallery.id}
            className="gallery-item reveal-up"
            onClick={() => setSelectedGallery(gallery)}
          >
            <img src={gallery.mainImage} alt={gallery.title} />
            <div className="gallery-copy">
              <h3>{gallery.title}</h3>
              <p>{gallery.summary}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedGallery && (
        <div className="modal-overlay" onClick={() => setSelectedGallery(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="close-btn"
              onClick={() => setSelectedGallery(null)}
            >
              Close
            </button>
            <h3>{selectedGallery.title}</h3>
            <div className="modal-images">
              {selectedGallery.images.map((img, index) => (
                <img key={`${selectedGallery.id}-${index}`} src={img} alt={`${selectedGallery.title} ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
