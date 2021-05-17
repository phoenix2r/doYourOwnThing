import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import {
  getProjectsForUser,
  getProjectsAssocWithUser,
} from '../../actions/project';
import { getProjectsByInterests } from '../../actions/project-search';
import ProjectHeadline from '../projects/ProjectHeadline';

const DashboardMain = ({
  getProjectsAssocWithUser,
  getProjectsForUser,
  getProjectsByInterests,
  projects: { projects, loading },
  search: { results },
  user,
  profile,
}) => {
  useEffect(() => {
    if (user.role === 'sponsor') {
      getProjectsAssocWithUser(user._id);
      getProjectsByInterests(user._id);

      console.log(projects);
      console.log(results);
      console.log(user._id);
    } else {
      getProjectsForUser(user._id);
    }
  }, []);

  const noOfProjects = projects.length;

  // TState for the projects that match the sponsor's interests
  const [intProjects, setIntProjects] = useState({
    showIntProjects: false,
    // sponsorInterests: [],
  });

  const { showIntProjects, sponsorInterests } = intProjects;

  const showProjects = () => {
    setIntProjects({
      showIntProjects: !intProjects.showIntProjects,
    });
    console.log(results);
  };

  return loading && projects === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* <!-- Project Headlines --> */}

      <div className='dashboard-main-pitcher'>
        {noOfProjects !== 1 ? (
          <p className='dashboard-main-pitcher-active'>
            You have {projects.length} active projects
          </p>
        ) : (
          <p className='dashboard-main-pitcher-active'>
            You have {projects.length} active project
          </p>
        )}
        <div className='project-list'>
          {projects
            ? projects.map((project) => (
                <ProjectHeadline key={project._id} project={project} />
              ))
            : null}
        </div>
      </div>

      {/* <!-- Create more projects --> */}
      {user.role === 'sponsor' ? (
        <div
          className='btn btn-primary btn-create'
          to='!#'
          onClick={showProjects}
        >
          Projects that match your interests
        </div>
      ) : (
        <Link className='btn btn-primary btn-create' to='!#'>
          Create a new project +
        </Link>
      )}
      {showIntProjects
        ? results.map((result) => (
            <ProjectHeadline key={result._id} project={result} />
          ))
        : null}
    </Fragment>
  );
};

DashboardMain.propTypes = {
  getProjectsAssocWithUser: PropTypes.func.isRequired,
  getProjectsByInterests: PropTypes.func.isRequired,
  getProjectsForUser: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects,
  search: state.search,
});

export default connect(mapStateToProps, {
  getProjectsForUser,
  getProjectsAssocWithUser,
  getProjectsByInterests,
})(DashboardMain);
