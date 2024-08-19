import React, { useState } from 'react';
import BoxMovies from '../BoxMovies';
import MovieItem from './MovieItem';
import Loader from '../../loader/Loader';
import Error from '../../error/ErrorMessage';
import Button from '../../button/Button';
import ErrorMessage from '../../error/ErrorMessage';

const MovieList = ({ movies, isLoading, isError, onSelectedMovieId, keyword }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <>
            <BoxMovies boxTitle={'List of Movies'} isOpen={isOpen} handleOpen={handleOpen}>
                <section className='bg-navbar flex items-center py-8 px-4 md:px-8 sticky top-0 z-10 shadow-[0px_20px_33px_-8px_rgba(0,0,0,0.49)]'>
                    <h3 className='text-xl text-slate-200 font-semibold'>List of Movies</h3>
                    <Button
                        className={`w-[2em] h-[2em] z-20 ${
                            isOpen ? 'bg-[#24323f] absolute right-2 top-[24.5px]' : 'bg-sidebar'
                        } text-lg font-bold bg-navbar rounded-full text-primary absolute right-2 top-[12.5px]`}
                        onClick={handleOpen}
                    >
                        {isOpen ? '-' : '+'}
                    </Button>
                </section>
                <section
                    className={`mt-5 py-2 ${
                        isLoading || isError ? 'h-[30rem] flex items-center justify-center p-8' : ''
                    }`}
                >
                    {isLoading && <Loader />}
                    {isError && <Error errorMessage={isError} />}
                    {!isLoading &&
                        !isError &&
                        movies.map((movie) => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                    onSelectedMovieId={onSelectedMovieId}
                                />
                            );
                        })}
                </section>
            </BoxMovies>
        </>
    );
};

export default MovieList;
