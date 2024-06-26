import {ReactNode, createContext, useState, useEffect, useContext} from 'react'
import { loginUser } from '../helpers/api-communicator';

type User  = {
    name: string;
    email: string;
}

type UserAuth  = {
    isLoggedIn: boolean;
    user : User | null;
    login: (email:string, password:string) => Promise<void>;
    signup: (name:string,email:string, password:string) => Promise<void>;
    logout:() => Promise<void>

}

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ( {children} : { children: ReactNode}) => {
    const [user, setuser] = useState<User | null>(null)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    //using useEffect to ensure that if the user cookies are already there he/she neednot login again
    useEffect(()=>{
        //fetch if the user cookies are valid then skip login
    },[])
    const login = async (email:string, password:string) => {
        const data = await loginUser(email,password)
        if(data){
            setuser({email:data.email, name:data.name})
            setisLoggedIn(true)
            
        }
    }
    const signup = async (name:string,email:string, password:string) => {}
    const logout = async () => {}

    const value  = {
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

//context to be used by the children

export const useAuth = () => useContext(AuthContext)

