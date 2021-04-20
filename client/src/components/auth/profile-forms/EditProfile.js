import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EditProfile = () => {
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
    socialLinks: ''
  });

  const [stepCount, setStepCount] = useState({
    step: 1
  })

  const { step } = stepCount;
  const { username, email, password, password2, role } = formData;
  const { user, firstName, lastName, addressLine1, town, postcode, bio } = formData;
  const { projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme } = formData;
  const values = { step, username, email, password, password2, role, user, firstName, lastName, addressLine1, town, postcode, bio, projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme };


  // Proceed to the next step
  const nextStep = () => {
    const { step } = stepCount;
    setStepCount({
      step: step + 1
    });
  }

  // Go back to the previous step
  const prevStep = () => {
    const { step } = stepCount;
    setStepCount({
      step: step - 1
    });
  }

  // Handle standard form field changes
  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value});
  }
  // Handle select form field changes
  const handleSelectChange = e => {
    setFormData({ ...formData, [e.target.name] : e });
    console.log(e);
  }

  return (
    <div className="single-page" id="pitcher">

      <section className="main-content container">
        
        <div className="title">
          <div className="title-box"></div>
          <div className="title-frame"></div>
          <div className="title-content">
            <h1 className="x-large-top">PITCH A</h1>
            <h1 className="x-large-bottom">PROJECT</h1>
          </div>
        </div>

        <h2>Coming soon....</h2>

    

      </section>
    </div>
  )
}


export default EditProfile;

