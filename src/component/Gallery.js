import React, { useState } from "react";
// import "./Gallery.css"; // Import CSS for styling
import image1 from "../img/project/km1.png";
import image3 from "../img/project/km3.png";
import image4 from "../img/project/km4.png";
import image5 from "../img/project/km5.png";
import image6 from "../img/project/km6.png";
import image7 from "../img/project/lp1.png";
import image8 from "../img/project/lp2.png";
import image9 from "../img/project/lp3.png";
import image10 from "../img/project/lp4.png";
import image11 from "../img/project/lp5.png";
import image12 from "../img/project/lp6.png";
import image13 from "../img/project/lw1.png";
import image14 from "../img/project/lw2.png";
import image15 from "../img/project/lw3.png";
import image16 from "../img/project/lw4.png";
import image17 from "../img/project/lw5.png";
import image18 from "../img/project/lw6.png";





const Gallery = () => {
  const galleries = [
    {
      id: 1,
      title: "Tchnology Solutions Portflio",
      mainImage: image1,
      images: [
        image1,
        image3,
        image4,
        image5,
        image6,
      ],
    },
    {
      id: 2,
      title: "Personal Portflio",
      mainImage: image7,
      images: [
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
      ],
    },
     {
      id: 3,
      title: "Personal Portflio",
      mainImage: image13,
      images: [
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
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
      <h2> Gallery of My Work </h2>
      <div className="gallery-grid">
        {galleries.map((gallery) => (
          <div key={gallery.id} className="gallery-item">
            <img
              src={gallery.mainImage}
              alt={`Gallery ${gallery.id}`}
              onClick={() => openGallery(gallery)}
            />
            <p className="gallery_title"> {gallery.title}</p>

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
