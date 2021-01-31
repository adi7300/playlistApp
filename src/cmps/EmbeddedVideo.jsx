import React from 'react'
import YouTube from 'react-youtube';

export function EmbeddedVideo({ video }) {

    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    const _onReady = (event) => {
        event.target.pauseVideo();
    }
    if (!video) return <div>Loading..</div>
    return (

        <div className="video-player">
            <YouTube videoId={video.id.videoId} opts={opts} onReady={_onReady} />
            <h1>{video.snippet.title}</h1>
        </div >

    )
}
