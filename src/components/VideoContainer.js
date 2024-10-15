import React, { useEffect, useState } from "react";
import { MOST_POPULAR_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const response = await fetch(MOST_POPULAR_VIDEO_URL);

    const data = await response.json();

    setVideos(data.items);
   
  };
  if(!videos)return null;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
