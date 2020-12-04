import React from 'react';

function Display({ prevNumber, currNumber, selectedOperator }) {
  return (
    <div className='display'>
      <input className='prev' value={prevNumber} readOnly />
      <input className='opr' value={selectedOperator} readOnly />
      <input className='curr' value={currNumber} readOnly />
    </div>
  );
}

export default Display;
