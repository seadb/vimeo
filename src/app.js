import React from 'react'
import ReactDOM from 'react-dom'
import Channel from './components/channel';

const regexp = /channels\/([a-z]+)/;
const path = window.location.hash;
const name = regexp.exec(path)[1];
const channel = {
  name: name,
  title: "Staff Picks",
  tagline: "A curated list of awesome videos, " +
    "courtesy of the Staff at Vimeo."
}

ReactDOM.render(
  <Channel channel={channel}/>,
  document.getElementById('root')
)
