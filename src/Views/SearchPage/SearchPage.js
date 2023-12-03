import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import axios from 'axios';
import { BACKDROP_URL } from '../../config/config';
import FilmCard from '../../Components/FilmCard/FilmCard';
import MovieList from '../../Components/MovieList/MovieList';

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const searchMovies = () => {
        axios(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${searchQuery}`)
            .then(({ data }) => setMovies(data.results))
            .catch((error) => console.error('Error fetching movies:', error));
    };

    const handleGetValue = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <Layout>
            <div
                className={'movie-page'}
                style={{
                    backgroundImage: `url(${BACKDROP_URL}${movies})`,
                }}
            ></div>
            <div className="container movie-wrapper">
                <FilmCard movie={movies} />
                <MovieList movies={movies} />
            </div>
        </Layout>
    );
};

export default SearchPage;
