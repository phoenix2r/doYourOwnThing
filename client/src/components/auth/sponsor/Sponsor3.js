import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';

const Sponsor3 = (props) => {
  const { nextStep, prevStep, handleChange, values, setAlert } = props;

  const submitStep = (e) => {
    e.preventDefault();
    if (values.projectName != '') {
      nextStep();
    } else {
      setAlert('Please enter a name for your project', 'danger');
    }
    console.log(values);
  };

  return (
    <form className='form form-sponsor p-4'>
      <h2 className='form-heading'>
        {values.step}. PLEASE TELL US MORE ABOUT YOUR BUSINESS?
      </h2>
      <div className='form-group'>
        <label>Enter the name of your organisation:</label>
        <input
          type='text'
          placeholder='Organisation name'
          required
          onChange={handleChange('organisation')}
          defaultValue={values.organisation}
        />
      </div>
      <div className='form-group'>
        <label>Upload your organisation's logo if you have one:</label>
        <input
          type='text'
          placeholder='Logo'
          onChange={handleChange('sponsorLogo')}
          defaultValue={values.sponsorLogo}
        />
      </div>
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

Sponsor3.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Sponsor3);
