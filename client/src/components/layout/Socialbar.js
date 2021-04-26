import React from 'react';
import { Link } from 'react-router-dom';

const Socialbar = () => {
  return (
    <div>
      <div className='social-sidebar'>
        <Link to='facebook'>
          <i className='fab fa-facebook'></i>
        </Link>
        <Link to='facebook'>
          <i className='fab fa-twitter'></i>
        </Link>
        <Link to='facebook'>
          <i className='fab fa-linkedin'></i>
        </Link>
        <Link to='facebook'>
          <i className='fab fa-instagram'></i>
        </Link>
      </div>
    </div>
  );
};

export default Socialbar;
