import React, { useState, createContext } from 'react'
export const PlaylistContext = createContext()

export const PlaylistProvider = ({children}) => {
    const [playlist, setPlaylist] = useState([])
    const PlaylistValue = {
        playlist,
        setPlaylist
    }
    return (
        <PlaylistContext.Provider value={PlaylistValue}>
            {children}
        </PlaylistContext.Provider>
    )
}