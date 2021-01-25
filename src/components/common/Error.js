import React from 'react';

const defaultErrorMessage = 'Something went wrong. Please try again after sometime';

export const FullScreenError = ({ code = '', message = defaultErrorMessage }) => {
  return (
    <div className="custom-error-box">
      {code}
      <p>{message}</p>
    </div>
  );
};
