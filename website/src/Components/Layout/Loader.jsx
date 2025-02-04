import { useEffect, useRef } from 'react';
import './Loader.css';  // Import the CSS file for styles

const Loader = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Autoplay blocked:", error));
    }
  }, []);
  return (
    <div className="loader-container">
      <video className="loader-video" autoPlay loop muted playsInline disableRemotePlayback>
        <source src="videos/Mashsal1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="zest-container">
        <span className="letter">Z</span>
        <span className="letter">E</span>
        <span className="letter">S</span>
        <span className="letter">T</span>
        <span className="letter">{'`'}</span>
        <span className="letter">2</span>
        <span className="letter">5</span>
        
      </div>

    </div>
  );
};

export default Loader;