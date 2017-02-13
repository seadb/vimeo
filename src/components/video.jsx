import React from 'react'
import TextTruncate from 'react-text-truncate';


const kilo = (num) => (
  num > 999 ? (num/1000).toFixed() + 'K' : num
)
const Video = (props) => (
  <div className="video">
    <a href={props.video.url}>
      <img src={props.video.thumbnail_large} className="video__cover"/>
    </a>
    <a href={props.video.url} className="video__title">{props.video.title}</a>
    <div className="video__description">
      <TextTruncate line={2} truncateText="…" text={props.video.description}/>
    </div>
    <div className="video__footer">
      <a href={props.video.user_url}>
        <img src={props.video.user_portrait_small} className="video__user-icon"/>
        {props.video.user_name}
      </a>
    </div>
    <div className="video__footer video__footer--right">
      <i className="fa fa-thumbs-up video__stats-icon" aria-hidden="true"/>
      {kilo(props.video.stats_number_of_likes)}
      <i className="fa fa-eye video__stats-icon" aria-hidden="true"/>
      {kilo(props.video.stats_number_of_plays)}
      <i className="fa fa-comment video__stats-icon" aria-hidden="true"/>
      {kilo(props.video.stats_number_of_comments)}
    </div>
  </div>
)

export default Video
