import { useState, useRef } from 'react';

export default function TextArea({ label, required, name, value, onChange, formChange, width }) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null),
    focusOnInput = () => ref.current.focus();

  const groupStyles = {
    position: 'relative',
    width: width || '100%',
    margin: '5px auto',
    backgroundColor: 'var(--darkBgDarker)',
    border: `1px solid ${isFocused ? 'var(--accentGreen)' : 'var(--accentBlue)'}`, // dynamic (on focus)
    borderRadius: '5px',
    cursor: 'text',
    transition: 'all 0.2s',
  };

  const inputStyles = {
    width: '98%',
    margin: '18px 5px 3px 5px', // defines the group (div) dimensions
    backgroundColor: 'transparent',
    border: 'none',
    color: 'var(--darkTextBold)',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.2s',
  };

  const labelStyles = {
    position: 'absolute',
    top: isFocused || value ? '3px' : '10px', // dynamic (on focus OR not empty)
    left: isFocused || value ? '5px' : '10px', // dynamic (on focus OR not empty)
    fontSize: isFocused || value ? '12px' : '16px', // dynamic (on focus OR not empty)
    backgroundColor: 'transparent',
    color: 'var(--darkTextSoft)',
    cursor: 'text',
    transition: 'all 0.2s',
  };

  return (
    <div style={groupStyles} onClick={focusOnInput}>
      <textarea
        ref={ref}
        style={{ ...inputStyles, resize: 'none' }}
        rows='1'
        required={required}
        name={name}
        value={value}
        onChange={(e) => {
          formChange ? formChange(e) : onChange(e.target.value);
          // The following auto-resizes the textarea to the number of rows typed
          ref.current.style.height = 'auto';
          ref.current.style.padding = '0';
          ref.current.style.height = `${ref.current.scrollHeight}px`;
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <label style={labelStyles} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
