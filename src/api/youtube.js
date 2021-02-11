import Axios from 'axios'

const KEY = 'AIzaSyC7NNpaX0WnxQi2czT675br_6_OUF3EJsE'

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});