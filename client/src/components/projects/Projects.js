import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProjects } from '../../actions/project';
import Moment from 'react-moment';

const Projects = ({ getProjects, project: { projects, loading } }) => {

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return loading ? <Spinner /> : (
    <Fragment>
      <div class="single-page" id="pitcher">

        <section class="main-content container">

          <div class="project-page">
            <div class="project-item project-pitch">
              <img src="./imgs/builder.jpg" alt="" />
            </div>
            <i class="project-play fab fa-play-circle fa-9x"></i>
            <div class="project-item project-title">
              <div class="title-background"></div>
              <div class="title-content">
                <h1 class="x-large-bottom">PROJECT:</h1>
                <h1 class="x-large-top">{}</h1>
              </div>
            </div>
            <div class="project-item project-details">
              <div class="buttons">
                <a href="!#" class="btn btn-primary">Sponsor this project</a>
              </div>
              <h3 class="project-amount">Amount required: value</h3>
              <h3 class="project-progress">Raised so far: value</h3>
            </div>
            <div class="project-item project-content">
              <h2 class="project-author">Project name by project author</h2>
              <p class="project-description">Text for the project description</p>
            </div>
          </div>
          
        </section>

        </div>
    </Fragment>
  );
};

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  project: state.project
})

export default connect(mapStateToProps, { getProjects })(Projects)
