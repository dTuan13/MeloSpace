import classNames from 'classnames/bind';
import styles from './UserProfile.module.scss';
import { GlobalContext } from '../../../../Context';
import { useContext, useEffect, useState } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserProfile() {
    const getAuthContext = useContext(GlobalContext);
    const [avatar, setAvatar] = useState()
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('access_token');
        getAuthContext.setAuth();
        navigate('/login');
    };
    useEffect(()=>{
        try {
            setAvatar(getAuthContext.auth.payload.avatar)
        } catch (error) {
            setAvatar()
        }   
    })
    return (
        <div>
            {avatar ? (
                <div className={cx('userProfile')}>
                    <img src={avatar} alt="User Profile" />

                    <div className={cx('userBlock')}>
                        <ul>
                            <li onClick={() => navigate('/profile')}>Hồ sơ</li>
                            <li onClick={handleLogOut}>Đăng xuất</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className={cx('BtnLine')}>
                    <button className={cx('login')} onClick={() => navigate('/login')}>
                        Đăng nhập{' '}
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
