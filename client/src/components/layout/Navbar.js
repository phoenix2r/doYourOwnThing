import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../imgs/Logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <li><a onClick={logout} href="!#">Logout</ a></li>
  );

  const guestLinks = (
    <li><Link to="/login">Login to your account</ Link></li>
  );


  return (
    <nav className="navbar">
      <h1>
        <Link to="/">
          <img src={mainLogo} alt="" className="logo"/>
        </ Link>
      </h1>
      <ul>
        <li><Link to="!#">SPONSOR</ Link></li>
        <li><Link to="/pitcher">PITCH</ Link></li>
        <li><Link to="!#">ABOUT</ Link></li>
        {/* <!-- Use for housing icon here --> */}
        <li><Link to="/dashboard">DASHBOARD</ Link></li>
        {/* Special button className here */}
        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
        {/* <!-- Search icon here --> */}
        <li><Link to="!#">Search</ Link></li>
      </ul>
  </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);