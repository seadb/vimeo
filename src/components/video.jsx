import React from 'react'

const Video = (props) => (
  <div className="video">
      <img src={props.video.thumbnail_large} className="video__cover"/>

    {props.video.title}
  </div>
)

export default Video
