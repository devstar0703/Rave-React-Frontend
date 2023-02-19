import * as React from 'react' ;

import { useTheme } from '@mui/styles';

import { 
    FooterMain,
    LogoDiv, LogoImage
} from './styled/Footer.styled';

import LogoImg from 'src/assets/footer/logo.png';

const Footer = () => {
    const theme = useTheme() ;

    return (
        <FooterMain theme={theme}>
            <div>Copyright © Company. All Rights Reserved.</div>
            <LogoDiv>
                <div>Powered by</div> <LogoImage src={LogoImg}></LogoImage>
            </LogoDiv>
        </FooterMain>
    )
}

export default Footer;