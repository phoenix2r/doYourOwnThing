import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getProject } from '../../actions/project';
import imageDefault from '../../imgs/builder.jpg';
import Spinner from '../layout/Spinner';
import YouTubeEmbed from '../layout/YouTubeEmbed';

// @TODO - add auth functionality to allow project author to edit the project.

const ProjectItem = ({ getProject, projects: { project, loading }, match }) => {
  // const vidCode = project.video;
  // const videoEmbed = vidCode.substring(vidCode.indexOf('e/') + 1);
  // console.log(videoEmbed);
  const [projectCodeState, setProjectCodeState] = useState({
    vidCode: '',
    vidEmbedCode: '',
    widgetCode: '',
    widgetEmbedCode: '',
  });

  const loadProjectCode = async () => {
    try {
      await getProject(match.params.id);
      setProjectCodeState({
        vidEmbedCode: project.video.substring(vidCode.indexOf('e/') + 1),
        widgetCode: project.gofundme.substring(),
      });
    } catch (error) {}
  };

  useEffect(() => {
    console.log(match.params.id);
    getProject(match.params.id);
  }, [getProject]);

  return loading || project === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='project-single'>
        <div className='container'>
          {/* <!-- Title --> */}
          <h2 className='project-single-title'>{project.projectName}</h2>
          <p> by </p>
          <h2>{project.username}</h2>

          {/* <!-- Video --> */}
          <div className='project-single-video'>
            <YouTubeEmbed embedId={'oVC0OcunPWM'} />
            {/* <img src={project.video} alt='' /> */}
          </div>
          {/* <!-- Detail Box --> */}
          <div className='project-single-details'>
            {/* <div className='sponsor-box'>
              <h3>
                Help {project.username} get {project.purpose}
              </h3>
              <h3>
                £{project.amountReq} <span>GOAL</span>
              </h3>
              <Link to='#' className='btn btn-primary btn-sponsor'>
                Sponsor this project
              </Link>
            </div> */}
            <iframe className='gofundme'>{project.gofundme}</iframe>

            <div className='project-single-totals'>
              This project is 50% funded - nearly there!
            </div>
            <div className='project-single-atts'>
              <div className='project-single-created'>
                Created by {project.username}, on
                <Moment format='DD/MM/YYYY'>{project.startDate}</Moment>
              </div>
              <div className='project-single-tags'>
                Tags: {project.sector},
                {project.keywords.map((str) => (
                  <span> {str},</span>
                ))}
              </div>
              <img id='project-author-avatar' src={imageDefault} alt='' />
            </div>
            <div className='project-single-description'>
              {project.description}
            </div>
            <div className='progress-bar'>
              <div className='progress-bar-inner'></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

ProjectItem.propTypes = {
  getProject: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { getProject })(ProjectItem);
