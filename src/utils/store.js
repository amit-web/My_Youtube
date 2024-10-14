import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import searchDataSlice from "./searchDataSlice"
const store = configureStore({

    reducer:{
        app:appSlice,
        search:searchSlice,
        searchData:searchDataSlice,
    }
})


export default store;