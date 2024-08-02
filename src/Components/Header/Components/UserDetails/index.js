import classNames from 'classnames/bind';
import styles from './UserDetails.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserDetails({ user }) {
    const linkSearch = `/search/id=${user.id}`;
    return (
        <Link to={linkSearch} className={cx('item')}>
            <img src={user.image} />
            <div>
                <h5>{user.name}</h5>
                <span>{user.des}</span>
            </div>
        </Link>
    );
}

export default UserDetails;
