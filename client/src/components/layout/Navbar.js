import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../imgs/Logo.png';

const Navbar = () => {
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
        <li><Link to="!#">ForHousing</ Link></li>
        {/* Special button className here */}
        <li><Link to="/login">Login to your account</ Link></li>
        {/* <!-- Search icon here --> */}
        <li><Link to="!#">Search</ Link></li>
      </ul>
  </nav>
  )
}

export default Navbar