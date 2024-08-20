import React, { useRef, useState } from 'react';
import styles from './ProfileNavigation.module.scss';
import { Share, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProfileNavigation = () => {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.ProfileNav}>
            <ul>
                <Link
                    to="/profile/record"
                    onClick={() => {
                        setActive(0);
                    }}
                >
                    <li style={{ color: active === 0 ? '#E94040' : '#202020' }}>Bản ghi</li>
                </Link>
                <Link
                    to="/profile/album"
                    onClick={() => {
                        setActive(1.05);
                    }}
                >
                    <li style={{ color: active === 1.05 ? '#E94040' : '#202020' }}>Albums</li>
                </Link>
                <Link
                    to="/profile/playlist"
                    onClick={() => {
                        setActive(2.13);
                    }}
                >
                    <li style={{ color: active === 2.13 ? '#E94040' : '#202020' }}>Playlists</li>
                </Link>
                <Link
                    to="/profile/repost"
                    onClick={() => {
                        setActive(3.28);
                    }}
                >
                    <li style={{ color: active === 3.28 ? '#E94040' : '#202020' }}>Đăng lại</li>
                </Link>
            </ul>
            <div>
                <button className={styles.NavButton}>
                    <Share />
                    Chia sẻ
                </button>
                <button className={styles.NavButton}>
                    <Edit />
                    Sửa
                </button>
            </div>
            <span id={styles.slider} style={{ left: `calc(99px * ${active})` }}></span>

        </div>
    );
};

export default ProfileNavigation;
