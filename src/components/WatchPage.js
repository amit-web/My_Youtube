import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");

  useEffect(() => {
    dispatch(setToggleMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row w-full p-4">
      <div className="flex-1 w-full lg:w-2/3">
        <div className="relative">
          <iframe
            className="w-full h-64 sm:h-96 md:h-[450px] lg:h-[600px]"
            src={`https://www.youtube.com/embed/${query}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-5">
          <CommentsContainer />
        </div>
      </div>

      <div className="w-full lg:w-1/3 lg:ml-5 mt-5 lg:mt-0">
        <h1 className="text-lg font-semibold mb-2">Live Chat</h1>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
