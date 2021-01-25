import React, { Component } from 'react';
import { ErrorMessage, Section } from '../common/Common';
import NotesBox from './NotesBox';

class NotesDisplay extends Component {
  render() {
    const a = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
      <div className="notes-display">
        <h3 className="text-center text-primary pt-2"> ECT 303 </h3>
        <hr />

        <Section title="Notes" closing>
          <div className="row">
            {a.map(() => (
              <div className="col-lg-3 col-md-4 col-sm-6 px-0 py-0">
                <NotesBox />
              </div>
            ))}
          </div>
        </Section>
        <br />

        <Section title="Previous year question papers" closing>
          <div className="row">
            {a.map(() => (
              <div className="col-lg-3 col-md-4 col-sm-6 px-0 py-0">
                <NotesBox />
              </div>
            ))}
          </div>
        </Section>
        <br />

        <Section title="Important links" closing>
          <div className="px-3 pt-3">
            <div className="mx-auto" style={{ maxWidth: '400px' }}>
              <ErrorMessage message="Nothing Available Here! please Contribute" />
            </div>
          </div>
        </Section>
        <br />
      </div>
    );
  }
}

export default NotesDisplay;
