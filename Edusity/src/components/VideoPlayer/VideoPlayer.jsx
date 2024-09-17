import React, { useState } from 'react'
import './VideoPlayer.css'
import college_video from '../../assets/edusity_assets/college-video.mp4'


const VideoPlayer = ({playState, setPlayState}) => {

   

  return (
    <div className={`video-player ${playState?'': 'hide' }`}>
        <video src={college_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer