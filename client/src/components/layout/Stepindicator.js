import React from 'react'



const Stepindicator = () => {
  return (
    <div className="step circle m-1">
      <div className="arrow"></div>
      <p className="arrow-number">1</p>
      <div className="step-content">
        <i className="far fa-comment-alt"></i>
        <div className="step-title">Details</div>
      </div>
    </div>
  )
}

export default Stepindicator
