import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Bio.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Bio = ({ control, name }) => {
    return (
        <div className={cx('bio')}>
            <label htmlFor="bio">Tiểu sử</label>
            <Controller
                name="bio"
                control={control}
                render={({ field }) => <textarea type="text" id="bio" placeholder="Thêm tiểu sử của bạn" {...field} />}
            />
        </div>
    );
};

export default Bio;
