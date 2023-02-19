import tagStyled from 'styled-components';

export const GreatMusicsDiv = tagStyled.div`
    padding-top : 30px;
    padding-left : 1%;
    padding-right : 1%;

    width : 100%;
    box-sizing:  border-box;

    & .swiper {
        width : 100%;
    }

    & .swiper-slide {
        width : 120px;

        position : relative;

        :hover {
            & .image {
                transform: scale(1.2);
            }
        }
    }
`
export const MusicItem = tagStyled.div`
    width : 100%;
    height : 100%;
`

export const MusicImage = tagStyled.img`
    border-radius : 50%;

    width : 100%;
    height: 100px;
`

export const MusicTitle = tagStyled.div`
    font-size : 15px;
    color: black;
    text-align : center;
`

export const MusicCat = tagStyled.div`
    font-size : 13px;
    color: gray;
    text-align : center;
`