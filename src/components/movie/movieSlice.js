import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMovie = createAsyncThunk('movie/fetch', async () => {

    const res = await axios.get("http://localhost:8080/getMovies")

    return res.data
})

const movieSlice = createSlice({
    name:"MovieSlice",
    initialState: {
        movies:[]
    },
    reducers: {

    },
    extraReducers: {
        [fetchMovie.fulfilled]: (state,action) => {

            //console.log(action.payload.Movies.Items[0].Items)

            state.movies = action.payload.Movies.Items[0].Items

        }
    }
})

const moviesResult = state => state.movieReducer.movies

export { moviesResult}

export default movieSlice.reducer