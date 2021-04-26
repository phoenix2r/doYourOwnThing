import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProject } from '../../actions/project';

const Project = ({ getProject, project: { project, loading }, match }) => {
  useEffect(() => {
    getProject(match.params.id);
  }, [getProject]);

  return <div>project</div>;
};

Project.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProject })(Project);
