import React, { useState, useEffect } from 'react';
import SudokuCreate from './../js/sudokuAlgorithm';
import { duplicateMatrix, filterMatrixByDifficulty } from './../js/matrixFunctions';
import Timer from './Timer';
import Hints from './Hints';
import NumberWidget from './NumberWidget';

function Game({ difficulty, startGame, setStartGame, loggedUser, setLoggedUser }) {
  const [rawMatrix, setRawMatrix] = useState(new Array(9).fill(new Array(9).fill(''))); // original matrix, has all data
  const [diffMatrix, setDiffMatrix] = useState(new Array(9).fill(new Array(9).fill(''))); // filtered by difficulty, kept for reset purpose
  const [dispMatrix, setDispMatrix] = useState(new Array(9).fill(new Array(9).fill(''))); // displayed matrix, manipulated by user
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [hints, setHints] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [resetCount, setResetCount] = useState(0);
  const [isSetNumMode, setIsSetNumMode] = useState(false); // reveals NumberWidget
  const [clickedCell, setClickedCell] = useState({ i: null, j: null }); // cell cordinates for NumberWidget
  const [mousePosition, setMousePosition] = useState({ x: null, y: null }); // click cordinates for NumberWidget

  // this side effect is used when 'startGame' is toggled to 'true',
  // it creates and sets all 3 required matrixes, and sets timer & hints
  useEffect(() => {
    if (startGame) {
      let sudokuMatrix = SudokuCreate(9);
      let filteredMatrix = filterMatrixByDifficulty(duplicateMatrix(sudokuMatrix), difficulty);
      setRawMatrix(sudokuMatrix);
      setDiffMatrix(filteredMatrix);
      setDispMatrix(duplicateMatrix(filteredMatrix));
      setTimer({ minutes: 0, seconds: 0 });
      setHints(difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : console.warn('DEV ERROR'));
    }
    // eslint-disable-next-line
  }, [startGame]);

  // ----------
  // ---------------
  // Functions for: game interactions
  // ---------------
  // ----------

  const clickHint = () => {
    if (hints > 0) {
      // allow the 'while' loop only if game-board is NOT complete
      let runLoop = false;
      dispMatrix.forEach((row) => {
        row.forEach((col) => {
          if (col === '') {
            runLoop = true;
          }
        });
      });

      // target random cell from displayed matrix, and if it's empty reveal it's number according to raw matrix.
      while (runLoop) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (dispMatrix[i][j] === '') {
          let revealNumber = rawMatrix[i][j];
          let copyOfDisplayedMatrix = duplicateMatrix(dispMatrix);
          copyOfDisplayedMatrix[i][j] = revealNumber;
          setDispMatrix(copyOfDisplayedMatrix);
          setHintsUsed(hintsUsed + 1);
          setHints(hints - 1);
          break;
        }
      }
    }
  };

  const clickCell = (e, i, j) => {
    setClickedCell({ i: i, j: j });
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsSetNumMode(true);
  };

  const clickNumberOnWidget = (num) => {
    let copyOfDisplayedMatrix = duplicateMatrix(dispMatrix);
    copyOfDisplayedMatrix[clickedCell.i][clickedCell.j] = num;
    setDispMatrix(copyOfDisplayedMatrix);
    setIsSetNumMode(false);
  };

  // ----------
  // ---------------
  // Functions for: control buttons
  // ---------------
  // ----------

  const clickGiveUp = () => {
    setIsSetNumMode(false);
    setStartGame(false);
  };

  const clickReset = () => {
    setIsSetNumMode(false);
    setDispMatrix(duplicateMatrix(diffMatrix));
    setTimer({ minutes: 0, seconds: 0 });
    setHints(difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : console.warn('DEV ERROR'));
    setResetCount(resetCount + 1);
  };

  const clickSolve = () => {
    let isSuccess = true,
      copyOfDisplayedMatrix = duplicateMatrix(dispMatrix);

    // target each cell of the displayed matrix, and compare with the same cell on the raw matrix,
    // return false only if an error has been reqognized
    dispMatrix.forEach((row, i) => {
      row.forEach((col, j) => {
        if (col !== rawMatrix[i][j]) {
          copyOfDisplayedMatrix[i][j] = '';
          isSuccess = false;
        }
      });
    });

    if (isSuccess) {
      window.alert('Congratulations! You finished the puzzle!');
      let currentGameData = { difficulty, timer, hintsUsed, resetCount };
      let user = loggedUser;

      // to store the game data, check if any data exists already on user,
      // if not, just set the data,
      if (user.sudokuData === undefined) {
        user.sudokuData = { [`${difficulty}`]: currentGameData };
        setLoggedUser(user);
      } else {
        // if data exists, compare fastest time for the selected difficulty by:
        // reference 1 - fastest alltime, meaning minutes are beat!
        // reference 2 - fastest by seconds only, but the minutes are equal
        let currentMin = timer.minutes,
          currentSec = timer.seconds,
          storedMin = user.sudokuData[`${difficulty}`].timer.minutes,
          storedSec = user.sudokuData[`${difficulty}`].timer.seconds;
        if (currentMin < storedMin) {
          // reference 1
          user.sudokuData[`${difficulty}`] = currentGameData;
          setLoggedUser(user);
        } else if (currentSec < storedSec && currentMin === storedMin) {
          // reference 2
          user.sudokuData[`${difficulty}`] = currentGameData;
          setLoggedUser(user);
        }
      }

      setIsSetNumMode(false);
      setStartGame(false);
    } else {
      window.alert('Puzzle is incorrect, clearing error(s), try again...');
      setDispMatrix(copyOfDisplayedMatrix);
    }
  };

  return (
    <div className='game-page'>
      {startGame && (
        <>
          <Timer value={timer} setValue={setTimer} />
          <Hints difficulty={difficulty} hints={hints} onClick={clickHint} />
        </>
      )}

      <table className='game-table' style={{ margin: startGame ? '1em 0' : '0' }}>
        <tbody>
          {dispMatrix.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) =>
                diffMatrix[i][j] === '' ? (
                  <td
                    key={`${i}-${j}`}
                    onClick={(e) => {
                      clickCell(e, i, j);
                    }}>
                    {num}
                  </td>
                ) : (
                  <td key={`${i}-${j}`} className='computed'>
                    {num}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {isSetNumMode && (
        <NumberWidget
          style={{ position: 'fixed', top: mousePosition.y, left: mousePosition.x }}
          setNum={(num) => {
            clickNumberOnWidget(num);
          }}
        />
      )}

      {startGame && (
        <div className='controls'>
          <button onClick={clickGiveUp}>Give Up</button>
          <button onClick={clickReset}>Reset</button>
          <button onClick={clickSolve}>Solve</button>
        </div>
      )}
    </div>
  );
}

export default Game;
