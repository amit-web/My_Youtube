import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.chatInfo);

  useEffect(() => {
    const clearVariable = setInterval(() => {
      // API polling
      console.log("API polling");
      dispatch(
        addMessage({
          userName: generateName(),
          message: generateMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(clearVariable);
  }, [dispatch]);

  return (
    <>
      <div className="border border-gray-300 w-full mt-6 p-2 h-[600px] overflow-y-scroll flex flex-col-reverse bg-white rounded-lg shadow-md">
        {chatData.map((chat, index) => {
          return <ChatMessage key={index} data={chat} />;
        })}
      </div>

      <form
        className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-lg shadow-md flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              userName: "Amit Mehta",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          className="flex-1 p-2 m-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="bg-green-100 w-24 px-4 py-2 rounded-md hover:bg-green-200 transition duration-200">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
