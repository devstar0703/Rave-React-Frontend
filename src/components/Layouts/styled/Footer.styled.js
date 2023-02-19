import tagStyled from 'styled-components' ;

export const FooterMain = tagStyled.div`
    width : 100%;

    box-sizing : border-box;

    padding-left : 3%;
    padding-right : 3%;

    justify-content : space-between;
    display : flex;
    align-items : center;
`
export const LogoImage = tagStyled.img`

`

export const LogoDiv = tagStyled.div`
    display : flex;
    align-items : center;
    gap : 20px;
    
    svg {
        font-size : 30px;
    }
`