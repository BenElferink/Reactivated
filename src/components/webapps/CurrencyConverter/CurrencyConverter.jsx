// API source: https://exchangeratesapi.io
import React, { useEffect, useState } from 'react';
import './style/style.css';
import Main from './Main.jsx';
import logo from './media/logo-ECB-821px.png';

function CurrencyConverter({ setPage }) {
  useEffect(() => {
    setPage('/currency-converter');

    fetch('https://api.exchangeratesapi.io/latest')
      .then((response) => response.json())
      .then((json) => setUpdatedDate(json.date));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [updatedDate, setUpdatedDate] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');

  return (
    <div className='CurrencyConverter'>
      <p>
        Currencies last updated: {updatedDate}
        <br />
        Exchange rate: {exchangeRate}
      </p>
      <Main exchangeRate={exchangeRate} setExchangeRate={setExchangeRate} />
      <div className='footer'>
        <img src={logo} alt='ECB_logo' />
        Exchange rates provided by
        <a href='https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html' target='blank'>
          European Central Bank
        </a>
        &copy; Ben Elferink 2020
      </div>
    </div>
  );
}

export default CurrencyConverter;
