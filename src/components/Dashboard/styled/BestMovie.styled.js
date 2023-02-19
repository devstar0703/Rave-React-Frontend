import tagStyled from 'styled-components';

export const BestMoviesDiv = tagStyled.div`
    padding-left : 1%;
    padding-right : 1%;

    width : 100%;
    box-sizing:  border-box;

    & .swiper {
        width : 100%;
    }

    & .swiper-slide {
        width : 200px;

        position : relative;

        :hover {
            & .image {
                transform: scale(1.2);
            }
        }
    }
`
export const MovieItem = tagStyled.div`
    width : 100%;
    height : 100%;
`

export const MovieImage = tagStyled.img`
    border-radius : 10px;

    width : 100%;
    height: 300px;
`

export const MovieTitle = tagStyled.div`
    font-size : 18px;
    color: black;
`

export const MovieCat = tagStyled.div`
    font-size : 15px;
    color: gray;
`