import React, { useEffect, useState } from 'react'
import styles from './MusicController.module.scss'
import { PlayCircleFilled, PauseCircleFilled, SkipNext, SkipPrevious  } from '@mui/icons-material'
const MusicControl = () => {
    const [currentSong, setCurrentSong] = useState('')
    const [isPlaying, togglePlaying] = useState(false)
    const [value, setValue] = useState(0)
    const [onUpdate, setUpdate] = useState(1)
    useEffect(() =>{
        let x = document.getElementById("myAudio");
        let time = '3:10'
        let parts = time.split(':');
        let sec_time = parseInt(parts[0] * 60) + parseInt(parts[1])
        let per = (x.currentTime / sec_time) * 100
        setValue(per)
    }, [onUpdate])

    useEffect(() =>{
        let x = document.getElementById("myAudio");
        if(isPlaying){
            x.play()
        }
        else x.pause()
    },[isPlaying])

    return (
        <div className = {styles.musicControl}>
            <div className={styles.musicControlLeft}>
                <div className= {styles.musicControllThumb}>
                    <img src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <ul className= {styles.musicControllSub}>
                    <li className= {styles.musicControllSongName}>Nhung loi hua bo quen</li>
                    <li className= {styles.musicControllSongArtist}>Vu</li>
                </ul>
            </div>

            <div className= {styles.musicControlCenter}>
                <div className= {styles.musicControllBtn}>
                    <div className= {styles.musicControllBtnItem}>
                        <SkipPrevious />
                    </div>
                    <div 
                        className= {styles.musicControllBtnItem}
                        onClick={() => {togglePlaying(!isPlaying)}}>
                        {isPlaying === true ? <PauseCircleFilled /> : <PlayCircleFilled />}
                    </div>
                    <div 
                        onClick={() => {
                            togglePlaying(!isPlaying)
                            setCurrentSong('')
                        }}
                        className= {styles.musicControllBtnItem}>
                        <SkipNext />
                    </div>
                </div>
                <div className= {styles.musicControllTimeline}>
                    <input 
                        id='inputRange' type="range" step='0.5' min='0' max='100'
                        value={value}
                        />
                    <audio
                        onTimeUpdate={() => {setUpdate(Math.random())}}
                        src= {currentSong.file}
                        id="myAudio" 
                        type="audio/mp3">
                    </audio>
                </div>
            </div>
            <div className= {styles.musicControlRight}></div>

        </div>
    )
}

export default MusicControl
 