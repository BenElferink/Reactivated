import React from 'react';
import BackspaceIcon from './../../media/icons/backspace';

function PinCode({ value, setValue, className, isLogIn }) {
  const click = (num) => {
    if (value.length < 4) {
      setValue(`${value}${num}`);
    }
  };

  const backspace = () => {
    let valueCopy = value.substring(0, value.length - 1);
    valueCopy.slice(valueCopy.length - 1);
    setValue(valueCopy);
  };

  const backspaceBg = isLogIn ? '#5778f2' : '#202340';
  const backspaceX = isLogIn ? '#202340' : '#858ab5';

  return (
    <div className={`pin-code ${className}`}>
      <table>
        <thead>
          <tr>
            <th colSpan='3' className='display' style={{ color: value.length === 4 && !isLogIn ? '#9673f7' : value.length === 4 && isLogIn ? '#e45d71' : 'unset' }}>
              {value === '' ? 'PIN' : value.replaceAll(/0|1|2|3|4|5|6|7|8|9/gi, '*')}
              <BackspaceIcon className='bkspc' onClick={backspace} backspaceBg={backspaceBg} backspaceX={backspaceX} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                onClick={() => {
                  click(1);
                }}>
                1
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  click(2);
                }}>
                2
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  click(3);
                }}>
                3
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  click(4);
                }}>
                4
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  click(5);
                }}>
                5
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  click(6);
                }}>
                6
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  click(7);
                }}>
                7
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  click(8);
                }}>
                8
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  click(9);
                }}>
                9
              </button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button
                onClick={() => {
                  click(0);
                }}>
                0
              </button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PinCode;
