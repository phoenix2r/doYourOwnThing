import React from 'react';

const Pitcher8 = (props) => {
  const { nextStep, prevStep, handleChange, values } = props

  const submitStep = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  }



  return (
    <form action="dashboard.html" className="form p-1">
      <h2 className="form-heading">
      {values.step}. ALMOST THERE - UPLOAD YOUR PITCH
      </h2>
      <div className="form-group">
        <span>Upload a video to really make your pitch sing</span>
        <span>Click the folder icon to browse your computer</span>
        <input type="text" placeholder="Folder Icon" required onChange={handleChange('video')} defaultValue={values.video} />
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

export default Pitcher8
