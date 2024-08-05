import React, { useEffect, useState, useContext, useRef } from 'react'
import styles from './MusicController.module.scss'
import instance, * as request from '../../api'
import {GlobalContext} from '../../Context';
import { Repeat, Shuffle, PlayArrow, Pause, SkipNext, SkipPrevious, Mic, List,  VolumeUp, VolumeMute, VolumeOff  } from '@mui/icons-material'
const MusicControl = () => {
    const [duration, setDuration] = useState(0)
    const [durationLeft, setDurationLeft] = useState(100)
    const [currentTime, setCurrentTime] = useState(0)
    const [isPlaying, togglePlaying] = useState(true)
    const [value, setValue] = useState(0)
    const [onUpdate, setUpdate] = useState(1)
    const [onhover, setOnHover] = useState(false)
    const [change, setChange] = useState(false)
    const [rotation, setRotation] = useState(0)
    const getContext = useContext(GlobalContext)
    const audioContext = new AudioContext()
    const [volumeValue, setVolume] = useState(50)
    
    const au = useRef()
    const records = [
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 1,
            "RecordName": "Âm thầm bên em",
            "RecordThumb": "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/4/0/40ea78cbbfd42bf99ec1ff3498c26aae_1483418182.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/Âm Thầm Bên Em - OFFICIAL MUSIC VIDEO - Sơn Tùng M-TP.mp3",
            "View": 0,
            "deleted": 0,
            "guid": "1"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 2,
            "RecordName": "Ánh sao và bầu trờ",
            "RecordThumb": "https://avatar-ex-swe.nixcdn.com/mv/2021/09/09/b/8/d/9/1631156018348_268.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/Ánh Sao Và Bầu Trời - T.R.I x Cá - [Official Audio].mp3",
            "View": 0,
            "deleted": 0,
            "guid": "2"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 3,
            "RecordName": "Có hẹn với thanh xuân",
            "RecordThumb": "https://avatar-ex-swe.nixcdn.com/song/share/2021/07/16/f/0/d/f/1626425507332.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/có hẹn với thanh xuân - GREY D, HOÀNG DŨNG, ORANGE, SUNI HẠ LINH & TLINH - Hương Mùa Hè show (tập 3).mp3",
            "View": 0,
            "deleted": 0,
            "guid": "2"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 4,
            "RecordName": "Exit sign",
            "RecordThumb": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/4/a/c/d4acc6335d41bd7164173312c6123706.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/HIEUTHUHAI - Exit Sign (prod. by Kewtiie) ft. marzuz [Official Lyric Video].mp3",
            "View": 0,
            "deleted": 0,
            "guid": "3"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 1,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 5,
            "RecordName": "Không thể say",
            "RecordThumb": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/4/a/c/d4acc6335d41bd7164173312c6123706.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/HIEUTHUHAI - Không Thể Say (prod. by Kewtiie) l Official Video.mp3",
            "View": 0,
            "deleted": 0,
            "guid": "4"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 1,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 6,
            "RecordName": "Lời tạm biệt chưa nói",
            "RecordThumb": "https://i.ytimg.com/vi/B9PDYlaV84w/maxresdefault.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/lời tạm biệt chưa nói - GREY D & ORANGE, Kai Đinh - Hương Mùa Hè show (tập 3).mp3",
            "View": 0,
            "deleted": 0,
            "guid": "5"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 7,
            "RecordName": "Ngày đẹp trời để nói chia tay",
            "RecordThumb": "https://i.ytimg.com/vi/GApctPPK1cI/maxresdefault.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/LOU HOÀNG - NGÀY ĐẸP TRỜI ĐỂ NÓI CHIA TAY (Official Music Video).mp3",
            "View": 0,
            "deleted": 0,
            "guid": "9"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 8,
            "RecordName": "Em là",
            "RecordThumb": "https://i.ytimg.com/vi/bpOwZ68fcQE/maxresdefault.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/MONO - Em Là (Official Music Video).mp3",
            "View": 0,
            "deleted": 0,
            "guid": "6"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 9,
            "RecordName": "Nến và hoa",
            "RecordThumb": "https://i.ytimg.com/vi/D164TFHeOcI/maxresdefault.jpg",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/Rhymastic - Nến Và Hoa (Official Audio).mp3",
            "View": 0,
            "deleted": 0,
            "guid": "7"
        },
        {
            "AlbumID": null,
            "AuthID": 0,
            "CateID": 2,
            "CommentID": null,
            "Duration": null,
            "LikeQuantity": 0,
            "Lyrics": null,
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 10,
            "RecordName": "Đừng làm trái tim anh đau",
            "RecordThumb": "https://i.scdn.co/image/ab67616d0000b273a1bc26cdd8eecd89da3adc39",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/SƠN TÙNG M-TP - ĐỪNG LÀM TRÁI TIM ANH ĐAU - OFFICIAL MUSIC VIDEO.mp3",
            "View": 0,
            "deleted": 0,
            "guid": "8"
        },
        {
            "AlbumID": "91951e958d25b4f3f8754165e680527256da8de9c52f9f1e56fdf415576bf8ba",
            "AuthID": 1,
            "CateID": 1,
            "CommentID": null,
            "Duration": 123,
            "LikeQuantity": 0,
            "Lyrics": "abc",
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 12,
            "RecordName": "Am Tham ben em",
            "RecordThumb": "none",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/Am%20Tham%20ben%20em",
            "View": 0,
            "deleted": 0,
            "guid": "3647d7a35b9bdf0e09c7240913aa29cfdcfe28dc5a0433c178a2decb7c042848"
        },
        {
            "AlbumID": "0",
            "AuthID": 1,
            "CateID": 1,
            "CommentID": null,
            "Duration": 123,
            "LikeQuantity": 0,
            "Lyrics": "abc",
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 13,
            "RecordName": "Am Tham ben em",
            "RecordThumb": "none",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/Am%20Tham%20ben%20em",
            "View": 0,
            "deleted": 0,
            "guid": "ddb32538f4e425099be0bd9bbc09bed7150152f632c3e6cabc038d41d4cfe46d"
        },
        {
            "AlbumID": "0",
            "AuthID": 1,
            "CateID": 1,
            "CommentID": null,
            "Duration": 123,
            "LikeQuantity": 0,
            "Lyrics": "abc",
            "ModeID": 1,
            "Public-Time": null,
            "RecordID": 14,
            "RecordName": "Am Tham ben em",
            "RecordThumb": "none",
            "RecordURL": "https://minhtoan.blob.core.windows.net/records/Am%20Tham%20ben%20em",
            "View": 0,
            "deleted": 0,
            "guid": "d1f90b107266fe20cec98185f9eb6e844be7713fbb8372155e51d1fbcf206f50"
        }
    ]
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
        try{
            const crs = getContext.currentSong
            const index = getContext.playlist.findIndex(item => item.RecordURL === crs.RecordURL)
            getContext.setCurrentSong(getContext.playlist[index+1])
            togglePlaying(true)
        }
        catch{
            setChange(true)
        }
    }
    const handlePrevSong = () => {
        try{
            const crs = getContext.currentSong
            const index = getContext.playlist.findIndex(item => item.RecordURL === crs.RecordURL)
            getContext.setCurrentSong(getContext.playlist[index-1])
            
            togglePlaying(true)
        }
        catch {
            setChange(true)
        }
    }

    const statusSong = () => {
        const thumbnail = document.getElementById('songThumb');
        const computedStyle = window.getComputedStyle(thumbnail);
        const transform = computedStyle.getPropertyValue('transform')
        isPlaying === true ? au.current.pause() : au.current.play()
        isPlaying === true ? thumbnail.style.transform = `rotate(${360}deg)` : 
         thumbnail.style.transform = transform

    }
    useEffect(() =>{
        (async () =>{
            try {
                // const {data} = await instance.get('/record');
                // getContext.setPlaylist(data)
                // getContext.setCurrentSong(data[4])
                getContext.setPlaylist(records)
                getContext.setCurrentSong(records[5])
                setChange(false)
            togglePlaying(true)

                statusSong()
            } catch{
                setChange(true)
            }
        })()
    },[change])

    useEffect(() =>{
        setDuration(au.current.src ? au.current.duration : 0 )
        setCurrentTime(au.current.src ? au.current.currentTime : 0)
        setDurationLeft(duration - currentTime)
        durationLeft < 1 ? handleNextSong() : setValue((currentTime / duration) * 100)
    }, [onUpdate])

    return (
        <div className = {styles.musicControl}>
            <div className={styles.musicControlLeft}>
                <div 
                    id='songThumb'
                    className= {`${styles.musicControllThumb} ${isPlaying ? styles.rotating : ''}`}
                    >
                    <img src={getContext.currentSong.RecordThumb} alt="" />

                </div>
                <ul className= {styles.musicControllSub}>
                    <li className= {styles.musicControllSongName}>{getContext.currentSong.RecordName}</li>
                    <li className= {styles.musicControllSongArtist}>Toan</li>
                </ul>
            </div>

            <div className= {styles.musicControlCenter}>
                <div className= {styles.musicControllBtn}>
                    <div>
                       <Shuffle  
                        className= {`${styles.musicControllBtnItem} ${styles.other}`}
                       />
                    </div>
                    <div 
                        onClick={() => {
                            handlePrevSong()}}>
                        <SkipPrevious 
                        className= {`${styles.musicControllBtnItem} ${styles.prevNext}`}
                        />
                    </div>
                    <div 
                        onClick={() => {statusSong(); togglePlaying(!isPlaying)} }>
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
                            handleNextSong()
                            }}>
                        <SkipNext 
                        className= {`${styles.musicControllBtnItem} ${styles.prevNext}`}
                        />
                    </div>
                    <div>
                        <Repeat 
                        className= {`${styles.musicControllBtnItem} ${styles.other}`}
                        />
                    </div>
                </div>
                <div className= {styles.musicControllTimeline}>
                    <span>{convertToMinutes(currentTime)}</span>
                    <input 
                        id='inputRange' type="range" step='0.55' min='0' max='100'
                        style={{ background : `linear-gradient(to right, #f50 ${value}%, #ccc ${value}%)` }}
                        onMouseEnter={() => {setOnHover(true)}}
                        onMouseLeave={() => {setOnHover(false)}}
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
                        src= {getContext.currentSong.RecordURL ? getContext.currentSong.RecordURL : '' }
                        id="myAudio" 
                        autoPlay = {true}
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
                    volumeValue  > 0.2 ? <VolumeUp className= {styles.rightIcon}/> :
                    <VolumeOff className= {styles.rightIcon}/>
                }
                
                <input 
                    type="range" step='0.5' min='0' max='100'
                    style={{ background : `linear-gradient(to right, #1e1e1e ${volumeValue}%, #d9d9d9 ${volumeValue}%)` }}
                    onChange={(e) => {
                        setVolume(e.target.value); 
                        au.current.volume = e.target.value / 100
                    }}/>
            </div>
        </div>
    )
}

export default MusicControl