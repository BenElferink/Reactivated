import { useRef } from 'react';

export default function Button({
  children,
  type,
  onClick,
  disabled,
  style,
  width,
  invertStyle,
  dark,
}) {
  const hoverRef = useRef(null);

  const buttonStyles = {
    opacity: disabled ? '0.3' : '1', // dynamic (props)
    width: width || 'unset', // dynamic (props)
    margin: '5px auto',
    padding: '12px 42px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: invertStyle ? 'transparent' : dark ? '#111' : 'var(--accentBlue)', // dynamic (props)
    border: dark ? 'none' : '1px solid var(--accentBlue)',
    borderRadius: '10px',
    color: 'var(--darkTextNeutral)',
    fontSize: '14px',
    position: 'relative',
    cursor: disabled ? 'not-allowed' : 'pointer', // dynamic (props)
  };

  const overlayStyles = {
    visibility: 'hidden', // dynamic (on hover)
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '7px',
    backgroundColor: invertStyle
      ? 'rgba(100, 100, 100, 0.1)'
      : dark
      ? 'rgba(70, 70, 70, 0.3)'
      : 'rgba(0, 0, 0, 0.2)', // dynamic (props)
  };

  const doHoverStyles = () => {
    hoverRef.current.style.visibility = 'visible';
  };

  const undoHoverStyles = () => {
    hoverRef.current.style.visibility = 'hidden';
  };

  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick ? onClick : () => null}
      disabled={disabled}
      style={{ ...buttonStyles, ...style }}
      onMouseEnter={doHoverStyles}
      onMouseLeave={undoHoverStyles}>
      <div ref={hoverRef} style={overlayStyles} />
      {children}
    </button>
  );
}
