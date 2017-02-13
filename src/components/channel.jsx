import React from 'react'
import api from '../api'
import Header from './header'
import Grid from './grid'

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos : []};
  }
  componentDidMount() {
    api.getChannelVideos(this.props.channel.name)
    .then((response) => {
      console.log(response);
      this.setState({videos: response.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="channel">
        <Header channel={this.props.channel}/>
        <Grid videos={this.state.videos}/>
      </div>
    );
  }
}

export default Channel
