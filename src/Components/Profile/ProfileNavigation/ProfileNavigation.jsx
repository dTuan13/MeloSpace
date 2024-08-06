import React, { useRef, useState } from 'react'
import styles from './ProfileNavigation.module.scss'
import {Share, Edit} from '@mui/icons-material'
import { Link } from 'react-router-dom'


const ProfileNavigation = () => {
    const [active, setActive] = useState(0)
    return (
        <div className= {styles.ProfileNav}>
            <ul>
                <Link to='/profile/record'
                    onClick={() => {setActive(0)}}>
                    <li 
                        style={{color: active === 0 ? '#E94040' : '#6E6C6C'}}
                        >Bản ghi</li>
                </Link>
                <Link to='/profile/album'
                onClick={() => {setActive(1)}}>
                    <li
                        style={{color: active === 1 ? '#E94040' : '#6E6C6C'}}
                        >Albums</li>
                </Link>
                <Link to='/profile/playlist'
                onClick={() => {setActive(2)}}>
                    <li
                        style={{color: active === 2 ? '#E94040' : '#6E6C6C'}}
                        >Playlists</li>
                </Link>
                <Link to='/profile/repost'
                onClick={() => {setActive(3.15)}}>
                    <li
                        style={{color: active === 3.15 ? '#E94040' : '#6E6C6C'}}
                        >Đăng lại</li>
                </Link>

            </ul>
            <div>
                <button className = {styles.NavButton}>
                    <Share />
                    Chia sẻ
                </button>
                <button className = {styles.NavButton}>
                    <Edit />
                    Sửa
                </button>
            </div>
            <span 
                id = {styles.slider} 
                style={{left: `calc(111px * ${active})`}} 
            >
            </span>
        </div>
    )
}

export default ProfileNavigation
