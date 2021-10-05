import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectHeadline from '../projects/ProjectHeadline';
import { getLatestProjects } from '../../actions/project-search';

const Landing = ({
  startJourney,
  getLatestProjects,
  search: { results, error },
}) => {
  const [displayProjectsState, setDisplayProjectsState] = useState({
    displayProjects: true,
  });

  const toggleShowProjects = () => {
    setDisplayProjectsState({
      displayProjects: !displayProjectsState.displayProjects,
    });
    console.log(displayProjectsState.displayProjects);
  };

  useEffect(() => {
    getLatestProjects();
  }, []);

  useEffect(() => {
    if (error.status === 404) {
      toggleShowProjects();
    }
  }, [error]);

  return (
    <section className='landing'>
      <div className='white-overlay'>
        <div className='landing-inner'>
          {/* <!-- This content to be replaced by carousel --> */}
          <div className='landing-title'>
            <div className='landing-title-box'></div>
            <div className='landing-title-frame'></div>
            <div className='landing-title-content'>
              <h1 className='x-large-top'>DO YOUR</h1>
              <h1 className='x-large-bottom'>OWN THING</h1>
              <div className='landing-title-content-call'>
                <p className='lead'>Examples to inspire</p>
                <div className='buttons'>
                  <Link
                    to='/signup'
                    className='btn btn-primary'
                    onClick={() => startJourney('general')}
                  >
                    Let's get started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* video and headline */}

          {/* search with latest projects */}
          <section className='search-projects'>
            <div className='search-link'>
              <p>
                Visit our search page to find projects that match your interests
              </p>
              <div className='btn btn-primary'>
                <Link to='/search'>Search</Link>
              </div>
            </div>
            <div className='project-carousel'>
              {displayProjectsState.displayProjects ? (
                results.map((result) => (
                  <ProjectHeadline key={result._id} project={result} />
                ))
              ) : (
                <div className='no-projects'>
                  <p>
                    No projects have been created yet - why not be the first?
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* button to become pitcher/sponsor */}

          {/* icon list */}
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  getLatestProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  results: state.results,
  error: state.error,
  search: state.search,
});

export default connect(mapStateToProps, { getLatestProjects })(Landing);
