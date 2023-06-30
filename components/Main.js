import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FontAwesomeIcon from '../utils/fontawesome';
import Link from 'next/link';


const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/genre?genre=comedy')
            .then((response) => {
                setMovies(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
    );
};

const MovieCard = ({ movie }) => {
    return (
        <div
            className="flex flex-col p-8 bg-gradient-to-t from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% shadow-xl translate-x-4 translate-y-4 min-h-[500px] mr-4"
            style={{ backgroundImage: `url(${movie.Poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div>
                <span className="bg-[#facc15] text-black text-sm font-small mr-2 px-2.5 py-0.5 rounded-xl">
                    {movie.Genre}
                </span>
            </div>
            <div className="flex-grow"></div>
            <div className="flex items-center">
                <div className="text-xs font-light text-gray-300 mr-10">
                    <FontAwesomeIcon icon="fa-regular fa-clock" className="mr-2" />
                    {movie.Duration}
                </div>
                <div className="text-xs font-light text-gray-300">
                    <FontAwesomeIcon icon="fa-regular fa-eye" className="mr-2" />
                    {movie.Views} views
                </div>
            </div>
            <div className="my-4">
                <span className="font-semibold text-4xl">{movie.Title}</span>
            </div>
        </div>
    );
};

const Main = () => {
    const movies = React.useContext(MovieContext);

    return (
        <div className="min-h-[1400px] bg-gradient-to-r from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% text-white text-left px-20">
            <div className="max-w-[1070px] mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-medium mt-40">New Releases</div>
                    <Link href="index2">
                        <div className="text-m font-medium text-yellow-400 mt-40">
                            View More
                        </div>
                    </Link>

                </div>
            </div>
            <div className="flex items-center text-white text-left w-4/5 mx-auto">
                <div className="w-2/3">
                    {movies.slice(0, 1).map((movie) => (
                        <div key={movie.Movie_ID}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
                <div className="w-1/3">
                    {movies.slice(1, 2).map((movie) => (
                        <div key={movie.Movie_ID}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center text-white text-left mt-4 w-4/5 mx-auto">
                {movies.slice(2, 5).map((movie) => (
                    <div key={movie.Movie_ID} className="w-1/3">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <MovieProvider>
            <Main />
        </MovieProvider>
    );
};

export default Home;
