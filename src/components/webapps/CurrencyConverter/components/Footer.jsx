import React from 'react';
import logo from './../media/logo-ECB-821px.png';

function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt='ECB_logo' />
      Exchange rates provided by
      <a href='https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html' target='blank'>
        European Central Bank
      </a>
      &copy; Ben Elferink 2020
    </div>
  );
}

export default Footer;
