import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movies from backend or mock data
        axios.get('http://localhost:5000/api/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
