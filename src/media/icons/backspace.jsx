import React from 'react';

function Icon(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={props.className} onClick={props.onClick} x='0' y='0' enableBackground='new 0 0 44.18 44.18' version='1.1' viewBox='0 0 44.18 44.18' xmlSpace='preserve'>
      <g fill={props.backspaceBg}>
        <path d='M11.18 6.09L43.18 6.09 43.18 38.09 11.18 38.09 1.18 22.09z'></path>
        <path d='M44.18 39.09H10.625L0 22.09l10.625-17H44.18v34zm-32.446-2H42.18v-30H11.734l-9.375 15 9.375 15z'></path>
      </g>
      <path fill={props.backspaceX} d='M14.866 21.09H37.492999999999995V23.09H14.866z' transform='rotate(45.001 26.18 22.09)'></path>
      <path fill={props.backspaceX} d='M25.18 10.776H27.18V33.403H25.18z' transform='rotate(45.001 26.18 22.09)'></path>
    </svg>
  );
}

export default Icon;
