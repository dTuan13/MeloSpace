import React, { useContext, useEffect } from 'react';
import styles from './Profile.module.scss';
import ProfileInfo from './ProfileBackgroundImg/ProfileInfo';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import MainContainer from './MainContainer/MainContainer';
import { GlobalContext } from '../../Context';
import instance from '../../api';
import { Outlet } from 'react-router-dom';
const Profile = () => {
    const getContext = useContext(GlobalContext);
    useEffect(() => {
        (async () => {
            try {
                // const userID = getContext.auth.payload.guid;
                // console.log(userID);
                const { data } = await instance.get(`/record`);
                localStorage.setItem('user-record', JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching user record:', error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const userID = getContext.auth.payload.guid;
                const { data } = await instance.get(
                    `/album?userid=dce39d4331de9b3c0c5bc402c1cfc08930fc72dacd25a8db2c5ed9d72a8c22820`,
                );
                localStorage.setItem('user-album', JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching user album:', error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(
                    `/playlist?userid=dce39d4331de9b3c0c5bc402c1cfc08930fc72dacd25a8db2c5ed9d72a8c22820`,
                );
                localStorage.setItem('playlist', JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching user playlist:', error);
            }
        })();
    }, []);

    return (
        <div className={styles.ProfileWrapper}>
            <ProfileInfo />
            <ProfileNavigation />
            <Outlet />
        </div>
    );
};

export default Profile;
