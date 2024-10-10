import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen :true
    },
    reducers:{
        toggleMenu:function(state){
              state.isMenuOpen = !state.isMenuOpen;
        },
        setToggleMenu:function(state){
          state.isMenuOpen = false;
        }
    }
})

export const {toggleMenu,setToggleMenu} = appSlice.actions;
export default appSlice.reducer;

