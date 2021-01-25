/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorMessage, SuccessMessage } from '../common/Common';
import { userLogin } from '../../server/server';
import { userLoginAction } from '../../store/actions/userAction';

const initialState = {
  collegeId: '',
  password: '',
  error: '',
  success: '',
  loading: '',
};

class Login extends Component {
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

  login = async () => {
    const { collegeId, password } = this.state;
    const credentials = { collegeId, password };

    const response = await userLogin(credentials);

    if (response && response.success) {
      const { userLoginAction } = this.props;
      const { user, token } = response.data;

      this.setState({ loading: false, error: '', success: 'Successfully logged in!!' }, () =>
        userLoginAction({ user, token }),
      );
    } else {
      this.setState({ loading: false, error: response.error });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.login();
  };

  render() {
    const { collegeId, password, error, success, loading } = this.state;
    return (
      <>
        <div className="login">
          {success && <SuccessMessage message={success} />}
          {error && <ErrorMessage message={error} />}

          {!success && (
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

              <div className="form-group">
                <label htmlFor="password"> Password </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="form-group pt-2 mb-0">
                <button type="submit" className="btn btn-info px-4" disabled={loading}>
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginAction: (payload) => dispatch(userLoginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
