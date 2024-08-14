import MovieContent from './components/movies/MovieContent';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
            <header className='sticky top-4 z-10'>
                <Navbar />
            </header>
            <main className='max-w-7xl w-full mx-auto mt-60 flex flex-col md:flex-row gap-10'>
                <MovieContent />
            </main>
        </>
    );
}

export default App;
