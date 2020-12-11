import React, { useContext } from 'react';
import { UsersContext } from '../js/ContextAPI';
import { useHistory } from 'react-router-dom';
import LogoutIcon from './../media/icons/logout';

function Header({ toggleLoginModal, toggleContactModal }) {
  const history = useHistory();
  const context = useContext(UsersContext);
  const [loggedUser, setLoggedUser] = context.logged;
  const [users] = context.all;

  return (
    <header>
      <div className='user' onClick={toggleLoginModal}>
        <img src={loggedUser.avatar} alt='avatar' className='avatar' />
        {loggedUser.username}
      </div>
      <LogoutIcon
        className='logout'
        onClick={() => {
          setLoggedUser(users[0]);
          history.push('/');
        }}
      />
      <div className='contact-box'>
        <button onClick={toggleContactModal}>Contact Me</button>
      </div>
    </header>
  );
}

export default Header;
