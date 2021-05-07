import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import PropTypes from 'prop-types';

const Sponsor2 = (props) => {
  const {
    nextStep,
    prevStep,
    handleMultiSelectChange,
    values,
    setAlert,
  } = props;

  const keywordsOptions = [
    { id: 'keywords', value: 'community', label: 'community' },
    { id: 'keywords', value: 'women', label: 'women' },
    { id: 'keywords', value: 'asian', label: 'asian' },
    { id: 'keywords', value: 'disabled', label: 'disabled' },
    { id: 'keywords', value: 'elderly', label: 'metalwork' },
    { id: 'keywords', value: 'environmental', label: 'environmental' },
    { id: 'keywords', value: 'restorative', label: 'restorative' },
    { id: 'keywords', value: 'LGBTQIA', label: 'LGBTQIA' },
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
    if (values.interests === '') {
      setAlert('Please select at least one interest', 'danger');
    } else {
      nextStep();
    }
    console.log(values);
  };

  return (
    <form className='form form-sponsor p-4'>
      <h2 className='form-heading'>
        {values.step}. WHAT KIND OF PROJECTS WOULD YOU LIKE TO HELP
      </h2>
      <div className='form-group'>
        <label>
          Choose some key interests from the list to find projects, or add your
          own
        </label>
        <CreatableSelect
          styles={customStyles}
          isMulti
          onChange={handleMultiSelectChange}
          options={keywordsOptions}
          className='basic-single'
          classNamePrefix='select'
          name='interests'
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

Sponsor2.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Sponsor2);
