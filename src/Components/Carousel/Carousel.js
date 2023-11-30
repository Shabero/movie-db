import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { BACKDROP_URL } from '../../config/config'

// Import Swiper styles
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
                    movies.map(movie =>
                        <SwiperSlide>
                            <img
                               src={BACKDROP_URL + movie.backdrop_path}  alt={''}
                               className={'pb-5 mb-5'}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
