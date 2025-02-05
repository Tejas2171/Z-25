import React, { useState } from 'react';
import { useEffect } from 'react';

import  "./Gallery.css";

const Gallery = () => {
    

  const images=[
    "images/1.webp",
    "images/2.webp",
    "images/3.webp",
    "images/4.webp",
    "images/5.webp",
    "images/6.webp",
    "images/7.webp",
    "images/8.webp",
    "images/9.webp",
    "images/10.webp",
    "images/11.webp",
    "images/12.webp",
    "images/13.webp",
    "images/14.webp",
    "images/15.webp",
    "images/16.webp",
    "images/17.webp",
    "images/18.webp",
    "images/19.webp",
    "images/20.webp",
    "images/21.webp",
    "images/22.webp",
    "images/23.webp",
    "images/24.webp",
    "images/25.webp",
    "images/26.webp",
    "images/27.webp",
    "images/28.webp",
    "images/29.webp",
    "images/30.webp",
    "images/31.webp",
    "images/32.webp",
    "images/33.webp",
    "images/34.webp",
    "images/35.webp",
    "images/36.webp",
    
  ]

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []); // Runs only once when component mounts

  return (
    <div className="gallery_g">
    <div className="Gallery_g">
      <h1 className="title_g">GALLERY</h1>
      <div className="image-gallery_g" >
        {shuffledImages.map((image, index) => (
          <div key={index} className="image-item_g" >
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;