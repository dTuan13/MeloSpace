import styles from './Home.module.scss';
import Header from '../../Components/Header';
import MusicController from '../../Components/MusicController';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/Sidebar/SideBar';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';

function Home() {
    const [upLoad, setUpLoad] = useState('fales');
    return (
        <div className={styles.homePage}>
            <SideBar />
            <div className={styles.mainContainer}>
                <Header />

                <div className={styles.Container}>
                    <Outlet />
                    <Footer></Footer>
                </div>
            </div>
            <MusicController />
        </div>
    );
}

export default Home;
