import React from 'react';
import { Link } from 'react-router-dom';

const Socialbar = () => {
  return (
    <div>
      <div class="social-sidebar">
        <Link to="facebook"><i class="fab fa-facebook"></i></Link>
        <Link to="facebook"><i class="fab fa-twitter"></i></Link>
        <Link to="facebook"><i class="fab fa-linkedin"></i></Link>
        <Link to="facebook"><i class="fab fa-instagram"></i></Link>
      </div>
    </div>
  )
}

export default Socialbar
