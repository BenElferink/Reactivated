import React, { useEffect, useState, useContext } from 'react';
import { UsersContext, defineState } from './../../../ContextAPI';
import CurrencyGroup from './CurrencyGroup';
import SwapIcon from './media/swap-48px';

function Main({ exchangeRate, setExchangeRate }) {
  const context = useContext(UsersContext);
  const [loggedUser, setLoggedUser] = context.logged;
  useEffect(() => {
    let user = loggedUser;
    user.currencyData = {
      currencyFrom,
      currencyTo,
    };
    setLoggedUser(user);
  });

  // ----------
  // --------------------
  // APP START
  // --------------------
  // ----------

  const [currencyFrom, setCurrencyFrom] = useState(defineState(loggedUser, 'currencyData', 'currencyFrom', 'USD'));
  const [currencyTo, setCurrencyTo] = useState(defineState(loggedUser, 'currencyData', 'currencyTo', 'ILS'));
  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');

  const handleCurrencyFrom = (e) => {
    setCurrencyFrom(e.target.value);
  };

  const handleCurrencyTo = (e) => {
    setCurrencyTo(e.target.value);
  };

  const handleInputs = (e) => {
    setInputFrom(e.target.value);
  };

  const handleSwap = () => {
    let currencyOne = currencyFrom;
    let currencyTwo = currencyTo;
    setCurrencyFrom(currencyTwo);
    setCurrencyTo(currencyOne);
  };

  // fetch exchange rate between 2 currencies, through given API
  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${currencyFrom}&symbols=${currencyTo}`)
      .then((response) => response.json())
      .then((json) => {
        let exRate = json.rates[`${currencyTo}`];
        setExchangeRate(exRate);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyFrom, currencyTo, inputFrom]);

  // keep output update with each change to input or exRate
  useEffect(() => {
    if (inputFrom !== '') {
      let num = parseFloat(inputFrom);
      let exRate = parseFloat(exchangeRate);
      setInputTo(num * exRate);
    }
  }, [exchangeRate, inputFrom]);

  return (
    <div className='main'>
      <CurrencyGroup
        // source, write available
        selectedCurrency={currencyFrom}
        selectorChange={handleCurrencyFrom}
        inputValue={inputFrom}
        readOnly={false}
        inputChange={handleInputs}
      />
      <SwapIcon onClick={handleSwap} />
      <CurrencyGroup
        // output, readonly
        selectedCurrency={currencyTo}
        selectorChange={handleCurrencyTo}
        inputValue={inputTo}
        readOnly={true}
      />
    </div>
  );
}

export default Main;
