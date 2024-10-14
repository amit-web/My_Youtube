import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_VIDEO_API,
} from "../utils/constants";
import { addSearchVideo } from "../utils/searchDataSlice";
import { addSearchData } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";



const Head = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const cacheResult = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(isResultOpen)
  const handleClickHamburger = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    //calling the search Api whenever searchValue will chnage;
    //We are tryng to apply debaouncing here to prevent unnecessary rendering!!!
    //setTimeout is used here to delay the execution of getSearchData by 300ms,
    //This delay is to prevent unnecessary API calls when user is typing fast.
    //{"iphone":["i","ip","iphone"]}
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
   // console.log("Navigating to search page with query:", query);
    navigate(`/searchWatch?q=${query}`);
    setIsResultOpen(false);

  };
  return (
    searchResult && (
      <div className="grid grid-flow-col p-3 m-2 shadow-lg">
        <div className="flex">
          <img
            className="h-8 w-8 cursor-pointer"
            onClick={() => handleClickHamburger()}
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
          <div>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              className="p-2 w-1/2 border border-gray-400 rounded-l-full"
              type="text"
              onFocus={()=>setIsResultOpen(true)}  
            />
            <button className="border border-gray-400 p-2 px-5 rounded-r-full bg-gray-100">
              🔍
            </button>
          </div>

          { searchResult.length > 0 && isResultOpen&& (
            <div className="px-2 py-2 bg-white absolute w-[34rem] border border-gray-100 rounded-lg">
              <ul>
                {searchResult.map((el, index) => (
                 
                    <li
                      onClick={() => handleSearchData(el)}
                      className="hover:bg-slate-100 px-2 mx-2"
                    >
                      🔍 {el}
                    </li>
                  
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-1">
          <img
            className="h-8"
            src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
            alt="profile"
          />
        </div>
      </div>
    )
  );
};

export default Head;
