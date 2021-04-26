import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const ProjectHeadline = ({
  auth,
  project: { _id, amountReq, amountSoFar, projectName, startDate },
}) => {
  return (
    <Fragment>
      <div className='project-headline'>
        <div className='project-headline-headers'>
          <h2 className='project-headline-title'>{projectName}</h2>
          <p className='project-headline-totals'>£{amountReq} goal</p>
          <p className='project-headline-created'>
            Created on <Moment format='DD/MM/YYYY'>{startDate}</Moment>
          </p>
        </div>

        <div className='project-headline-progress'>
          <p className='progress-goal'>Raised so far: £{amountSoFar}</p>
          <p className='progress-text'>You are value of the way there!</p>
          <div className='progress-bar'>
            <div className='progress-bar-inner'></div>
          </div>
        </div>

        <div className='project-headline-btns'>
          <div className='btn btn-primary'>See sponsors</div>
          <div className='btn btn-primary'>Promote</div>
          <div className='btn btn-secondary btn-pitch-edit'>Edit Pitch</div>
        </div>
      </div>
    </Fragment>
  );
};

ProjectHeadline.propTypes = {
  project: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ProjectHeadline);
