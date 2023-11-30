import React from 'react';
import {IMAGE_URL} from '../../config/config'

const MovieList = ({movies}) => {
    return (
        <div className={'row'}>
            {
                movies.map(movie =>
                    <div className={'col-xl-3 col-lg-4 col-md-6 col-sm-5'}>
                        <div className={'movie-box'}>
                            <img src={`${IMAGE_URL}${movie.poster_path}`} className={'movie-img'} alt=""/>
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MovieList;