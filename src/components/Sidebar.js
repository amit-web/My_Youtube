import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    if (!isMenuOpen) return //This we are calling early return pattern:

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music </li>
        <li>Films</li>
      </ul>
    </div>
  );
};

export default Sidebar;
