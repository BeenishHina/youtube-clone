import React from 'react'
import { Avatar } from '@mui/material'
import './VideoCard.css'

function VideoCard({image, title, channel, views, timestamp,channelImage}) {
  return (
    <div className='videoCard'>
      <img className="video__thumbnail" src={image} alt="" />
      <div className="video__info">
        <Avatar className='video__avatar' alt={channel} src={channelImage}/>
        <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
             <p>
                {views}.{timestamp}
             </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
