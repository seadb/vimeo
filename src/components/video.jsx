import React from 'react'
import TextTruncate from 'react-text-truncate';
import Cover from './cover'

//formats numbers great than X000 as XK
const kilo = (num) => (
  num > 999 ? (num/1000).toFixed() + 'K' : num
)

const Video = (props) => {
  const video = props.video;
  return (
  <div className="video">
    <a href={video.url}>
      <Cover video={props.video}/>
    </a>
    <a href={video.url} className="video__title">{video.title}</a>
    <div className="video__description">
      <TextTruncate line={2} truncateText="…" text={video.description}/>
    </div>
    <div className="video__footer">
      <a href={video.user_url} className="video__user">
        <img src={video.user_portrait_small} className="video__user-icon"/>
        {video.user_name}
      </a>
    </div>
    {video.stats_number_of_likes ?
    <div className="video__footer video__footer--right">
      <i className="fa fa-eye video__stats-icon" aria-hidden="true"/>
      {kilo(video.stats_number_of_plays)}
      <i className="fa fa-thumbs-up video__stats-icon" aria-hidden="true"/>
      {kilo(video.stats_number_of_likes)}
      <i className="fa fa-comment video__stats-icon" aria-hidden="true"/>
      {kilo(video.stats_number_of_comments)}
    </div>
    : ""}
  </div>
  )
}

export default Video
