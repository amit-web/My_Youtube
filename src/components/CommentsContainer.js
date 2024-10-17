import React from 'react';
import CommentList from './CommentList';

const commentsData = [
    {
      name: "Amit Mehta",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      replies: [
        {
          name: "Amit Mehta",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing",
          replies: [],
        },
        {
          name: "Amit Mehta",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing",
          replies: [],
        },
        {
          name: "Amit Mehta",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing",
          replies: [
            {
              name: "Amit Mehta",
              text: "lorem ipsum dolor sit amet, consectetur adipiscing",
              replies: [],
            },
            {
              name: "Amit Mehta",
              text: "lorem ipsum dolor sit amet, consectetur adipiscing",
              replies: [
                {
                  name: "Amit Mehta",
                  text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                  replies: [],
                },
                {
                  name: "Amit Mehta",
                  text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                  replies: [
                    {
                      name: "Amit Mehta",
                      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                      replies: [],
                    },
                    {
                      name: "Amit Mehta",
                      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Amit Mehta",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      replies: [],
    },
    {
      name: "Amit Mehta",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      replies: [],
    },
    {
      name: "Amit Mehta",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      replies: [],
    },
    {
      name: "Amit Mehta",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      replies: [],
    },
  ];
  

  const CommentsContainer = () => {
    return (
      <div className="m-5 p-2 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Comments:</h1>
        <CommentList commentsData={commentsData} />
      </div>
    );
  };
  
  export default CommentsContainer;