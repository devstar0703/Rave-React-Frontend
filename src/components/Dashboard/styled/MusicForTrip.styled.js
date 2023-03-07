import tagStyled from 'styled-components';

export const MusicForTripDiv = tagStyled.div`
    padding-top : 30px;
    padding-left : 1%;
    padding-right : 1%;

    width : 100%;
    box-sizing:  border-box;

    & .swiper {
        width : 100%;
    }

    & .swiper-slide {
        width : 250px;
        height: 150px;

        position : relative;
        border-radius : 5px;
        overflow : hidden;

        :hover {
            & .image {
                transform: scale(1.2);
            }
        }
    }
`
export const MusicItem = tagStyled.div`
    width : 100%;
    height: 150px;

    background-image : url(${props => props.src});
    background-size: cover;
    background-position : center;

`
export const MusicTitle = tagStyled.div`
    font-size : 20px;
    color: white;

    display : flex;
    align-items : center;
    justify-content : center;

    background : #00000059;
    width : 100%;
    height : 100%;
`

export const ArrowRow = tagStyled.div`
    display : flex;
    gap : 10px;

    svg {
        color : black;
        font-size : 25px;
    }
`