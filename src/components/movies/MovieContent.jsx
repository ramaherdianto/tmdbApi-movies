import React from 'react';
import MovieList from './movielist/MovieList';
import WatchedMovies from './watchedmovie/WatchedMovies';

const MovieContent = () => {
    return (
        <>
            <MovieList />
            <WatchedMovies />
        </>
    );
};

export default MovieContent;
