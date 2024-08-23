import { Link } from 'react-router-dom';
import styles from './SectionPlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import PlayButton from '../../PlayButton';
import instance from '../../../api';

const cx = classNames.bind(styles);

function SectionItem(sectionId) {
    const id = sectionId.sectionId;
    const [listData, setListData] = useState([]);
    const [sectionItem, setSectionItem] = useState([]);
    const [isDataFetch, setDataFetch] = useState(false);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const storedSectionItem = localStorage.getItem(`section-Item_${id}`);
                if (storedSectionItem) {
                    sectionItem(JSON.parse(storedSectionItem));
                } else {
                    const { data } = await instance.get(`/section/list?id=${id}`);
                    localStorage.setItem(`section-Item_${id}`, JSON.stringify(data));
                    setSectionItem(data);
                }
                setDataFetch(true);
            } catch {}
        })();
    }, []);

    useEffect(() => {
        (async () => {
            for (const e of sectionItem) {
                try {
                    if (e.playlistid) {
                        const dataPlaylist = await instance.get(`systemPl?id=${e.playlistid}`);
                        const playlistItem = dataPlaylist.data[0];
                        if (!listData.includes(playlistItem)) {
                            setListData((prevData) => [...prevData, dataPlaylist.data[0]]);
                        }
                    } else if (e.albumid) {
                        const dataAlbum = await instance.get(`album?albumid=${e.albumid}`);
                        const albumItem = dataAlbum.data[0];
                        if (!listData.includes(albumItem)) {
                            setListData((prevData) => [...prevData, dataAlbum.data[0]]);
                        }
                    } else if (e.userid) {
                        const dataUser = await instance.get(`user?id=${e.userid}`);
                        const userItem = dataUser.data[0];
                        if (!listData.includes(userItem)) {
                            setListData((prevData) => [...prevData, dataUser.data[0]]);
                        }
                    }
                } catch (error) {}
            }
            setLoaded(true);
        })();
    }, [isDataFetch]);

    const PlayMusic = () => {
        // play music
    };

    return (
        <div className={cx('sectionPlaylistItem')}>
            {isLoaded ? (
                listData.map((item) => (
                    <Link key={item.id} className={cx('sectionPlaylistItem-item')}>
                        <div className={cx('sectionPlaylistItem-item_img', { [styles.borderAvt]: !item.thumb })}>
                            <img src={item.thumb ? item.thumb : item.avatar} />
                        </div>
                        <div className={cx('sectionPlaylistItem-item__info')}>
                            <h3>{item.name ? item.name : item.Fullname}</h3>
                            <h6>{item.description ? item.description : ''}</h6>
                        </div>
                        <div className={cx('playBtn')} onClick={PlayMusic}>
                            <PlayButton />
                        </div>
                    </Link>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default SectionItem;
