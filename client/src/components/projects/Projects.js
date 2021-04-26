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

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='project-single'>
        <div className='container'>
          {/* <!-- Title --> */}
          <h2 className='project-single-title'>
            Project Name by Project Author
          </h2>

          {/* <!-- Video --> */}
          <div className='project-single-video'>
            <img src='./imgs/builder.jpg' alt='' />
          </div>
          {/* <!-- Detail Box --> */}
          <div className='project-single-details'>
            <div className='sponsor-box'>
              <h3>Help Project Author get Purpose</h3>
              <h3>
                £??? <span style='font-size: 0.8rem'>GOAL</span>
              </h3>
              <div className='btn btn-primary btn-sponsor'>
                Sponsor this project
              </div>
            </div>
            <div className='project-single-totals'>
              This project is 50% funded - nearly there!
            </div>
            <div className='project-single-atts'>
              <div className='project-single-created'>
                Created by Project Author, ? days ago
              </div>
              <div className='project-single-tags'>
                A number of tags for the project
              </div>
              <img id='project-author-avatar' src='./imgs/builder.jpg' alt='' />
            </div>
            <div className='project-single-description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, nobis tempore. Sed aut quaerat, expedita non
              perspiciatis, repellat earum commodi blanditiis magnam aspernatur
              porro ut? Et non corrupti velit dolores inventore adipisci a
              ducimus? Cumque deleniti laborum sed omnis cum suscipit expedita
              vitae, illo ipsam sequi. Eveniet facere laborum error, nostrum
              eligendi vel! Nemo sed facere vero praesentium soluta laudantium!
            </div>
            <div className='progress-bar'>Progress bar</div>
          </div>
        </div>
      </section>

      <div className='single-page' id='pitcher'>
        <section className='main-content container'>
          <div className='project-page'>
            <div className='project-item project-pitch'>
              <img src='./imgs/builder.jpg' alt='' />
            </div>
            <i className='project-play fab fa-play-circle fa-9x'></i>
            <div className='project-item project-title'>
              <div className='title-background'></div>
              <div className='title-content'>
                <h1 className='x-large-bottom'>PROJECT:</h1>
                <h1 className='x-large-top'>{}</h1>
              </div>
            </div>
            <div className='project-item project-details'>
              <div className='buttons'>
                <a href='!#' className='btn btn-primary'>
                  Sponsor this project
                </a>
              </div>
              <h3 className='project-amount'>Amount required: value</h3>
              <h3 className='project-progress'>Raised so far: value</h3>
            </div>
            <div className='project-item project-content'>
              <h2 className='project-author'>Project name by project author</h2>
              <p className='project-description'>
                Text for the project description
              </p>
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
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(Projects);
