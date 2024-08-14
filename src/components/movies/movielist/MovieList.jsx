import React from 'react';
import BoxMovies from '../BoxMovies';
import MovieItem from './MovieItem';

const MovieList = () => {
    return (
        <>
            <BoxMovies boxTitle={'List of Movies'}>
                <h3 className='text-xl text-slate-200 font-semibold p-8'>List of Movies</h3>
                <section className='mt-5 py-2'>
                    <MovieItem />
                </section>
            </BoxMovies>
        </>
    );
};

export default MovieList;
