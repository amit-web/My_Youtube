import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics} = info;
    const {thumbnails,title,channelTitle,publishedAt} = snippet;
    const {viewCount} = statistics;
    const formatTimestamp = (timestamp) => {
      const now = new Date();
      const publishedDate = new Date(timestamp);
      const diffInSeconds = Math.floor((now - publishedDate) / 1000);
    
      const timeIntervals = {
        year: 31536000,   
        month: 2592000, 
        day: 86400, 
        hour: 3600,
        minute: 60,
        second: 1,
      };
    
      if (diffInSeconds >= timeIntervals.year) {
        const years = Math.floor(diffInSeconds / timeIntervals.year);
        return years === 1 ? "1 year ago" : `${years} years ago`;
      }
      if (diffInSeconds >= timeIntervals.month) {
        const months = Math.floor(diffInSeconds / timeIntervals.month);
        return months === 1 ? "1 month ago" : `${months} months ago`;
      }
      if (diffInSeconds >= timeIntervals.day) {
        const days = Math.floor(diffInSeconds / timeIntervals.day);
        return days === 1 ? "1 day ago" : `${days} days ago`;
      }
      if (diffInSeconds >= timeIntervals.hour) {
        const hours = Math.floor(diffInSeconds / timeIntervals.hour);
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
      }
      if (diffInSeconds >= timeIntervals.minute) {
        const minutes = Math.floor(diffInSeconds / timeIntervals.minute);
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
      }
      
      return "Just now";
    };

    const formatViews = (views) => {
      if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + "M views"; 
      } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + "K views"; 
      }
      return views + " views";
    };
    
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-auto my-4 transition-transform transform hover:scale-105 max-w-full">
    <div className="relative">
      <img
        className="w-full h-48 object-cover"
        src={thumbnails.medium.url}
        alt="Video Thumbnail"
      />
      <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
        3:54
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-md font-semibold text-gray-800 leading-tight line-clamp-2 mb-2">
        {title}
      </h2>
      <div className="flex items-center justify-between text-gray-600 text-sm mb-2">
        <span className="font-semibold">{channelTitle}</span>
        <span>{`${formatViews(viewCount)} • ${formatTimestamp(
          publishedAt
        )}`}</span>
      </div>
      
    </div>
  </div>
  )
}

export default VideoCard