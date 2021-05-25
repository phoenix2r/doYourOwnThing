import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectHeadline from '../projects/ProjectHeadline';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';
import {
  getProjectsBySearchTerms,
  clearSearch,
} from '../../actions/project-search';

export const SearchPage = ({
  getProjectsBySearchTerms,
  clearSearch,
  search: { results, error },
  setAlert,
}) => {
  const [searchString, setSearchString] = useState({
    keywords: [],
  });

  useEffect(() => {
    if (error.status === 404) {
      setAlert(
        'There were no projects that matched your search - please try some different terms',
        'danger'
      );
    }
  }, [error]);

  // Handle select form field changes
  const handleMultiSelectChange = (selectValue) => {
    let selectedWords = selectValue.map((i) => i.value);
    setSearchString({ ...searchString, keywords: selectedWords });
  };

  const submitSearch = async () => {
    let stringifiedKeywords = searchString.keywords.join(',');
    await clearSearch();
    await getProjectsBySearchTerms(stringifiedKeywords);
  };

  return (
    <div>
      <div className='container' id='search'>
        <SearchBox
          handleChange={handleMultiSelectChange}
          submitSearch={submitSearch}
        />
      </div>
      {results.length > 0 ? (
        results.map((result) => (
          <ProjectHeadline key={result._id} project={result} />
        ))
      ) : (
        <Alert />
      )}
    </div>
  );
};

SearchPage.propTypes = {
  getProjectsBySearchTerms: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  results: state.results,
  error: state.error,
  search: state.search,
});

export default connect(mapStateToProps, {
  getProjectsBySearchTerms,
  clearSearch,
  setAlert,
})(SearchPage);
