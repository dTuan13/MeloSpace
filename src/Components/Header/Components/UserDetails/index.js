import classNames from 'classnames/bind';
import styles from './UserDetails.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserDetails({ record }) {
    const linkSearch = `/search/id=${record.guid}`;
    return (
        <Link to={linkSearch} className={cx('item')}>
            <img src={record.RecordThumb} />
            <div>
                <h5>{record.RecordName}</h5>
                {/* <span>Tuan</span> */}
            </div>
        </Link>
    );
}

export default UserDetails;
