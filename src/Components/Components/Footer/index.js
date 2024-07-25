import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('main')}>
            <h1 className={cx('title')}>This is a Footer</h1>
        </div>
    );
}

export default Header;
