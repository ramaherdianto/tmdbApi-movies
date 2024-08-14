import Axios from 'axios';
import MovieContent from './components/movies/MovieContent';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
    const [movies, setMovies] = useState([]);

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    const handleGetMovies = async () => {
        try {
            const response = await Axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=1`);
            setMovies(response.data.results);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        handleGetMovies();
        console.log(movies);
    }, []);

    return (
        <>
            <header className='sticky top-4 z-10'>
                <Navbar />
            </header>
            <main className='max-w-7xl w-full mx-auto mt-20 flex flex-col md:flex-row gap-10'>
                <MovieContent movies={movies} />
            </main>
        </>
    );
}

export default App;
