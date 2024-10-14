import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        addSearchData:function(state,action){
           state = Object.assign(state,action.payload)
        }
    }
})

export const {addSearchData} = searchSlice.actions;

export default searchSlice.reducer