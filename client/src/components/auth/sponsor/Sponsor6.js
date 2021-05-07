import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSponsorProfile } from '../../../actions/sponsor-profile';
import { setAlert } from '../../../actions/alert';

const Sponsor5 = (props) => {
  const {
    nextStep,
    prevStep,
    handleChange,
    values,
    history,
    createSponsorProfile,
    setAlert,
  } = props;
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

  const submitStep = (e) => {
    e.preventDefault();
    if (visibility === '') {
      setAlert(
        'Please select how you would like to be seen on the site',
        'danger'
      );
    } else {
      createSponsorProfile(
        {
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
        },
        history
      );
      nextStep();
    }
    console.log(values);
  };

  return (
    <form className='form form-sponsor p-4'>
      <h2 className='form-heading'>
        {values.step}. FINALLY - HOW DO YOU WANT TO BE SEEN
      </h2>
      <div className='form-group'>
        <div className='role-check' onChange={handleChange('visibility')}>
          <label>
            Please select an option to determine how you will be seen on the
            site.
          </label>
          <p>
            <input type='radio' value='public' name='visibility' />
            Publically visible - seen by anyone visiting the site
          </p>
          <p>
            <input type='radio' value='user-only' name='visibility' />
            Only visible to users - your profile will only be available to
            registered users
          </p>
          <p>
            <input type='radio' value='anon' name='visibility' />
            Anonymous to all - you will appear as 'anonymous', even on projects
            you sponsor
          </p>
        </div>
      </div>
      <div className='form-buttons'>
        <div className='btn btn-secondary' onClick={prevStep}>
          Back
        </div>
        <div className='btn btn-primary' onClick={submitStep}>
          Create Profile
        </div>
      </div>
    </form>
  );
};

Sponsor5.propTypes = {
  createSponsorProfile: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { createSponsorProfile, setAlert })(
  withRouter(Sponsor5)
);
