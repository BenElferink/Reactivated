import React, { useState, useEffect, createContext } from 'react';
import { checkLocalStorage, saveLocalStorage } from './js/localStorage';
import Alien from './media/images/avatar-alien.svg';

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  // this state hold all users created,
  // upon first mount it checks if data exists in localSotrage,
  // if it doesn't exist, storage will be initialized with 'GUEST' account.
  const [users, setUsers] = useState(
    checkLocalStorage('Reactivated_Database', [
      {
        id: 0,
        username: 'GUEST',
        pinCode: '0000',
        avatar: Alien,
      },
    ])
  );
  // this side effect keeps localStorage updated with changes made to 'users'
  useEffect(() => {
    saveLocalStorage('Reactivated_Database', users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  // this state holds the active user,
  // and provides it to the the whole app
  const [loggedUser, setLoggedUser] = useState({
    id: 0,
    username: 'GUEST',
    pinCode: '0000',
    avatar: Alien,
  });
  // this side effect updates 'users' with any changes made to 'loggedUser
  useEffect(() => {
    let userIndex = users.filter((user, i) => user.id === loggedUser.id && i);
    let usersCopy = [...users];
    usersCopy[userIndex] = loggedUser;
    setUsers(usersCopy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedUser]);

  return <UsersContext.Provider value={{ logged: [loggedUser, setLoggedUser, users], all: [users, setUsers] }}>{props.children}</UsersContext.Provider>;
};
