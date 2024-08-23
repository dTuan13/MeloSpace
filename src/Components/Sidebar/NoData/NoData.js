import React from 'react';
import styles from './NoData.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const NoData = () => {
    return (
        <div className={cx('contain')}>
            <h4>Tạo danh sách phát đầu tiên của bạn</h4>
            <p>Rất dễ dàng! Chúng tôi sẽ giúp bạn</p>
            <button>Tạo danh sách phát</button>
        </div>
    );
};

export default NoData;
