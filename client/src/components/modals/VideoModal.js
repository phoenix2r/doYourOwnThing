import React from 'react';
import TutorialVideo from '../video/TutorialVideo';

const VideoModal = ({ showModal, openModal }) => {
  return <div>{showModal ? <TutorialVideo /> : null}</div>;
};

export default VideoModal;
