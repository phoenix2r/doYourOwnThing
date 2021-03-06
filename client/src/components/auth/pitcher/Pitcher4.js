import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';

const Pitcher4 = (props) => {
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
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>
        {values.step}. WHAT WOULD YOU LIKE TO CALL YOUR BUSINESS?
      </h2>
      <div className='form-group'>
        <label>Enter the name of your business:</label>
        <input
          type='text'
          placeholder='Business name'
          required
          onChange={handleChange('projectName')}
          defaultValue={values.projectName}
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

Pitcher4.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Pitcher4);
