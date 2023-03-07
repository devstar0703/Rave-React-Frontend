import tagStyled from 'styled-components';

import {  
    makeStyles
} from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    drawer: {
    },
    drawerPaper: {
        position : 'relative',
        width : "300px",
        boxSizing : 'border-box !important',
        padding : '10px !important',
        backgroundColor : "black !important",
        color : "white !important",
    },
}))

export const CloseDiv = tagStyled.div`
    position : absolute;
    right : -100px;
    top : 0px;

    width : ${props => props.theme.layout.header}px;
    height : ${props => props.theme.layout.header}px;

    display : flex;
    align-items : center;
    justify-content : center;

    border : 1px solid red;

    svg {
        color : white;
    }
`