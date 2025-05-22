import React from "react";
import { motion } from "framer-motion";

const Image = () => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="gallery-item"
          animate={{ y: [0, -15, 0] }} // Moves up and down
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={img} alt={`Gallery ${index}`} className="dribble-icon" />
        </motion.div>
      ))}
    </div>
  );
};

export default Image;
