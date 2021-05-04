import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearProjects } from '../../../actions/project';

const PitcherSuccess = ({ isAuthenticated, projects, clearProjects }) => {
  const goDashboard = () => {
    clearProjects();
  };

  if (isAuthenticated && projects.length === 0) {
    return <Redirect to='/dashboard' />;
  } else {
    console.log(projects);
  }

  return (
    <div className='success-page p-4'>
      <h2>Congratualtions! Your account and project have been created</h2>
      <p>You can now proceed to your dashboard:</p>
      <div className='success-buttons'>
        <div className='btn btn-secondary' onClick={goDashboard}>
          Proceed to Dashboard
        </div>
      </div>
    </div>
  );
};

PitcherSuccess.propTypes = {
  clearProjects: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  projects: state.projects.projects,
});

export default connect(mapStateToProps, { clearProjects })(PitcherSuccess);
