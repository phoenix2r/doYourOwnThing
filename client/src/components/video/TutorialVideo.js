import React from 'react';
import ReactPlayer from 'react-player/youtube';

const TutorialVideo = () => {
  return (
    <div className='container vid-container'>
      <div className='tutorial-video'>
        <ReactPlayer
          url='https://youtu.be/S7FIvGNjX5o'
          config={{
            controls: true,
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
        />
        {/* <div className='controls-wrapper'>
          <h3>Video title</h3>
          <div className='playback-controls'>
            <i class='fas fa-backward fa-3x'></i>
            <i class='fas fa-play fa-4x'></i> */}
        {/* <i class='fas fa-pause fa-3x'></i> */}
        {/* <i class='fas fa-forward fa-3x'></i>
          </div>
          <div className='screen-controls'>
            <i class='fas fa-volume-mute fa-2x'></i>
            <i class='fas fa-expand fa-2x'></i>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TutorialVideo;
