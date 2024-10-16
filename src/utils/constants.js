const GOOGLE_API_KEY = "AIzaSyAcrwbZOkTMOF4lrlcuinf63Q334yHA9e0"

export const MOST_POPULAR_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&${GOOGLE_API_KEY}&q=`

export const  YOUTUBE_SEARCH_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&q="

export const LIVE_CHAT_COUNT = 30;


