import { Link } from 'react-router-dom';
import styles from './SectionPlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import PlayButton from '../../PlayButton';
import instance from '../../../api';

const cx = classNames.bind(styles);

function initItem(id) {
    const dataSectionItem = localStorage.getItem(`section-Item_${id}`);
    return dataSectionItem ? dataSectionItem : [];
}

function SectionItem(sectionId) {
    const id = sectionId.sectionId;
    const [listData, setListData] = useState([]);
    const [sectionItem, setSectionItem] = useState(initItem(id));
    const [isDataFetch, setDataFetch] = useState(false);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const storedSectionItem = localStorage.getItem(`section-Item_${id}`);
                if (storedSectionItem) {
                    setSectionItem(JSON.parse(storedSectionItem));
                } else {
                    const { data } = await instance.get(`/section/list?id=${id}`);
                    localStorage.setItem(`section-Item_${id}`, JSON.stringify(data));
                    setSectionItem(data);
                }
                setDataFetch(true);
            } catch {}
        })();
    }, [sectionId]);

    useEffect(() => {
        (async () => {
            for (const e of sectionItem) {
                try {
                    if (e.playlistid) {
                        const dataPlaylist = await instance.get(`systemPl?id=${e.playlistid}`);
                        const playlistItem = dataPlaylist.data[0];
                        if (!listData.includes(playlistItem)) {
                            const new_data = {
                                name: playlistItem.name,
                                thumb: playlistItem.thumb,
                                description: playlistItem.description,
                                url: `record?playlist=${playlistItem.guid}`,
                            };
                            setListData((prevData) => [...prevData, new_data]);
                        }
                    } else if (e.albumid) {
                        const dataAlbum = await instance.get(`album?albumid=${e.albumid}`);
                        const albumItem = dataAlbum.data[0];
                        if (!listData.includes(albumItem)) {
                            const new_data = {
                                name: albumItem.albumname,
                                thumb: albumItem.albumthumb,
                                description: albumItem.description,
                                url: `record?album=${albumItem.guid}`,
                            };
                            setListData((prevData) => [...prevData, new_data]);
                        }
                    } else if (e.userid) {
                        const dataUser = await instance.get(`user?id=${e.userid}`);
                        const userItem = dataUser.data[0];
                        if (!listData.includes(userItem)) {
                            const new_data = {
                                name: userItem.Fullname,
                                thumb: userItem.avatar,
                                description: '',
                                url: `record?userid=${userItem.guid}`,
                                user: true,
                            };
                            setListData((prevData) => [...prevData, new_data]);
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

    const SaveTitle = (title) => {
        localStorage.setItem('titleItem', title);
    };

    return (
        <div className={cx('sectionPlaylistItem')}>
            {isLoaded ? (
                listData.map((item) => (
                    <Link
                        key={item.id}
                        onClick={() => SaveTitle(item.name)}
                        className={cx('sectionPlaylistItem-item')}
                        to={item.url}
                    >
                        <div className={cx('sectionPlaylistItem-item_img', { [styles.borderAvt]: item.user })}>
                            <img src={item.thumb} />
                        </div>
                        <div className={cx('sectionPlaylistItem-item__info')}>
                            <h3>{item.name}</h3>
                            <h6>{item.description}</h6>
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
