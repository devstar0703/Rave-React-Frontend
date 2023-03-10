import * as React from 'react';

import { SwiperSlide, Swiper } from 'swiper/react';

import {
    MusicItem, MusicCat, MusicImage, MusicTitle,
    GreatMusicsDiv,
} from './styled/GreatMusics.styled';


import {
    Row,
    SectionTitle,
    ViewMore
} from './styled/Common.styled' ;

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import Carousel1 from 'src/assets/dashboard/carousel_1.jpeg';
import Carousel2 from 'src/assets/dashboard/carousel_2.jpeg';
import Carousel3 from 'src/assets/dashboard/carousel_3.jpeg';
import Carousel4 from 'src/assets/dashboard/carousel_4.jpeg';

const GreatMusics = () => {
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

    React.useEffect(() => {
        console.log(currentIndex);
        swiperCtrl?.slideTo(currentIndex) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]) ;

    return (
        <GreatMusicsDiv>
            <Row>
                <SectionTitle>Great music for trip</SectionTitle>
                <ViewMore>View More <ArrowForwardIosOutlinedIcon/></ViewMore>
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
                    musicList.map((Music, index) => (
                        <SwiperSlide key={index}>
                            <MusicItem>
                                <MusicImage src={Music.image}></MusicImage>
                                <MusicTitle>{Music.title}</MusicTitle>
                                <MusicCat>{Music.category}</MusicCat>
                            </MusicItem>  
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </GreatMusicsDiv>
    )
}

export default GreatMusics ; 