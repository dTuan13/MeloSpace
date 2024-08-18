import React from 'react';
import styles from './FormButton.module.scss';

const FormButton = ({ type, name, icon, other, handleClick }) => {
    return (
        <button onClick={(e) => handleClick(e)} type={type} className={other === false ? styles.btn : styles.otherBtn}>
            <img src={icon}></img>
            <span>{name}</span>
        </button>
    );
};

export default FormButton;
