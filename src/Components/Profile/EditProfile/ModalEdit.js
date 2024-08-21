import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalEdit.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import EditProfile from './EditProfile';

const cx = classNames.bind(styles);

const ModalEdit = ({ isOpen, onClose }) => {
    // const modalRef = useRef();

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             onClose();
    //         }
    //     };

    //     if (isOpen) {
    //         document.addEventListener('mousedown', handleClickOutside);
    //     }

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // },ref={modalRef} [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={cx('full')}>
            <div className={cx('modal')}>
                <div className={cx('title')}>
                    <h1>Chỉnh sửa thông tin cá nhân</h1>
                    <button onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <EditProfile />
            </div>
        </div>
    );
};

export default ModalEdit;
