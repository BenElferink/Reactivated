import React from 'react';
import UseFetch from './../hooks/UseFetch';

function Header({ exchangeRate }) {
  const { apiData, isLoading } = UseFetch('https://api.exchangeratesapi.io/latest');

  return (
    <p>
      {isLoading ? 'Loading...' : `Currencies last updated: ${apiData.date}`}
      <br />
      Exchange rate: {exchangeRate}
    </p>
  );
}

export default Header;
