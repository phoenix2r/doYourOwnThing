import React from 'react';

const Pitcher4 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props

  const submitStep = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  }



  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
        WHAT WOULD YOU LIKE TO CALL YOUR BUSINESS?
      </h2>
      <div className="form-group">
        <span>Enter the name of your business:</span>
        <input type="text" placeholder="Business name" required onChange={handleChange('projectName')} defaultValue={values.projectName} />
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

export default Pitcher4