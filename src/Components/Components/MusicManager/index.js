import classNames from 'classnames/bind';
import styles from './MusicManager.module.scss';

const cx = classNames.bind(styles);

function MusicManager() {
    return (
        <div className={cx('music')}>
            <h1>MUSIC RUNNNNNN</h1>
        </div>
    );
}

export default MusicManager;
