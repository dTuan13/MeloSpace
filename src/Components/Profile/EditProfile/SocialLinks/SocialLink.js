import React from 'react';
import styles from './SocialLink.module.scss';
import classNames from 'classnames/bind';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { blue, green, red } from '@mui/material/colors';
const cx = classNames.bind(styles);

const SocialLink = () => {
    return (
        <div className={cx('SocialLink')}>
            <p>Liên kết các trang xã hội</p>
            <div>
                <FacebookIcon sx={{ color: blue[700] }} />
                {/* <InstagramIcon sx={{ color: green[500] }} /> */}
                <TwitterIcon sx={{ color: blue[700] }} />
                <YouTubeIcon sx={{ color: red[600] }} />
            </div>
        </div>
    );
};

export default SocialLink;
