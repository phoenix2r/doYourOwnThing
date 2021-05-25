import React from 'react';
import { Link } from 'react-router-dom';

const Landing = ({ startJourney }) => {
  return (
    <section className='landing'>
      <div className='white-overlay'>
        <div className='landing-inner'>
          {/* <!-- This content to be replaced by carousel --> */}
          <div className='landing-title'>
            <div className='landing-title-box'></div>
            <div className='landing-title-frame'></div>
            <div className='landing-title-content'>
              <h1 className='x-large-top'>DO YOUR</h1>
              <h1 className='x-large-bottom'>OWN THING</h1>
              <div className='landing-title-content-call'>
                <p className='lead'>Examples to inspire</p>
                <div className='buttons'>
                  <Link
                    to='/signup'
                    className='btn btn-primary'
                    onClick={() => startJourney('general')}
                  >
                    Let's get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
