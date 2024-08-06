import React from 'react'
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileBackgroundImg/ProfileInfo'
import ProfileNavigation from './ProfileNavigation/ProfileNavigation'
import MainContainer from './MainContainer/MainContainer'
import { Outlet } from 'react-router-dom'
const Profile = () => {

  return (
    <div className= {styles.ProfileWrapper}>
        <ProfileInfo />
        <ProfileNavigation />
        <Outlet />
    </div>
  )
}

export default Profile
