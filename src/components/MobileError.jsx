import React from 'react';
import NoMobile from './../media/images/no-mobile.svg';

function MobileError() {
  return (
    <div className='mobile-error'>
      <img src={NoMobile} alt='NO MOBILE SUPPORT' />
      <p>
        Reactivated.io does not support mobile yet,
        <br />
        please use a larger screen (min-width 768px)
      </p>
    </div>
  );
}

export default MobileError;
