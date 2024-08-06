import React from 'react'
import styles from './ProfileNavigation.module.scss'
import {Share, Edit} from '@mui/icons-material'
import { Link } from 'react-router-dom'


const ProfileNavigation = () => {
  return (
    <div className= {styles.ProfileNav}>
        <ul>
            <Link to='/profile/record'>
                <li>Bản ghi</li>
            </Link>
            <Link to='/profile/album'>
                <li>Albums</li>
            </Link>
            <Link to='/profile/playlist'>
                <li>Playlists</li>
            </Link>
            <Link to='/profile/repost'>
                <li>Đăng lại</li>
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
        
    </div>
  )
}

export default ProfileNavigation
