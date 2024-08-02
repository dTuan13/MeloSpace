import styles from './Home.module.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header';
import MusicController from '../../Components/MusicController';
import { Outlet, useNavigate } from 'react-router-dom';
import { Contexts } from '../../Context';
import { useContext } from 'react';

function Home() {
    let navigate = useNavigate();
    const getAuthContext = useContext(Contexts.AuthContext);
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };
    return (
        <div className={styles.homePage}>
            <Sidebar />

            <div className={styles.mainContainer}>
                <Header />
                <Outlet />
            </div>
            <MusicController />
        </div>
    );
}

{
    /* <button onClick={() => handleLogout()} className={`${styles.authBtn} btn btn-warning`}>
                            Logout
                        </button> */
}

export default Home;
