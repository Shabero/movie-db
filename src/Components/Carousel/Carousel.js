import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {BACKDROP_URL, IMAGE_URL} from '../../config/config'

// import IMDblogo from '../Assets/IMDb-vote.png'


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

import '../../Components/Carousel/style.css';

import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

export default function Carousel({movies}) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    movies.filter(el => el.backdrop_path).map(movie =>
                        <SwiperSlide>
                            <div className="carousel-img"
                                style={{
                                    background: `url(${BACKDROP_URL + movie.backdrop_path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    padding: '150px 300px',

                                }}
                            >
                                <div className={'carousel-card'} >
                                    <img className={'carousel-poster'}
                                        src={IMAGE_URL + movie.poster_path}  alt={''}
                                    />
                                    <div>
                                        <h3 className={'fs-1'}>{movie.title}</h3>
                                        {/*<img src={IMDblogo} alt=""/>*/}
                                        <p className={'fs-4'}>{movie.vote_average}</p>
                                        <p className={'fs-4'}>{movie.overview}</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
