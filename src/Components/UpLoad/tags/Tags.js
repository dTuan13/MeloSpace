import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Tags.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TagsInput = ({ control }) => {
    return (
        <div className={cx('tags')}>
            <label htmlFor="tags">Tags</label>
            <Controller
                name="tags"
                control={control}
                render={({ field }) => <input type="text" id="tags" placeholder="Thêm tags cho bản ghi" {...field} />}
            />
        </div>
    );
};

export default TagsInput;
