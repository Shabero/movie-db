import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BASE_URL,API_KEY} from '../../config/config'

import MovieList from '../../Components/MovieList/MovieList'
import Carousel from '../../Components/Carousel/Carousel'

const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data})  => setMovies(data.results))
    },[])

    return (
        <div>
            <Carousel movies={movies} />
            <div className={'container'}>
                <MovieList  movies={movies}/>
            </div>
        </div>
    );
};

export default HomePage;