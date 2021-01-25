/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function NotesBox({ type = 'info' }) {
  return (
    <div className="notes-box px-3 py-3">
      <div
        className={`border border-${type} rounded px-2 py-3 shadow-sm text-center alert alert-${type}`}
      >
        <b> Thermodyanmics and Oil Petrol </b>
        <br />
        <a href="#"> Download </a>
        <br />
        <span className="text-muted text-sm"> Suryaprakash Agarwal</span>
        <br />
        <span className="text-muted text-sm">2017UEC231</span>
        <br />
        <span className="text-muted"> Date : 11/02/2020 </span>
      </div>
    </div>
  );
}
