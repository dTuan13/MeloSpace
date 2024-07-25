import classNames from 'classnames/bind';
import Header from '~/Components/Components/Header';
import Footer from '~/Components/Components/Footer';
import MusicManager from '~/Components/Components/MusicManager';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main')}>
            <Header />
            <div className={cx('container')}>
                <h1 className={cx('title')}>HOME PAGE</h1>
            </div>
            <Footer />
            <MusicManager />
        </div>
    );
}

export default Home;
