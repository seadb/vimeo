import axios from 'axios'
const API_URL = 'http://vimeo.com/api/v2/'

const api = {
  getChannelVideos : (name) => (
    axios.get(API_URL + 'channel/'+ name +'/videos.json')
  )
}

export default api
