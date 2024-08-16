import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './TypeSelect.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TypeSelector = ({ control, name }) => {
    return (
        <div className={cx('type')}>
            <label htmlFor={name}>Thể Loại</label>
            <Controller
                name={name}
                control={control}
                defaultValue="none"
                render={({ field }) => (
                    <div htmlFor={name}>
                        <select {...field} id="dropdown">
                            <option value="">None</option>
                            <option value="option1">Tùy chọn 1</option>
                            <option value="option2">Tùy chọn 2</option>
                            <option value="option3">Tùy chọn 3</option>
                        </select>
                    </div>
                )}
            />
        </div>
    );
};

export default TypeSelector;
