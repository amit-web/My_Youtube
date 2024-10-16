import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

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
    };

    if (diffInSeconds >= timeIntervals.year) {
      const years = Math.floor(diffInSeconds / timeIntervals.year);
      return years === 1 ? '1 year ago' : `${years} years ago`;
    }
    if (diffInSeconds >= timeIntervals.month) {
      const months = Math.floor(diffInSeconds / timeIntervals.month);
      return months === 1 ? '1 month ago' : `${months} months ago`;
    }
    if (diffInSeconds >= timeIntervals.day) {
      const days = Math.floor(diffInSeconds / timeIntervals.day);
      return days === 1 ? '1 day ago' : `${days} days ago`;
    }
    if (diffInSeconds >= timeIntervals.hour) {
      const hours = Math.floor(diffInSeconds / timeIntervals.hour);
      return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    }
    if (diffInSeconds >= timeIntervals.minute) {
      const minutes = Math.floor(diffInSeconds / timeIntervals.minute);
      return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    }

    return 'Just now';
  };

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M views';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K views';
    }
    return views + ' views';
  };

  const formatDuration = (duration) => {
    // Convert ISO8601 duration to HH:MM:SS format
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] ? parseInt(match[1]) : 0);
    const minutes = (match[2] ? parseInt(match[2]) : 0);
    const seconds = (match[3] ? parseInt(match[3]) : 0);
    return `${hours ? hours + ':' : ''}${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="bg-white  rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-full mx-auto my-4 transform hover:scale-105">
      <div className="relative pb-9/16 h-48">
        <img
         className="absolute inset-0 w-full h-full object-cover" src={thumbnails.high.url} alt="Video Thumbnail"
        />
        <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {formatDuration(duration)}
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-start space-x-3">
          <img
            className="w-10 h-10 rounded-full"
            src={thumbnails.default.url}
            alt="Channel Profile"
          />
          
          <div>
            <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 leading-tight">
              {title}
            </h2>

            <div className="flex items-center justify-between text-gray-600 text-xs">
              <span className="font-medium">{channelTitle}</span>
              <span>{`${formatViews(viewCount)} • ${formatTimestamp(publishedAt)}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
