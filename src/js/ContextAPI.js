import React, { useState, useEffect, createContext } from 'react';
import { getStorage, setStorage } from './localSotrage';
import Alien from './../media/images/avatar-alien.svg';

export const UsersContext = createContext();
export const UsersProvider = (props) => {
  // this state hold all users created,
  // upon first mount it checks if data exists in localSotrage,
  // if it doesn't exist, storage will be initialized with 'GUEST' account.
  const [users, setUsers] = useState(
    getStorage('Reactivated_Database', [
      {
        id: 0,
        username: 'GUEST',
        pinCode: '0000',
        avatar: Alien,
      },
    ])
  );

  // this side effect keeps localStorage saved with changes made to 'users'
  useEffect(() => {
    setStorage('Reactivated_Database', users);
  }, [users]);

  // this state holds the active user,
  // and provides it to the the whole app
  const [loggedUser, setLoggedUser] = useState({
    id: 0,
    username: 'GUEST',
    pinCode: '0000',
    avatar: Alien,
  });

  // this side effect updates 'users' with any changes made to 'loggedUser',
  // and maintains 'guest' account to remain wiped as default
  useEffect(() => {
    let userIndex = users.filter((user, i) => user.id === loggedUser.id && i);
    let usersCopy = [...users];
    usersCopy[userIndex] = loggedUser;
    usersCopy[0] = {
      id: 0,
      username: 'GUEST',
      pinCode: '0000',
      avatar: Alien,
    };
    setUsers(usersCopy);
    // eslint-disable-next-line
  }, [loggedUser]);

  return <UsersContext.Provider value={{ logged: [loggedUser, setLoggedUser, users], all: [users, setUsers] }}>{props.children}</UsersContext.Provider>;
};
