import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './TypeSelect.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TypeSelector = ({ control, name }) => {
    return (
        <div className={cx('type')}>
            <Controller
                name={name}
                control={control}
                defaultValue="none"
                render={({ field }) => (
                    <div htmlFor={name}>
                        <select {...field} id="dropdown">
                            <option value="">Mới nhất</option>
                            <option value="option1">Hot nhất</option>
                        </select>
                    </div>
                )}
            />
        </div>
    );
};

export default TypeSelector;
