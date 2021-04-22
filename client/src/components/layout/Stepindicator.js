import React from 'react';

const Stepindicator = ({ step }) => {
  return (
    <>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        {/* <p className={step === 1 ? 'arrow-number' : ''}>1</p> */}
        <p className='arrow-number'>1</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>2</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>3</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>4</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>5</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>6</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>7</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>8</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
      <div className='step circle m-1'>
        <div className='arrow'></div>
        <p className='arrow-number'>9</p>
        <div className='step-content'>
          <i className='far fa-comment-alt'></i>
          <div className='step-title'>Details</div>
        </div>
      </div>
    </>
  );
};

export default Stepindicator;
