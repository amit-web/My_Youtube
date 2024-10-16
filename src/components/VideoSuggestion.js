import React from "react";

const VideoSuggestion = ({ videos }) => {
  const {snippet} = videos;
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

    return "Just now";
  };

  return (
    <div className="w-full p-4 max-w-full h-60 flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden mb-6 transition-transform transform">
      <div className="w-full sm:w-1/3 h-48 sm:h-auto flex-shrink-0">
        <img
          src={thumbnails.high.url}
          alt="Video Thumbnail"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center text-gray-500 text-xs md:text-sm mt-4">
          <p>{channelTitle}</p>
          <p>{formatTimestamp(publishTime)}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestion;
