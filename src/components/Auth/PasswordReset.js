/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { ErrorMessage, SuccessMessage } from '../common/Common';

class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      success: '',
      error: '',
      password: '',
      confirmPassword: '',
      formErrors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateData = () => {
    const { password, confirmPassword } = this.state;
    const formErrors = {};
    if (password !== confirmPassword)
      formErrors.confirmPassword = "Confirm password didn't matched";
    if (password.length < 8) formErrors.password = 'Password must be atleast 8 characters long';
    this.setState({ formErrors });
    return Object.keys(formErrors).length === 0;
  };

  onSubmit = (eve) => {
    eve.preventDefault();
    this.validateData();
  };

  render() {
    const { error, success, loading } = this.state;
    const { password, confirmPassword, formErrors } = this.state;
    return (
      <div className="height-rscreen bg-ulight py-4">
        {success && <SuccessMessage message={success} />}
        {error && <ErrorMessage message={error} />}

        <form
          onSubmit={this.onSubmit}
          className="bg-white px-4 py-4 mx-auto shadow rounded"
          style={{ maxWidth: '400px' }}
        >
          <div className="form-group">
            <label htmlFor="collegeId">New Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter new password"
              required
            />
            {formErrors && formErrors.password && (
              <span className="form-error"> {formErrors.password} </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="collegeId">Confirm New Password</label>
            <input
              type="text"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter new password"
              required
            />
            {formErrors && formErrors.confirmPassword && (
              <span className="form-error"> {formErrors.confirmPassword} </span>
            )}
          </div>

          <div className="form-group pt-2 mb-0">
            <button type="submit" className="btn btn-info px-4" disabled={loading}>
              Update password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordReset;
