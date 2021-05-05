import React from 'react';
import TutorialVideo from '../video/TutorialVideo';

const VideoModal = ({ showModal, setShowModal }) => {
  return <div>{showModal ? <TutorialVideo /> : null}</div>;
};

export default VideoModal;
