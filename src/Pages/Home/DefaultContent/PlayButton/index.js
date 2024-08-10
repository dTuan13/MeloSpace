import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styles from './PlayButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PlayButton() {
    return (
        <div className={cx('playButton')}>
            <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
        </div>
    );
}

export default PlayButton;
