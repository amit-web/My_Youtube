import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        chatInfo:[]
    },
    reducers:{
        addMessage:function (state,action){
            state.chatInfo.splice(LIVE_CHAT_COUNT,1)
            state.chatInfo.unshift(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer