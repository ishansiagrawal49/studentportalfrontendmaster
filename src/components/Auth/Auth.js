/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import Modal from '../common/Modal';
import '../../styles/scss/auth.scss';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModal: false,
      registerModal: false,
      forgotPasswordModal: false,
    };
  }

  openModal = (model) => {
    this.setState({
      loginModal: false,
      registerModal: false,
      forgotPasswordModal: false,
      [model]: true,
    });
  };

  closeModal = (model) => {
    this.setState({
      [model]: false,
    });
  };

  render() {
    const { loginModal, registerModal, forgotPasswordModal } = this.state;
    return (
      <div>
        <a className="nav-link cursor-pointer" onClick={() => this.openModal('loginModal')}>
          Login
        </a>

        {loginModal && (
          <Modal title="Login" show={loginModal} handleClose={() => this.closeModal('loginModal')}>
            <Login show={loginModal} />
            <div className="login-footer w-100">
              <a href="#" onClick={() => this.openModal('forgotPasswordModal')}>
                Forgot password ?
              </a>
              <a href="#" className="float-right" onClick={() => this.openModal('registerModal')}>
                New user? Register Here
              </a>
            </div>
          </Modal>
        )}

        {registerModal && (
          <Modal
            title="Register"
            show={registerModal}
            handleClose={() => this.closeModal('registerModal')}
          >
            <Register show={registerModal} />
            <div className="register-footer w-100">
              <a href="#" onClick={() => this.openModal('forgotPasswordModal')}>
                Forgot password ?
              </a>
              <a href="#" className="float-right" onClick={() => this.openModal('loginModal')}>
                Already Registered? Login Here
              </a>
            </div>
          </Modal>
        )}

        {forgotPasswordModal && (
          <Modal
            title="Forgot Password"
            show={forgotPasswordModal}
            handleClose={() => this.closeModal('forgotPasswordModal')}
          >
            <ForgotPassword show={forgotPasswordModal} />
            <div className="forgot-password-footer w-100">
              <a href="#" onClick={() => this.openModal('loginModal')}>
                Login
              </a>
              <a href="#" className="float-right" onClick={() => this.openModal('registerModal')}>
                Register
              </a>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Auth;
