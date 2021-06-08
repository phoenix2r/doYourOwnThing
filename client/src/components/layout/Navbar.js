import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../imgs/Logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import MobileNavbar from './MobileNavbar';

const Navbar = ({
  auth: { isAuthenticated, loading, user },
  logout,
  startJourney,
}) => {
  const authLinks = (
    <li>
      <Link onClick={logout} to='/'>
        Logout
      </Link>
    </li>
  );

  const guestLinks = (
    <li>
      <Link to='/login'>Login to your account</Link>
    </li>
  );

  const [mobileNavState, setMobileNavState] = useState({
    showMobileNav: false,
  });

  const toggleMobileNav = () => {
    setMobileNavState({
      showMobileNav: !mobileNavState.showMobileNav,
    });
    console.log(mobileNavState.showMobileNav);
  };

  return (
    <>
      <nav className='navbar'>
        <h1>
          <Link to='/'>
            <img src={mainLogo} alt='' className='logo' />
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/signup' onClick={() => startJourney('sponsor')}>
              SPONSOR
            </Link>
          </li>
          <li>
            <Link to='/signup' onClick={() => startJourney('pitcher')}>
              PITCH
            </Link>
          </li>
          <li>
            <Link to='!#'>ABOUT</Link>
          </li>
          {user ? (
            <li>
              <Link to='/dashboard'>DASHBOARD</Link>
            </li>
          ) : (
            ''
          )}

          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
          <li>
            <Link to='/search'>Search</Link>
          </li>
        </ul>
        {!mobileNavState.showMobileNav ? (
          <i
            className='fas fa-bars fa-2x nav-burger'
            onClick={toggleMobileNav}
          ></i>
        ) : (
          <i
            class='fas fa-times fa-2x nav-burger'
            onClick={toggleMobileNav}
          ></i>
        )}
      </nav>

      {mobileNavState.showMobileNav ? (
        <MobileNavbar
          toggleMobileNav={toggleMobileNav}
          logout={logout}
          startJourney={startJourney}
        />
      ) : (
        ''
      )}
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
