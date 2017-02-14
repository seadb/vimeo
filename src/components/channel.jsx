import React from 'react'
import api from '../api'
import Header from './header'
import Grid from './grid'

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos : [], error: ""};
  }
  componentDidMount() {
    api.getChannelVideos(this.props.channel.name)
    .then((response) => {
      console.log(response);
      this.setState({videos: response.data});
    })
    .catch((error) => {
      console.log(error);
      this.setState({error: "An error occurred while loading the videos."});
    });
  }
  render() {
    return (
      <div className="channel">
        <Header channel={this.props.channel}/>
        { this.state.error
          ?
            <h2 className="error">{this.state.error}</h2>
          :
            <Grid videos={this.state.videos}/>
        }
      </div>
    );
  }
}

export default Channel
