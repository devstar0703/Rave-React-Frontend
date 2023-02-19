import * as React from 'react';

import { SwiperSlide, Swiper } from 'swiper/react';

import {
    MusicItem, MusicCat, MusicImage, MusicTitle,
    BestMusicsDiv,
} from './styled/BestMusic.styled';


import {
    Row,
    SectionTitle,
    ViewMore
} from './styled/Common.styled' ;

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import Carousel1 from 'src/assets/header/carousel_1.png';
import Carousel2 from 'src/assets/header/carousel_2.jpeg';
import Carousel3 from 'src/assets/header/carousel_3.jpeg';
import Carousel4 from 'src/assets/header/carousel_4.jpeg';
import Carousel5 from 'src/assets/header/carousel_5.jpeg';

const BestMusics = () => {
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
            title : 'The Most Beautiful',
            category : 'Comedy'
        },
        {
            image:  Carousel5,
            title : 'Love actually',
            category : 'Romantic'
        },
        {
            image : Carousel1,
            title : 'Battle For Sevast',
            category : 'Drama'
        },
        {
            image : Carousel2,
            title : 'About a Boy',
            category : 'Comedy'
        },
        {
            image : Carousel3,
            title : 'Homefront',
            category : 'Drama'
        },
        {
            image : Carousel4,
            title : 'The Most Beautiful',
            category : 'Comedy'
        },
        {
            image:  Carousel5,
            title : 'Love actually',
            category : 'Romantic'
        }
    ]

    const [swiperCtrl, setSwiperCtrl] = React.useState(null) ;
    const [currentIndex, setCurrentIndex] = React.useState(0) ;

    React.useEffect(() => {
        console.log(currentIndex);
        swiperCtrl?.slideTo(currentIndex) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]) ;

    return (
        <BestMusicsDiv>
            <Row>
                <SectionTitle>Best Musics</SectionTitle>
                <ViewMore>View More <ArrowForwardIosOutlinedIcon/></ViewMore>
            </Row>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={25}
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
        </BestMusicsDiv>
    )
}

export default BestMusics ; 