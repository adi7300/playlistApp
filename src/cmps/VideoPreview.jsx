import React from 'react'

export function VideoPreview({ video, setCurrVideo }) {
    return (
        <div className="video-preview flex">
            <img className="video-img" src={video.snippet.thumbnails.default.url} />
            <div className="video-content flex column">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>

            </div>
            <button onClick={() => {
                setCurrVideo(video)
            }
            } >Play</button>
        </div>
    )
}
