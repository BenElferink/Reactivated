import React from 'react';
import { currencies } from './js/currencies';

function CurrencyGroup({ selectedCurrency, selectorChange, inputValue, inputChange, readOnly }) {
  // loop through currencies, and if the looped currency is equal to the selected value, then set that flag
  const findFlag = () => {
    for (let i = 0; i < currencies.length; i++) {
      if (currencies[i].shortName === selectedCurrency) {
        return currencies[i].flag;
      }
    }
  };

  return (
    <div className='currency-group'>
      {/* map out my currencies, and thereby create a select -> option element */}
      <select value={selectedCurrency} onChange={selectorChange}>
        {currencies.map((currency, i) => (
          <option key={i} value={currency.shortName}>
            {currency.name}
          </option>
        ))}
      </select>

      {/* set flag by selected currency */}
      <img src={findFlag()} alt='flag' />

      {/* given through props, if true or false set a dedicated input (read or write) */}
      {readOnly ? <input placeholder='0' value={inputValue} readOnly className='readonly' /> : <input placeholder='0' value={inputValue} onChange={inputChange} />}
    </div>
  );
}

export default CurrencyGroup;
