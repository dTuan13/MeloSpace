import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../../UpLoad/Modal';

const cx = classNames.bind(styles);

function Upload() {
    // const navigate = useNavigate();
    const handleUpload = () => {
        setIsModalOpen(true);
        // navigate('/upload');
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <button onClick={handleUpload} className={cx('upload')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCloudArrowUp} />
                <span>Tải lên</span>
            </button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default Upload;
