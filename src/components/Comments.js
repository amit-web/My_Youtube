import React from "react";

const Comments = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-white rounded-md p-4 m-2 border border-gray-300">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
        <img
          className="w-full h-full object-cover"
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="userProfile"
        />
      </div>

      <div>
        <h2 className="font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Comments;
