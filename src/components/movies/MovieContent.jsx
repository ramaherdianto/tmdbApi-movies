import React from 'react';
import MovieList from './movielist/MovieList';
import WatchedMovies from './watchedmovie/WatchedMovies';

const MovieContent = ({
    movies,
    isLoading,
    isError,
    onSelectedMovieId,
    selectedId,
    onCloseMovieDetails,
    baseUrl,
    apiKey,
}) => {
    return (
        <>
            <MovieList
                movies={movies}
                isLoading={isLoading}
                isError={isError}
                onSelectedMovieId={onSelectedMovieId}
            />
            <WatchedMovies
                selectedId={selectedId}
                onCloseMovieDetails={onCloseMovieDetails}
                baseUrl={baseUrl}
                apiKey={apiKey}
            />
        </>
    );
};

export default MovieContent;
