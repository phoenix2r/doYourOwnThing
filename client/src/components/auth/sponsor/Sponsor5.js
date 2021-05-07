import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';

const Sponsor5 = (props) => {
  const { nextStep, prevStep, handleChange, values, setAlert } = props;
  const {
    firstName,
    lastName,
    addressLine1,
    town,
    postcode,
    bio,
    organisation,
    sponsorLogo,
    interests,
    visibility,
  } = values;

  const validatePostCode = (postcode) => {
    let re = /^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/;
    return re.test(postcode);
  };

  const submitStep = (e) => {
    e.preventDefault();
    const validPostcode = validatePostCode(postcode);
    if (!validPostcode) {
      setAlert('Please enter a valid postcode', 'danger');
    } else if (
      firstName === '' ||
      lastName === '' ||
      addressLine1 === '' ||
      town === ''
    ) {
      setAlert(
        'All fields require an answer - please check your form',
        'danger'
      );
    } else {
      nextStep();
    }
    console.log(values);
  };

  return (
    <form className='form form-sponsor p-4'>
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

Sponsor5.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(withRouter(Sponsor5));
