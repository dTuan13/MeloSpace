import React, { useState, useEffect } from 'react';
import MusicControl from '../MusicController';
import styles from './ItemOfUser.module.scss';
import { PlayArrow, Favorite, Comment, MoreHoriz } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import PlayButton from './PlayButton/PlayItem';

const cx = classNames.bind(styles);

const initData = (url) => {
    const re = localStorage.getItem(url);
    return re ? JSON.parse(re) : '';
};

const ItemOfUser = (url) => {
    const [data, setData] = useState(initData(url.url));
    const [dataItem, setDataItem] = useState([]);
    const [title, setTitle] = useState('');
    const [hoveredItemId, setHoveredItemId] = useState(null); // State để lưu id của phần tử đang được hover

    const user = localStorage.getItem('fullName') ? localStorage.getItem('fullName') : '';

    useEffect(() => {
        if (url.url === 'user-record') {
            const new_data = data.map((item) => {
                return {
                    name: item.RecordName,
                    thumb: item.RecordThumb,
                    id: item.RecordID,
                };
            });
            setDataItem(new_data);
            setTitle(`Bản ghi của ${user}`);
        } else if (url.url === 'user-album') {
            const new_data = data.map((item) => {
                return {
                    name: item.name,
                    thumb: item.thumb,
                    id: item.guid,
                };
            });
            setDataItem(new_data);
            setTitle(`Album của ${user}`);
        } else if (url.url === 'playlist') {
            const new_data = data.map((item) => {
                return {
                    name: item.playlistname,
                    thumb: item.thumb,
                    id: item.guid,
                };
            });
            setDataItem(new_data);
            setTitle(`Danh sách phát của ${user}`);
        } else if (url === 'apiToRePost') {
            setDataItem();
        }
    }, [url]);

    return (
        <div className={cx('Container')}>
            <h1>{title}</h1>
            <div>
                {dataItem.length > 0 ? (
                    dataItem.map((item) => (
                        <div
                            className={cx('RecordItem')}
                            key={item.id}
                            onMouseEnter={() => setHoveredItemId(item.id)} // Đặt id của phần tử đang hover
                            onMouseLeave={() => setHoveredItemId(null)} // Xóa id khi không còn hover
                        >
                            {hoveredItemId === item.id && <PlayButton />} {/* Chỉ hiển thị PlayButton khi hover */}
                            <div className={cx('RecordDes')}>
                                <div className={cx('RecordInfo')}>
                                    <img src={item.thumb} alt="" />
                                    <div className={cx('RecordDetail')}>
                                        <h3 className={cx('recordName')}>{item.name}</h3>
                                        <p>{user}</p>
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
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default ItemOfUser;
