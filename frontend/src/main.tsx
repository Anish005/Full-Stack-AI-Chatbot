import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import {Toaster} from "react-hot-toast"
//setting up the base url for the axios
import axios from "axios"
axios.defaults.baseURL = "http://localhost:5000/api/v1"
axios.defaults.withCredentials = true //it would help setting and exhanging the cookies in the backend
//new theme for the material UI
const theme  =  createTheme({
  typography:{
    fontFamily:"Roboto,serif",
    allVariants:{color:"white"}
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Toaster  position='top-right'/>
      <App />
    </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
