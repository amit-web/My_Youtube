import React from "react";

const VideoSuggestion = ({ videos }) => {
  // Sample data for the videos
  console.log(videos);
  const { snippet, id } = videos;
  const { thumbnails, title, channelTitle, description, publishTime } = snippet;

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
    
    return "Just now"; // If it's less than a minute
  };
  

  return (
    <div className="max-w-full flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="w-full sm:w-1/3 flex-shrink-0">
        <img
          src={thumbnails.high.url}
          alt="Video Thumbnail"
          className="object-cover w-full h-48 sm:h-full"
        />
      </div>
      <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2 line-clamp-2">{description}</p> {/* line-clamp to handle text overflow */}
        </div>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <p>{channelTitle}</p>
          <p>Published: {formatTimestamp(publishTime)}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestion;
