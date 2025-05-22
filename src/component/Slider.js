import React from "react";
// import "react-slideshow-image/dist/styles.css"; // Import slideshow styles

import { Fade } from "react-slideshow-image";

import image1 from "../img/Emojione_1F60E.png";
import image2 from "../img/07-01.jpg";
import image3 from "../img/shoping.jpg";

// import imgsrc from "components/img;"

const images = [image1, image2, image3];
   
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          {images.map((img, index) => (
            <div key={index} className="each-slide">
              <img class="img"
                src={img}
                alt={`Slides ${index + 1}`}
              />
            </div>
          ))}
        </Fade>
      </div>
    );
  };
  

export default Slideshow;