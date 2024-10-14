import React from "react";

const ChatMessage = ({data}) => {

  return (
    <div className="flex w-full  shadow-md bg-gray-100 m-2">
      <div className="p-2 mx-2 rounded-full">
        <img  className="h-10 w-10" src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="userProfile" />
      </div>
      <div>
        <h2>{data.userName}</h2>
        <span>{data.message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
