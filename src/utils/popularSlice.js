import { createSlice } from "@reduxjs/toolkit";

const popularSlice = createSlice({
    name:"popular",
    initialState:{
        popularVideo :[]
    },
    reducers:{
        addPopularVideo:function(state,action){
            state.popularVideo = [...state.popularVideo, ...action.payload];
        }
    }
})

export const {addPopularVideo} = popularSlice.actions
export default popularSlice.reducer;
