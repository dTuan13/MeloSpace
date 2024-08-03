import React, { useState, createContext } from 'react'
export const GlobalContext = createContext()

export const Providers = ({children}) => {
    const [auth, setAuth] = useState('')
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
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}
