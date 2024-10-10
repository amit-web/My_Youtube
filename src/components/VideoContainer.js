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
    <div className="flex flex-wrap">
      {videos.map((video)=>{
        return  <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>
      })}
       
    </div>
  );
};

export default VideoContainer;
