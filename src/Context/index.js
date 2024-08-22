import React, { useState, createContext, useEffect, useContext } from 'react'
import instance from '../api'
import { json } from 'react-router-dom'
export const GlobalContext = createContext()

export const Providers = ({children}) => {
    const [auth, setAuth] = useState()
    const [playlist, setPlaylist] = useState()
    const [userPlaylist, setUserPlaylist] = useState()
    const [currentSong, setCurrentSong] = useState({})
    const getContext = useContext(GlobalContext)
    const [hiddenAddPlaylist, setHidden] = useState(false)
    const [hiddenAddAlbum, setHiddenAlbum] = useState(false)


    const set  = (value) => {
        setHidden(set)
    }
    const values = {
        auth,
        setAuth,
        currentSong,
        setCurrentSong,
        playlist,
        setPlaylist,
        userPlaylist,
        setUserPlaylist,
        hiddenAddPlaylist,
        setHidden,
        hiddenAddAlbum,
        setHiddenAlbum
    }
   
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}