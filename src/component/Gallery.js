import React, { useState } from "react";
// import "./Gallery.css"; // Import CSS for styling
import image1 from "../img/Software Develpment.jpg";
import image2 from "../img/data-management.webp";
import image3 from "../img/Graphics_Design.jpeg";
import image4 from "../img/ui-ux-.jpg";
import image5 from "../img/AI.jpg";
import image6 from "../img/sb-blog-programming.png";
import image7 from "../img/video-editing.jpg";
import image8 from "../img/Digital Marketing.jpg";

const Gallery = () => {
  const galleries = [
    {
      id: 1,
      mainImage: image1,
      images: [
        image1,
        image2,
        image3,
        image4,
      ],
    },
    {
      id: 2,
      mainImage: image5,
      images: [
        image5,
        image6,
        image7,
        image8,
      ],
    },
    
    
    // Add more galleries as needed
  ];

  const [selectedGallery, setSelectedGallery] = useState(null);

  const openGallery = (gallery) => {
    setSelectedGallery(gallery);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
  };

  return (
    <div className="gallery-container">
      <h2> Gallery</h2>
      <div className="gallery-grid">
        {galleries.map((gallery) => (
          <div key={gallery.id} className="gallery-item">
            <img
              src={gallery.mainImage}
              alt={`Gallery ${gallery.id}`}
              onClick={() => openGallery(gallery)}
            />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedGallery && (
        <div className="modal-overlay" onClick={closeGallery}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeGallery}>
              ✖
            </button>
            <div className="modal-images">
              {selectedGallery.images.map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${selectedGallery.id} - ${index}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
