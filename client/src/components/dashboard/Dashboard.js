import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/pitcher-profile';
import { getProjects } from '../../actions/project';
import ProjectHeadline from '../projects/ProjectHeadline';

const Dashboard = ({ 
  getCurrentProfile, 
  auth: { user }, 
  profile: { profile, loading } 
}) => {
  useEffect(() => {
    getCurrentProfile();
    getProjects();
  }, []);

  return loading && profile === null ?<Spinner /> : <Fragment>
      <div className="single-page" id="pitcher">
        <section className="main-content container">
          <div className="dashboard">

          <div className="dashboard-item dashboard-img">
            <img src="./imgs/builder.jpg" alt="" />
          </div>

          <div className="dashboard-inner">
            <div className="dashboard-item dashboard-headline">Hello { user && user.username }, welcome to your dashbaord</div>
            <div className="dashboard-item dashboard-projects">
              <h3 className="dashboard-projects-number">Active projects: value</h3>
              <ProjectHeadline />
            </div>
          </div>

          <div className="dashboard-item dashboard-title">
            <div className="title-content">
              <h1 className="x-large-bottom">DASHBOARD FOR</h1>
              <h1 className="x-large-top">USER NAME</h1>
            </div>
          </div>

          </div>

        </section>

      </div>
      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, pleaseadd some info</p>
          <div className="buttons">
            <Link to="/pitcher" className="btn btn-primary">Create Profile</Link>
          </div>
        </Fragment>
      )}
  </Fragment>;
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
