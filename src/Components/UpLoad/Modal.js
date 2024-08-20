import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import UpLoad from './UpLoad';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className={cx('full')}>
            <div className={cx('modal')}>
                <div className={cx('title')}>
                    <h1>Đăng tải bản ghi</h1>
                    <button onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <UpLoad />
            </div>
        </div>
    );
};

export default Modal;
