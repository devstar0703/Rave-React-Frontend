import * as React from 'react' ;

import { useTheme } from '@mui/styles';

import { 
    HeaderBody, HeaderTop, HeaderCarousel,
    Title,
    CarouselItem, 
    BackOverlay,
    Prefix, Train, Location,Route,
    InfoRow, InfoItem, InfoDetail,
    IconDiv, Status, Desc
} from './styled/Header.styled';

import MenuIcon from '@mui/icons-material/Menu';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';

import Carousel1 from 'src/assets/header/carousel_1.png';
import Carousel2 from 'src/assets/header/carousel_2.jpeg';
import Carousel3 from 'src/assets/header/carousel_3.jpeg';
import Carousel4 from 'src/assets/header/carousel_4.jpeg';
import Carousel5 from 'src/assets/header/carousel_5.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';

const Header = () => {
    const theme = useTheme() ;

    const carousel_list = [
        {
            prefix : 'welcome to the',
            location : 'Bernina Express',
            train : 'BEX 951 Chur - Tirano',
            route : 'Chur – Tirano',
            speed : '70km/h',
            altitude : '608 m',
            usage_of_data : '242 of 286 MB',
            img : Carousel1
        },
        {
            prefix : 'welcome to the',
            location : 'Bernina Express',
            train : 'BEX 951 Chur - Tirano',
            route : 'Chur – Tirano',
            speed : '70km/h',
            altitude : '608 m',
            usage_of_data : '242 of 286 MB',
            img : Carousel2
        },
        {
            prefix : 'welcome to the',
            location : 'Bernina Express',
            train : 'BEX 951 Chur - Tirano',
            route : 'Chur – Tirano',
            speed : '70km/h',
            altitude : '608 m',
            usage_of_data : '242 of 286 MB',
            img : Carousel3
        },
        {
            prefix : 'welcome to the',
            location : 'Bernina Express',
            train : 'BEX 951 Chur - Tirano',
            route : 'Chur – Tirano',
            speed : '70km/h',
            altitude : '608 m',
            usage_of_data : '242 of 286 MB',
            img : Carousel4
        },
        {
            prefix : 'welcome to the',
            location : 'Bernina Express',
            train : 'BEX 951 Chur - Tirano',
            route : 'Chur – Tirano',
            speed : '70km/h',
            altitude : '608 m',
            usage_of_data : '242 of 286 MB',
            img : Carousel5
        }
    ]
    return (
        <>
            <HeaderBody>
                <HeaderTop  theme={theme}> 
                    <MenuIcon />
                    <Title><RssFeedIcon/>Rave</Title>
                    <MenuIcon />
                </HeaderTop>
                
                <HeaderCarousel>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        pagination={{
                            type: "progressbar",
                          }}
                        navigation={false}
                    >
                        {
                            carousel_list.map((carousel, index) => (
                                <SwiperSlide key={index}
                                >
                                    <CarouselItem
                                        image={carousel.img}
                                    >
                                        <BackOverlay>
                                        <Prefix>{carousel.prefix}</Prefix>
                                        <Location>{carousel.location}</Location>
                                        <Train>{carousel.train}</Train>
                                        <Route><LocationOnIcon/>{carousel.route}</Route>
                                        <InfoRow>
                                            <InfoItem>
                                                <IconDiv><SpeedOutlinedIcon /></IconDiv>
                                                <InfoDetail>
                                                    <Status>{carousel.speed}</Status>
                                                    <Desc>Speed</Desc>
                                                </InfoDetail>
                                            </InfoItem>
                                            <InfoItem>
                                                <IconDiv><LandscapeOutlinedIcon /></IconDiv>
                                                <InfoDetail>
                                                    <Status>{carousel.altitude}</Status>
                                                    <Desc>Altitude</Desc>
                                                </InfoDetail>
                                            </InfoItem>
                                            <InfoItem>
                                                <IconDiv><AvTimerIcon /></IconDiv>
                                                <InfoDetail>
                                                    <Status>{carousel.usage_of_data}</Status>
                                                    <Desc>Data of Usage</Desc>
                                                </InfoDetail>
                                            </InfoItem>
                                        </InfoRow>
                                        </BackOverlay>
                                    </CarouselItem>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </HeaderCarousel>
                
            </HeaderBody>
        </>
    )
}

export default Header;