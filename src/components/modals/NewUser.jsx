import React, { useState } from 'react';
import PinCode from './PinCode';
import MaleAvatar from './../../media/images/avatar-male.svg';
import FemaleAvatar from './../../media/images/avatar-female.svg';
import PandaAvatar from './../../media/images/avatar-panda.svg';
import PooAvatar from './../../media/images/avatar-poo.svg';
import AlienAvatar from './../../media/images/avatar-alien.svg';
import GamepadAvatar from './../../media/images/avatar-gamepad.svg';

function NewUser({ users, setUsers, setCreateNew }) {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [pinCode, setPinCode] = useState('');

  // this function is called when clicking the 'create' button,
  // it verifies if all required data is given, and correct,
  // if verification returns 'true', then the user is created and given to ContextAPI,
  // if verification returns 'false', then the user will be alerted with the regarding errors.
  const clickCreate = () => {
    let isOkayUsername = () => {
      if (username !== '') {
        for (let i = 0; i < users.length; i++) {
          let user = users[i];
          if (user.name === username) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    };
    let isOkayAvatar = avatar !== '' ? true : false;
    let isOkayPinCode = pinCode.length === 4 ? true : false;

    if (isOkayUsername() && isOkayAvatar && isOkayPinCode) {
      let usersCopy = [...users];
      let user = {
        id: users.length,
        username: username,
        pinCode: pinCode,
        avatar: avatar,
      };
      usersCopy.push(user);
      setUsers(usersCopy);
      setCreateNew(false);
    } else {
      window.alert(
        `Failed to create a user!
        ${!isOkayUsername() ? '• Username cannot be blank, or previously used.' : '• Username: OK!'}
        ${!isOkayAvatar ? '• Please pick an avatar.' : '• Avatar: OK!'}
        ${!isOkayPinCode ? '• Please create a 4 digit PIN code.' : '• PIN Code: OK!'}`
      );
    }
  };

  return (
    <div className='modal-new-user'>
      <div className='left'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div className='avatars-wrapper'>
          <img
            src={MaleAvatar}
            alt='avatar'
            className={`avatar ${avatar === MaleAvatar && 'selected'}`}
            onClick={() => {
              setAvatar(MaleAvatar);
            }}
          />
          <img
            src={FemaleAvatar}
            alt='avatar'
            className={`avatar ${avatar === FemaleAvatar && 'selected'}`}
            onClick={() => {
              setAvatar(FemaleAvatar);
            }}
          />
          <img
            src={PandaAvatar}
            alt='avatar'
            className={`avatar ${avatar === PandaAvatar && 'selected'}`}
            onClick={() => {
              setAvatar(PandaAvatar);
            }}
          />
          <img
            src={PooAvatar}
            alt='avatar'
            className={`avatar ${avatar === PooAvatar && 'selected'}`}
            onClick={() => {
              setAvatar(PooAvatar);
            }}
          />
          <img
            src={AlienAvatar}
            alt='avatar'
            className={`avatar ${avatar === AlienAvatar && 'selected'}`}
            onClick={() => {
              setAvatar(AlienAvatar);
            }}
          />
          <img
            src={GamepadAvatar}
            alt='avatar'
            className={`avatar ${avatar === GamepadAvatar && 'selected'}`}
            onClick={() => {
              setAvatar(GamepadAvatar);
            }}
          />
        </div>
      </div>
      <div className='right'>
        <PinCode value={pinCode} setValue={setPinCode} className='pin-new' />
        <button
          className='create'
          onClick={clickCreate}
          // disabled={username !== '' && avatar !== '' && pinCode.length === 4 ? false : true}
          style={{ cursor: username !== '' && avatar !== '' && pinCode.length === 4 ? 'pointer' : 'not-allowed' }}>
          Create
        </button>
      </div>
    </div>
  );
}

export default NewUser;
