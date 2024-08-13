import classNames from 'classnames/bind';
import styles from './DefaultContent.module.scss';
import Slider from './Slider';
import Sections from './Sections';

const cx = classNames.bind(styles);

function DefaultContent() {
    return (
        <div className={cx('main')}>
            <Slider />
            <Sections />
        </div>
    );
}

export default DefaultContent;
