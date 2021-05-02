import React from 'react';
import { connect, useSelector } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import PropTypes from 'prop-types';

const Pitcher1 = (props) => {
  const { nextStep, handleChange, values, setAlert, register } = props;
  const { username, email, password, password2, role, step } = values;
  const isRegistered = useSelector((state) => state.auth.isAuthenticated);
  const fields = [
    {
      name: 'username',
      value: username,
      label: 'Enter a username:',
      type: 'text',
      placeholder: 'User Name',
      error: false,
      errMsg: 'Field must not be empty',
    },
    {
      name: 'email',
      value: email,
      label: 'Enter a valid email address:',
      type: 'text',
      placeholder: 'Email Address',
      error: false,
      errMsg: 'Field must be a valid address',
    },
    {
      name: 'password',
      value: password,
      label:
        'Choose a password for your account - must be at least 8 characters long:',
      type: 'password',
      placeholder: 'Password',
      error: false,
      errMsg: 'Password must include special characters',
    },
    {
      name: 'password2',
      value: password2,
      label: 'Please confirm your password:',
      type: 'password',
      placeholder: 'Confirm Password',
      error: false,
      errMsg: 'Passwords must match',
    },
  ];

  // const radioField = {
  //   name: 'role',
  // };

  const submitUser = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ username, email, password, role });
    }
    console.log(values);
  };

  const submitStep = (e) => {
    if (!isRegistered) {
      setAlert(
        'Please fill in the fields before going to the next step',
        'danger'
      );
    } else {
      nextStep();
    }
  };

  return (
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
          minLength='8'
          onChange={handleChange('password')}
          defaultValue={password}
        />
      </div>
      <div className='form-group'>
        <label>Please confirm your password:</label>
        <input
          type='password'
          placeholder='Confirm Password'
          minLength='8'
          onChange={handleChange('password2')}
          defaultValue={password2}
        />
      </div>
      <div className='form-group'>
        <div className='role-check' onChange={handleChange('role')}>
          <p>
            <input type='radio' value='sponsor' name='role' />
            SPONSOR
          </p>
          <p>
            <input type='radio' value='pitcher' name='role' />
            PITCHER
          </p>
        </div>
      </div>
      <div className='form-buttons'>
        <div className='btn btn-primary' onClick={submitUser}>
          Submit User
        </div>
        {isRegistered ? (
          <div className='btn btn-primary' onClick={submitStep}>
            Next Step
          </div>
        ) : (
          ''
        )}
      </div>
    </form>
  );
};

Pitcher1.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Pitcher1);

// {fields.map((field, i) => (
//   <div className='form-group' key={i}>
//     <label>{field.label}</label>
//     {/* {field.error ? <div className='error-msg'>{field.errMsg}</div> : ''} */}
//     <input
//       // className={field.error ? 'error' : ''}
//       type={field.type}
//       placeholder={field.placeholder}
//       onChange={handleChange(field)}
//       defaultValue={field.value}
//     />
//   </div>
// ))}
