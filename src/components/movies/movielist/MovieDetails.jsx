import React, { useEffect, useState } from 'react';
import Button from '../../button/Button';
import Axios from 'axios';
import Loader from '../../loader/Loader';
import LogoSvg from '/public/logo.svg';
import StarRating from '../../rating/StarRating';

const MovieDetails = ({
    selectedId,
    onCloseMovieDetails,
    baseUrl,
    apiKey,
    isOpen,
    handleOpen,
    watched,
    onAddWatchedMovies,
}) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(null);

    const posterUrl = import.meta.env.VITE_MOVIE_POSTER;

    const handleMovieDetails = async () => {
        setIsLoading(true);
        const response = await Axios.get(`${baseUrl}/movie/${selectedId}?api_key=${apiKey}`);
        setMovieDetails(response.data);
        setIsLoading(false);
    };

    const isWatched = watched.some((movie) => movie.id === selectedId);
    const watchedMovieRating = watched.find((movie) => movie.id === selectedId)?.userRating;

    const {
        id,
        title,
        backdrop_path,
        poster_path,
        release_date,
        runtime,
        overview,
        genres,
        production_companies,
    } = movieDetails;

    let genresList = genres
        ?.map((genre) => {
            return `${genre.name}`;
        })
        .join(', ');

    const handleWatchedMovies = () => {
        const newWatchedMovies = {
            id: selectedId,
            title,
            poster_path,
            release_date,
            runtime,
            userRating: Number(userRating),
        };

        onAddWatchedMovies(newWatchedMovies);
        onCloseMovieDetails();
    };

    useEffect(() => {
        handleMovieDetails();
    }, [selectedId]);

    return (
        <>
            <article className='relative'>
                <Button
                    className={
                        'p-1 w-[2em] h-[2em] bg-body rounded-[50%] text-primary font-bold text-lg absolute left-2 top-[24.5px] z-20'
                    }
                    onClick={onCloseMovieDetails}
                >
                    x
                </Button>
                <Button
                    className={`w-[2em] h-[2em] z-20 ${
                        isOpen ? 'bg-[#24323f] absolute right-2 top-[24.5px]' : 'bg-sidebar'
                    } text-lg font-bold bg-navbar rounded-full text-primary absolute right-2 top-[12.5px]`}
                    onClick={handleOpen}
                >
                    {isOpen ? '-' : '+'}
                </Button>
                {isLoading ? (
                    <>
                        <section className='h-[30rem] flex items-center justify-center'>
                            <Loader />
                        </section>
                    </>
                ) : (
                    <>
                        <section>
                            <div className='relative'>
                                <img
                                    src={
                                        backdrop_path
                                            ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`
                                            : LogoSvg
                                    }
                                    alt={title ? `${title} Poster` : 'Poster'}
                                    className='w-full aspect-video object-center'
                                />
                                <div className='absolute top-0 left-0 w-full h-full shadow-[inset_-5px_-97px_95px_5px_rgba(0,0,0,0.65)]'></div>
                            </div>
                            <section className='py-8 px-4 md:px-8'>
                                <div className='flex flex-wrap lg:items-center gap-10'>
                                    <div>
                                        <img
                                            src={
                                                poster_path
                                                    ? `${posterUrl}/${poster_path}`
                                                    : LogoSvg
                                            }
                                            alt={`${title} Poster`}
                                            className='w-[100px] h-[150px] sm:w-[150px] sm:h-[200px]'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className='text-base sm:text-xl text-slate-200 font-semibold'>
                                            {title}
                                        </h3>
                                        <p className='flex items-center gap-2'>
                                            <span>📅</span>
                                            <span className='text-slate-400 text-xs sm:text-sm'>
                                                {release_date}
                                            </span>
                                        </p>
                                        <p className='flex items-center gap-2'>
                                            <span>⏱️</span>
                                            <span className='text-slate-400 text-xs sm:text-sm'>
                                                {runtime}
                                            </span>
                                        </p>
                                        <p className='flex items-center gap-2'>
                                            <span>🌟</span>
                                            <span className='text-slate-400 text-xs sm:text-sm'>
                                                {watched.map((item) => {
                                                    return <>{id === item.id && item.userRating}</>;
                                                })}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='py-4 mt-4 flex flex-col gap-8'>
                                    <p className='text-slate-400 text-xs sm:text-sm italic'>
                                        {overview}
                                    </p>
                                    <p className='text-slate-400 text-xs sm:text-sm'>
                                        <span className='font-semibold'>Genres:</span> {genresList}
                                    </p>
                                    <div className='flex flex-col gap-8'>
                                        <p className='text-slate-400 text-xs sm:text-sm font-semibold'>
                                            Production Companies:
                                        </p>
                                        <div className='flex flex-wrap justify-start items-center gap-8'>
                                            {production_companies?.map((comp) => {
                                                return (
                                                    <div key={comp.id}>
                                                        <img
                                                            src={
                                                                comp.logo_path
                                                                    ? `${posterUrl}/${comp.logo_path}`
                                                                    : LogoSvg
                                                            }
                                                            alt={
                                                                comp.name
                                                                    ? `${comp.name} Poster`
                                                                    : 'Poster'
                                                            }
                                                            className='w-[100px] h-[50px]'
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='p-4 bg-body rounded-lg flex flex-col items-center justify-center mt-4 gap-6'>
                                    {!isWatched ? (
                                        <>
                                            <StarRating
                                                max={10}
                                                size={24}
                                                onUserRating={setUserRating}
                                            />
                                            {userRating && (
                                                <>
                                                    <Button
                                                        className={
                                                            'bg-navbar p-[1rem] w-full rounded-2xl text-white flex justify-center items-center gap-2'
                                                        }
                                                        onClick={handleWatchedMovies}
                                                    >
                                                        <span>➕</span> Add to Watched Movies
                                                    </Button>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <span className='text-center text-white text-sm'>
                                            ⛔ You have watched this movie already and rating is{' '}
                                            {watchedMovieRating} / 10
                                        </span>
                                    )}
                                </div>
                            </section>
                        </section>
                    </>
                )}
            </article>
        </>
    );
};

export default MovieDetails;
