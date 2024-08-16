import React, { useRef } from 'react';
import { useController } from 'react-hook-form';
import styles from './FileInput.module.scss';
import classNames from 'classnames/bind';
import CreateIcon from '@mui/icons-material/Create';

const cx = classNames.bind(styles);

const FileInput = ({ control, name, label, rules }) => {
    const fileInputRef = useRef(null);

    const {
        field,
        fieldState: { error },
    } = useController({
        control,
        name,
        rules,
        defaultValue: null,
    });

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={cx('upLoadContain')}>
            <label htmlFor={name}>{label}</label>
            <input
                type="file"
                id={name}
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(e) => field.onChange(e.target.files)}
            />

            <button type="button" className={cx('customFileButton', { error: error })} onClick={handleClick}>
                <CreateIcon />
                Chọn File<span className={cx('text-red')}>*</span>
            </button>
            {field.value && <p>{field.value[0]?.name}</p>}
            {error && <p className={cx('error')}>{error.message}</p>}
        </div>
    );
};

export default FileInput;
