import React, { useState } from 'react';
import Summary from './Summary';
import WatchedItem from './WatchedItem';
import BoxMovies from '../BoxMovies';
import MovieDetails from '../movielist/MovieDetails';

const WatchedMovies = ({
    selectedId,
    onCloseMovieDetails,
    baseUrl,
    apiKey,
    watched,
    onAddWatchedMovies,
    onDeleteWatchedMovie,
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <>
            <BoxMovies
                boxTitle={selectedId ? 'Movie Details' : 'Movies You Watched'}
                isOpen={isOpen}
                handleOpen={handleOpen}
            >
                {selectedId ? (
                    <MovieDetails
                        selectedId={selectedId}
                        onCloseMovieDetails={onCloseMovieDetails}
                        baseUrl={baseUrl}
                        apiKey={apiKey}
                        isOpen={isOpen}
                        handleOpen={handleOpen}
                        watched={watched}
                        onAddWatchedMovies={onAddWatchedMovies}
                    />
                ) : (
                    <>
                        <Summary isOpen={isOpen} handleOpen={handleOpen} watched={watched} />
                        <section className='mt-5 py-2'>
                            {watched?.map((movie) => {
                                return (
                                    <WatchedItem
                                        key={movie.id}
                                        selectedId={selectedId}
                                        movie={movie}
                                        onDeleteWatchedMovie={onDeleteWatchedMovie}
                                    />
                                );
                            })}
                        </section>
                    </>
                )}
            </BoxMovies>
        </>
    );
};

export default WatchedMovies;
