import React from 'react';
import MovieList from './movielist/MovieList';
import WatchedMovies from './watchedmovie/WatchedMovies';

const MovieContent = ({ movies }) => {
    return (
        <>
            <MovieList movies={movies} />
            <WatchedMovies />
        </>
    );
};

export default MovieContent;
