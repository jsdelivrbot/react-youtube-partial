import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YouTubeSearch from 'youtube-api-search';
const apiKey = 'AIzaSyDDXeVwdx9PwNFmTF88a7XFSL7-xp-iXyw';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			videos: [],
			selectedVideo: null
		}

		YouTubeSearch({ key: apiKey, term: 'puppies' }, videos => {
		    console.log(videos);

		    this.setState({
		    	videos: videos,
		    	selectedVideo: videos[0]
		    });
		});	
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail selectedVideo={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} />
			</div>

		);
	}
}

ReactDOM.render(<App />, document.getElementById("main-content"));