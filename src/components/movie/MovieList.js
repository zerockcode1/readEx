import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, moviesResult} from "./movieSlice";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const MovieList = () => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const movieList = useSelector(moviesResult)

    useEffect(() => {
            dispatch(fetchMovie())
    },[])


    console.log(movieList)

    const list = movieList.map( (movie,idx) => <MovieCard key={idx} {...movie}></MovieCard>)

    return (
        <div>
            <ul>
                {list}
            </ul>

        </div>
    );
};

export default MovieList;