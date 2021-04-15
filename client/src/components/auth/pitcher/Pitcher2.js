import React from 'react';

const Pitcher2 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props

  const submitStep = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  }



  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
        HOW MUCH DO YOU NEED?
      </h2>
      <div className="form-group">
        <span>Enter the amount you need in pounds</span>
        <input type="text" placeholder="Amount required" required onChange={handleChange('amountReq')} defaultValue={values.amountReq} />
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

export default Pitcher2
