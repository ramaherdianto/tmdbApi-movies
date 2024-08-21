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
            <main className='max-w-7xl w-full mx-auto mt-32 md:mt-20 flex flex-col md:flex-row gap-40'>
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
            </main>
        </>
    );
};

export default MovieContent;
