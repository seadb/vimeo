import React from 'react'
import Video from './video'

const Grid = (props) => {
  var videos = props.videos.map((video, i) => (
    <div className="grid__box" key={i}>
      <div className="grid__center" key={i}>
        <Video video={video} key={i}/>
      </div>
    </div>
  ))
  return (
    <div className="grid">
      {videos}
    </div>
  )
}

export default Grid
