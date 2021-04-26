import React from 'react';
import Select from 'react-select';

const Pitcher3 = (props) => {
  const { nextStep, prevStep, handleSelectChange, values, step } = props;

  const purposeOptions = [
    {
      id: 'purpose',
      value: 'equipment',
      label: 'purchase or upgrade equipment',
    },
    { id: 'purpose', value: 'premises', label: 'create or expand premises' },
    { id: 'purpose', value: 'advertising', label: 'run advertising' },
    { id: 'purpose', value: 'website', label: 'develop website' },
    { id: 'purpose', value: 'digital', label: 'develop app or digital assets' },
    { id: 'purpose', value: 'branding', label: 'develop business branding' },
    { id: 'purpose', value: 'vehicle', label: 'modify or obtain a vehicle' },
    {
      id: 'purpose',
      value: 'materials',
      label: 'purchase startup materials or ingredients',
    },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted #1fc0da',
      color: state.isSelected ? '#fff' : '#939598',
      padding: 10,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const submitStep = (e) => {
    e.preventDefault();
    console.log(values);
    nextStep();
  };

  return (
    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>
        {values.step}. WHAT WOULD YOU LIKE TO USE THE MONEY FOR?
      </h2>
      <div className='form-group'>
        <label>
          Choose from the list the description that fits your idea best:
        </label>
        <Select
          styles={customStyles}
          defaultValue={purposeOptions[0]}
          name='purpose'
          options={purposeOptions}
          className='basic-single'
          classNamePrefix='select'
          onChange={handleSelectChange}
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

export default Pitcher3;
