import React from 'react';

const MovieItem = ({ movie, onSelectedMovieId }) => {
    const posterUrl = import.meta.env.VITE_MOVIE_POSTER;

    const { id, title, poster_path, release_date } = movie;

    return (
        <>
            <article
                className='flex items-center gap-8 p-4 md:p-8 border-b border-slate-600 hover:bg-body duration-500 transition-all ease-in-out cursor-pointer'
                onClick={() => onSelectedMovieId(id)}
            >
                <img
                    className='w-[100px] h-[150px] sm:w-[150px] sm:h-[200px]'
                    src={`${posterUrl}${poster_path}`}
                    alt=''
                />
                <div className='flex flex-col justify-start items-start gap-4'>
                    <h3 className='text-base sm:text-xl text-slate-200 font-semibold'>{title}</h3>
                    <div className='flex items-center gap-2'>
                        <span>📅</span>
                        <span className='text-slate-400 text-xs sm:text-sm'>{release_date}</span>
                    </div>
                </div>
            </article>
        </>
    );
};

export default MovieItem;
