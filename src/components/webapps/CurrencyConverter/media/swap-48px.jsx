import React from 'react';

function Swap({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className='swap-icon'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'>
      <g fill='#000000'>
        <path d='M32 34.02V20h-4v14.02h-6L30 42l8-7.98h-6zM18 6l-8 7.98h6V28h4V13.98h6L18 6z' />
      </g>
    </svg>
  );
}

export default Swap;
