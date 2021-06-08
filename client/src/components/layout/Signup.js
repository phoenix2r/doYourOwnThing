import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ source }) => {
  const journeySwitch = () => {
    switch (source) {
      case 'pitcher':
        return (
          <div>
            <label>
              You have selected the role of pitcher, that means you would like
              to create a pitch to raise money for your project. Is this
              correct?
            </label>
            <Link to='/pitcher' className='btn btn-primary'>
              Yes, let's create a pitch
            </Link>
            <Link to='/sponsor' className='btn btn-secondary'>
              No, I want to sponsor projects instead
            </Link>
          </div>
        );

      case 'sponsor':
        return (
          <div>
            <label>
              You have selected the role of sponsor, that means you would like
              to donate money to projects to help them achieve their goals. Is
              this correct?
            </label>
            <Link to='/sponsor' className='btn btn-primary'>
              Yes, I want to sponsor projects
            </Link>
            <Link to='/pitcher' className='btn btn-secondary'>
              No, I want to create a pitch instead
            </Link>
          </div>
        );

      case 'general':
        return (
          <div>
            <label>
              Please choose whether you would like to be a pitcher or a sponsor.
            </label>
            <Link to='/pitcher' className='btn btn-primary'>
              I want to be a pitcher and create a pitch
            </Link>
            <Link to='/sponsor' className='btn btn-primary'>
              I want to be a sponsor and donate to projects
            </Link>
          </div>
        );
    }
  };

  return (
    <div className='signup-container'>
      <form className='form form-pitch p-4'>
        <h2 className='form-heading'>WHAT DO YOU WANT TO BE?</h2>

        <div className='form-group'>
          <div className='role-check'>
            <label>
              You can be a pitcher or a sponsor.
              <br />
              Pitchers create a pitch to raise money for their projects.
              <br />
              Sponsors find projects that would like to donate money to.
            </label>
            {journeySwitch(source)}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
