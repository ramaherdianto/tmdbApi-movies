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
    keyword,
    onAddWatchedMovies,
    watched,
    onDeleteWatchedMovie,
}) => {
    return (
        <>
            <MovieList
                movies={movies}
                isLoading={isLoading}
                isError={isError}
                onSelectedMovieId={onSelectedMovieId}
                keyword={keyword}
            />
            <WatchedMovies
                selectedId={selectedId}
                onCloseMovieDetails={onCloseMovieDetails}
                baseUrl={baseUrl}
                apiKey={apiKey}
                watched={watched}
                onAddWatchedMovies={onAddWatchedMovies}
                onDeleteWatchedMovie={onDeleteWatchedMovie}
            />
        </>
    );
};

export default MovieContent;
