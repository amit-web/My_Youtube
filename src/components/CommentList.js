import React from "react";
import Comments from "./Comments";

const CommentList = ({ commentsData }) => {
  return (
    <>
      {commentsData.map((comment, i) => {
        return (
          <div key={i}>
            <Comments  data={comment} />

            <div className="pl-5 border border-l-black ml-5">
                 <CommentList  commentsData = {comment.replies} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentList;
