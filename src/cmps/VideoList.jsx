import React from 'react'
import { VideoPreview } from './VideoPreview';

export function VideoList({ videos, setCurrVideo }) {


    return (
        <div className="video-list">
            {videos.map(video => {
                return <VideoPreview key={video.id.videoId} video={video} setCurrVideo={setCurrVideo} />
            })}
        </div>
    )
}
