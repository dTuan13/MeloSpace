import React, { useContext, useEffect, useState } from 'react';
import styles from './MainContainer.module.scss';
import { PlayArrow, Favorite, Comment, MoreHoriz, Preview } from '@mui/icons-material';
import ProfileItem from '../ProfileItem/ProfileItem';
import { GlobalContext } from '../../../Context';
import instance from '../../../api';
import { useFetcher } from 'react-router-dom';

const initRecord = () => {
    const re = localStorage.getItem('user-record');
    return re ? JSON.parse(re) : '';
};
const initAlbum = () => {
    const al = localStorage.getItem('user-album');
    return al ? JSON.parse(al) : '';
};

const initPlaylsit = () => {
    const playlist = localStorage.getItem('playlist');
    return playlist ? JSON.parse(playlist) : '';
};
const MainContainer = ({ url }) => {
    const [record, setRecord] = useState(initRecord);
    const [album, setAlbum] = useState(initAlbum);
    const [playlist, setPlaylist] = useState(initPlaylsit);
    const [data, setData] = useState();
    const [key, setKey] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const userID = localStorage.getItem('userID');
                const { data } = await instance.get(`/record?user=${userID}`);
                localStorage.setItem('user-record', JSON.stringify(data));
                setRecord(data);
                setKey(!key);
            } catch {}
        })();
        (async () => {
            try {
                const userID = localStorage.getItem('userID');
                const { data } = await instance.get(`/album?userid=${userID}`);
                localStorage.setItem('user-album', JSON.stringify(data));
                setAlbum(data);
            } catch {}
        })();
    }, []);
    useEffect(() => {
        if (url === 'apiToRecord') {
            if (record) {
                const new_data = record.map((item) => {
                    return {
                        name: item.RecordName,
                        thumb: item.RecordThumb,
                    };
                });
                setData(new_data);
            } else {
                setData();
            }
        } else if (url === 'apiToAlbum') {
            if (album) {
                const new_data = album.map((item) => {
                    return {
                        name: item.albumname,
                        thumb: item.albumthumb,
                    };
                });
                setData(new_data);
            } else {
                setData();
            }
        } else if (url === 'apiToPlaylist') {
            if (playlist) {
                const new_data = playlist.map((item) => {
                    return {
                        name: item.playlistname,
                        thumb: item.thumb,
                    };
                });
                setData(new_data);
            } else {
                setData();
            }
        } else if (url === 'apiToRePost') {
            setData();
        }
    }, [url, key]);
    return (
        <div className={styles.MainContainer}>
            {data ? (
                <div className={styles.MainContent}>
                    {data.map((item, index) => (
                        <ProfileItem key={index} item={item} />
                    ))}
                </div>
            ) : (
                <div className={styles.noDataFound}>
                    <img src="https://minhtoan.blob.core.windows.net/records/f.jpg" alt="" />
                    <div className={styles.actions}>
                        <h4>Ở đây có vẻ yên tĩnh ...</h4>
                        <button>Tải lên ngay</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainContainer;
