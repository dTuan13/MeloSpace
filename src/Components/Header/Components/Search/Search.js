import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import UserDetails from '../UserDetails';
import { useNavigate } from 'react-router-dom';
import instance from '../../../../api';

const cx = classNames.bind(styles);

function initRecord() {
    const dataSectionItem = localStorage.getItem('listAllRecord');
    return dataSectionItem ? dataSectionItem : [];
}

function Search() {
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [dataRecord, setDataRecord] = useState(initRecord);
    const [searchValue, setSearchValue] = useState('');
    const [key, setKey] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`record`);
                localStorage.setItem('listAllRecord', JSON.stringify(data));
                setDataRecord(data);
                setKey(true);
            } catch {}
        })();
    }, [key]);

    const removeDiacritics = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const handleInput = (value) => {
        setSearchValue(value);
        setShowResult(value);

        const normalizedSearchValue = removeDiacritics(value.trim().toLowerCase());

        const filteredUsers = dataRecord.filter((item) => {
            const normalizedUserName = removeDiacritics(item.RecordName.toLowerCase());
            return normalizedUserName.includes(normalizedSearchValue);
        });

        setSearchResult(filteredUsers);
        localStorage.setItem('searchResult', JSON.stringify(filteredUsers));
    };

    const handleRemove = () => {
        setSearchValue('');
        setShowResult(false);
    };

    const handleSearch = () => {
        navigate(`/search?recodename=${searchValue}`);
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
                            <UserDetails key={item.id} record={item} />
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
