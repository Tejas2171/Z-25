import React, { useState } from 'react';
import  "./Gallery.css";

const Gallery = () => {
    

  const images=[
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
    "https://picsum.photos/400/400?random=5",
    "https://picsum.photos/400/400?random=6",
    "https://picsum.photos/400/400?random=7",
    "https://picsum.photos/600/400?random=8",
    "https://picsum.photos/600/400?random=9",
    "https://picsum.photos/300/200?random=10",
    "https://picsum.photos/300/200?random=11",
    "https://picsum.photos/300/200?random=12",
    "https://picsum.photos/300/200?random=13",
  ]

  return (
    <>
      <div>
        <div id="img-js">
          <div className="container">
            <h1>[G̲̅][a̲̅][l̲̅][l̲̅][e̲̅][r̲̅][y̲̅]</h1>
            <div className="image-gallery">
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Random ${index}`} />
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Gallery;
