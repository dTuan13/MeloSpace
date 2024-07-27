import React, { useContext } from 'react';
import { UserContext } from '~/Components/UserManager';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const user = useContext(UserContext);

    return (
        <div className={cx('main')}>
            <h1 className={cx('title')}>
                This is a Header
                <div>{user ? <span>Xin chào {user.name} </span> : <span>Bạn cần đăng nhập</span>}</div>
            </h1>
        </div>
    );
}

export default Header;
