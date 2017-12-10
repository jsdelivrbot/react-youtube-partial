import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos}) => {
	const activeVideos = videos.map(video => {
		return (
			<VideoListItem 
				key={video.id.videoId} 
				video={video} 
			/>
		)
	});

	return (
		<ul className="video-list col-md-4">
			{activeVideos}
		</ul>
	);
};

export default VideoList;