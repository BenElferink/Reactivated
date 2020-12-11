import React, { useState, useEffect } from 'react';
import { UsersContext } from '../../../js/ContextAPI';
import defineState from '../defineState';
import './style/style.css';
import Header from './components/Header';
import CurrencyGroup from './components/CurrencyGroup';
import SwapIcon from './media/swap-48px';
import Footer from './components/Footer';

function CurrencyConverter() {
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

  // API source: https://exchangeratesapi.io
  const [currencyFrom, setCurrencyFrom] = useState(defineState(loggedUser, 'currencyData', 'currencyFrom', 'USD'));
  const [currencyTo, setCurrencyTo] = useState(defineState(loggedUser, 'currencyData', 'currencyTo', 'ILS'));
  const [inputFrom, setInputFrom] = useState(defineState(loggedUser, 'currencyData', 'inputFrom', ''));
  const [inputTo, setInputTo] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');

  useEffect(() => {
    const doFetch = async () => {
      try {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${currencyFrom}&symbols=${currencyTo}`);
        const data = await response.json();
        console.log(`✅ -FETCHED- :`, data);

        // exchange rate
        let exRate = data.rates[`${currencyTo}`];
        setExchangeRate(exRate);
        if (inputFrom !== '') {
          // keep output updated
          setInputTo(parseFloat(inputFrom) * parseFloat(exRate));
        }
      } catch (error) {
        console.warn(error);
      }
    };

    doFetch();
  }, [currencyFrom, currencyTo, inputFrom]);

  const handleSwap = () => {
    let currencyOne = currencyFrom;
    let currencyTwo = currencyTo;
    setCurrencyFrom(currencyTwo);
    setCurrencyTo(currencyOne);
  };

  return (
    <div className='CURRENCY-CONVERTER'>
      <Header exchangeRate={exchangeRate} />
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
      <Footer />
    </div>
  );
}

export default CurrencyConverter;
