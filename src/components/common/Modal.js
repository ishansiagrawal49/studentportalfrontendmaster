/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ handleClose, show, children, title }) => {
  const showHideClassName = show ? 'modal d-block' : 'modal d-none';
  const body = children[0];
  const footer = children[1];

  if (show) document.getElementsByTagName('body')[0].classList.add('no-scroll');
  else document.getElementsByTagName('body')[0].classList.remove('no-scroll');

  return (
    <>
      <div id={title} className={showHideClassName} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              {title}
              <button type="button" className="close" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      </div>
      {show && <div className="overlay" onClick={handleClose} />}
    </>
  );
};

export default Modal;
