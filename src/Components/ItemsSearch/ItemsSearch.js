import React, { useState, useEffect } from 'react';
import MusicControl from '../MusicController';
import styles from './ItemsSearch.module.scss';
import { PlayArrow, Favorite, Comment, MoreHoriz } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import PlayButton from './PlayButton/PlayItem';

const cx = classNames.bind(styles);

const ItemsSearch = () => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('recodename');

    const dataItem = JSON.parse(localStorage.getItem('searchResult'))
        ? JSON.parse(localStorage.getItem('searchResult'))
        : [];
    return (
        <div className={cx('Container')}>
            <h1>Kết quả tìm kiếm "{name}"</h1>
            <div>
                {dataItem.length > 0 ? (
                    dataItem.map((item) => (
                        <div
                            onClick={() => getUrl(item.RecordURL)}
                            style={{ backgroundImage: `url(${item.AlbumThumb})` }}
                            className={cx('RecordItem')}
                            key={item.RecordID}
                            onMouseEnter={() => setHoveredItemId(item.RecordID)} // Đặt id của phần tử đang hover
                            onMouseLeave={() => setHoveredItemId(null)} // Xóa id khi không còn hover
                        >
                            {hoveredItemId === item.RecordID && <PlayButton />}{' '}
                            {/* Chỉ hiển thị PlayButton khi hover */}
                            <div className={cx('RecordDes')}>
                                <div className={cx('RecordInfo')}>
                                    <img src={item.RecordThumb} alt="" />
                                    <div className={cx('RecordDetail')}>
                                        <h3 className={cx('recordName')}>{item.RecordName}</h3>
                                        {/* <p>{user}</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('recordActions')}>
                                <div className={cx('Reaction')}>
                                    <PlayArrow className={styles.icon} />
                                    <span>1283</span>
                                </div>
                                <div className={cx('Reaction')}>
                                    <Favorite className={styles.icon} />
                                    <span>19</span>
                                </div>
                                <div className={cx('Reaction')}>
                                    <Comment className={styles.icon} />
                                    <span>3</span>
                                </div>
                            </div>
                            <MoreHoriz className={cx('More')} />
                        </div>
                    ))
                ) : (
                    <div>Tuan</div>
                )}
            </div>
        </div>
    );
};

export default ItemsSearch;
