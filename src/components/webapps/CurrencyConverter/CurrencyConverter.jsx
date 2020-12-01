import React, { useEffect } from 'react';
import './style/style.css';

function CurrencyConverter({ setPage }) {
  useEffect(() => {
    setPage('/currency-converter');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className='CurrencyConverter shade'></div>;
}

export default CurrencyConverter;
