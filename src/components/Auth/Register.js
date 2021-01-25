/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ErrorMessage, SuccessMessage } from '../common/Common';
import { sendUserOtp, verifyUserOtp } from '../../server/server';
import { userLoginAction } from '../../store/actions/userAction';

const initialState = {
  fullName: '',
  collegeId: '',
  password: '',
  confirmPassword: '',
  otp: '',
  otpSent: false,
  otpVerified: false,
  error: '',
  success: '',
  loading: '',
  formErrors: {},
};

class Register extends Component {
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

  handleError = (response) => {
    this.setState({
      loading: false,
      error: response && response.error ? response.error : 'Something went wrong',
    });
  };

  validateData = () => {
    // TODO : add more validators like college id and remove required also
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        formErrors: { confirmPassword: "Confirm password didn't matched to password" },
      });
      return false;
    }
    return true;
  };

  sendOtp = async () => {
    const { fullName, collegeId, password } = this.state;
    const response = await sendUserOtp({ fullName, collegeId, password });

    if (response && response.success) {
      this.setState({
        otpSent: true,
        loading: false,
        success: 'Otp sent successfully. Check your email.',
      });
    } else this.handleError(response);
  };

  verifyOtp = async () => {
    const { collegeId, otp } = this.state;
    const response = await verifyUserOtp({ collegeId, otp });

    if (response && response.success) {
      const { userLoginAction } = this.props;
      const { user, token } = response.data;

      this.setState(
        { otpVerified: true, loading: false, success: 'Successfully Verified !!' },
        () => userLoginAction({ user, token }),
      );
    } else this.handleError(response);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validateData()) {
      const { otpSent } = this.state;
      this.setState({ loading: true, success: '', error: '', formErrors: {} });
      if (!otpSent) this.sendOtp();
      else this.verifyOtp();
    }
  };

  render() {
    const { fullName, collegeId, password, confirmPassword } = this.state;
    const { otp, otpSent, otpVerified } = this.state;
    const { formErrors, error, success, loading } = this.state;
    return (
      <div>
        {success && <SuccessMessage message={success} />}
        {error && <ErrorMessage message={error} />}

        {!otpSent ? (
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter your full Name"
                required
              />
              {formErrors && formErrors.fullName && (
                <span className="form-error">{formErrors.fullName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="collgeId">CollegeId</label>
              <input
                type="text"
                name="collegeId"
                value={collegeId}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter Your college Id (2017UBBXXXX)"
                required
              />
              {formErrors && formErrors.collgeId && (
                <span className="form-error">{formErrors.collegeId}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="collgeId">Password </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter Password"
                required
              />
              {formErrors && formErrors.password && (
                <span className="form-error">{formErrors.password}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="collgeId">Confirm password</label>
              <input
                type="text"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter confirm password"
                required
              />
              {formErrors && formErrors.confirmPassword && (
                <span className="form-error">{formErrors.confirmPassword}</span>
              )}
            </div>
            <div className="form-group mb-0 pt-2">
              <button type="submit" className="btn btn-info px-4" disabled={loading}>
                Register
              </button>
            </div>
          </form>
        ) : (
          !otpVerified && (
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="otp">Otp</label>
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Enter Otp sent over Email"
                  required
                />
                {formErrors && formErrors.otp && (
                  <span className="form-error">{formErrors.otp}</span>
                )}
              </div>
              <div className="form-group mb-0 pt-2">
                <button type="submit" className="btn btn-info px-4" disabled={loading}>
                  Verify Otp
                </button>
              </div>
            </form>
          )
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginAction: (payload) => dispatch(userLoginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Register);
