import React from 'react';

const Pitcher8 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props;

  const submitStep = (e) => {
    e.preventDefault();
    console.log(values);
    nextStep();
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>
        {values.step}. ALMOST THERE - UPLOAD YOUR PITCH
      </h2>
      <div className='form-group'>
        <span>Upload a video to really make your pitch sing</span>
        <span>Click the folder icon to browse your computer</span>
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

export default Pitcher8;
