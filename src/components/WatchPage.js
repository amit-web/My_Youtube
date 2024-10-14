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
  }, []);
  return (
    <div className="flex w-full">
      <div className="flex flex-col">
        <div>
          WatchPage
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + query}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <CommentsContainer />
        </div>
      </div>

      <div className="w-full"  >
         <h1>Live Chat</h1>
         <div>
            <LiveChat/>
         </div>
      </div>
    </div>
  );
};

export default WatchPage;
