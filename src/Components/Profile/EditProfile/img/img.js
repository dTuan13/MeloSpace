import React, { useRef, useState } from 'react';
import styles from './img.module.scss';
import classNames from 'classnames/bind';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const cx = classNames.bind(styles);

const DescriptionInput = ({ imageSrc, setImageSrc }) => {
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                setError('Chỉ chấp nhận định dạng file .jpg');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc({ file, src: reader.result });
                setError('');
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('img')}>
                <img src={imageSrc.src} alt="Uploaded" />
            </div>
            <button className={cx('btn_icon')} onClick={handleButtonClick}>
                <div className={cx('icon')}>
                    <CameraAltIcon />
                </div>
                <span>Tải ảnh lên</span>
            </button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/jpeg,image/png"
            />
            {/* {error && <p className={cx('error')}>{error}</p>} */}
        </div>
    );
};

export default DescriptionInput;
