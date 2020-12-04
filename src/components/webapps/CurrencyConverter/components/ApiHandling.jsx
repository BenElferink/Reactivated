import defineState from '../../defineState';
import { UsersContext } from '../../../../ContextAPI';
// API source: https://exchangeratesapi.io
import React, { useState, useEffect } from 'react';
import CurrencyGroup from './CurrencyGroup';
import SwapIcon from './../media/swap-48px';

function ApiHandling() {
  const context = React.useContext(UsersContext);
  const [loggedUser, setLoggedUser] = context.logged;
  React.useEffect(() => {
    let user = loggedUser;
    user.currencyData = {
      currencyFrom,
      currencyTo,
      inputFrom,
    };
    setLoggedUser(user);
  });

  // ----------
  // ---------------
  // APP START
  // ---------------
  // ----------

  useEffect(() => {
    fetchDate();
    fetchExchangeRate();
  });

  const [updatedDate, setUpdatedDate] = useState(null);
  const [exchangeRate, setExchangeRate] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState(defineState(loggedUser, 'currencyData', 'currencyFrom', 'USD'));
  const [currencyTo, setCurrencyTo] = useState(defineState(loggedUser, 'currencyData', 'currencyTo', 'ILS'));
  const [inputFrom, setInputFrom] = useState(defineState(loggedUser, 'currencyData', 'inputFrom', ''));
  const [inputTo, setInputTo] = useState('');

  async function fetchDate() {
    let response = await fetch('https://api.exchangeratesapi.io/latest');
    let data = await response.json();
    setUpdatedDate(data.date);
  }

  async function fetchExchangeRate() {
    let response = await fetch(`https://api.exchangeratesapi.io/latest?base=${currencyFrom}&symbols=${currencyTo}`);
    let data = await response.json();
    let exRate = data.rates[`${currencyTo}`];
    setExchangeRate(exRate);
    // keep output updated
    if (inputFrom !== '') {
      setInputTo(parseFloat(inputFrom) * parseFloat(exRate));
    }
  }

  const handleSwap = () => {
    let currencyOne = currencyFrom;
    let currencyTwo = currencyTo;
    setCurrencyFrom(currencyTwo);
    setCurrencyTo(currencyOne);
  };

  return (
    <>
      <p>
        Currencies last updated: {updatedDate}
        <br />
        Exchange rate: {exchangeRate}
      </p>
      <div className='main'>
        <CurrencyGroup
          // source, write available
          selectedCurrency={currencyFrom}
          selectorChange={(e) => {
            setCurrencyFrom(e.target.value);
          }}
          inputValue={inputFrom}
          readOnly={false}
          inputChange={(e) => {
            setInputFrom(e.target.value);
          }}
        />
        <SwapIcon onClick={handleSwap} />
        <CurrencyGroup
          // output, readonly
          selectedCurrency={currencyTo}
          selectorChange={(e) => {
            setCurrencyTo(e.target.value);
          }}
          inputValue={inputTo}
          readOnly={true}
        />
      </div>
    </>
  );
}

export default ApiHandling;
