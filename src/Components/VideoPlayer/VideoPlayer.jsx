import React, { useRef } from 'react'
import './VideoPlayer.css'
const VideoPlayer = ({showVideo, setShowVideo}) => {

    const player = useRef(null)
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setShowVideo(false)
            console.log('clicked')
        }
    }
  return (
    <div className={`video-player ${showVideo ? '' : 'hide'}`} ref={player} 
    onClick={closePlayer}

    >
        <video src='https://videos.pexels.com/video-files/7971025/7971025-uhd_2560_1440_24fps.mp4' autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer