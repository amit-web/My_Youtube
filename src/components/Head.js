import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addSearchData } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import {
  MenuIcon,
  MicrophoneIcon,
  BellIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const cacheResult = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickHamburger = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    let time = setTimeout(() => {
      if (cacheResult[searchValue]) {
        setSearchResult(cacheResult[searchValue]);
      } else {
        getSearchData();
      }
    }, 300);

    return () => {
      clearTimeout(time);
    };
  }, [searchValue]);

  const getSearchData = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchValue);
    const data = await response.json();

    setSearchResult(data[1]);

    dispatch(
      addSearchData({
        [searchValue]: data[1],
      })
    );
  };

  const handleSearchData = async (query) => {
    navigate(`/searchWatch?q=${query}`);
    setIsResultOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-2 bg-white w-full sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <MenuIcon
          onClick={handleClickHamburger}
          className="h-6 w-6 cursor-pointer"
        />
        <Link to="/">
          <img
            className="h-8 w-20 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube-logo"
          />
        </Link>
      </div>
      <div className="relative flex items-center flex-grow max-w-md sm:max-w-lg md:max-w-2xl">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="px-4 w-full h-9 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          onFocus={() => setIsResultOpen(true)}
          placeholder="Search"
        />
        <button className="border-l h-9 border-gray-300 p-2 px-4 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="black"
              strokeWidth="2"
              fill="none"
            ></circle>
            <line
              x1="16"
              y1="16"
              x2="21"
              y2="21"
              stroke="black"
              strokeWidth="2"
            ></line>
          </svg>
        </button>
        <MicrophoneIcon className="h-6 w-6 ml-2 hidden sm:inline cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <VideoCameraIcon className="h-6 w-6 hidden sm:inline cursor-pointer" />
        <div className="relative">
          <BellIcon className="h-6 w-6 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            2
          </span>
        </div>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="profile"
        />
      </div>
      {searchResult.length > 0 && isResultOpen && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <ul>
            {searchResult.map((el, index) => (
              <li
                key={index}
                onClick={() => handleSearchData(el)}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  ></circle>
                  <line
                    x1="16"
                    y1="16"
                    x2="21"
                    y2="21"
                    stroke="black"
                    strokeWidth="2"
                  ></line>
                </svg>
                <span>{el}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Head;
