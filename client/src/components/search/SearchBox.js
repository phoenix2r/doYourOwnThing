import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import keywordsList from '../../utils/keywordsList';

export const SearchBox = (props) => {
  const { handleChange, submitSearch } = props;

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

  return (
    <div>
      <div className='search-box'>
        <label>
          Search our projects for one that matches your interests. You can
          select from the list or enter your own - just type and then hit enter:
        </label>
        <CreatableSelect
          styles={customStyles}
          isMulti
          onChange={handleChange}
          options={keywordsList}
          className='basic-single'
          classNamePrefix='select'
          name='keywords'
        />
        <div className='btn' onClick={submitSearch}>
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
