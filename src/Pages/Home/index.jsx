import styles from './Home.module.scss';
// import Slidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header';
import MusicController from '../../Components/MusicController';
import { Outlet, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context';

import { useContext, useEffect, useState } from 'react';
import SlideBar from '../../Components/Sidebar/SlideBar';
import Footer from '../../Components/Footer/Footer';

function Home() {
    let navigate = useNavigate();
    const getAuthContext = useContext(GlobalContext);
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };
    return (
        <div className={styles.homePage}>
            <SlideBar />
            <div className={styles.mainContainer}>
                <Header />
                <Outlet />
            </div>
            <MusicController />
            {/* <Footer></Footer> */}
        </div>
    );
}

{
    /* <button onClick={() => handleLogout()} className={`${styles.authBtn} btn btn-warning`}>
                            Logout
                        </button> */
}

export default Home;
