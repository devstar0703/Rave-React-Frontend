import * as React from 'react';

import { SwiperSlide, Swiper } from 'swiper/react';

import {
    MusicItem, MusicTitle,
    MusicForTripDiv,
    ArrowRow
} from './styled/MusicForTrip.styled';


import {
    Row,
    SectionTitle
} from './styled/Common.styled' ;

import Carousel1 from 'src/assets/header/carousel_1.png';
import Carousel2 from 'src/assets/header/carousel_2.jpeg';
import Carousel3 from 'src/assets/header/carousel_3.jpeg';
import Carousel4 from 'src/assets/header/carousel_4.jpeg';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const MusicForTrip = () => {
    const musicList = [
        {
            image : Carousel1,
            title : 'The Last Ship',
            category : 'Pop'
        },
        {
            image : Carousel2,
            title : 'Solitude',
            category : 'Rock'
        },
        {
            image : Carousel3,
            title : '21',
            category : 'Drama'
        },
        {
            image : Carousel4,
            title : 'Bon to die',
            category : 'Pop'
        },
        {
            image : Carousel1,
            title : 'The Last Ship',
            category : 'Pop'
        },
        {
            image : Carousel2,
            title : 'Solitude',
            category : 'Rock'
        },
        {
            image : Carousel3,
            title : '21',
            category : 'Drama'
        },
        {
            image : Carousel4,
            title : 'Bon to die',
            category : 'Pop'
        },
        {
            image : Carousel1,
            title : 'The Last Ship',
            category : 'Pop'
        },
        {
            image : Carousel2,
            title : 'Solitude',
            category : 'Rock'
        },
        {
            image : Carousel3,
            title : '21',
            category : 'Drama'
        },
        {
            image : Carousel4,
            title : 'Bon to die',
            category : 'Pop'
        },
    ]

    const [swiperCtrl, setSwiperCtrl] = React.useState(null) ;
    const [currentIndex, setCurrentIndex] = React.useState(0) ;

    const goToNextSlide = () => {
        if(swiperCtrl?.isEnd) return ;
        setCurrentIndex(currentIndex + 1) ;
    }

    const goToPrevSlide = () => {
        if(swiperCtrl?.isBeginning) return ;
        setCurrentIndex(currentIndex - 1) ;
    }

    React.useEffect(() => {
        console.log(currentIndex);
        swiperCtrl?.slideTo(currentIndex) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]) ;

    return (
        <MusicForTripDiv>
            <Row>
                <SectionTitle>Great music for trip</SectionTitle>
                <ArrowRow>
                    <ArrowBackOutlinedIcon 
                        onClick={goToPrevSlide}
                    />
                    <ArrowForwardOutlinedIcon 
                        onClick={goToNextSlide}
                    />
                </ArrowRow>
            </Row>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={35}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
                onSwiper={setSwiperCtrl}
            >
                {
                    musicList.map((music, index) => (
                        <SwiperSlide key={index}>
                            <MusicItem src={music.image}>
                                <MusicTitle>{music.title}</MusicTitle>
                            </MusicItem>  
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </MusicForTripDiv>
    )
}

export default MusicForTrip ; 