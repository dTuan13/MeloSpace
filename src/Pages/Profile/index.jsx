import classNames from 'classnames/bind';
import Header from '~/Components/Header';
import Footer from '~/Components/Footer';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('main')}>
            <Header />
            <div className={cx('container')}>
                <h1 className={cx('title')}>PROFILE PAGE</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
