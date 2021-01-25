/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit = (event) => {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit();
  };

  render() {
    const { branchNames, branchCodes, semesters, subjects, formErrors } = this.props;
    const { branch, semester, subject, disabled } = this.props;
    const { onInputChange, reset } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <select id="course" name="course" className="form-control">
              <option> Btech</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="branch">Branch</label>
            <select
              id="branch"
              name="branch"
              value={branch}
              className="form-control"
              onChange={onInputChange}
            >
              <option value=""> Select Branch </option>
              {branchNames &&
                branchNames.map((item, idx) => (
                  <option key={branchCodes[idx]} value={branchCodes[idx]}>
                    {item}
                  </option>
                ))}
            </select>
            {formErrors && formErrors.branch && (
              <span className="form-error">{formErrors.branch}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <select
              id="semester"
              name="semester"
              className="form-control"
              value={semester}
              onChange={onInputChange}
            >
              <option value=""> Select Semester </option>
              {semesters &&
                semesters.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
            {formErrors && formErrors.semester && (
              <span className="form-error">{formErrors.semester}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={subject}
              className="form-control"
              onChange={onInputChange}
            >
              <option value=""> Select Subject </option>
              {subjects &&
                subjects[branch] &&
                subjects[branch][semester] &&
                subjects[branch][semester].map((item) => (
                  <option key={item[1]} value={item[1]}>
                    {item[0]}
                  </option>
                ))}
            </select>
            {formErrors && formErrors.subject && (
              <span className="form-error">{formErrors.subject}</span>
            )}
          </div>
          <div className="form-group pt-2">
            <button type="submit" className="btn btn-primary" disabled={disabled}>
              Submit
            </button>

            <button type="button" className="btn btn-danger ml-3" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  branchNames: state.notes && state.notes.branchNames,
  branchCodes: state.notes && state.notes.branchCodes,
  semesters: state.notes && state.notes.semesters,
  subjects: state.notes && state.notes.subjects,
});

export default connect(mapStateToProps, null)(NotesForm);
