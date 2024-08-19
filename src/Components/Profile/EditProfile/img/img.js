import React from 'react';
import styles from './img.module.scss';
import classNames from 'classnames/bind';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const cx = classNames.bind(styles);

const img = ({ src }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('img')}>
        <img src={src} alt="" />
      </div>
      <button className={cx('btn_icon')}>
        <div className={cx('icon')}>
          <CameraAltIcon />
        </div>
        <span>Tải ảnh lên</span>
      </button>
    </div>
  )
};

export default img;