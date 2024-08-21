import React, { useContext, useEffect } from 'react';
import styles from './Profile.module.scss';
import ProfileInfo from './ProfileBackgroundImg/ProfileInfo';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import { Outlet } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile';
import ModalEdit from './EditProfile/ModalEdit';
const Profile = () => {
    return (
        <div className={styles.ProfileWrapper}>
            <ProfileInfo />
            <ProfileNavigation />
            {/* <EditProfile/> */}
            <ModalEdit />
            <Outlet />
        </div>
    );
};

export default Profile;
