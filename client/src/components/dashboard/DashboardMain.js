import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProjectsForUser } from '../../actions/project';
import ProjectHeadline from '../projects/ProjectHeadline';

const DashboardMain = ({
  getProjectsForUser,
  project: { projects, loading },
  userid,
}) => {
  useEffect(() => {
    console.log(userid);
    getProjectsForUser(userid);
  }, [getProjectsForUser]);

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
      <Link className='btn btn-primary btn-create' to='!#'>
        Create a new project +
      </Link>
    </Fragment>
  );
};

DashboardMain.propTypes = {
  getProjectsForUser: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjectsForUser })(DashboardMain);
