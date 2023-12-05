import React from 'react';
import { IMAGE_URL} from "../../config/config";
import IMDblogo from "../Assets/IMDb-vote.png";
import './style.css'

const FilmCard = ({movie}) => {
    return (
        <div className={'film-card'} >
            <img className={'carousel-poster col-2'}
                 src={IMAGE_URL + movie.poster_path}  alt={''}
            />
            <div className={'description col-6'}>
                <h3 className={'fs-1'}>{movie.title}</h3>
                <p className={'fs-4 d-flex'}>
                    <img src={IMDblogo} style={{width: '30px'}} alt=""/>
                        {movie.vote_average}
                </p>
                <p className={'fs-4 pt-3 col-10'}>{movie.overview}</p>
            </div>
        </div>
    );
};

export default FilmCard;