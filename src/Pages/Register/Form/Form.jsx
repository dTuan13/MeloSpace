import React from 'react';
import styles from './Form.module.scss';

const Form = ({ label, placeholder, required, isPassword, handelChange, error, name }) => {
    return (
        <div className={styles['form-group']}>
            <label className={styles.formLabel}>{label}</label>
            <span className={styles.requied}>{required ? '*' : ''}</span>
            <input
                type={isPassword ? 'password' : 'text'}
                className={styles['form-control']}
                id={label}
                placeholder={placeholder}
                required={required}
                onChange={(e) => handelChange(e)}
            />
            <div className={styles.error}>
                <span>{error[name]}</span>
            </div>
        </div>
    );
};
export default Form;
