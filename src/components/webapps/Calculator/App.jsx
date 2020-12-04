import defineState from '../defineState';
import { UsersContext } from '../../../ContextAPI';
import React, { useState } from 'react';
import './style/style.css';
import Display from './components/Display';
import TableDataButton from './components/TableDataButton';

function Calculator({ setPage }) {
  React.useEffect(() => {
    setPage('/calculator');
    // eslint-disable-next-line
  }, []);

  const context = React.useContext(UsersContext);
  const [loggedUser, setLoggedUser] = context.logged;
  React.useEffect(() => {
    let user = loggedUser;
    user.calculatorData = {
      selectedOperator,
      prevNumber,
      currNumber,
    };
    setLoggedUser(user);
  });

  // ----------
  // ---------------
  // APP START
  // ---------------
  // ----------

  const [selectedOperator, setSelectedOperator] = useState(defineState(loggedUser, 'calculatorData', 'selectedOperator', ''));
  const [prevNumber, setPrevNumber] = useState(defineState(loggedUser, 'calculatorData', 'prevNumber', ''));
  const [currNumber, setCurrNumber] = useState(defineState(loggedUser, 'calculatorData', 'currNumber', ''));

  const calculate = (argument) => {
    let res = () => {
      switch (selectedOperator) {
        case '+':
          return parseFloat(prevNumber) + parseFloat(currNumber);
        case '-':
          return parseFloat(prevNumber) - parseFloat(currNumber);
        case '*':
          return parseFloat(prevNumber) * parseFloat(currNumber);
        case '/':
          return parseFloat(prevNumber) / parseFloat(currNumber);
        default:
          console.warn('DEV ERROR - evaluate code');
          break;
      }
    };

    if (argument === 'bypass') {
      setPrevNumber(res().toFixed(2));
      setCurrNumber('');
    } else {
      setSelectedOperator('');
      setPrevNumber('');
      setCurrNumber(res().toFixed(2));
    }
  };

  const handleNum = (num) => {
    let newNum = `${currNumber}`;
    newNum += num;
    setCurrNumber(newNum);
  };

  const handleOpr = (opr) => {
    if (selectedOperator === '') {
      setSelectedOperator(opr);
      setPrevNumber(currNumber);
      setCurrNumber('');
    } else {
      calculate('bypass');
      setSelectedOperator(opr);
    }
  };

  const handleClearAll = () => {
    setSelectedOperator('');
    setPrevNumber('');
    setCurrNumber('');
  };

  const handleClearOne = () => {
    let newNum = `${currNumber}`;
    newNum = newNum.slice(0, newNum.length - 1);
    setCurrNumber(newNum);
  };

  const handleNegative = () => {
    let newNum = `${currNumber}`;
    newNum.charAt(0) !== '-' ? (newNum = `-${newNum}`) : (newNum = newNum.slice(1));
    setCurrNumber(newNum);
  };

  return (
    <div className='CALCULATOR'>
      <Display prevNumber={prevNumber} currNumber={currNumber} selectedOperator={selectedOperator} />
      <table>
        <tbody>
          <tr>
            <TableDataButton className='other' onClick={handleNegative}>
              +/-
            </TableDataButton>
            <TableDataButton className='other' onClick={handleClearAll}>
              AC
            </TableDataButton>
            <TableDataButton className='other' onClick={handleClearOne}>
              ←
            </TableDataButton>
            <TableDataButton className='operator' onClick={handleOpr} value='/'>
              &divide;
            </TableDataButton>
          </tr>
          <tr>
            <TableDataButton className='numpad' onClick={handleNum} value='7'>
              7
            </TableDataButton>
            <TableDataButton className='numpad' onClick={handleNum} value='8'>
              8
            </TableDataButton>
            <TableDataButton className='numpad' onClick={handleNum} value='9'>
              9
            </TableDataButton>
            <TableDataButton className='operator' onClick={handleOpr} value='*'>
              &times;
            </TableDataButton>
          </tr>
          <tr>
            <TableDataButton className='numpad' onClick={handleNum} value='4'>
              4
            </TableDataButton>
            <TableDataButton className='numpad' onClick={handleNum} value='5'>
              5
            </TableDataButton>
            <TableDataButton className='numpad' onClick={handleNum} value='6'>
              6
            </TableDataButton>
            <TableDataButton className='operator' onClick={handleOpr} value='-'>
              -
            </TableDataButton>
          </tr>
          <tr>
            <TableDataButton className='numpad' onClick={handleNum} value='1'>
              1
            </TableDataButton>
            <TableDataButton className='numpad' onClick={handleNum} value='2'>
              2
            </TableDataButton>
            <TableDataButton className='numpad' onClick={handleNum} value='3'>
              3
            </TableDataButton>
            <TableDataButton className='operator' onClick={handleOpr} value='+'>
              +
            </TableDataButton>
          </tr>
          <tr>
            <td />
            <TableDataButton className='numpad' onClick={handleNum} value='0'>
              0
            </TableDataButton>
            <TableDataButton className='other' onClick={handleNum} value='.'>
              &middot;
            </TableDataButton>
            <TableDataButton className='operator' onClick={calculate}>
              =
            </TableDataButton>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
