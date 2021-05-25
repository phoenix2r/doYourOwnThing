import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    <div>
      <section className='profile'>
        <div className='profile-name'></div>
        <div className='profile-img'></div>
        <div className='profile-bio'></div>
        <div className='profile-address'></div>
      </section>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
