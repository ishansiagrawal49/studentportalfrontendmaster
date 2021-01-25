/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotesFromServer } from '../../server/server';
import { resetRecentNotes, updateRecentNotes } from '../../store/actions/notesAction';
import { LoadingFadeIn } from '../common/Loading';
import NotesContribute from './NotesContribute';
import NotesDisplay from './NotesDisplay';
import NotesForm from './NotesForm';
import NotesInitial from './NotesInitial';

class Notes extends Component {
  constructor(props) {
    super(props);
    const { recent } = this.props;

    this.state = {
      error: null,
      loading: false,
      branch: recent.branch || '',
      semester: recent.semester || '',
      subject: recent.subject || '',
      formErrors: {},
      notesData: recent.notesData || null,
    };
  }

  onInputChange = (event) => {
    if (event.target.name !== 'subject')
      this.setState({
        [event.target.name]: event.target.value,
        subject: '',
      });
    else
      this.setState({
        [event.target.name]: event.target.value,
      });
  };

  resetNotes = () => {
    const { resetRecentNotes } = this.props;
    this.setState({
      error: null,
      loading: false,
      branch: '',
      semester: '',
      subject: '',
      notesData: null,
      formErrors: {},
    });
    resetRecentNotes();
  };

  validateInputs = () => {
    const formErrors = {};
    const { branch, semester, subject } = this.state;

    if (!branch || !semester || !subject) {
      if (!branch) formErrors.branch = 'Please select branch';
      if (!semester) formErrors.semester = 'Please select semester';
      if (!subject) formErrors.subject = 'Please select subject';
      this.setState({ formErrors });
      return false;
    }

    return true;
  };

  getNotes = async () => {
    const { branch, semester, subject } = this.state;
    const { updateRecentNotes } = this.props;

    if (this.validateInputs()) {
      this.setState({ loading: true, formErrors: {}, error: null });

      const res = await getNotesFromServer(subject);
      const data = res;
      const { success } = res;

      if (success) {
        updateRecentNotes({ branch, semester, subject, notesData: data });
        this.setState({ loading: false, notesData: data });
      } else {
        this.setState({ loading: false, error: 'There is some error' });
      }
    }
  };

  contribute = async (notes) => {
    return notes;
  };

  render() {
    const { branch, semester, subject, formErrors, loading } = this.state;
    const { error, notesData } = this.state;
    return (
      <div className="notes">
        <div className="row">
          <div className="col-md-3 px-4 py-3">
            <NotesContribute />
            <hr />
            <NotesForm
              branch={branch}
              semester={semester}
              subject={subject}
              formErrors={formErrors}
              onInputChange={this.onInputChange}
              onSubmit={this.getNotes}
              reset={this.resetNotes}
              disabled={loading}
            />
            <hr />
          </div>
          <div className="col-md-9 height-rscreen border-left bg-light">
            {!notesData && !loading && !error && <NotesInitial />}
            {loading && (
              <div className="pos-center">
                <LoadingFadeIn />
              </div>
            )}
            {error && 'Error Here'}
            {notesData && !loading && !error && <NotesDisplay />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recent: state.notes && state.notes.recent,
});

const mapDispatchToProps = (dispatch) => ({
  updateRecentNotes: (payload) => dispatch(updateRecentNotes(payload)),
  resetRecentNotes: () => dispatch(resetRecentNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
