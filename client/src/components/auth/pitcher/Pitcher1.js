import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import PropTypes from 'prop-types';

const Pitcher1 = (props) => {
  const { nextStep, handleChange, values, setAlert, register } = props;
  const { username, email, password, password2, role, step } = values;

  const submitStep = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      // register({ username, email, password, role });
      nextStep();
    }
    console.log(values);
  };

  return (
    // <form className="form p-1">
    //   <h2 className="form-heading">
    //     {step}. LET US KNOW WHO YOU ARE
    //   </h2>
    //   <div className="form-group">
    //     <input type="text" placeholder="User Name" required onChange={handleChange('username')} defaultValue={username} />
    //   </div>
    //   <div className="form-group">
    //     <input type="text" placeholder="Email Address" onChange={handleChange('email')} defaultValue={email} />
    //   </div>
    //   <div className="form-group">
    //     <input type="password" placeholder="Password" minLength="8" onChange={handleChange('password')} defaultValue={password} />
    //   </div>
    //   <div className="form-group">
    //     <input type="password" placeholder="Confirm Password" minLength="8" onChange={handleChange('password2')} defaultValue={password2} />
    //   </div>
    //   <div className="form-group">
    //     <div onChange={handleChange('role')}>
    //       <input type="radio" value="sponsor" name="role" />SPONSOR
    //       <input type="radio" value="pitcher" name="role" />PITCHER
    //     </div>
    //   </div>
    //   <div className="buttons">
    //     <div className="btn btn-primary" onClick={submitStep}>Next</div>
    //   </div>
    // </form>
    // <!-- Form -->

    <form className='form form-pitch p-4'>
      <h2 className='form-heading'>{step}: LET US KNOW WHO YOU ARE</h2>
      <div className='form-group'>
        <label>Enter a username:</label>
        <input
          type='text'
          placeholder='User Name'
          required
          onChange={handleChange('username')}
          defaultValue={username}
        />
      </div>
      <div className='form-group'>
        <label>Enter a valid email address:</label>
        <input
          type='text'
          placeholder='Email Address'
          onChange={handleChange('email')}
          defaultValue={email}
        />
      </div>
      <div className='form-group'>
        <label>
          Choose a password for your account (must be at least 8 characters
          long):
        </label>
        <input
          type='password'
          placeholder='Password'
          minlength='8'
          onChange={handleChange('password')}
          defaultValue={password}
        />
      </div>
      <div className='form-group'>
        <label>Please confirm your password:</label>
        <input
          type='password'
          placeholder='Confirm Password'
          minlength='8'
          onChange={handleChange('password2')}
          defaultValue={password2}
        />
      </div>
      <div className='form-group'>
        <div onChange={handleChange('role')}>
          <input type='radio' value='sponsor' name='role' />
          SPONSOR
          <input type='radio' value='pitcher' name='role' />
          PITCHER
        </div>
      </div>
      <div className='form-buttons'>
        {/* <a href='register2.html' className='btn btn-secondary'>
          Back
        </a> */}
        <div className='btn btn-primary' onClick={submitStep}>
          Next
        </div>
      </div>
    </form>
  );
};

Pitcher1.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Pitcher1);
