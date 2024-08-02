import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import UserDetails from '../UserDetails';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [dataUsers, setDataUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setDataUsers([
            {
                id: 1,
                name: 'Trần Văn Toản',
                image: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
                des: 'Sky',
            },
            {
                id: 2,
                name: 'Hoàng Thị Ngọc Ánh',
                image: 'https://i.scdn.co/image/ab676161000051742bcb72091c46d935e195aa87',
                des: 'Đom Đóm',
            },
            {
                id: 3,
                name: 'Trần Linh Đan',
                image: 'https://i.scdn.co/image/ab67616100005174e1cbc9e7ba8fbc5d7738ea51',
                des: 'Bầu Trời',
            },
            {
                id: 4,
                name: 'Nguyễn Anh Linh',
                image: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
                des: 'Yêu màu hồng',
            },
            {
                id: 5,
                name: 'Trần Ngọc Châu',
                image: 'https://i.scdn.co/image/ab676161000051742bcb72091c46d935e195aa87',
                des: 'Chú mèo nhỏ',
            },
            {
                id: 6,
                name: 'Trần Cao Trung',
                image: 'https://i.scdn.co/image/ab67616100005174e1cbc9e7ba8fbc5d7738ea51',
                des: 'Bạch Dương',
            },
        ]);
    }, []);

    const removeDiacritics = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const handleInput = (value) => {
        setSearchValue(value);
        setShowResult(value);

        const normalizedSearchValue = removeDiacritics(value.trim().toLowerCase());

        const filteredUsers = dataUsers.filter((user) => {
            const normalizedUserName = removeDiacritics(user.name.toLowerCase());
            return normalizedUserName.includes(normalizedSearchValue);
        });

        setSearchResult(filteredUsers);
    };

    const handleRemove = () => {
        setSearchValue('');
        setShowResult(false);
    };

    const handleSearch = () => {
        navigate(`/search/name=${searchValue}`);
    };

    return (
        <div className={cx('search')}>
            <button type="submit" className={cx('searchBtn')}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
            </button>

            <input
                value={searchValue}
                onChange={(e) => handleInput(e.target.value)}
                placeholder="Bạn muốn tìm kiếm gì?"
                spellCheck={false}
            />

            {showResult && (
                <div className={cx('searchResult')}>
                    <div className={cx('userResult')}>
                        {searchResult.map((item) => (
                            <UserDetails key={item.id} user={item} />
                        ))}
                    </div>
                    <div className={cx('inputBg')}></div>
                    <button onClick={handleSearch} className={cx('searchButton')}>
                        <FontAwesomeIcon className={cx('btn-icon')} icon={faMagnifyingGlass} />
                        <span>Tìm kiếm "{searchValue}"</span>
                    </button>
                </div>
            )}

            {searchValue && (
                <button onClick={handleRemove} className={cx('closeBtn')}>
                    <FontAwesomeIcon icon={faX} className={cx('close-icon')} />
                </button>
            )}
        </div>
    );
}

export default Search;
