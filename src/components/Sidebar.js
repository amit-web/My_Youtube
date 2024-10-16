import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  HomeIcon,
  FilmIcon,
  MusicNoteIcon,
  TrendingUpIcon,
  VideoCameraIcon,
  NewspaperIcon,
  PuzzleIcon,
  FlagIcon,
  BookOpenIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      {isMenuOpen ? <div
        className={`h-screen transition-all duration-200 sticky top-16 bg-white border-r border-gray-200 z-40
        ${isExpanded ? "w-64" : "w-16"}`}
      >
        <ul className="pt-5">
          <Link to="/">
            <li
              className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
                isExpanded ? "space-x-3" : "justify-center"
              }`}
            >
              <HomeIcon className="h-6 w-6" />
              {isExpanded && <span>Home</span>}
            </li>
          </Link>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <FilmIcon className="h-6 w-6" />
            {isExpanded && <span>Shorts</span>}
          </li>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <VideoCameraIcon className="h-6 w-6" />
            {isExpanded && <span>Subscriptions</span>}
          </li>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <MusicNoteIcon className="h-6 w-6" />
            {isExpanded && <span>YouTube Music</span>}
          </li>
        </ul>
        <h1
          className={`font-bold pt-5 pl-2 ${isExpanded ? "block" : "hidden"}`}
        >
          You
        </h1>
        <ul>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <UserCircleIcon className="h-6 w-6" />
            {isExpanded && <span>Your channel</span>}
          </li>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            {isExpanded && <span>History</span>}
          </li>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <VideoCameraIcon className="h-6 w-6" />
            {isExpanded && <span>Your videos</span>}
          </li>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <PuzzleIcon className="h-6 w-6" />
            {isExpanded && <span>Watch Later</span>}
          </li>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <TrendingUpIcon className="h-6 w-6" />
            {isExpanded && <span>Liked videos</span>}
          </li>
        </ul>
        <h1
          className={`font-bold pt-5 pl-2 ${isExpanded ? "block" : "hidden"}`}
        >
          Subscriptions
        </h1>
        <ul>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <NewspaperIcon className="h-6 w-6" />
            {isExpanded && <span>Zee Business</span>}
          </li>
          <li
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${
              isExpanded ? "space-x-3" : "justify-center"
            }`}
          >
            <FlagIcon className="h-6 w-6" />
            {isExpanded && <span>RoadsideCoder</span>}
          </li>
        </ul>
      </div>
      
    
    :  <div className="h-screen w-16 bg-white transition-all duration-200 sticky top-20 border-r border-gray-200 ">
    <ul ul className="pt-5">
      <Link to="/">
        <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
          <HomeIcon className="h-6 w-6" />
        </li>
      </Link>
      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <FilmIcon className="h-6 w-6" />
      </li>
      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <VideoCameraIcon className="h-6 w-6" />
      </li>
      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <MusicNoteIcon className="h-6 w-6" />
      </li>
      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <TrendingUpIcon className="h-6 w-6" />
      </li>

      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <NewspaperIcon className="h-6 w-6" />
      </li>
      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <PuzzleIcon className="h-6 w-6" />
      </li>
      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <FlagIcon className="h-6 w-6" />
      </li>
      <li className="flex justify-center items-center p-2 hover:bg-gray-200 rounded-lg">
        <BookOpenIcon className="h-6 w-6" />
      </li>
    </ul>
  </div>}
      

    </>
  );
};

export default Sidebar;
