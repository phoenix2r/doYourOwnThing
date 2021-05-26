import React, { useState } from 'react';
import Pitcher1 from './pitcher/Pitcher1';
import Pitcher2 from './pitcher/Pitcher2';
import Pitcher3 from './pitcher/Pitcher3';
import Pitcher4 from './pitcher/Pitcher4';
import Pitcher5 from './pitcher/Pitcher5';
import Pitcher6 from './pitcher/Pitcher6';
import Pitcher7 from './pitcher/Pitcher7';
import Pitcher8 from './pitcher/Pitcher8';
import Pitcher9 from './pitcher/Pitcher9';
import PitcherSuccess from './pitcher/PitcherSuccess';
import Stepindicator from '../layout/Stepindicator';
import VideoModal from '../modals/VideoModal';

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
    keywords: [],
    video: '',
    gofundme: '',
    socialLinks: '',
  });

  const [stepCount, setStepCount] = useState({
    step: 1,
    stepsFor: 'pitcher',
  });

  const [modalState, setModalState] = useState({
    showModal: false,
    videoUrl: '',
  });

  const openModal = () => {
    setModalState({
      showModal: !modalState.showModal,
    });
    console.log(modalState.showModal);
  };

  const { step } = stepCount;
  const { username, email, password, password2, role } = formData;
  const { user, firstName, lastName, addressLine1, town, postcode, bio } =
    formData;
  const {
    projectAuthor,
    amountReq,
    purpose,
    projectName,
    sector,
    description,
    keywords,
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
    keywords,
    video,
    gofundme,
  };

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
    console.log(input);
  };

  // Handle select form field changes
  const handleSelectChange = (selectValue) => {
    setFormData({ ...formData, [selectValue.id]: selectValue.value });
  };

  // Handle select form field changes
  const handleMultiSelectChange = (selectValue) => {
    let selectedWords = selectValue.map((i) => i.value);
    setFormData({ ...formData, keywords: selectedWords });
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
            handleMultiSelectChange={handleMultiSelectChange}
            values={values}
          />
        );

      case 6:
        return (
          <Pitcher8
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 7:
        return (
          <Pitcher6
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 8:
        return (
          <Pitcher7
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 9:
        return (
          <Pitcher9
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 10:
        return <PitcherSuccess values={values} />;

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
    <section id='pitch'>
      <div className='container'>
        <div id='pitch-journey'>
          {/* <!-- title-box --> */}
          <div className='title'>
            <div className='title-box'></div>
            <div className='title-frame'></div>
            <div className='title-content'>
              <h1 className='x-large-bottom'>BECOME A</h1>
              <h1 className='x-large-top'>PITCHER</h1>
            </div>
          </div>

          {/* <!-- Video Help --> */}
          <div className='video' onClick={openModal}>
            <div className='video-box'></div>
            <div className='video-frame'></div>
            <div className='video-content'>
              <h1 className='x-large-bottom'>VIDEO</h1>
              <h1 className='x-large-top'>SUPPORT</h1>
            </div>
          </div>
          <VideoModal
            showModal={modalState.showModal}
            setShowModal={openModal}
          />

          {renderSwitch(values)}
        </div>
      </div>

      <section className='progress-steps'>
        <Stepindicator step={step} stepsFor={stepCount.stepsFor} />
      </section>
    </section>
  );
};

export default Pitcher;
