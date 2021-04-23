import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPitcherProfile } from '../../../actions/pitcher-profile';

const Pitcher7 = (props) => {
  const {
    nextStep,
    prevStep,
    handleChange,
    values,
    history,
    createPitcherProfile,
  } = props;
  const { firstName, lastName, addressLine1, town, postcode } = values;

  const submitStep = (e) => {
    e.preventDefault();
    console.log(values);
    createPitcherProfile(
      { firstName, lastName, addressLine1, town, postcode },
      history
    );
    nextStep();
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>
        {values.step}. GREAT - JUST A FEW MORE DETAILS
      </h2>
      <div className='form-group'>
        <label>First Name:</label>
        <input
          type='text'
          placeholder='Jane'
          required
          onChange={handleChange('firstName')}
          defaultValue={firstName}
        />
        <label>Last Name:</label>
        <input
          type='text'
          placeholder='Doe'
          required
          onChange={handleChange('lastName')}
          defaultValue={lastName}
        />
        <label>Address:</label>
        <input
          type='text'
          placeholder='No. and street'
          required
          onChange={handleChange('addressLine1')}
          defaultValue={addressLine1}
        />
        <input
          type='text'
          placeholder='Town'
          required
          onChange={handleChange('town')}
          defaultValue={town}
        />
        <input
          type='text'
          placeholder='Postcode'
          required
          onChange={handleChange('postcode')}
          defaultValue={postcode}
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

Pitcher7.propTypes = {
  createPitcherProfile: PropTypes.func.isRequired,
};

export default connect(null, { createPitcherProfile })(withRouter(Pitcher7));
