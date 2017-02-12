import React from 'react'
import Video from './video'

const Grid = (props) => {
  var cols = [[], [], []];
  props.videos.forEach((video, i) => {
    var row = Math.floor(i / 3);
    cols[i%3].push(
      <div className="grid__box" key={i}>
        <Video video={video} key={i}></Video>
      </div>
    )
  })
  return (
    <div className="grid">
      <div className="row">
        <div className="one-third column">
          {cols[0]}
        </div>
        <div className="one-third column">
          {cols[1]}
        </div>
        <div className="one-third column">
          {cols[2]}
        </div>
      </div>
    </div>
  )
}

export default Grid
