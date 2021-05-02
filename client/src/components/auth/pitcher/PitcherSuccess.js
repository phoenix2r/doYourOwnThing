import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PitcherSuccess = (props) => {
  const checkState = () => {
    console.log(props);
  };

  return (
    <div className='success-page p-4'>
      <h2>Congratualtions! Your account and project have been created</h2>
      <p>You can now proceed to your dashboard:</p>
      <div className='success-buttons'>
        {/* <Link to='/dashboard'> */}
        <div className='btn btn-secondary' onClick={checkState}>
          Proceed to Dashboard
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

PitcherSuccess.propTypes = {};

export default PitcherSuccess;
