import React, { useState, createContext } from 'react'
export const SongContext = createContext()

export const SongProvider = ({children}) => {
    const [currentSong, setCurrentSong] = useState({})
    const SongValue = {
        currentSong,
        setCurrentSong
    }
    return (
        <SongContext.Provider value={SongValue}>
            {children}
        </SongContext.Provider>
    )
}