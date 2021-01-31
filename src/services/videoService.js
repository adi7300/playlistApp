import axios from "axios";
import { storageService } from './storageService.js'

const VIDEOS_KEY = 'video'
const KEYWORD_KEY = 'keyword'


export const videoService = {
    query,
}

async function query(keyword) {
    var storageKeyword = storageService.loadFromStorage(KEYWORD_KEY)
    if (keyword === '' && !storageKeyword) keyword = 'Angular'

    if (keyword === storageKeyword || keyword === '') {
        return storageService.loadFromStorage(VIDEOS_KEY)
    }

    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${keyword}&key=AIzaSyA9krZ02aDNloGSkQmiwb-2XLuChoMHJh4`);
    const videos = res.data;
    storageService.saveToStorage(VIDEOS_KEY, videos)
    storageService.saveToStorage(KEYWORD_KEY, keyword)
    return videos;
}

