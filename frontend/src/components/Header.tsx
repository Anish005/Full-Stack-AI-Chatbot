import React from 'react';
import Appbar from '@mui/material/AppBar'
import  Toolbar  from '@mui/material/Toolbar'
import Logo from './shared/Logo';
const Header = () => {
  return (
    <Appbar sx={{bgcolor:"transparent", position:"static", boxShadow:"none"}}>
        <Toolbar sx={{display: "flex"}}>
            <Logo />
        </Toolbar>
    </Appbar>
  )
}

export default Header