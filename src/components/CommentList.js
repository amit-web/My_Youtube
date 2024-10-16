import React from "react";
import Comments from "./Comments";

const CommentList = ({ commentsData }) => {
  return (
    <>
      {commentsData.map((comment, i) => (
        <div key={i} className="ml-4">
          <Comments data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className="pl-5 border-l-2 border-gray-300">
              <CommentList commentsData={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentList;
