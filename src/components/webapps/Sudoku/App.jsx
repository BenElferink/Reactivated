import { UsersContext } from '../../../ContextAPI';
import React, { useState } from 'react';
import './style/style.css';
import PersonalBest from './components/PersonalBest';
import Difficulty from './components/Difficulty';
import Game from './components/Game';

function CurrencyConverter({ setPage }) {
  React.useEffect(() => {
    setPage('/sudoku');
    // eslint-disable-next-line
  }, []);

  const context = React.useContext(UsersContext);
  const [loggedUser, setLoggedUser] = context.logged;

  // ----------
  // ---------------
  // APP START
  // ---------------
  // ----------

  const [startGame, setStartGame] = useState(false);
  const [difficulty, setDifficulty] = useState('normal');

  return (
    <div className='SUDOKU'>
      {!startGame && (
        <div className='start-group'>
          <PersonalBest user={loggedUser} difficulty={difficulty} />
          <Difficulty value={difficulty} setValue={setDifficulty} />
          <button
            onClick={() => {
              setStartGame(true);
            }}>
            Start Game
          </button>
        </div>
      )}
      <Game difficulty={difficulty} startGame={startGame} setStartGame={setStartGame} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
    </div>
  );
}

export default CurrencyConverter;
