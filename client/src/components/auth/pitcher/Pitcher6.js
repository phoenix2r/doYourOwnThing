import React, { Fragment } from 'react';

const Pitcher6 = (props) => {
  const { nextStep, prevStep, values } = props;
  const { projectName, username, description, amountReq } = values;

  const submitStep = (e) => {
    e.preventDefault();
    console.log(values);
    nextStep();
  };

  return (
    <Fragment>
      <form className='form form-pitch p-4'>
        <h2 className='form-heading'>
          {values.step}. YOUR PROJECT LOOKS LIKE THIS
        </h2>
        <div className='form-buttons'>
          <div className='btn btn-secondary' onClick={prevStep}>
            Back
          </div>
          <div className='btn btn-primary' onClick={submitStep}>
            Next
          </div>
        </div>
      </form>

      <div class='single-page' id='pitcher'>
        <section class='main-content container'>
          <div class='project-page'>
            <div class='project-item project-pitch'>
              <img src='./imgs/builder.jpg' alt='' />
            </div>
            <i class='project-play fab fa-play-circle fa-9x'></i>
            <div class='project-item project-title'>
              <div class='title-background'></div>
              <div class='title-content'>
                <h1 class='x-large-bottom'>PROJECT:</h1>
                <h1 class='x-large-top'>{projectName}</h1>
              </div>
            </div>
            <div class='project-item project-details'>
              <div class='buttons'>
                <a href='!#' class='btn btn-primary'>
                  Sponsor this project
                </a>
              </div>
              <h3 class='project-amount'>Amount required: {amountReq}</h3>
              <h3 class='project-progress'>Raised so far: 0</h3>
            </div>
            <div class='project-item project-content'>
              <h2 class='project-author'>
                {projectName} by {username}
              </h2>
              <p class='project-description'>{description}</p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Pitcher6;
