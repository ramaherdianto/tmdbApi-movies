import React from 'react';
import MovieList from './movielist/MovieList';
import WatchedMovies from './watchedmovie/WatchedMovies';

const MovieContent = ({ movies, isLoading, isError }) => {
    return (
        <>
            <MovieList movies={movies} isLoading={isLoading} isError={isError} />
            <WatchedMovies />
        </>
    );
};

export default MovieContent;
