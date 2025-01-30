import React, { useEffect } from 'react';
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "galleryp/IMG20230211124358_BURST003.jpg",
    "galleryp/IMG20230213132100.jpg",
    "galleryp/IMG20230211124714.jpg",
    "galleryp/IMG20230211120323_BURST009.jpg",
    "galleryp/20230211_120848.jpg",
    "galleryp/IMG_20230211_092831.jpg",
    "galleryp/IMG_4595.JPG",
    
    "galleryp/IMG_3692.JPG",
    "galleryp/IMG_4412.JPG",
    
    
    ""
  ];


  return (
    <div className="container">
      <h1>[G̲̅][a̲̅][l̲̅][l̲̅][e̲̅][r̲̅][y̲̅]</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Random ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
