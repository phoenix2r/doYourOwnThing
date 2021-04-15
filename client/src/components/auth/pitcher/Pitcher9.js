import React from 'react';

const Pitcher9 = (props) => {
  const { onSubmit, nextStep, prevStep, values } = props

  const submitStep = e => {
    e.preventDefault();
    onSubmit();
  }



  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
        UPLOAD COMPLETE!
      </h2>
      <h2 className="form-heading">
        Click the button to view you pitch:
      </h2>
      <div className="buttons">
        <div className="btn btn-primary" onClick={prevStep}>Go Back</div>
      </div>
      <div className="buttons">
        <div className="btn btn-primary" onClick={submitStep}>View Pitch</div>
      </div>
    </form>
  )
}

export default Pitcher9
