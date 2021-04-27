import React, { Fragment } from 'react';
import ProjectItem from '../../projects/ProjectItem';

const Pitcher6 = (props) => {
  const { nextStep, prevStep, values } = props;

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
        <div className='white-box'>
          <ProjectItem project={values} />
        </div>
        <div className='form-buttons'>
          <div className='btn btn-secondary' onClick={prevStep}>
            Let me change something
          </div>
          <div className='btn btn-primary' onClick={submitStep}>
            Looking Good
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Pitcher6;
