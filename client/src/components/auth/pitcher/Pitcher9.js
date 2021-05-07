import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProject } from '../../../actions/project';

const Pitcher9 = (props) => {
  const {
    prevStep,
    values,
    createProject,
    handleChange,
    nextStep,
    projects,
  } = props;
  const {
    projectAuthor,
    amountReq,
    purpose,
    projectName,
    sector,
    description,
    keywords,
    video,
    gofundme,
  } = values;

  const submitStep = async (e) => {
    e.preventDefault();
    const userProject = await createProject({
      projectAuthor,
      amountReq,
      purpose,
      projectName,
      sector,
      description,
      keywords,
      video,
      gofundme,
    });
    console.log(userProject);
    nextStep();
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>
        {values.step}. YOUR PROFILE HAS BEEN CREATED! NOW FOR THE FINAL STEP
      </h2>
      <div className='form-group'>
        <label>
          In order to receive money for this project you will need your Go Fund
          Me link.
        </label>
        <label>Copy and paste the code for your Go Fund Me widget below</label>
        <input
          type='text'
          placeholder='Go Fund Me'
          required
          onChange={handleChange('gofundme')}
          defaultValue={gofundme}
        />
      </div>
      <h2 className='form-heading'>Click the button to view you pitch:</h2>
      <div className='form-buttons'>
        <div className='btn btn-secondary' onClick={prevStep}>
          Back
        </div>
        <div className='btn btn-primary' onClick={submitStep}>
          Next
        </div>
      </div>
    </form>
  );
};

Pitcher9.propTypes = {
  isAuthenticated: PropTypes.bool,
  createProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  projects: state.projects.projects,
});

export default connect(mapStateToProps, { createProject })(
  withRouter(Pitcher9)
);
