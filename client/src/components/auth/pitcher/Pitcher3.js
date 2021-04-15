import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const purposeOptions = [
  { value: "equipment", label: "purchase or upgrade equipment" },
  { value: "premises", label: "create or expand premises" },
  { value: "advertising", label: "run advertising" },
  { value: "website", label: "develop website" },
  { value: "digital", label: "develop app or digital assets" },
  { value: "branding", label: "develop business branding" },
  { value: "vehicle", label: "modify or obtain a vehicle" },
  { value: "materials", label: "purchase startup materials or ingredients" },
]

const Pitcher3 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props

  const submitStep = e => {
    e.preventDefault();
    console.log(values)
    nextStep();
  }

  return (
    <form className="form p-1">
      <h2 className="form-heading">
        WHAT WOULD YOU LIKE TO USE THE MONEY FOR?
      </h2>
      <div className="form-group">
        <span>Choose from the list the description that fits your idea best:</span>
        {/* <Select
        defaultValue={[purposeOptions[0]]}
        name="purpose"
        options={purposeOptions}
        className="basic-single"
        classNamePrefix="select"
        onChange={handleChange('purpose')}
        /> */}
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

export default Pitcher3