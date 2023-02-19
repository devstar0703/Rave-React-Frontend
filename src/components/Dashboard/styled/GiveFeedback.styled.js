import tagStyled from 'styled-components' ;

import {
    styled,
    Button
} from '@mui/material';

export const GiveFeedbackMain = tagStyled.div`
    padding-top : 40px;
    padding-bottom : 40px;

    width : 100%;

    box-sizing : border-box;

    display : flex;
    justify-content : center;
    align-items : center;
    gap : 15px;

    svg {
        font-size : 25px;
        color : red;
    }
`
export const CustomButton = styled(Button)`
    background : #fe3301;
    border-radius : 5px;
    padding: 10px 20px;
    color : white;
    text-transform : none ;

    :hover {
        background : #fe3301; 
    }

    &:disabled {
        background : gray;
        cursor : not-allowed !important;
    }
`