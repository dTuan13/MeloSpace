import classNames from 'classnames/bind';
import styles from './DefaultContent.module.scss';
import Slider from './Slider';
import Category from './Category';

const cx = classNames.bind(styles);

function DefaultContent() {
    return (
        <div className={cx('main')}>
            <Slider />
            <Category />
        </div>
    );
}

export default DefaultContent;
