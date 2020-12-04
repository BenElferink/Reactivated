import React from 'react';

function TableDataButton({ className, onClick, value, children }) {
  return (
    <td>
      <button
        className={className}
        onClick={() => {
          onClick(value);
        }}>
        {children}
      </button>
    </td>
  );
}

export default TableDataButton;
