import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";


const MoviePage = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=en-EN&api_key=${API_KEY}`)
            .then(({data}) => setMovie(data))
    }, [id])



    return (
        <Layout>
            <div
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            }}>

            </div>
        </Layout>
    );
};

export default MoviePage;