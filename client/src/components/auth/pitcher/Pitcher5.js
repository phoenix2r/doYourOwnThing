import React from 'react';
import Select from 'react-select';

const Pitcher5 = (props) => {
  const { nextStep, prevStep, handleChange, handleSelectChange, values } = props;

  const sectorOptions = [
    { id: "sector", value: "hospitality", label: "hospitality" },
    { id: "sector", value: "catering", label: "catering" },
    { id: "sector", value: "construction", label: "construction" },
    { id: "sector", value: "woodwork", label: "woodwork" },
    { id: "sector", value: "metalwork", label: "metalwork" },
    { id: "sector", value: "digital", label: "digital" },
    { id: "sector", value: "creative arts", label: "creative arts" },
    { id: "sector", value: "tutoring", label: "tutoring" },
  ]

  const submitStep = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  }



  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
      {values.step}. TELL US MORE ABOUT YOUR IDEA
      </h2>
      <div className="form-group">
        <span>What sector is your business in?</span>
        <span>Choose the option that fits best:</span>
        <Select
          defaultValue={sectorOptions[0]}
          name="sector"
          options={sectorOptions}
          className="basic-single"
          classNamePrefix="select"
          onChange={handleSelectChange}
        />
      </div>
      <div className="form-group">
        <span>In a few words, give us a description of your business:</span>
        <input type="textarea" placeholder="Use up to 150 words" required onChange={handleChange('description')} defaultValue={values.description} />
      </div>
      <div className="buttons">
        <div className="btn btn-primary" onClick={submitStep}>Continue</div>
      </div>
      <div className="buttons">
        <div className="btn btn-primary" onClick={prevStep}>Back</div>
      </div>
    </form>
  )
}

export default Pitcher5