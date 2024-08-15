import React, { useState, createContext, useEffect } from 'react'
import instance from '../api'
import { json } from 'react-router-dom'
export const GlobalContext = createContext()

export const Providers = ({children}) => {
    const [auth, setAuth] = useState()
    const [playlist, setPlaylist] = useState()
    const [userPlaylist, setUserPlaylist] = useState()
    const [currentSong, setCurrentSong] = useState({})
    const values = {
        auth,
        setAuth,
        currentSong,
        setCurrentSong,
        playlist,
        setPlaylist,
        userPlaylist,
        setUserPlaylist
    }
   
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}