import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Pitcher9 = (props, isAuthenticated) => {
  const { onSubmit, nextStep, prevStep, values } = props

  const submitStep = e => {
    e.preventDefault();
    onSubmit();
  }


  if(isAuthenticated) {
    return <Redirect to='/dashbaord' />
  }

  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
        UPLOAD COMPLETE!
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

export default connect(mapStateToProps)(Pitcher9);
