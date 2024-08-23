import React, { useEffect, useState, useContext, useRef } from 'react'
import styles from './MusicController.module.scss'
import instance, * as request from '../../api'
import {GlobalContext} from '../../Context';
import { Repeat, Shuffle, PlayArrow, Pause, SkipNext, SkipPrevious, Mic, List,  VolumeUp, VolumeDown, VolumeOff, AddCircle  } from '@mui/icons-material'


const MusicControl = () => {
    const [duration, setDuration] = useState(0)
    const [durationLeft, setDurationLeft] = useState(100)
    const [isRefresh, setFreshed] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [isPlaying, togglePlaying] = useState(false)
    const [value, setValue] = useState(0)
    const [onUpdate, setUpdate] = useState(1)
    const getContext = useContext(GlobalContext)
    const [volumeValue, setVolume] = useState(50)
    const [song, setSong] = useState()
    const [thumb, setThumb] = useState()
    const [name, setName] = useState()
    const [list, setList] = useState()
    const au = useRef()
    const convertToMinutes = (seconds) => {
        if (seconds) {
            let result = '';
            let minutes = Math.floor(seconds / 60);
            let extraSeconds = parseInt(seconds % 60);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            extraSeconds = extraSeconds < 10 ? '0' + extraSeconds : extraSeconds;
            result += minutes + ':' + extraSeconds;
            return result;
        } else return '00:00';
    };
    const handleNextSong = () => {
        try{
            const index = list.findIndex(item => item.RecordURL === song)
            localStorage.removeItem('current-song')
            localStorage.setItem('current-song', JSON.stringify(list[index+1]))
            getContext.setCurrentSong(list[index+1])
            getContext.setChangeSong(!getContext.changeSong)


        }
        catch{
        }
    };
    const handlePrevSong = () => {
        try{
            const index = list.findIndex(item => item.RecordURL === song)
            localStorage.removeItem('current-song')
            localStorage.setItem('current-song', JSON.stringify(list[index+1]))
            getContext.setCurrentSong(list[index-1])
            getContext.setChangeSong(!getContext.changeSong)
        }
        catch {
        }
    };
    useEffect(() => {
        setSong(getContext.currentSong.RecordURL)
        setThumb(getContext.currentSong.RecordThumb)
        setName(getContext.currentSong.RecordName)
        if(isRefresh){
            if(song !== ''){
                au.current.play()
                togglePlaying(true)
            }
        }
        setFreshed(true)
        console.log(isRefresh)
    },[getContext.changeSong])

    useEffect(() => {
        setList(getContext.playlist)
        console.log(list)
    },[getContext.playlist])

    useEffect(() => {
        isPlaying === true ? au.current.play() : au.current.pause()
    }, [isPlaying])


    useEffect(() =>{
        setDuration(au.current.src ? au.current.duration : 0 )
        setCurrentTime(au.current.src ? au.current.currentTime : 0)
        setDurationLeft(duration - currentTime)
        durationLeft < 1 ? handleNextSong() : setValue((currentTime / duration) * 100)
    }, [onUpdate])
    

    return (
        <div className={styles.musicControl}>
            <div className={styles.musicControlLeft}>
                <div className={styles.left}>
                    <div 
                        className= {`${styles.musicControllThumb} ${isPlaying ? styles.rotating : ''}`}
                        >
                        <img src={thumb} alt="" />

                    </div>
                    <ul className= {styles.musicControllSub}>
                        <li className= {styles.musicControllSongName}>{name}</li>
                        <li className= {styles.musicControllSongArtist}></li>
                    </ul>
                </div>
                <AddCircle className={styles.addIcon}/>
            </div>

            <div className={styles.musicControlCenter}>
                <div className={styles.musicControllBtn}>
                    <div>
                        <Shuffle className={`${styles.musicControllBtnItem} ${styles.other}`} />
                    </div>
                    <div
                        onClick={() => {
                            handlePrevSong();
                        }}
                    >
                        <SkipPrevious className={`${styles.musicControllBtnItem} ${styles.prevNext}`} />
                    </div>
                    <div 
                        onClick={() => {togglePlaying(!isPlaying)} }>
                        {isPlaying === true ? 
                        <Pause 
                            className= {`${styles.musicControllBtnItem} ${styles.playPauseIcon}`}
                        /> :
                        <PlayArrow 
                            className= {`${styles.musicControllBtnItem} ${styles.playPauseIcon}`}
                        />}
                    </div>
                    <div
                        onClick={() => {
                            handleNextSong();
                        }}
                    >
                        <SkipNext className={`${styles.musicControllBtnItem} ${styles.prevNext}`} />
                    </div>
                    <div>
                        <Repeat 
                            className= {`${styles.musicControllBtnItem} ${styles.other}`}
                            style={{margin: 0}}
                        />
                    </div>
                </div>
                <div className={styles.musicControllTimeline}>
                    <span>{convertToMinutes(currentTime)}</span>
                    <input 
                        id='inputRange' type="range" step='0.555' min='0' max='100'
                        style={{ background : `linear-gradient(to right, #f50 ${value}%, #ccc ${value}%)` }}
                        onInput = {(e) => {
                            setCurrentTime((e.target.value / 100) * duration)
                            try{
                                au.current.currentTime = parseInt((e.target.value / 100) * duration)
                            }
                            catch{
                                
                            }
                        }}
                        value={value ? value : 0}
                    />
                    <audio
                        ref={au}
                        onTimeUpdate={() => {setUpdate(Math.random())}}
                        autoPlay = 'false'
                        id="myAudio" 
                        src = {song}
                        type="audio/mp3">
                    </audio>
                    <span>{`${convertToMinutes(durationLeft)}`}</span>
                </div>
            </div>
            <div className= {styles.musicControlRight}>
                <Mic 
                    className= {styles.rightIcon}/>
                <List 
                    className= {styles.rightIcon}/>
                {   
            
                    volumeValue < 0.1 ? <VolumeOff className= {styles.rightIcon}/> :
                        <VolumeUp className= {styles.rightIcon}/>
                }
                <input 
                    type="range" step='0.5' min='0' max='100'
                    style={{ background : `linear-gradient(to right, #1e1e1e ${volumeValue}%, #d9d9d9 ${volumeValue}%)` }}
                    onChange={(e) => {
                        setVolume(e.target.value);
                        au.current.volume = e.target.value / 100;
                    }}
                />
            </div>
        </div>
    );
};

export default MusicControl;    