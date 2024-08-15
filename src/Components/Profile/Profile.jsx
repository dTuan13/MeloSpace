import React, { useContext, useEffect } from 'react'
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileBackgroundImg/ProfileInfo'
import ProfileNavigation from './ProfileNavigation/ProfileNavigation'
import MainContainer from './MainContainer/MainContainer'
import { GlobalContext } from '../../Context'
import instance from '../../api'
import { Outlet } from 'react-router-dom'
  const Profile = () => {
  const getContext = useContext(GlobalContext)
  useEffect(() => {
      (async () => {
          try {
              const userID = getContext.auth.payload.guid
              const {data} = await instance.get(`/record?user=${userID}`);
              localStorage.setItem('user-record', JSON.stringify(data))
          } 
          catch{
          }
      })(); 
      (async () => {
        try {
            const userID = getContext.auth.payload.guid
            const {data} = await instance.get(`/album?userid=${userID}`);
            localStorage.setItem('user-album', JSON.stringify(data))
        } 
        catch{
        }
    })(); 
  },[])


  return (
    <div className= {styles.ProfileWrapper}>
        <ProfileInfo />
        <ProfileNavigation />
        <Outlet />
    </div>
  )
}

export default Profile
