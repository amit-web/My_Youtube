import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearchVideo } from "../utils/searchDataSlice";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/constants";
import VideoSuggestion from "./VideoSuggestion";

const SearchVideo = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); 
  const dispatch = useDispatch();
  const searchVideos = useSelector((store) => store.searchData.searchResult);

  useEffect(() => {
    const fetchSearchVideos = async () => {
      const response = await fetch(
        YOUTUBE_SEARCH_VIDEO_API +
          query +
          "&key=AIzaSyAcrwbZOkTMOF4lrlcuinf63Q334yHA9e0"
      );
      const getData = await response.json();
      console.log("API Response:", getData);
      if (getData.items) {
        console.log("Dispatching search data:", getData.items);
        dispatch(addSearchVideo(getData.items)); 
      } else {
        console.log("No items found in the API response.");
      }
    };

    if (query) {
      fetchSearchVideos();
    }
  }, [query, dispatch]);

  return (
    <div>
      {searchVideos?.length ? (
        <div className="">
          {searchVideos.map((video) => {
            return (
              <>
                <div>
                  <Link
                    key={video.id.videoId}
                    to={"/watch?v=" + video.id.videoId}
                  >
                    <VideoSuggestion videos={video} />
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchVideo;
