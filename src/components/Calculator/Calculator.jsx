import React, { useEffect } from 'react';

function Calculator({ setPage }) {
  useEffect(() => {
    setPage('/calculator');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}

export default Calculator;
