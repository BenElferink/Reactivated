import React, { useState, useEffect, useContext } from 'react';
import { UsersContext } from '../../ContextAPI';
import Modal from './Modal';
import PinCode from './PinCode';
import NewUser from './NewUser';

function Login({ toggleLoginModal }) {
  const context = useContext(UsersContext);
  const [loggedUser, setLoggedUser] = context.logged;
  const [users, setUsers] = context.all;
  const [createNew, setCreateNew] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [logInId, setLogInId] = useState(null);
  const [pinCode, setPinCode] = useState('');

  // this side effect keeps checking if the PIN code is correct,
  // checks upon each time the PIN is updated by the user
  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (user.id === logInId) {
        if (pinCode === user.pinCode) {
          setLoggedUser(user);
          setLogIn(false);
          setLogInId(null);
          setPinCode('');
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinCode]);

  // this function reqognizes if the clicked user is 'GUEST' or not,
  // if not 'GUEST', then proceed to PIN code verification,
  // if is 'GUEST', then just set user to 'GUEST'
  const clickLogIn = (user) => {
    if (user.id !== 0) {
      setLogInId(user.id);
      setLogIn(true);
    } else {
      setLoggedUser(user);
    }
  };

  return (
    <Modal toggleModal={toggleLoginModal}>
      {logIn && <PinCode value={pinCode} setValue={setPinCode} className='pin-log' isLogIn={true} />}
      {createNew ? (
        <NewUser users={users} setUsers={setUsers} setCreateNew={setCreateNew} />
      ) : (
        <div className='modal-login'>
          <h6>You are logged in as:</h6>
          <div className='user-card top-card'>
            <img src={loggedUser.avatar} alt='avatar' />
            <span>{loggedUser.username}</span>
          </div>
          <h6>Select a different user:</h6>
          <div className='users-wrap'>
            <div
              className='user-card'
              onClick={() => {
                setCreateNew(true);
              }}>
              <span className='plus'>+</span>
              New User
            </div>
            {users.map((user) =>
              user.id !== loggedUser.id ? (
                <div
                  key={user.id}
                  className='user-card'
                  onClick={() => {
                    clickLogIn(user);
                  }}>
                  <img src={user.avatar} alt='avatar' />
                  <span>{user.username}</span>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}

export default Login;
