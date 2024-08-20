import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from './Components/Search/Search';
import Email from './Components/Email';
import Notify from './Components/Notify';
import UserProfile from './Components/UserProfile';
import Upload from './Components/Upload';

const cx = classNames.bind(styles);

function Header(upLoad) {
    return (
        <div className={cx('main')}>
            <Search />

            <div className={cx('Information')}>
                <Upload />

                <Email />

                <Notify />

                <UserProfile />
            </div>
        </div>
    );
}

export default Header;
