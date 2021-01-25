/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FcPlus } from 'react-icons/fc';
import { AiFillMinusCircle } from 'react-icons/ai';

export const ErrorMessage = ({ message }) => {
  return <div className="alert alert-danger">{message}</div>;
};

export const SuccessMessage = ({ message }) => {
  return <div className="alert alert-success">{message}</div>;
};

export const Section = ({ title, closing = false, initial = true, children }) => {
  const [show, setShow] = useState(initial);
  return (
    <div className="section">
      <div
        className={`h4 border-bottom py-2 ${closing && 'cursor-pointer'}`}
        onClick={() => setShow(closing ? !show : show)}
      >
        {title}
        {closing && (
          <span className="float-right">
            {show ? (
              <span className="text-danger">
                <AiFillMinusCircle />
              </span>
            ) : (
              <FcPlus />
            )}
          </span>
        )}
      </div>
      {show && children}
    </div>
  );
};
