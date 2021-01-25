/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorMessage, SuccessMessage } from '../common/Common';
import Modal from '../common/Modal';

class NotesContribute extends Component {
  constructor(props) {
    super(props);

    let { recent } = this.props;
    if (!recent) recent = {};

    this.state = {
      showModal: false,
      branch: recent.branch || '',
      semester: recent.semester || '',
      subject: recent.subject || '',
      title: '',
      type: '',
      comments: '',
      notes: '',
      formErrors: {},
      error: null,
      loading: false,
      success: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'type': {
        this.setState({ [name]: value, notes: '' });
        break;
      }
      case 'branch': {
        this.setState({ [name]: value, subject: '' });
        break;
      }
      case 'semester': {
        this.setState({ [name]: value, subject: '' });
        break;
      }
      default:
        this.setState({
          [name]: value,
        });
    }
  };

  toggleModal = () => {
    const { showModal } = this.state;
    let { recent } = this.props;
    if (!recent) recent = {};
    this.setState({
      showModal: !showModal,
      branch: recent.branch || '',
      semester: recent.semester || '',
      subject: recent.subject || '',
      title: '',
      type: '',
      comments: '',
      notes: '',
      formErrors: {},
      error: null,
      loading: false,
      success: null,
    });
  };

  validateData = () => {
    const formErrors = {};
    const { branch, semester, subject, title, notes, type } = this.state;

    if (!branch) formErrors.branch = 'Please select branch';
    if (!semester) formErrors.semester = 'Please select semester';
    if (!subject) formErrors.subject = 'Please select subject';
    if (!title) formErrors.title = 'Please select title';
    if (!notes) formErrors.notes = 'Please select notes';
    if (!type) formErrors.type = 'Please select type';

    this.setState({ formErrors });

    return Object.keys(formErrors).length === 0;
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.validateData());
  };

  render() {
    const { showModal, formErrors, error, success, loading } = this.state;
    const { branchNames, branchCodes, semesters, subjects } = this.props;
    const { branch, semester, subject, title, comments, notes, type } = this.state;
    return (
      <>
        <button type="button" className="btn btn-success" onClick={this.toggleModal}>
          Contribute
        </button>

        <Modal title="Contribute Notes" show={showModal} handleClose={this.toggleModal}>
          <div className="contribute-body">
            {success && <SuccessMessage message={success} />}
            {error && <ErrorMessage message={error} />}

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="course">Course</label>
                <select name="course" className="form-control">
                  <option> Btech</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <select
                  name="branch"
                  value={branch}
                  className="form-control"
                  onChange={this.handleChange}
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
                  name="semester"
                  className="form-control"
                  value={semester}
                  onChange={this.handleChange}
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
                  name="subject"
                  value={subject}
                  className="form-control"
                  onChange={this.handleChange}
                >
                  <option> Select Subject </option>
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

              <div className="form-group">
                <label htmlFor="title"> Title </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Enter title for Notes"
                />
                {formErrors && formErrors.title && (
                  <span className="form-error">{formErrors.title}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  className="form-control"
                  value={type}
                  onChange={this.handleChange}
                  required
                >
                  <option> Select Type</option>
                  <option value="1"> Notes </option>
                  <option value="2"> Question papers </option>
                  <option value="3"> Important link</option>
                </select>
                {formErrors && formErrors.type && (
                  <span className="form-error">{formErrors.type}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="title"> Notes </label>
                <input
                  type={`${type === '3' ? 'text' : 'file'}`}
                  name="notes"
                  value={notes}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder={`${
                    type === '3' ? 'Enter link here' : 'Upload Your Notes Here in pdf form only'
                  }`}
                />
                {formErrors && formErrors.notes && (
                  <span className="form-error">{formErrors.notes}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="title"> Comments </label>
                <textarea
                  type="text"
                  name="comments"
                  value={comments}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Leave any comments for user here"
                />
              </div>

              <div className="form-group pt-2 mb-0">
                <button type="submit" className="btn btn-info px-4" disabled={loading}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="contribute-footer w-100">Share notes and spread Happiness !!</div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  branchNames: state.notes && state.notes.branchNames,
  branchCodes: state.notes && state.notes.branchCodes,
  semesters: state.notes && state.notes.semesters,
  subjects: state.notes && state.notes.subjects,
  recent: state.notes && state.notes.recent,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContribute);
