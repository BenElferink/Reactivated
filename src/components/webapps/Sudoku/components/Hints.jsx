import React from 'react';
import Icon from './../icons/LightBulb';

function Hints({ difficulty, hints, onClick }) {
  return (
    <div className='hints'>
      <button onClick={onClick}>Hint</button>
      {hints >= 1 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 2 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 3 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
    </div>
  );
}

export default Hints;
