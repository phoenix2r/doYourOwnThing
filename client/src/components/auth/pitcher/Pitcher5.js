import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';
import keywordsList from '../../../utils/keywordsList';

const Pitcher5 = (props) => {
  const {
    nextStep,
    prevStep,
    handleChange,
    handleSelectChange,
    handleMultiSelectChange,
    values,
    setAlert,
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
    if (values.sector === '') {
      setAlert('Please select an option to continue', 'danger');
    } else if (values.description === '') {
      setAlert('Please enter a valid description', 'danger');
    } else {
      nextStep();
    }
    console.log(values);
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
          styles={customStyles}
          defaultValue={sectorOptions[0]}
          name='sector'
          options={sectorOptions}
          className='basic-single'
          classNamePrefix='select'
          onChange={handleSelectChange}
        />
      </div>
      <div className='form-group'>
        <label>
          In a few words, give us a description of your business (
          {250 - values.description.length} characters left):
        </label>
        <textarea
          name='description'
          id='description'
          maxLength='250'
          cols='30'
          rows='5'
          required
          onChange={handleChange('description')}
          defaultValue={values.description}
        ></textarea>
      </div>
      <div className='form-group'>
        <label>
          Choose some key words to help people find your project, or add your
          own
        </label>
        <CreatableSelect
          styles={customStyles}
          isMulti
          onChange={handleMultiSelectChange}
          options={keywordsList}
          className='basic-single'
          classNamePrefix='select'
          name='keywords'
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

Pitcher5.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Pitcher5);
