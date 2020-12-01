import React from 'react';

function Modal({ toggleModal, children, hideX }) {
  return (
    <div className='modal-bg'>
      <div className='modal-content'>
        {!hideX && (
          <span className='modal-close' onClick={toggleModal}>
            &times;
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
