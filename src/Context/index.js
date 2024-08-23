import React, { useState, createContext, useEffect, useContext } from 'react'
import instance from '../api'
import { json } from 'react-router-dom'
export const GlobalContext = createContext()
const initSong = () => {
    const song = localStorage.getItem('current-song')
    return song  ? JSON.parse(song) :''
}

const initList= () => {
    const list = localStorage.getItem('listRecord')
    return list ? JSON.parse(list) : []
}
export const Providers = ({children}) => {
    const [auth, setAuth] = useState()
    const [playlist, setPlaylist] = useState(initList)
    const [userPlaylist, setUserPlaylist] = useState()
    const [currentSong, setCurrentSong] = useState(initSong)
    const [hiddenAddPlaylist, setHidden] = useState(false)
    const [hiddenAddAlbum, setHiddenAlbum] = useState(false)
    const [changeSong, setChangeSong] = useState(false)

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
        setHiddenAlbum,
        changeSong,
        setChangeSong
    }
   
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}