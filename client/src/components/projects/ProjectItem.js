import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import imageDefault from '../../imgs/builder.jpg';

// const [elapsedTime, setElapsedTime] = useState();

const ProjectItem = ({
  // auth,
  project: {
    _id,
    username,
    amountReq,
    amountSoFar,
    purpose,
    projectName,
    sector,
    description,
    video,
    startDate,
    gofundme,
  },
  // user: {

  // }
}) => (
  <section className='project-single'>
    <div className='container'>
      {/* <!-- Title --> */}
      <h2 className='project-single-title'>
        {projectName} by {username}
      </h2>

      {/* <!-- Video --> */}
      <div className='project-single-video'>
        <img src={imageDefault} alt='' />
      </div>
      {/* <!-- Detail Box --> */}
      <div className='project-single-details'>
        <div className='sponsor-box'>
          <h3>
            Help {username} get {purpose}
          </h3>
          <h3>
            £{amountReq} <span>GOAL</span>
          </h3>
          <Link to='#' className='btn btn-primary btn-sponsor'>
            Sponsor this project
          </Link>
        </div>
        <div className='project-single-totals'>
          This project is 50% funded - nearly there!
        </div>
        <div className='project-single-atts'>
          <div className='project-single-created'>
            Created by {username}, on
            <Moment format='DD/MM/YYYY'>{startDate}</Moment>
          </div>
          <div className='project-single-tags'>Tags: {sector}</div>
          <img id='project-author-avatar' src={imageDefault} alt='' />
        </div>
        <div className='project-single-description'>{description}</div>
        <div className='progress-bar'>
          <div className='progress-bar-inner'></div>
        </div>
      </div>
    </div>
  </section>
);

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  // auth: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

export default connect(null, {})(ProjectItem);

// Get time elapsed since project was created
// const elapsedTime = (startDate) => {
//   const currentDate = new Date();
//   return currentDate - startDate;
// };
