import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, v3 } from "../../apikeys";
export default createSlice({
    name:"Movie Details",
    initialState: {
        value: {},
        error: null,
        status: "pending"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieDetails.pending, (state,action) => {
            state.status ="pending";
            state.error = null;
        })
        builder.addCase(fetchMovieDetails.fulfilled, (state,action) => {
            state.value = action.payload;
            state.status = "fulfilled";
            state.error = null;
        })
        builder.addCase(fetchMovieDetails.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    }
})

export const fetchMovieDetails = createAsyncThunk("movie/details", async (arg) => {
    try {
        const {data} = await axios.get(baseUrl+"movie/"+arg+"?api_key="+v3+"&language=en-US");
        return data;
    } catch (error) {
        return error;
    }
}) ;