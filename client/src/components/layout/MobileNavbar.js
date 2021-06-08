import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const MobileNavbar = ({
  auth: { isAuthenticated, loading, user },
  logout,
  startJourney,
  toggleMobileNav,
}) => {
  const authLinks = (
    <li>
      <Link
        onClick={() => {
          logout();
          toggleMobileNav();
        }}
        to='/'
      >
        Logout
      </Link>
    </li>
  );

  const guestLinks = (
    <li>
      <Link to='/login' onClick={toggleMobileNav}>
        Login to your account
      </Link>
    </li>
  );

  return (
    <nav className='mobile-nav'>
      <ul>
        <li>
          <Link
            to='/signup'
            onClick={() => {
              startJourney('sponsor');
              toggleMobileNav();
            }}
          >
            SPONSOR
          </Link>
        </li>
        <li>
          <Link
            to='/signup'
            onClick={() => {
              startJourney('pitcher');
              toggleMobileNav();
            }}
          >
            PITCH
          </Link>
        </li>
        <li>
          <Link to='!#' onClick={toggleMobileNav}>
            ABOUT
          </Link>
        </li>
        {user ? (
          <li>
            <Link to='/dashboard' onClick={toggleMobileNav}>
              DASHBOARD
            </Link>
          </li>
        ) : (
          ''
        )}

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
        <li>
          <Link to='/search' onClick={toggleMobileNav}>
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavbar.propTypes = {
  toggleMobileNav: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MobileNavbar);
