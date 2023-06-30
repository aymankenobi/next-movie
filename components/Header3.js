import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [buttonSearchQuery, setButtonSearchQuery] = useState('');
    const [selectedTimeslot, setSelectedTimeslot] = useState('');

    useEffect(() => {
        axios
            .get('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=ABC%20movies&d_date=2020-04-04')
            .then((response) => {
                setMovies(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const filteredMovies = movies.filter((movie) =>
        movie.Theater_name.toLowerCase().includes(buttonSearchQuery.toLowerCase())
    );

    const displayMovies = selectedTimeslot ? filteredMovies.filter((movie) => {
        const startTime = new Date(movie.Start_time).getTime();
        const endTime = new Date(movie.End_time).getTime();
        const selectedTime = new Date(selectedTimeslot).getTime();
        return selectedTime >= startTime && selectedTime <= endTime;
    }) : filteredMovies;

    return (
        <MovieContext.Provider value={{
            movies: displayMovies,
            setSearchQuery,
            setButtonSearchQuery,
            searchQuery,
            setSelectedTimeslot
        }}>
            {children}
        </MovieContext.Provider>
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
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    {movie.Duration}
                </div>
                <div className="text-xs font-light text-gray-300">
                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                    {movie.Views} views
                </div>
            </div>
            <div className="my-4">
                <span className="font-semibold text-4xl">{movie.Title}</span>
            </div>
        </div>
    );
};

const Header3 = () => {
    const { movies, setSearchQuery, setButtonSearchQuery, searchQuery } = useContext(MovieContext);
    const [showStartDatepicker, setShowStartDatepicker] = useState(false);
    const [showEndDatepicker, setShowEndDatepicker] = useState(false);
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleButtonClick = () => {
      setButtonSearchQuery(searchQuery);
    };
  
    const handleStartDateChange = (e) => {
      setSelectedStartDate(e.target.value);
    };
  
    const handleEndDateChange = (e) => {
      setSelectedEndDate(e.target.value);
    };
    const MONTH_NAMES = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const noOfDays = [...Array(endDate.getDate()).keys()].map((i) => i + 1);
    const blankdays = [...Array(startDate.getDay()).keys()];

    const isToday = (date) => {
        const today = new Date();
        return (
            date === today.getDate() && month === today.getMonth() && year === today.getFullYear()
        );
    };

    const getDateValue = (date) => {
        const selectedDate = new Date(year, month, date);
        console.log(selectedDate.toISOString()); // Replace with your desired functionality
        setShowDatepicker(false);
    };

    if (!movies) {
        return <div>Loading...</div>; // Add a loading state or message while fetching data
    }

    return (
        <div>
            <div className="min-h-[700px] bg-gradient-to-r from-[#323232] via-10% via-[#000000] via-90% to-[#000000] via-90% flex justify-center items-center text-white text-left px-20">
                <div className="w-2/5">
                    <img src="./img.png" alt="Icon" className="w-110 ml-2" />
                </div>
                <div className="w-3/5">
                    <h1 className="text-6xl font-semibold mb-6">Search your movies here!</h1>

                    <div className="relative flex">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                        />
                        <input
                            type="search"
                            id="default-search"
                            className="block p-3 pl-10 w-[680px] text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search movie by theater..."
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="relative mr-8 mt-4">
                        <input
                            type="datetime-local"
                            value={selectedStartDate}
                            onChange={handleStartDateChange}
                            onClick={() => setShowStartDatepicker(!showStartDatepicker)}
                            onKeyDown={(e) => e.key === 'Escape' && setShowStartDatepicker(false)}
                            className="p-3 pl-10 w-80 rounded-full text-gray-600 font-xs mr-8"
                            placeholder=""
                        />
                        <input
                            type="datetime-local"
                            value={selectedEndDate}
                            onChange={handleEndDateChange}
                            onClick={() => setShowEndDatepicker(!showEndDatepicker)}
                            onKeyDown={(e) => e.key === 'Escape' && setShowEndDatepicker(false)}
                            className="p-3 pl-10 w-80 rounded-full text-gray-600 font-xs"
                            placeholder=""
                        />
                    </div>


                    <button onClick={handleButtonClick} className="group relative h-10 w-28 overflow-hidden rounded-full bg-yellow-400 text-lg font-bold text-black mt-2">
                        Search
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                </div>
            </div>
            <div className="min-h-[1400px] bg-gradient-to-r from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% text-white text-left px-20">
                <div className="max-w-[1070px] mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-medium mt-40">New Releases</div>
                        <Link href="/index3">
                            <div className="text-m font-medium text-yellow-400 mt-40">View More</div>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center text-white text-left w-4/5 mx-auto">
                    <div className="w-1/3">
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
                    <div className="w-1/3">
                        {movies.slice(2, 3).map((movie) => (
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
        </div>
    );
};

const Index2 = () => {
    return (
        <div>
            <Header3 />
        </div>
    );
};

export default function HomePage() {
    return (
        <MovieProvider>
            <Index2 />
        </MovieProvider>
    );
}
