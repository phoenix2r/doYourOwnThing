import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { clearProjects } from '../../actions/project';

const Login = ({ login, isAuthenticated, user, clearProjects }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const values = { email, password };

  const onChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated && user) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='login'>
      <div className='container'>
        <div className='title'>
          <div className='title-box'></div>
          <div className='title-frame'></div>
          <div className='title-content'>
            <h1 className='x-large-top'>SIGN IN</h1>
            <h1 className='x-large-bottom'>PAGE</h1>
          </div>
        </div>

        <form className='form p-1'>
          <h2 className='form-heading'>ENTER YOUR DETAILS TO SIGN IN</h2>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Email Address'
              onChange={onChange('email')}
              defaultValue={values.email}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              minLength='8'
              onChange={onChange('password')}
              defaultValue={values.password}
            />
          </div>
          <div className='buttons'>
            <div className='btn btn-primary' onClick={onSubmit}>
              Sign In
            </div>
          </div>
          <h2 className='form-heading'>OR CREATE A NEW ACCOUNT</h2>
          <div className='buttons'>
            <div className='btn btn-primary'>
              <Link to='/sponsor'>Create New Account</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  clearProjects: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login, clearProjects })(Login);
