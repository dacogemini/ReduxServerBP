import React from 'react';
import VideoListItem from './videolist_item';

const VideoList = (props) => {
    const videoItdded mapsems = props.videos.map((video) => {
        return <VideoListItem video={video} />
    })
    
    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
}
export default VideoList;