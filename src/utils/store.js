import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import searchDataSlice from "./searchDataSlice";
import chatSlice from "./chatSlice";
import popularSlice from "./popularSlice";
const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        searchData:searchDataSlice,
        chat:chatSlice,
        popular:popularSlice
    }
})


export default store;