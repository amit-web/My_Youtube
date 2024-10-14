import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch()
  const chatData = useSelector((store)=>store.chat.chatInfo)
//   const liveChatData = [
//     {
//       userName: "user1",
//       message: "Hello, how are you?",
//     },
//   ];

  useEffect(() => {
    let clearVariable = setInterval(() => {
      //Api polling
      console.log("Api polling");
      dispatch(addMessage( {
        userName:generateName(),
        message: generateMessage(),
      }))
    }, 2000);
    console.log(chatData)
    return(()=> clearInterval(clearVariable))
  }, [chatData]);


  return (
   <>
    <div className="border  border-black w-full mt-6 ml-2 p-2 h-[600px] overflow-y-scroll flex flex-col-reverse">
        {chatData.map((chat,index)=>{
            return  <ChatMessage key={index} data={chat} />
        })}
   
    </div>

    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
            userName:"Amit Mehta",
            message: liveMessage,
        }))
       } }>

         <input value={liveMessage} className="w-52 p-2 m-2" type="text" onChange={(e)=>setLiveMessage(e.target.value)} />
         <button className="bg-green-100 w-20 px-2 mx-2">Send</button>

    </form>
   
   
   </>
  );
};

export default LiveChat;
