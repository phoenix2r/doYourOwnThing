import React, { useState } from 'react';
import Sponsor1 from './sponsor/Sponsor1';
import Sponsor2 from './sponsor/Sponsor2';
import Sponsor3 from './sponsor/Sponsor3';
import Sponsor4 from './sponsor/Sponsor4';
import Sponsor5 from './sponsor/Sponsor5';
import Sponsor6 from './sponsor/Sponsor6';
import SponsorSuccess from './sponsor/SponsorSuccess';
import Stepindicator from '../layout/Stepindicator';
import VideoModal from '../modals/VideoModal';

const Sponsor = () => {
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
    organisation: '',
    sponsorLogo: '',
    interests: [],
    visibility: '',
  });

  const [stepCount, setStepCount] = useState({
    step: 1,
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
  const { user, firstName, lastName, addressLine1, town, postcode } = formData;
  const { organisation, sponsorLogo, interests, visibility, bio } = formData;
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
    organisation,
    sponsorLogo,
    interests,
    visibility,
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
    setFormData({ ...formData, interests: selectedWords });
  };

  // Handle file upload field changes

  // Switch statement to change between steps of the form
  const renderSwitch = (params) => {
    switch (step) {
      case 1:
        return (
          <Sponsor1
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <Sponsor2
            nextStep={nextStep}
            prevStep={prevStep}
            handleMultiSelectChange={handleMultiSelectChange}
            values={values}
          />
        );

      case 3:
        return (
          <Sponsor3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 4:
        return (
          <Sponsor4
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 5:
        return (
          <Sponsor5
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 6:
        return (
          <Sponsor6
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 7:
        return <SponsorSuccess values={values} />;

      default:
        return (
          <Sponsor1
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
    }
  };

  return (
    <section id='sponsor'>
      <div className='container'>
        <div id='sponsor-journey'>
          {/* <!-- title-box --> */}
          <div className='title'>
            <div className='title-box'></div>
            <div className='title-frame'></div>
            <div className='title-content'>
              <h1 className='x-large-bottom'>BECOME A</h1>
              <h1 className='x-large-top'>SPONSOR</h1>
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
        <Stepindicator step={step} />
      </section>
    </section>
  );
};

export default Sponsor;
