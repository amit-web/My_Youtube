// VideoSuggestion.js
import React from "react";

const VideoSuggestion = ({ videos }) => {
  // Sample data for the videos
  console.log(videos);
  const { snippet, id } = videos;
  const { thumbnails, title, channelTitle,description,liveBroadcastContent,publishTime} = snippet;
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Formats to local date and time
  };
  return (
    <div className="max-w-full p-4 flex flex-col sm:flex-row sm:space-x-4 bg-white shadow-md rounded-lg overflow-hidden mb-6">
      {/* Left side: Image */}
      <div className="sm:w-1/3 flex-shrink-0">
        <img src={thumbnails.high.url} alt="News Thumbnail" className="object-cover w-full h-48 sm:h-full" />
      </div>

      {/* Right side: Content */}
      <div className="sm:w-2/3 flex flex-col justify-between space-y-2">
        {/* Title and description */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        {/* Channel and upload time */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{channelTitle}</p>
          <p className="text-sm text-gray-500">Published: {formatTimestamp(publishTime)}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestion;
