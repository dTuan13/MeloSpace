import React, { useEffect, useState, useContext } from 'react'
import styles from './MusicController.module.scss'
import instance from '../../api'
import {Contexts} from '../../Context'
import { PlayCircleFilled, PauseCircleFilled, SkipNext, SkipPrevious, ContentCutSharp  } from '@mui/icons-material'
const MusicControl = () => {
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isPlaying, togglePlaying] = useState(false)
    const [value, setValue] = useState(0)
    const [onUpdate, setUpdate] = useState(1)
    const getPlaylistContext = useContext(Contexts.PlaylistContext)
    const getSongContext = useContext(Contexts.SongContext)

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
        const crs = getSongContext.currentSong
        const index = getPlaylistContext.playlist.findIndex(item => item.RecordURL === crs.RecordURL)
        getSongContext.setCurrentSong(getPlaylistContext.playlist[index+1])
        togglePlaying(true)
    }
    const handlePrevSong = () => {
        const crs = getSongContext.currentSong
        const index = getPlaylistContext.playlist.findIndex(item => item.RecordURL === crs.RecordURL)
        getSongContext.setCurrentSong(getPlaylistContext.playlist[index-1])
        togglePlaying(true)
    }
    useEffect(() =>{
        (async () => {
            try {
                const {data} = await instance.get("/record")
                await getPlaylistContext.setPlaylist(data)
                await getSongContext.setCurrentSong(data[0])
            }
            catch (error){
              console.log(error)
            }
          })()
    
    },[])
    
    useEffect(() =>{
        let x = document.getElementById("myAudio");
        let curTime = x.currentTime
        let time = x.duration
        setCurrentTime(curTime)
        setDuration(time - curTime)
        let per = (curTime / time) * 100
        setValue(per)
    }, [onUpdate])

    useEffect(() =>{
        let x = document.getElementById("myAudio");
        console.log(x.duration)
        if(isPlaying){
            x.play()
        }
        else x.pause()
    },[isPlaying])
    return (
        <div className = {styles.musicControl}>
            <div className={styles.musicControlLeft}>
                <div className= {`${styles.musicControllThumb} ${isPlaying ? `${styles.rotate}`: ''}`}>
                    <img src={getSongContext.currentSong.RecordThumb} alt="" />
                </div>
                <ul className= {styles.musicControllSub}>
                    <li className= {styles.musicControllSongName}>{getSongContext.currentSong.RecordName}</li>
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
                        id='inputRange' type="range" step='0.5' min='0' max='100'
                        value={value}
                        />
                    <audio
                        onTimeUpdate={() => {setUpdate(Math.random())}}
                        src= {getSongContext.currentSong.RecordURL}
                        autoPlay = 'true'
                        id="myAudio" 
                        type="audio/mp3">
                    </audio>
                    <span>{`-${convertToMinutes(duration)}`}</span>
                </div>
            </div>
            <div className= {styles.musicControlRight}></div>
        </div>
    )
}

export default MusicControl