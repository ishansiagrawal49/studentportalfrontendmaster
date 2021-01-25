import React from 'react';

function NotesInitial() {
  return (
    <div>
      <h3 className="text-center text-primary text-uppercase pt-3"> One-Stop Portal for Notes</h3>
      <hr />
      <h4> Top Contributors </h4>
      <hr />
      <br />
      <h4> Contribution Guidelines</h4>
      <hr />
      <div className="contribution-guideline">
        <ul>
          <li> Each Contribution will fetch you 100 coins. </li>
          <li> Please contribute it will help everyone. </li>
          <li> Try to contribute genuine material only. </li>
          <li> Only pdf files are allowed to upload. </li>
          <li>
            If file size if more than 20mb than please upload it on google drive and add link here
            only
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotesInitial;
