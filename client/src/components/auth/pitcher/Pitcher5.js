import React from 'react';
import Select from 'react-select';

const Pitcher5 = (props) => {
  const {
    nextStep,
    prevStep,
    handleChange,
    handleSelectChange,
    values,
  } = props;

  const sectorOptions = [
    { id: 'sector', value: 'hospitality', label: 'hospitality' },
    { id: 'sector', value: 'catering', label: 'catering' },
    { id: 'sector', value: 'construction', label: 'construction' },
    { id: 'sector', value: 'woodwork', label: 'woodwork' },
    { id: 'sector', value: 'metalwork', label: 'metalwork' },
    { id: 'sector', value: 'digital', label: 'digital' },
    { id: 'sector', value: 'creative arts', label: 'creative arts' },
    { id: 'sector', value: 'tutoring', label: 'tutoring' },
  ];

  const submitStep = (e) => {
    e.preventDefault();
    console.log(values);
    nextStep();
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>
        {values.step}. TELL US MORE ABOUT YOUR IDEA
      </h2>
      <div className='form-group'>
        <label>What sector is your business in?</label>
        <label>Choose the option that fits best:</label>
        <Select
          defaultValue={sectorOptions[0]}
          name='sector'
          options={sectorOptions}
          className='basic-single'
          classNamePrefix='select'
          onChange={handleSelectChange}
        />
      </div>
      <div className='form-group'>
        <label>In a few words, give us a description of your business:</label>
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='5'
          required
          onChange={handleChange('description')}
          defaultValue={values.description}
        ></textarea>
        {/* <input type="textarea" placeholder="Use up to 150 words" required onChange={handleChange('description')} defaultValue={values.description} /> */}
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

export default Pitcher5;
