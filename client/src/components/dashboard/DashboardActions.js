import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div className='btn'>
      <Link to='/edit-profile' className='btn btn-primary'>
        <i className='fas fa-user-circle'></i>Edit Profile
      </Link>
      {/* <Link to="/add-experience" className="btn btn-primary">
        <i className="fab fa-black-tie">Edit Experience</i>
      </Link>
      <Link to="/add-education" className="btn btn-primary">
        <i className="fas fa-graduation-cap">Edit Education</i>
      </Link> */}
    </div>
  );
};

export default DashboardActions;
