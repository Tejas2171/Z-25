import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFirePreset } from "@tsparticles/preset-fire";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadFirePreset(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Error initializing tsParticles:", error);
      }
    };
    
    initParticles();
  }, []);

  // Using the fire preset options
  const options = {
    preset: "fire",
    background: {
      color: {
        value: "#000000", // Dark background for better fire effect
      },
    },
    particles: {
      number: {
        value: 800,
        density: {
          enable: true,
          area: 800,
        },
      },
      // You can override some of the fire preset options here
      move: {
        speed: 3,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    fpsLimit: 120,
    detectRetina: true,
  };

  return init ? (
    <Particles id={props.id} options={options} />
  ) : (
    <div>Loading...</div>
  );
};

export default ParticlesComponent;