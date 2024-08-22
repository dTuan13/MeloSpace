import React from 'react';
import styles from './DisplayName.module.scss';
import classNames from 'classnames/bind';
import { Controller } from 'react-hook-form';
const cx = classNames.bind(styles);

const DisplayName = ({ control, errors }) => {
    return (
        <div className={cx('title')}>
            <label htmlFor="title">
                Tên hiển thị <span className={cx('text-red')}>*</span>
            </label>
            <Controller
                name="title"
                control={control}
                rules={{
                    required: 'Tên hiển thị không ít hơn 4 kí tự.',
                    minLength: {
                        value: 4,
                        message: 'Tên hiển thị không ít hơn 4 kí tự',
                    },
                }}
                render={({ field }) => (
                    <>
                        <input
                            type="text"
                            id="title"
                            placeholder=""
                            {...field}
                            className={cx({ error: errors.title })}
                        />
                        {errors.title && <p className={cx('error-text')}>{errors.title.message}</p>}
                    </>
                )}
            />
        </div>
    );
};

export default DisplayName;
