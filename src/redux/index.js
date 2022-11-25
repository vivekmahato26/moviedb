import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./slice/bannerSlice";


export default configureStore({
    reducer: {
        banner: bannerSlice.reducer
    }
})