import React from 'react';
import BoxMovies from '../BoxMovies';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
    return (
        <>
            <BoxMovies boxTitle={'List of Movies'}>
                <section className='bg-navbar flex items-center p-8 sticky -top-5 z-10 shadow-[0px_20px_33px_-8px_rgba(0,0,0,0.49)]'>
                    <h3 className='text-xl text-slate-200 font-semibold uppercase '>
                        List of Movies
                    </h3>
                </section>
                <section className='mt-5 py-2'>
                    {movies.map((movie) => {
                        return <MovieItem key={movie.id} movie={movie} />;
                    })}
                </section>
            </BoxMovies>
        </>
    );
};

export default MovieList;
