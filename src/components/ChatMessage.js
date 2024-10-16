import React from "react";

const ChatMessage = ({ data }) => {
  return (
    <div className="flex items-center w-full shadow-sm bg-gray-100 p-3 mb-2 rounded-lg">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
        <img
          className="w-full h-full object-cover"
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="userProfile"
        />
      </div>

      <div>
        <h2 className="font-semibold">{data.userName}</h2>
        <p>{data.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
