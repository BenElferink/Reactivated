import React, { useEffect } from 'react';
import './style/style.css';

function CurrencyConverter({ setPage }) {
  useEffect(() => {
    setPage('/sudoku');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className='Sudoku shade'></div>;
}

export default CurrencyConverter;
