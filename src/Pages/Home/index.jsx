
import styles from './Home.module.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MusicController from '../../Components/MusicController';
import { Outlet, useNavigate } from 'react-router-dom';
import { Contexts } from '../../Context';
import { useContext, useEffect, useState } from 'react';

function Home() {
    // let navigate = useNavigate()
    // const getAuthContext = useContext(Contexts.AuthContext)

    // const handleLogout = () =>{
    //     localStorage.removeItem('accessToken')
    //     navigate('/login')
    // }
   
    return (
        <div className= {styles.homePage}>
            <Sidebar />
            <div className={styles.mainContainer}>
                <div className={styles.upperBar}>
                    <div className={styles.authInfomation}>
                        {/* <span>{getAuthContext.auth}</span> */}
                        <img src="https://images.unsplash.com/photo-1721804978753-6533263d89f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <button 
                            // onClick={() => handleLogout()}
                            className = {`${styles.authBtn} btn btn-warning`} >Logout</button>
                    </div>
                </div>
                <Outlet />

            </div>
            <MusicController />
        </div>
    );
}

export default Home;
