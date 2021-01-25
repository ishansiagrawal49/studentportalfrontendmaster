/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogoutAction } from '../../store/actions/userAction';
import '../../styles/scss/navbar.scss';
import Auth from '../Auth/Auth';

function Navbar(props) {
  const { pathname } = props;
  const { user } = props;
  const { userLogoutAction } = props;
  return (
    <>
      <div className="d-md-block navbar-custom navbar-desktop">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Student Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${pathname.indexOf('/notes') !== -1 ? 'active' : ''}`}>
                <Link className="nav-link" to="/notes">
                  Notes
                </Link>
              </li>
              <li className={`nav-item ${pathname.indexOf('/buysell') !== -1 ? 'active' : ''}`}>
                <Link className="nav-link" to="/buysell">
                  Buy/Sell
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hostels
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">
                    Hostel 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Hostel 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Hostel 3
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Clubs
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">
                    Hostel 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Hostel 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Hostel 3
                  </a>
                </div>
              </li>
              <li className={`nav-item ${pathname.indexOf('/about') !== -1 ? 'active' : ''}`}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav ml-auto">
              {user ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi {user.fullName ? user.fullName.split(' ')[0] : 'user'}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      Contribution
                    </a>
                    <hr />
                    <a className="dropdown-item" href="#" onClick={userLogoutAction}>
                      Logout
                    </a>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Auth />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>

      <div className="d-md-none navbar-custom navbar-mobile"> </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user && state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogoutAction: () => dispatch(userLogoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
