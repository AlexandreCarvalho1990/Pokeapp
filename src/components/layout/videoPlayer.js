import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
const videoPlayer = (video, index) => {
  console.log(video);
  return (
    <Fragment>
      <ReactPlayer
        url={video[index]}
        height="100%"
        width="100%"
        playing={true}
        loop="true"
      />
    </Fragment>
  );
};

export default videoPlayer;
