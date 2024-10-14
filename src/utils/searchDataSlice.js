import { createSlice } from "@reduxjs/toolkit";

const searchDataSlice = createSlice({
    name:"searchData",
    initialState:{
        searchResult: null
    },
    reducers:{
        addSearchVideo:function(state,action){
            state.searchResult = action.payload
        }
    }
})

export const {addSearchVideo} = searchDataSlice.actions;
export default searchDataSlice.reducer