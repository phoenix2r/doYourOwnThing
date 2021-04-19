import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProject } from '../../../actions/project';

const Pitcher9 = (props, isAuthenticated, history) => {
  const { onSubmit, nextStep, prevStep, values } = props;
  const { projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme } = values;

  const submitStep = e => {
    e.preventDefault();
    createProject({ projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme }, history);
    if(isAuthenticated) {
      return <Redirect to='/dashbaord' />
    }
  }

  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
      {values.step}. UPLOAD COMPLETE!
      </h2>
      <h2 className="form-heading">
        Click the button to view you pitch:
      </h2>
      <div className="buttons">
        <div className="btn btn-primary" onClick={prevStep}>Go Back</div>
      </div>
      <div className="buttons">
        <div className="btn btn-primary" onClick={submitStep}>View Pitch</div>
      </div>
    </form>
  )
}

Pitcher9.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(withRouter(Pitcher9));
