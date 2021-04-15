import React from 'react'

const Pitcher1 = (props) => {

  const { nextStep, handleChange, values } = props

  const submitStep = e => {
    e.preventDefault();
    if(values.password !== values.password2) {
      console.log('Passwords do not match');
      console.log(values.password);
      console.log(values.password2);
    } else {
      nextStep();
    }
    console.log(values);
  }


  return (
    <form className="form p-1">
      <h2 className="form-heading">
        LET US KNOW WHO YOU ARE
      </h2>
      <div className="form-group">
        <input type="text" placeholder="User Name" required onChange={handleChange('username')} defaultValue={values.username} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Email Address" onChange={handleChange('email')} defaultValue={values.email} />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" minLength="8" onChange={handleChange('password')} defaultValue={values.password} />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Confirm Password" minLength="8" onChange={handleChange('password2')} defaultValue={values.password2} />
      </div>
      <div className="form-group">
        <div onChange={handleChange('role')}>
          <input type="radio" value="sponsor" name="role" />SPONSOR
          <input type="radio" value="pitcher" name="role" />PITCHER
        </div>
      </div>
      <div className="buttons">
        <div className="btn btn-primary" onClick={submitStep}>Next</div>
      </div>
    </form>
  )
}

export default Pitcher1
