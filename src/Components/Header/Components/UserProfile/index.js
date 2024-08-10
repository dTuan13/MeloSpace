import classNames from 'classnames/bind';
import styles from './UserProfile.module.scss';
import { GlobalContext } from '../../../../Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserProfile() {
    const getAuthContext = useContext(GlobalContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        getAuthContext.setAuth();
        navigate('/');
    };

    return (
        <div>
            {getAuthContext.auth ? (
                <div className={cx('userProfile')}>
                    <img src={getAuthContext.auth.image} alt="User Profile" />

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
