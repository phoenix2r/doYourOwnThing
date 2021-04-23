import React from 'react';

const Pitcher4 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props;

  const submitStep = (e) => {
    e.preventDefault();
    console.log(values);
    nextStep();
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

export default Pitcher4;
