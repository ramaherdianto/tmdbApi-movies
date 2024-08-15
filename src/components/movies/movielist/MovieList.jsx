import React from 'react';
import BoxMovies from '../BoxMovies';
import MovieItem from './MovieItem';
import Loader from '../../loader/Loader';
import Error from '../../error/ErrorMessage';

const MovieList = ({ movies, isLoading, isError }) => {
    return (
        <>
            <BoxMovies boxTitle={'List of Movies'}>
                <section className='bg-navbar flex items-center py-8 px-4 md:px-8 sticky top-0 z-10 shadow-[0px_20px_33px_-8px_rgba(0,0,0,0.49)]'>
                    <h3 className='text-xl text-slate-200 font-semibold uppercase '>
                        List of Movies
                    </h3>
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
                            return <MovieItem key={movie.id} movie={movie} />;
                        })}
                </section>
            </BoxMovies>
        </>
    );
};

export default MovieList;
