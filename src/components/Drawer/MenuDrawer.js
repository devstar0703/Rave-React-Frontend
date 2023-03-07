import * as React from 'react';

import { Drawer } from '@mui/material';

import {
    CloseDiv
} from './styled/MenuDrawer.styled';

import { useStyles } from './styled/MenuDrawer.styled';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useTheme } from '@mui/styles';

const MenuDrawer = (props) => {
    const {
        open,
        handleDrawer
    } = props ;

    const classes = useStyles() ;
    const theme = useTheme() ;

    return (
        <Drawer
            variant='persistent'
            anchor='left'
            open={open}
            className={classes.drawer}
            classes={{
                paper : classes.drawerPaper
            }}
            onClick={handleDrawer}
        >
            <CloseDiv theme={theme}><CloseOutlinedIcon /></CloseDiv>
        </Drawer> 
    )
}

export default MenuDrawer ;