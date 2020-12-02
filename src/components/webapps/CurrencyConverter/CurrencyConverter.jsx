// API source: https://exchangeratesapi.io
import React, { useEffect, useState, useContext } from 'react';
import { UsersContext } from './../../../ContextAPI';
import defineState from './../defineState';
import './style/style.css';
import CurrencyGroup from './CurrencyGroup';
import SwapIcon from './media/swap-48px';
import logo from './media/logo-ECB-821px.png';

function CurrencyConverter({ setPage }) {
  useEffect(() => {
    setPage('/currency-converter');

    fetch('https://api.exchangeratesapi.io/latest')
      .then((response) => response.json())
      .then((json) => setUpdatedDate(json.date));
    // eslint-disable-next-line
  }, []);

  const context = useContext(UsersContext);
  const [loggedUser, setLoggedUser] = context.logged;
  useEffect(() => {
    return () => {
      let user = loggedUser;
      user.currencyData = {
        currencyFrom,
        currencyTo,
      };
      setLoggedUser(user);
    };
  });

  // ----------
  // --------------------
  // APP START
  // --------------------
  // ----------

  const [updatedDate, setUpdatedDate] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState(defineState(loggedUser, 'currencyData', 'currencyFrom', 'USD'));
  const [currencyTo, setCurrencyTo] = useState(defineState(loggedUser, 'currencyData', 'currencyTo', 'ILS'));
  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');

  // fetch exchange rate between 2 currencies, through given API
  // runs on every change made to selected currencies and/or given input
  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${currencyFrom}&symbols=${currencyTo}`)
      .then((response) => response.json())
      .then((json) => {
        let exRate = json.rates[`${currencyTo}`];
        setExchangeRate(exRate);
        // keep output updated
        if (inputFrom !== '') {
          setInputTo(parseFloat(inputFrom) * parseFloat(exRate));
        }
      });
  });

  const handleSwap = () => {
    let currencyOne = currencyFrom;
    let currencyTwo = currencyTo;
    setCurrencyFrom(currencyTwo);
    setCurrencyTo(currencyOne);
  };

  return (
    <div className='CurrencyConverter'>
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
