import React, { useEffect } from 'react';

function CurrencyConverter({ setPage }) {
  useEffect(() => {
    setPage('/currency-converter');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}

export default CurrencyConverter;
