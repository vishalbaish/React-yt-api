import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'

class App extends React.Component{
    state = { videos: [], SelectedVideo: null }
    onFormSubmit = async (term) => {
        const Response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ videos: Response.data.items, SelectedVideo: Response.data.items[0] })
    }

    componentDidMount() {
        this.onFormSubmit("cars")

    }

    onVideoSelect = (videos) => {
        this.setState({ SelectedVideo: videos })
    }

    render () {
        return (
            <div className='ui container'>
               <SearchBar onSubmit={this.onFormSubmit}/>
               <div className="ui grid">
                   <div className="ui row">
                       <div className="eleven wide column">
                            <VideoDetails video={this.state.SelectedVideo}/>
                       </div>
                       <div className="five wide column">
                          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                       </div>
                   </div>
               </div>

            </div>
        )
    }

}

export default App