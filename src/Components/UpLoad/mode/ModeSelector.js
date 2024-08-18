import React from 'react';
import { useController } from 'react-hook-form';
import styles from './ModeSelector.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ModeSelector = ({ control, name }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: 'Cá nhân', // Giá trị mặc định
    });

    return (
        <div className={cx('mode')}>
            <label htmlFor={name}>Chế độ đăng</label>
            <div className={cx('radio-group')}>
                <label className={cx('radio-label')}>
                    <input
                        type="radio"
                        name={name}
                        value="Cá nhân"
                        checked={field.value === 'Cá nhân'}
                        onChange={field.onChange}
                    />
                    Cá nhân
                </label>
                <label className={cx('radio-label')}>
                    <input
                        type="radio"
                        name={name}
                        value="Cộng đồng"
                        checked={field.value === 'Cộng đồng'}
                        onChange={field.onChange}
                    />
                    Cộng đồng
                </label>
            </div>
        </div>
    );
};

export default ModeSelector;
