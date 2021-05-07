import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProjectsForUser } from '../../actions/project';
import ProjectHeadline from '../projects/ProjectHeadline';

const DashboardMain = ({
  getProjectsForUser,
  projects: { projects, loading },
  user,
  profile,
}) => {
  useEffect(() => {
    if (user.role === 'sponsor') {
      console.log(profile);
    } else {
      getProjectsForUser(user._id);
    }
  }, [projects]);

  const noOfProjects = projects.length;

  return loading && projects === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* <!-- Project Headlines --> */}

      <div className='dashboard-main-pitcher'>
        {noOfProjects != 1 ? (
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
        <Link className='btn btn-primary btn-create' to='!#'>
          Look for a project to sponsor
        </Link>
      ) : (
        <Link className='btn btn-primary btn-create' to='!#'>
          Create a new project +
        </Link>
      )}
    </Fragment>
  );
};

DashboardMain.propTypes = {
  getProjectsForUser: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjectsForUser })(DashboardMain);
