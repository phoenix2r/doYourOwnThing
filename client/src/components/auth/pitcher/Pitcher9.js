import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProject } from '../../../actions/project';

const Pitcher9 = (props, isAuthenticated, history) => {
  const { prevStep, values, createProject, handleChange } = props;
  const { projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme } = values;

  const submitStep = e => {
    e.preventDefault();
    createProject({ projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme }, history);
    if(isAuthenticated) {
      return <Redirect to='/dashboard' />
    } else {
      return <Redirect to='/login' />
    }
  }

  return (
    <form className="form p-1">
      <h2 className="form-heading">
      {values.step}. UPLOAD COMPLETE! NOW FOR THE FINAL STEP
      </h2>
      <div className="form-group">
        <span>In order to receive money for this project you will need your Go Fund Me link.</span>
        <span>Copy and paste the code for your Go Fund Me widget below</span>
        <input type="text" placeholder="Go Fund Me" required onChange={handleChange('gofundme')} defaultValue={gofundme} />
      </div>
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
  createProject: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { createProject })(withRouter(Pitcher9));
