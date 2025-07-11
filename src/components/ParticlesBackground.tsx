import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.3,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 50, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
