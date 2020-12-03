import React, { useState, useEffect, createContext } from 'react';
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

  // this side effect keeps localStorage saved with changes made to 'users'
  useEffect(() => {
    localStorage.setItem('Reactivated_Database', JSON.stringify(users));
    // eslint-disable-next-line
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

// this function checks if any data exists in localStorage with the given key,
// if no data exists by that key, a standard data structure is given instead
function checkLocalStorage(key, initialize) {
  let roomsStorage = JSON.parse(localStorage.getItem(key));
  if (roomsStorage == null) {
    return initialize;
  } else {
    return roomsStorage;
  }
}
