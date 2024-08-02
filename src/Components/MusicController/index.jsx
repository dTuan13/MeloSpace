import React, { useEffect, useState, useContext, useRef } from 'react'
import styles from './MusicController.module.scss'
import * as request from '../../api'
import {Contexts} from '../../Context'
import { PlayCircleFilled, PauseCircleFilled, SkipNext, SkipPrevious  } from '@mui/icons-material'
const MusicControl = () => {
    const [duration, setDuration] = useState(0)
    const [durationLeft, setDurationLeft] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isPlaying, togglePlaying] = useState(false)
    const [value, setValue] = useState(0)
    const [onUpdate, setUpdate] = useState(1)
    const [onhover, setOnHover] = useState(false)
    const getPlaylistContext = useContext(Contexts.PlaylistContext)
    // const getSongContext = useContext(Contexts.SongContext)
    const au = useRef()
    const convertToMinutes = (seconds) =>{
        if(seconds){
            let result = ''
            let minutes = Math.floor(seconds / 60);
            let extraSeconds = parseInt(seconds % 60);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            extraSeconds = extraSeconds< 10 ? "0" + extraSeconds : extraSeconds;
            result += minutes + ":" + extraSeconds;
            return result
        }
        else return '00:00'
        
    }
    const handleNextSong = () => {
        // const crs = getSongContext.currentSong
        // const index = getPlaylistContext.playlist.findIndex(item => item.RecordURL === crs.RecordURL)
        // getSongContext.setCurrentSong(getPlaylistContext.playlist[index+1])
        // togglePlaying(true)
    }
    const handlePrevSong = () => {
        // const crs = getSongContext.currentSong
        // const index = getPlaylistContext.playlist.findIndex(item => item.RecordURL === crs.RecordURL)
        // getSongContext.setCurrentSong(getPlaylistContext.playlist[index-1])
        // togglePlaying(true)
    }
    useEffect(() =>{

        request.get('/record')
            .then((res) => {
                getPlaylistContext.setPlaylist(res)
                console.log(getPlaylistContext.playlist)
            })

    },[])
    useEffect(() =>{
        setDuration(au.current.src ? au.current.duration : 0 )
        setCurrentTime(au.current.src ? au.current.currentTime : 0)
        setDurationLeft(duration - currentTime)
        durationLeft < 1 ? handleNextSong() : setValue((currentTime / duration) * 100)

    }, [onUpdate])

    useEffect(() =>{
        if(au) isPlaying ? au.current.play() : au.current.pause()
    },[isPlaying])

    return (
        <div className = {styles.musicControl}>
            <div className={styles.musicControlLeft}>
                <div className= {`${styles.musicControllThumb} ${isPlaying ? `${styles.rotate}`: ''}`}>
                    {/* <img src={getSongContext.currentSong.RecordThumb} alt="" /> */}
                </div>
                <ul className= {styles.musicControllSub}>
                    {/* <li className= {styles.musicControllSongName}>{getSongContext.currentSong.RecordName}</li> */}
                    <li className= {styles.musicControllSongArtist}>Toan</li>
                </ul>
            </div>

            <div className= {styles.musicControlCenter}>
                <div className= {styles.musicControllBtn}>
                    <div 
                        onClick={() => {
                            handlePrevSong()}}
                        className= {styles.musicControllBtnItem}>
                        <SkipPrevious />
                    </div>
                    <div 
                        className= {styles.musicControllBtnItem}
                        onClick={() => {togglePlaying(!isPlaying)}}>
                        {isPlaying === true ? <PauseCircleFilled /> : <PlayCircleFilled />}
                    </div>
                    <div 
                        onClick={() => {
                            handleNextSong()
                            }}
                        className= {styles.musicControllBtnItem}>
                        <SkipNext />
                    </div>
                </div>
                <div className= {styles.musicControllTimeline}>
                    <span>{convertToMinutes(currentTime)}</span>
                    <input 
                        id='inputRange' type="range" step='0.55' min='0' max='100'
                        style={{ background :  onhover ?  `linear-gradient(to right, #f50 ${value}%, #ccc ${value}%)` : '' }}
                        onMouseEnter={() => {setOnHover(true)}}
                        onMouseLeave={() => {setOnHover(false)}}
                        onInput = {(e) => {
                            setCurrentTime((e.target.value / 100) * duration)
                            au.current.currentTime = parseInt((e.target.value / 100) * duration)
                        }}
                        value={value}
                        />
                    <audio
                        ref={au}
                        onTimeUpdate={() => {setUpdate(Math.random())}}
                        // src= {getSongContext.currentSong.RecordURL}
                        autoPlay = 'true'
                        id="myAudio" 
                        type="audio/mp3">
                    </audio>
                    <span>{`-${convertToMinutes(durationLeft)}`}</span>
                </div>
            </div>
            <div className= {styles.musicControlRight}></div>
        </div>
    )
}

export default MusicControl