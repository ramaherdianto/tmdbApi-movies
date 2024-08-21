import Axios from 'axios';
import MovieContent from './components/movies/MovieContent';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState('');
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [keyword, setKeyword] = useState('');

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    const handleSelectedMovieId = (id) => {
        setSelectedMovieId((selectedId) => (selectedId === id ? null : id));
    };

    const handleCloseMovieDetials = () => {
        setSelectedMovieId(null);
    };

    const handleAddWatchedMovies = (movie) => {
        setWatched((watched) => [...watched, movie]);
    };

    const handleDeleteWatchedMovie = (id) => {
        confirm('Are you sure wanna delete this?');
        setWatched((watched) => watched.filter((movie) => movie.id !== id));
    };

    const handleGetMovies = async () => {
        try {
            setIsLoading(true);
            setIsError('');
            const response = await Axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=1`);

            if (response.data.success === 'false') throw new Error(response.data.status_message);

            setMovies(response.data.results);
            setIsError('');
        } catch (error) {
            setIsError(error.response.data.status_message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchMovies = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            setIsError('');
            const response = await Axios.get(
                keyword
                    ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}&page=1`
                    : `${baseUrl}/movie/popular?api_key=${apiKey}&page=1`
            );

            const data = response.data.results;

            if (data.length === 0) return setIsError('Movies not found!');

            setMovies(data);
            setIsError('');
        } catch (error) {
            setIsError(error.data.results.status_message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleSearchMovies();
    }, [keyword]);

    useEffect(() => {
        handleGetMovies();
    }, []);

    return (
        <>
            <Navbar
                keyword={keyword}
                setKeyword={setKeyword}
                onSubmitSearch={handleSearchMovies}
                movies={movies}
            />
            <MovieContent
                movies={movies}
                isLoading={isLoading}
                isError={isError}
                baseUrl={baseUrl}
                apiKey={apiKey}
                onSelectedMovieId={handleSelectedMovieId}
                selectedId={selectedMovieId}
                onCloseMovieDetails={handleCloseMovieDetials}
                keyword={keyword}
                onAddWatchedMovies={handleAddWatchedMovies}
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatchedMovie}
            />
        </>
    );
}

export default App;
