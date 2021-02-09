import { useEffect, useRef, useState } from 'react';
import styles from './styles/Home.module.css';
import Particles from 'react-particles-js';

export default function Home() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mountRef = useRef(true);

  // this effect updates the Particles Canvas width && height upon resize
  // (and once on mount)
  useEffect(() => {
    const updateDimensions = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

    if (mountRef) updateDimensions();
    mountRef.current = false;

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <main>
      <Particles
        width={`${dimensions.width}px`}
        height={`${dimensions.height}px`}
        className={styles.particles}
        params={particleParams}
      />

      <div className={styles.heading}>
        <h2>Hi, my name is Ben Elferink,</h2>
        <h1>I'm a Web & App Developer!</h1>
        <p>Welcome to my portfolio!</p>
      </div>
    </main>
  );
}

const particleParams = {
  particles: {
    number: {
      value: 42,
    },
    color: {
      value: '#5778f2',
    },
    opacity: {
      value: 0.7,
    },
    size: {
      value: 3,
      anim: {
        enable: true,
        speed: 11,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: '#68c180',
      opacity: 0.5,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 5,
    },
  },

  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 420,
        line_linked: {
          opacity: 1,
        },
      },
    },
  },

  retina_detect: true,
};
