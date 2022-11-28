import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./slice/bannerSlice";
import movieDetails from "./slice/movieDetails";
import payment from "./slice/payment";
import popularSlice from "./slice/popularSlice";


export default configureStore({
    reducer: {
        banner: bannerSlice.reducer,
        popular: popularSlice.reducer,
        movieDetails: movieDetails.reducer,
        payment : payment.reducer
    }
})