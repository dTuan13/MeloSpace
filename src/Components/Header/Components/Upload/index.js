import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Upload() {
    const navigate = useNavigate();
    const handleUpload = () => {
        navigate('/upload');
    };

    return (
        <button onClick={handleUpload} className={cx('upload')}>
            <FontAwesomeIcon className={cx('icon')} icon={faCloudArrowUp} />
            <span>Tải lên</span>
        </button>
    );
}

export default Upload;
