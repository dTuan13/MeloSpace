import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Quantity from '../Quantity/Quantity';
import classNames from 'classnames/bind';
import styles from './Email.module.scss';
import { GlobalContext } from '../../../../Context';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Email() {
    const getAuthContext = useContext(GlobalContext);

    return (
        <button className={cx('mail')}>
            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />

            {getAuthContext.auth && getAuthContext.auth.mail > 0 && (
                <Quantity count={getAuthContext.auth.mail} x={13} y={-3} />
            )}
        </button>
    );
}

export default Email;
