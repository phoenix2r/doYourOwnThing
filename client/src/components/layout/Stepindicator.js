import React from 'react';

const Stepindicator = ({ step }) => {
  return (
    <>
      {/* <div className='step circle m-1'> */}
      <div
        className={
          step === 1 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>1</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div
        className={
          step === 2 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>2</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Amount</div>
        </div>
      </div>
      <div
        className={
          step === 3 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>3</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Purpose</div>
        </div>
      </div>
      <div
        className={
          step === 4 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>4</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Title</div>
        </div>
      </div>
      <div
        className={
          step === 5 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>5</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Describe</div>
        </div>
      </div>
      <div
        className={
          step === 6 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>6</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Snapshot</div>
        </div>
      </div>
      <div
        className={
          step === 7 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>7</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Profile</div>
        </div>
      </div>
      <div
        className={
          step === 8 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>8</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Video</div>
        </div>
      </div>
      <div
        className={
          step === 9 ? 'step active-step circle m-1' : 'step circle m-1'
        }
      >
        <div className='arrow'></div>
        <p className='arrow-number'>9</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Funding</div>
        </div>
      </div>
    </>
  );
};

export default Stepindicator;
