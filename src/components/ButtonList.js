import React, { useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Soccer",
    "Cricket",
    "Football",
    "News",
    "Music",
    "Podcasts",
    "Mixes",
    "Apple",
    "Indian pop music",
    "Sonam Bajwa",
    "APIs",
    "Dramedy",
    "Samsung",
    "Thrillers",
    "Web Development",
    "Reverberation",
    "Podcasts",
    "Mixes",
    "Apple",
    "Indian pop music",
    "Sonam Bajwa",
    "APIs",
    "Dramedy",
    "Samsung",
    "Thrillers",
    "Web Development",
    "Reverberation",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 10; // Number of visible buttons
  const totalItems = list.length;

  const handleForward = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
  };

  const handleBackward = () => {
    setStartIndex((prevIndex) => (prevIndex - itemsPerPage + totalItems) % totalItems);
  };

  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const currentIndex = (startIndex + i) % totalItems;
    displayedItems.push(list[currentIndex]);
  }

  return (
    <div className="relative">
      <div className="sticky top-24 z-40 w-full bg-white">
        <div className="relative flex items-center">
          <button
            onClick={handleBackward}
            className="absolute left-0 px-3 py-2 bg-gray-200 rounded-full shadow-md"
          >
            &larr;
          </button>

          <div className="flex w-full ml-16 px-4 py-2 space-x-4 overflow-x-auto scrollbar-hide">
            {displayedItems.map((item, index) => (
              <Button key={index} name={item} />
            ))}
          </div>

          <button
            onClick={handleForward}
            className="absolute right-0 px-3 py-2 bg-gray-200 rounded-full shadow-md"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
