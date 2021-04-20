import React from 'react';
import Select from 'react-select';

const Pitcher3 = (props) => {
  const { nextStep, prevStep, handleSelectChange, values, step } = props

  const purposeOptions = [
    { id: "purpose", value: "equipment", label: "purchase or upgrade equipment" },
    { id: "purpose", value: "premises", label: "create or expand premises" },
    { id: "purpose", value: "advertising", label: "run advertising" },
    { id: "purpose", value: "website", label: "develop website" },
    { id: "purpose", value: "digital", label: "develop app or digital assets" },
    { id: "purpose", value: "branding", label: "develop business branding" },
    { id: "purpose", value: "vehicle", label: "modify or obtain a vehicle" },
    { id: "purpose", value: "materials", label: "purchase startup materials or ingredients" },
  ]

  const submitStep = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  }

  return (
    <form className="form p-1">
      <h2 className="form-heading">
        {values.step}. WHAT WOULD YOU LIKE TO USE THE MONEY FOR?
      </h2>
      <div className="form-group">
        <span>Choose from the list the description that fits your idea best:</span>
        <Select
        defaultValue={purposeOptions[0]}
        name="purpose"
        options={purposeOptions}
        className="basic-single"
        classNamePrefix="select"
        onChange={handleSelectChange}
        />
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