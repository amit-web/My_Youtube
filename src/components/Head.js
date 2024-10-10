import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const handleClickHamburger = ()=>{
        dispatch(toggleMenu())
    }

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex">
        <img
          className="h-8 w-8 cursor-pointer"
          onClick={()=>handleClickHamburger()}
          src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"
          alt="hamburger"
        />

        <img
          className="h-8  mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7GwM7oE-rQcV4an0eDYMMKDHc7wdMx6tKw&s"
          alt="yotube-icon"
        />

      </div>
      <div className="col-span-10 px-10">
         <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
         <button className="border border-gray-400 p-2 px-5 rounded-r-full bg-gray-100">🔍</button>
      </div>

      <div className="col-span-1">
           
        <img
          className="h-8"
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Head;
