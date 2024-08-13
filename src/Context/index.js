import React, { useState, createContext, useEffect } from 'react'
export const GlobalContext = createContext()

export const Providers = ({children}) => {

    const [auth, setAuth] = useState()
    const [playlist, setPlaylist] = useState()
    const [currentSong, setCurrentSong] = useState({})
    const values = {
        auth,
        setAuth,
        currentSong,
        setCurrentSong,
        playlist,
        setPlaylist
    }
    useEffect(()=>{
        if(localStorage.getItem('access_token')){
            const userInfo = JSON.parse(atob(localStorage.getItem('access_token').split('.')[1]))
            setAuth(userInfo)
        }
       
    },[])
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}