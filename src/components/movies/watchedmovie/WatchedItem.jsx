import React from 'react';
import Button from '../../button/Button';

const WatchedItem = ({ movie, onDeleteWatchedMovie }) => {
    const posterUrl = import.meta.env.VITE_MOVIE_POSTER;

    return (
        <>
            <article className='w-full flex items-center gap-8 p-4 md:p-8 border-b border-slate-600'>
                <img
                    className='w-[70px] h-[100px]'
                    src={`${posterUrl}/${movie.poster_path}`}
                    alt=''
                />
                <div className='w-full flex flex-col justify-start items-start gap-4'>
                    <h3 className='text-xl text-slate-200 font-semibold'>{movie.title}</h3>
                    <div className='w-full flex items-center'>
                        <div className='w-full flex items-center gap-6'>
                            <div>
                                <span>🌟</span>
                                <span className='text-slate-400 text-sm'>{movie.runtime}</span>
                            </div>
                            <div>
                                <span>⏳</span>
                                <span className='text-slate-400 text-sm'>{movie.runtime} min</span>
                            </div>
                        </div>
                        <div>
                            <Button
                                className={
                                    'w-5 h-5 rounded-[50%] bg-red-500 flex items-center justify-center text-navbar font-semibold'
                                }
                                onClick={() => onDeleteWatchedMovie(movie.id)}
                            >
                                x
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default WatchedItem;
