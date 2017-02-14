import React from 'react'

// formats duration in seconds as mm:ss or hh:mm:ss
const hms = (d) => {
  d = Number(d)
  var h = Math.floor(d / 3600)
  var m = Math.floor(d % 3600 / 60)
  var s = Math.floor(d % 3600 % 60)
  return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s)
}
const Cover = (props) => (
  <div className="cover">
    <img src={props.video.thumbnail_large} className="cover__image"/>
    <div className="cover__overlay">
      <span className="cover__play-icon">
        <i className="fa fa-play-circle" aria-hidden="true"></i>
      </span>
      <div className="cover__length">
        {hms(props.video.duration)}
      </div>
    </div>
  </div>
)

export default Cover
