import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';

const Pitcher2 = (props) => {
  const { nextStep, prevStep, handleChange, values, setAlert } = props;

  const submitStep = (e) => {
    e.preventDefault();
    if (
      // !isNaN(values.amountReq) &&
      values.amountReq > 49 &&
      values.amountReq < 501
    ) {
      nextStep();
    } else {
      setAlert(
        'You can apply for an amount between £50 and £500 pounds only',
        'danger'
      );
    }
    console.log(values);
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>{values.step}. HOW MUCH DO YOU NEED?</h2>
      <div className='form-group'>
        <label>
          Enter the amount you need in pounds - you can apply for any amount
          between £50 and £500
        </label>
        <input
          type='number'
          placeholder='Amount required'
          required
          onChange={handleChange('amountReq')}
          defaultValue={values.amountReq}
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

Pitcher2.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Pitcher2);
