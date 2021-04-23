import React from 'react';

const Pitcher2 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props;

  const submitStep = (e) => {
    e.preventDefault();
    console.log(values);
    nextStep();
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>{values.step}. HOW MUCH DO YOU NEED?</h2>
      <div className='form-group'>
        <label>Enter the amount you need in pounds</label>
        <input
          type='text'
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

export default Pitcher2;
