import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';

const Sponsor4 = (props) => {
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
        {values.step}. PLEASE TELL US MORE ABOUT YOURSELF?
      </h2>
      <div className='form-group'>
        <label>
          In a few words, give us a biography of you or your work (
          {250 - values.bio.length} characters left):
        </label>
        <textarea
          name='bio'
          id='bio'
          maxLength='250'
          cols='30'
          rows='5'
          required
          onChange={handleChange('bio')}
          defaultValue={values.bio}
        ></textarea>
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

Sponsor4.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Sponsor4);
