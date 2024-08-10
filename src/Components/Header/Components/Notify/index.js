import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Quantity from '../Quantity/Quantity';
import classNames from 'classnames/bind';
import styles from './Notify.module.scss';
import { GlobalContext } from '../../../../Context';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Notify() {
    const getAuthContext = useContext(GlobalContext);

    return (
        <button className={cx('notify')}>
            <FontAwesomeIcon className={cx('icon')} icon={faBell} />

            {getAuthContext.auth && getAuthContext.auth.notify > 0 && (
                <Quantity count={getAuthContext.auth.notify} x={13} y={-3} />
            )}
        </button>
    );
}

export default Notify;
