import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './DescriptionInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DescriptionInput = ({ control, name }) => {
    return (
        <div className={cx('description')}>
            <label htmlFor={name}>Mô tả chi tiết</label>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <textarea {...field} placeholder="Nhập mô tả chi tiết" />}
            />
        </div>
    );
};

export default DescriptionInput;
