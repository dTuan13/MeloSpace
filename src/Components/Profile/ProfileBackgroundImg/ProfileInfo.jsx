import React, { useState } from 'react';
import styles from './ProfileInfo.module.scss';
import bg from './Image/bg.jpg';
import img from './Image/ns3.jpg';

const ProfileInfo = () => {
    const name = localStorage.getItem('fullName') ? localStorage.getItem('fullName') : '';
    const userName = localStorage.getItem('userName') ? localStorage.getItem('userName') : '';
    const avt = localStorage.getItem('avatar') ? localStorage.getItem('avatar') : '';

    return (
        <div className={styles.ImgBackground}>
            <img src={bg} alt="" />
            <div className={styles.container}>
                <div className={styles['container-left']}>
                    <div className={styles.img}>
                        <img src={avt} alt="" />
                    </div>

                    <div className={styles.usernamecontain}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.username}>{userName}</span>
                    </div>
                </div>

                <div className={styles.follow}>
                    <div className={styles.follower}>
                        Follower
                        <span className={styles.quantityfollow}>10.8M</span>
                    </div>

                    <div className={styles.following}>
                        Following
                        <span className={styles.quantityfollowing}>10</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
