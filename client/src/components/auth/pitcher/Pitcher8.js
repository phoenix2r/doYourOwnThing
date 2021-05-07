import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';

const Pitcher8 = (props) => {
  const { nextStep, prevStep, handleChange, values, setAlert } = props;

  const submitStep = (e) => {
    e.preventDefault();
    if (values.video != '') {
      nextStep();
    } else {
      setAlert(
        'Please paste the youtube code for your video in the field below',
        'danger'
      );
    }
    console.log(values);
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>
        {values.step}. ALMOST THERE - UPLOAD YOUR PITCH
      </h2>
      <div className='form-group'>
        <span>Connect a video to really make your pitch sing</span>
        <span>
          Paste the address of your pitch on youtube in the field below:
        </span>
        <input
          type='text'
          placeholder='Folder Icon'
          required
          onChange={handleChange('video')}
          defaultValue={values.video}
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

Pitcher8.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Pitcher8);
