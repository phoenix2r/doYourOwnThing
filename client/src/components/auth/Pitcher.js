import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pitcher1 from './pitcher/Pitcher1';
import Pitcher2 from './pitcher/Pitcher2';
import Pitcher3 from './pitcher/Pitcher3';
import Pitcher4 from './pitcher/Pitcher4';
import Pitcher5 from './pitcher/Pitcher5';
import Pitcher6 from './pitcher/Pitcher6';
import Pitcher7 from './pitcher/Pitcher7';
import Pitcher8 from './pitcher/Pitcher8';
import Pitcher9 from './pitcher/Pitcher9';
import Stepindicator from '../layout/Stepindicator';

const Pitcher = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    role: '',
    user: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    town: '',
    postcode: '',
    bio: '',
    projectAuthor: '',
    amountReq: '',
    purpose: '',
    projectName: '',
    sector: '',
    description: '',
    video: '',
    gofundme: '',
    socialLinks: '',
  });

  const [stepCount, setStepCount] = useState({
    step: 1,
  });

  const { step } = stepCount;
  const { username, email, password, password2, role } = formData;
  const {
    user,
    firstName,
    lastName,
    addressLine1,
    town,
    postcode,
    bio,
  } = formData;
  const {
    projectAuthor,
    amountReq,
    purpose,
    projectName,
    sector,
    description,
    video,
    gofundme,
  } = formData;
  const values = {
    step,
    username,
    email,
    password,
    password2,
    role,
    user,
    firstName,
    lastName,
    addressLine1,
    town,
    postcode,
    bio,
    projectAuthor,
    amountReq,
    purpose,
    projectName,
    sector,
    description,
    video,
    gofundme,
  };

  const stepIndicators = [
    { stepNo: '1', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '2', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '3', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '4', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '5', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '6', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '7', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '8', label: 'Details', icon: 'far fa-comment-alt' },
    { stepNo: '9', label: 'Details', icon: 'far fa-comment-alt' },
  ];

  // Proceed to the next step
  const nextStep = () => {
    const { step } = stepCount;
    setStepCount({
      step: step + 1,
    });
  };

  // Go back to the previous step
  const prevStep = () => {
    const { step } = stepCount;
    setStepCount({
      step: step - 1,
    });
  };

  // Handle standard form field changes
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Handle select form field changes
  const handleSelectChange = (selectValue) => {
    setFormData({ ...formData, [selectValue.id]: selectValue.value });
  };

  // Handle file upload field changes

  // Switch statement to change between steps of the form
  const renderSwitch = (params) => {
    switch (step) {
      case 1:
        return (
          <Pitcher1
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <Pitcher2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Pitcher3
            nextStep={nextStep}
            prevStep={prevStep}
            handleSelectChange={handleSelectChange}
            values={values}
          />
        );

      case 4:
        return (
          <Pitcher4
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 5:
        return (
          <Pitcher5
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            values={values}
          />
        );

      case 6:
        return (
          <Pitcher6
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 7:
        return (
          <Pitcher7
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 8:
        return (
          <Pitcher8
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 9:
        return (
          <Pitcher9
            // onSubmit = {onSubmit}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      default:
        return (
          <Pitcher1
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
    }
  };

  return (
    <div className='single-page' id='pitcher'>
      <section className='main-content container'>
        <div className='title'>
          <div className='title-box'></div>
          <div className='title-frame'></div>
          <div className='title-content'>
            <h1 className='x-large-top'>PITCH A</h1>
            <h1 className='x-large-bottom'>PROJECT</h1>
          </div>
        </div>

        {renderSwitch(values)}

        <div className='guidance'>
          <video className='video' src='./video/DYOT_v03.mp4' controls></video>
          <div className='controls'>
            <div className='playback-buttons'>
              <button id='play'>
                <i className='fas fa-play fa-lg'></i>
              </button>
              <button id='pause'>
                <i className='fas fa-pause fa-lg'></i>
              </button>
            </div>
            <div className='progress-bar'>
              <div className='blue-bar'></div>
            </div>
            <div className='environment-buttons'>
              <button id='volume'>
                <i className='fas fa-volume-off fa-lg'></i>
              </button>
              <button id='screen-toggle'>
                <i className='fas fa-desktop fa-lg'></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='progress-steps'>
        {/* { stepIndicators.map(item => {
          return (
            <Stepindicator key={item.stepNo} label={item.label} icon={item.icon} />
          );
        }) } */}

        <Stepindicator step={step} />
      </section>
    </div>
  );
};

export default Pitcher;
