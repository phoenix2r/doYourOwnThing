import React, { useRef, useEffect } from 'react';

const Stepindicator = ({ step, stepsFor }) => {
  // Function to keep the current step central on mobile view
  const activeStep = useRef();
  useEffect(() => {
    activeStep.current.scrollIntoView({ block: 'center' });
  }, [step]);

  console.log(stepsFor);
  return stepsFor === 'pitcher' ? (
    <>
      <div
        className={
          step === 1 ? 'step active-step circle m-1' : 'step circle m-1'
        }
        ref={step === 1 ? activeStep : null}
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
        ref={step === 2 ? activeStep : null}
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
        ref={step === 3 ? activeStep : null}
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
        ref={step === 4 ? activeStep : null}
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
        ref={step === 5 ? activeStep : null}
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
        ref={step === 6 ? activeStep : null}
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
        ref={step === 7 ? activeStep : null}
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
        ref={step === 8 ? activeStep : null}
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
        ref={step === 9 ? activeStep : null}
      >
        <div className='arrow'></div>
        <p className='arrow-number'>9</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Funding</div>
        </div>
      </div>
      <div
        className={step === 10 ? 'active-step' : ''}
        ref={step === 10 ? activeStep : null}
      ></div>
    </>
  ) : (
    <>
      <div
        className={
          step === 1 ? 'step active-step circle m-1' : 'step circle m-1'
        }
        ref={step === 1 ? activeStep : null}
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
        ref={step === 2 ? activeStep : null}
      >
        <div className='arrow'></div>
        <p className='arrow-number'>2</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Interests</div>
        </div>
      </div>
      <div
        className={
          step === 3 ? 'step active-step circle m-1' : 'step circle m-1'
        }
        ref={step === 3 ? activeStep : null}
      >
        <div className='arrow'></div>
        <p className='arrow-number'>3</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Business</div>
        </div>
      </div>
      <div
        className={
          step === 4 ? 'step active-step circle m-1' : 'step circle m-1'
        }
        ref={step === 4 ? activeStep : null}
      >
        <div className='arrow'></div>
        <p className='arrow-number'>4</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>You</div>
        </div>
      </div>
      <div
        className={
          step === 5 ? 'step active-step circle m-1' : 'step circle m-1'
        }
        ref={step === 5 ? activeStep : null}
      >
        <div className='arrow'></div>
        <p className='arrow-number'>5</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div
        className={
          step === 6 ? 'step active-step circle m-1' : 'step circle m-1'
        }
        ref={step === 6 ? activeStep : null}
      >
        <div className='arrow'></div>
        <p className='arrow-number'>6</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Visibility</div>
        </div>
      </div>
      <div
        className={step === 7 ? 'active-step' : ''}
        ref={step === 7 ? activeStep : null}
      ></div>
    </>
  );
};

export default Stepindicator;
