import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Title.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = ({ control, errors }) => {
    return (
        <div className={cx('title')}>
            <label htmlFor="title">
                Tiêu Đề <span className={cx('text-red')}>*</span>
            </label>
            <Controller
                name="title"
                control={control}
                rules={{
                    required: 'Tiêu đề phải chứa ít nhất 4 ký tự.',
                    minLength: {
                        value: 4,
                        message: 'Tiêu đề phải chứa ít nhất 4 ký tự.',
                    },
                }}
                render={({ field }) => (
                    <>
                        <input
                            type="text"
                            id="title"
                            placeholder="Nhập tiêu đề bản ghi"
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

export default Title;
