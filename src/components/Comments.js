import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-200 rounded-md p-2  m-2">
      <div className="px-1 m-2">
        <img
          className="w-8 h-8 rounded-full"
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="userProfile"
        />
      </div>

      <div>
        <h2 className="font-bold">{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
