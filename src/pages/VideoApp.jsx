import { VideoList } from '../cmps/VideoList';
import { videoService } from '../services/videoService.js'
import { useEffect, useState } from 'react';
import { EmbeddedVideo } from '../cmps/EmbeddedVideo';

export function VideoApp() {
    const [keyword, setKeyword] = useState('')
    const [video, setVideo] = useState('')
    const setCurrVideo = (video) => {
        setVideo(video)
    }

    const [videos, setVideos] = useState([])
    useEffect(async () => {
        const videoList = await loadVideos()
        if (videoList.length) setCurrVideo(videoList[0])
    }, [])

    const loadVideos = async (ev = null) => {
        if (ev)
            ev.preventDefault();
        const results = await videoService.query(keyword)
        setVideos(results.items)

        return results.items
    }
    return (
        <section>
            <header className="app-header">
                <h1>Youtube player</h1>
                <form onSubmit={(ev) => loadVideos(ev)}>
                    <input type="search" value={keyword} placeholder="Search" onChange={(ev) => setKeyword(ev.target.value)} />
                    <button>Search</button>
                </form>
            </header>
            <div className="video-app flex">
                <VideoList videos={videos} setCurrVideo={setCurrVideo} />
                <EmbeddedVideo video={video} />
            </div>
        </section>
    )
}
