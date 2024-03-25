import React from 'react';
import Appbar from '@mui/material/AppBar'
import  Toolbar  from '@mui/material/Toolbar'
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from "./shared/NavigationLink";
const Header = () => {
    const auth = useAuth();
  return (
    <Appbar sx={{bgcolor:"transparent", position:"static", boxShadow:"none"}}>
        <Toolbar sx={{display: "flex"}}>
            <Logo />
            <div>
                {auth?.isLoggedIn? (
                    <>
                    <NavigationLink
                      bg="#000ffc"
                      to="/chat"
                      text="Go To Chat"
                      textColor="black"
                    />
                    <NavigationLink
                      bg="#5153ff"
                      textColor="white"
                      to="/"
                      text="logout"
                      onClick={auth.logout}
                    />
                  </>
                ) : (
                  <>
                  {/* if the user is not logged in */}
                    <NavigationLink
                      bg="#000ffc"
                      to="/login"
                      text="Login"
                      textColor="black"
                    />
                    <NavigationLink
                      bg="#515fff"
                      textColor="white"
                      to="/signup"
                      text="Signup"
                    />
                  </>
                )}

            </div>
        </Toolbar>
    </Appbar>
  )
}

export default Header