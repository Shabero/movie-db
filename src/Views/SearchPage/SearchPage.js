import React, {useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import {BACKDROP_URL} from "../../config/config";
import FilmCard from "../../Components/FilmCard/FilmCard";
import MovieList from "../../Components/MovieList/MovieList";



const SearchPage = () => {
    const [value, setValue] = useState([])
    const [searchResults, setSearchResults] = useState('')

    const searchMovies = () => {
        axios('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US')
            .then(({data})  => setValue(data.movie))
    }
    console.log(value)

    const handleGetValue = (e) => {
        setSearchResults(e.target.value)
        console.log(searchResults)
    }



    return (
        <Layout>
            <div className={'movie-page'}
                 style={{
                     backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
                 }}>
            </div>
            <div className="container movie-wrapper">
                <FilmCard movie={movie} />
                <MovieList movies={value} />
            </div>
        </Layout>
    );
};

export default SearchPage;