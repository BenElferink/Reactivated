import { useState, useEffect, useRef } from 'react';

export default function Modal({ closeModal, children, width }) {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => setOpacity(1), []);

  const bgStyles = {
    opacity: opacity,
    zIndex: '999',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'opacity 0.3s linear',
  };

  const modalStyles = {
    minHeight: '100px',
    width: width || '420px',
    padding: '20px 25px',
    backgroundColor: 'var(--darkBg)',
    boxShadow: '0 0 42px #000',
    borderRadius: '1rem',
    color: 'var(--darkTextSoft)',
    position: 'relative',
  };

  return (
    <div style={bgStyles}>
      <div style={modalStyles}>
        <CloseButton closeModal={closeModal} />

        {children}
      </div>
    </div>
  );
}

function CloseButton({ closeModal }) {
  const ref = useRef(null);

  const closeStyles = {
    width: '24px',
    padding: '1px',
    position: 'absolute',
    top: '7px',
    right: '7px',
    backgroundColor: 'var(--accentRed)',
    border: 'none',
    borderRadius: '100%',
    color: 'var(--darkBgDarker)',
    fontSize: '19px',
    fontWeight: '600',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const doHoverStyles = () => (ref.current.style.backgroundColor = '#c83232');
  const undoHoverStyles = () => (ref.current.style.backgroundColor = 'var(--accentRed)');

  return (
    <button
      ref={ref}
      style={closeStyles}
      onClick={closeModal}
      onMouseEnter={doHoverStyles}
      onMouseLeave={undoHoverStyles}>
      &times;
    </button>
  );
}
