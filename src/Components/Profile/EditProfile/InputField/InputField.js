import React from 'react'
import { Controller } from 'react-hook-form';
import styles from './InputField.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const InputField = ({ control, name, label, placeholder }) => {
  return (
    <div className={cx('inputField')}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input type="text" id={name} placeholder={placeholder} {...field} />
        )}
      />
    </div>
  );
};

export default InputField;
