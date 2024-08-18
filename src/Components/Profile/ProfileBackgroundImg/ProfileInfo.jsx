import React from 'react';
import styles from './ProfileInfo.module.scss';
import bg from './Image/bg.jpg';
const ProfileInfo = () => {
    return (
        <div className={styles.ImgBackground}>
            <img src={bg} alt="" />
        </div>
    );
};

export default ProfileInfo;
