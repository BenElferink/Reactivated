import logo from './Alien.svg';
import './Alien.css';

function Alien() {
  return (
    <div className='Alien'>
      <img src={logo} className='Alien-logo' alt='Alien' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default Alien;
