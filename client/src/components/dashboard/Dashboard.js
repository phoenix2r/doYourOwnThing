import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/pitcher-profile';
import DashboardMain from './DashboardMain';
import DashboardActions from './DashboardActions';
import imageDefault from '../../imgs/builder.jpg';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='dashboard'>
        <div className='container'>
          {/* <!-- Title Box --> */}
          <div className='title-box dashboard-pitcher'>
            <h2>{user.username}'s Dashboard</h2>
          </div>
          <div className='dashboard-head'>
            <div className='profile-pic'>
              <img src={imageDefault} alt='' />
              <Link id='profile-pic-edit' to='!#'>
                Change profile picture
              </Link>
            </div>

            {/* <!-- High level functions --> */}
            <div className='dashboard-menu'>
              <h3>Welcome back, {user.username}</h3>
              <ul>
                <li>Account</li>
                <li>Settings</li>
                <li>Support</li>
                <li>Sign Out</li>
              </ul>
            </div>
          </div>
          {profile ? <DashboardMain userid={user._id} /> : <Spinner />}
          {profile !== null ? (
            <Fragment>
              <DashboardActions />
            </Fragment>
          ) : (
            <Fragment>
              <p>You have not yet setup a profile, please add some info</p>
              <div className='buttons'>
                <Link to='/pitcher' className='btn btn-primary'>
                  Create Profile
                </Link>
              </div>
            </Fragment>
          )}
        </div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  // getProjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
