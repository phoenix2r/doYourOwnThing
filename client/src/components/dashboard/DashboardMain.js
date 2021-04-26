import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProjects } from '../../actions/project';
import ProjectHeadline from '../projects/ProjectHeadline';

const DashboardMain = ({ getProjects, project: { projects, loading } }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return loading && projects === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* <!-- Project Headlines --> */}

      <div className='dashboard-main-pitcher'>
        <p className='dashboard-main-pitcher-active'>
          You have ? active projects
        </p>
        <div className='project-list'>
          {projects.map((project) => (
            <ProjectHeadline key={project._id} project={project} />
          ))}
        </div>
      </div>

      {/* <!-- Create more projects --> */}
      <div className='btn btn-primary btn-create'>Create a new project +</div>
    </Fragment>
  );
};

DashboardMain.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(DashboardMain);
