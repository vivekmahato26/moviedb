import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, v3 } from "../../apikeys";

const bannerSlice = createSlice({
    name: "Banner",
    initialState: {
        value: [],
        stauts: "pending",
        error: null
    },
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchBanners.pending, (state,action) => {
            state.stauts = "pending";
            state.error = null;
        })
        builder.addCase(fetchBanners.fulfilled, (state,action)=>{
            state.value = action.payload;
            state.stauts = "fulfilled";
            state.error = null;
        })
        builder.addCase(fetchBanners.rejected, (state,action)=>{
            state.error = action.payload;
            state.stauts = "rejected";
        })
    }
})

export const fetchBanners = createAsyncThunk("Banners/fetch", async () => {
    try {
        const {data} = await axios.get(`${baseUrl}movie/now_playing/?api_key=${v3}&language=en-US&page=1`);
        let {results} = data;
        results = results.splice(0,5);
        data.results = results;
        return data;
    } catch (error) {
        return error;
    }
})

export default bannerSlice;