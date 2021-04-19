import React from 'react';

const Pitcher5 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props

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
        <input type="text" placeholder="Business sector" required onChange={handleChange('sector')} defaultValue={values.sector} />
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