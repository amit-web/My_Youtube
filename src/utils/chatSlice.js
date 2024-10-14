import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        chatInfo:[]
    },
    reducers:{
        addMessage:function (state,action){
            state.chatInfo.splice(25,1)
            state.chatInfo.unshift(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer