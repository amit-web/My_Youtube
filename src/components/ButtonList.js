import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Soccer",
    "Cricket",
    "Footbal",
    "News",
    "Music",
    "Podcast"
  ];
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
