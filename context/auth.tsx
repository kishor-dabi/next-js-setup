import React, { createContext, useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { AppDispatch } from '@/store/store';
import { LOGIN } from '@/store/types';


const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }:any) => {

    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        async function loadUserFromCookies() {
            let userData:any = localStorage.getItem('userData');

            if(userData) userData = JSON.parse(userData)
          
            const token = userData?.accessToken;
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid", userData)
                // api.defaults.headers.Authorization = `Bearer ${token}`
                // const { data: user } = await api.get('users/me')
                setUser(userData);
                dispatch({
                    type: LOGIN,
                    payload: userData,
                })
            }else{
                setLoading(false)
                if (router.asPath !== '/login') {
                    router.push('/login')
                }
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [router])

    
    // const login = async (email: string , password) => {
    //     const { data: token } = await api.post('auth/login', { email, password })
    //     if (token) {
    //         console.log("Got token")
    //         Cookies.set('token', token, { expires: 60 })
    //         api.defaults.headers.Authorization = `Bearer ${token.token}`
    //         const { data: user } = await api.get('users/me')
    //         setUser(user)
    //         console.log("Got user", user)
    //     }
    // }

    const logout = (email:string, password: string) => {
        // Cookies.remove('token')
        localStorage.removeItem('userData')
        setUser(null)
        // delete api.defaults.headers.Authorization
        // Router.push('/login')
        router.push("/login")
        // window.location.pathname = '/login'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, /* login, */ loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const ProtectRoute = ({ children }:any) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter()

    if (isLoading || (!isAuthenticated && router.asPath !== '/login')){
        console.log(isAuthenticated, isLoading)
        //   return <span>Loading....</span>
    }
    return children;
  };

export const useAuth = () => useContext(AuthContext)