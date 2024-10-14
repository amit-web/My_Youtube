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
  ];
  

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold'>Comments:</h1>
       <CommentList commentsData={commentsData}/>
    </div>
  )
}

export default CommentsContainer