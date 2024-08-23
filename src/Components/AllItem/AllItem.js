import React, { useState, useEffect } from 'react';
import MusicControl from '../MusicController';
import styles from './AllItem.module.scss';
import { PlayArrow, Favorite, Comment, MoreHoriz } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import PlayButton from './PlayButton/PlayItem';
import instance from '../../api';

const cx = classNames.bind(styles);

const initListRecord = () => {
    const list = localStorage.getItem('listRecord');
    return list ? JSON.parse(list) : [];
};

const AllItem = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const playlistId = queryParams.get('playlist');
    const albumId = queryParams.get('album');
    const userId = queryParams.get('userid');

    const [dataItem, setDataItem] = useState(initListRecord);
    const title = localStorage.getItem('titleItem');
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const [key, setKey] = useState(false);

    useEffect(() => {
        if (playlistId) {
            (async () => {
                try {
                    const { data } = await instance.get(`record?playlist=${playlistId}`);
                    localStorage.setItem('listRecord', JSON.stringify(data));
                    setDataItem(data);
                    setKey(true);
                } catch {}
            })();
        } else if (albumId) {
            (async () => {
                try {
                    const { data } = await instance.get(`record?album=${albumId}`);
                    localStorage.setItem('listRecord', JSON.stringify(data));
                    setDataItem(data);
                    setKey(true);
                } catch {
                    console.log(`record?album=${albumId}`);
                }
            })();
        } else if (userId) {
            (async () => {
                try {
                    const { data } = await instance.get(`record/userid=${userId}`);
                    localStorage.setItem('listRecord', JSON.stringify(data));
                    setDataItem(data);
                    setKey(true);
                } catch {}
            })();
        }
    }, [key]);

    return (
        <div className={cx('Container')}>
            <h1>{title}</h1>
            <div>
                {dataItem.length > 0 ? (
                    dataItem.map((item) => (
                        <div
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

export default AllItem;
