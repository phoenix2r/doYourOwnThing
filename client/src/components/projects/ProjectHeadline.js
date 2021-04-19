import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const ProjectHeadline = ({ auth, project: { projectName, amountReq, amountSoFar,   } }) => {
  return (
    <Fragment>
      <div className="project-headline">
        <Link to="/project">
          <h2 className="project-headline-title">Project Title</h2>
          <p className="project-headline-totals">Total requested: Total value</p>
          <div className="project-headline-progress">
            <p className="progress-text">You are value of the way there!</p>
            <div className="progress-bar">
              <div className="progress-inner"></div>
            </div>
          </div>
        </Link>
      </div>
      <div className="dashboard-item dashboard-social">Promote your project on social media</div>
    </Fragment>
    
  )
}

ProjectHeadline.propTypes = {
  project: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(ProjectHeadline);


