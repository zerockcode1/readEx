import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "../components/movie/movieSlice";
import todoSlice from "../components/todo/todoSlice";


const store = configureStore({
    reducer: {
        movieReducer: movieSlice,
        todo:todoSlice
    },

})

export default store