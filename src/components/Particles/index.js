import Particles from 'react-particles-js';

export default function index() {
  const particles = {
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
      value: 5,
      anim: {
        enable: true,
        speed: 15,
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: '#68c180',
      opacity: 0.5,
      width: 0.5,
    },
  };

  const interactivity = {
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
        distance: 250,
        line_linked: {
          opacity: 1,
        },
      },
    },
  };

  const retina_detect = true;

  const particleStyles = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-999',
  };

  return <Particles style={particleStyles} params={{ particles, interactivity, retina_detect }} />;
}
