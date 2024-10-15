import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { 
  HomeIcon, 
  FilmIcon, 
  MusicNoteIcon, 
  TrendingUpIcon, 
  ShoppingCartIcon, 
  VideoCameraIcon, 
  NewspaperIcon, 
  PuzzleIcon,       
  FlagIcon,       
  BookOpenIcon,     
  UserCircleIcon,   
  SpeakerphoneIcon 
} from '@heroicons/react/solid';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); 
  const [isExpanded, setIsExpanded] = useState(true); 

  if (!isMenuOpen) return null; 

  return (
    <div className={`h-screen ${isExpanded ? "w-60" : "w-20"} bg-white shadow-lg transition-all duration-300`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-2 focus:outline-none"
      >
      </button>

      <ul className="pt-5">
        <Link to="/">
          <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
            <HomeIcon className="h-6 w-6"/>
            {isExpanded && <span>Home</span>}
          </li>
        </Link>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <FilmIcon className="h-6 w-6"/>
          {isExpanded && <span>Shorts</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <VideoCameraIcon className="h-6 w-6"/>
          {isExpanded && <span>Subscriptions</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <MusicNoteIcon className="h-6 w-6"/>
          {isExpanded && <span>YouTube Music</span>}
        </li>
      </ul>

      <h1 className={`font-bold pt-5 ${isExpanded ? "block" : "hidden"}`}>Explore</h1>
      <ul>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <TrendingUpIcon className="h-6 w-6"/>
          {isExpanded && <span>Trending</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <ShoppingCartIcon className="h-6 w-6"/>
          {isExpanded && <span>Shopping</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <NewspaperIcon className="h-6 w-6"/>
          {isExpanded && <span>News</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <PuzzleIcon className="h-6 w-6"/> 
          {isExpanded && <span>Gaming</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <FlagIcon className="h-6 w-6"/>
          {isExpanded && <span>Sport</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <BookOpenIcon className="h-6 w-6"/> 
          {isExpanded && <span>Courses</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <UserCircleIcon className="h-6 w-6"/> 
          {isExpanded && <span>Fashion & Beauty</span>}
        </li>
        <li className={`flex items-center p-2 hover:bg-gray-200 rounded-lg ${isExpanded ? "space-x-3" : ""}`}>
          <SpeakerphoneIcon className="h-6 w-6"/> 
          {isExpanded && <span>Podcasts</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
