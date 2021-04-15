import React from 'react';

const Pitcher7 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props

  const submitStep = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  }



  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
        GREAT - JUST A FEW MORE DETAILS
      </h2>
      <div className="form-group">
        <span>First Name:</span>
        <input type="text" placeholder="Jane" required onChange={handleChange('firstName')} defaultValue={values.firstName} />
        <span>Last Name:</span>
        <input type="text" placeholder="Doe" required onChange={handleChange('lastName')} defaultValue={values.lastName} />
        <span>Address:</span>
        <input type="text" placeholder="No. and street" required onChange={handleChange('addressLine1')} defaultValue={values.addressLine1} />
        <input type="text" placeholder="Town" required onChange={handleChange('town')} defaultValue={values.town} />
        <input type="text" placeholder="Postcode" required onChange={handleChange('postcode')} defaultValue={values.postcode} />
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

export default Pitcher7
