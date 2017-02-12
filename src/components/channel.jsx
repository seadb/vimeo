import React from 'react'
import api from '../api'
import Header from './header'
//import Logo from '../components/Logo';
//import Nav from '../components/Nav';

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
      <div>
        <Header channel={this.props.channel}/>
      </div>
    );
  }
}

export default Channel
