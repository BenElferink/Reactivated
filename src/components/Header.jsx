import React, { useContext } from 'react';
import { UsersContext } from './../ContextAPI';

function Header({ toggleLoginModal, toggleContactModal }) {
  const context = useContext(UsersContext);
  const [loggedUser] = context.logged;

  return (
    <header>
      <div className='user' onClick={toggleLoginModal}>
        <img src={loggedUser.avatar} alt='avatar' className='avatar' />
        {loggedUser.username}
      </div>
      <div className='contact-box'>
        <button onClick={toggleContactModal}>Contact Me</button>
      </div>
    </header>
  );
}

export default Header;
