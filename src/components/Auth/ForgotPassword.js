/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { forgotPassword } from '../../server/server';
import { ErrorMessage, SuccessMessage } from '../common/Common';

const initialState = {
  collegeId: '',
  error: '',
  success: '',
  loading: '',
};

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromProps(nextProps, oldState) {
    const { show } = nextProps;
    if (!show) return initialState;
    return oldState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { collegeId } = this.state;
    this.setState({ loading: true, error: '', success: '' });
    const response = await forgotPassword(collegeId);

    if (response && response.success)
      this.setState({
        loading: true,
        success: 'A link to reset password successfully sent to you via email.',
      });
    else this.setState({ loading: false, error: response.error });
  };

  render() {
    const { collegeId, error, success, loading } = this.state;
    return (
      <div className="login">
        {success && <SuccessMessage message={success} />}
        {error && <ErrorMessage message={error} />}

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="collegeId">CollegeId</label>
            <input
              type="text"
              name="collegeId"
              value={collegeId}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter your college Id (2017UBBXXXX)"
              required
            />
          </div>

          <div className="form-group pt-2 mb-0">
            <button type="submit" className="btn btn-info px-4" disabled={loading}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
