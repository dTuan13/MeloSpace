import { Link } from 'react-router-dom';
import styles from './SectionPlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import PlayButton from '../../PlayButton';
import instance from '../../../api';

const initSectionItem = () => {
    const sec = localStorage.getItem('section-Item');
    return sec ? JSON.parse(sec) : [];
};

const cx = classNames.bind(styles);

function SectionItem(sectionId) {
    const [data, setData] = useState([]);
    const [sectionItem, setSectionItem] = useState(initSectionItem);
    const [key, setKey] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/section/list?id=${sectionId.sectionId}`);
                if (localStorage.getItem('section-Item')) {
                    localStorage.removeItem('section-Item');
                }
                localStorage.setItem('section-Item', JSON.stringify(data));
                console.log(sectionId.sectionId);
                setSectionItem(data);
                setKey(true);
            } catch {}
        })();
    }, [key]);

    useEffect(() => {
        // get playlist by sectionId

        const dataTemp = JSON.parse(localStorage.getItem('sections'));

        dataTemp.forEach((element) => {});

        const sectionPlaylistData = [
            {
                id_section: 1,
                id_playlist: 1,
            },
            {
                id_section: 1,
                id_playlist: 2,
            },
            {
                id_section: 1,
                id_playlist: 3,
            },
            {
                id_section: 1,
                id_playlist: 4,
            },
            {
                id_section: 2,
                id_playlist: 5,
            },
            {
                id_section: 2,
                id_playlist: 6,
            },
            {
                id_section: 3,
                id_playlist: 7,
            },
            {
                id_section: 3,
                id_playlist: 8,
            },
            {
                id_section: 3,
                id_playlist: 9,
            },
            {
                id_section: 4,
                id_playlist: 10,
            },
            {
                id_section: 4,
                id_playlist: 1,
            },
            {
                id_section: 4,
                id_playlist: 2,
            },
            {
                id_section: 4,
                id_playlist: 3,
            },
            {
                id_section: 4,
                id_playlist: 4,
            },
            {
                id_section: 5,
                id_playlist: 5,
            },
            {
                id_section: 5,
                id_playlist: 6,
            },
            {
                id_section: 5,
                id_playlist: 7,
            },
            {
                id_section: 5,
                id_playlist: 8,
            },
            {
                id_section: 5,
                id_playlist: 9,
            },
            {
                id_section: 5,
                id_playlist: 10,
            },
            {
                id_section: 5,
                id_playlist: 1,
            },
            {
                id_section: 5,
                id_playlist: 2,
            },
            {
                id_section: 5,
                id_playlist: 3,
            },
        ];

        const playlistData = [
            {
                id: 1,
                name: 'Nắng Hạ Vàng',
                img: 'https://i.scdn.co/image/ab67706f00000002f706f22d6c4c596096535f35',
                des: 'Trong xanh',
                url: 'playlist/nanghavang',
            },
            {
                id: 2,
                name: 'Chiều Thu',
                img: 'https://i.scdn.co/image/ab67706f00000002523900c130e847665a66b9d8',
                des: 'Ấm áp',
                url: 'playlist/chieuthu',
            },
            {
                id: 3,
                name: 'Đông Hạ',
                img: 'https://i.scdn.co/image/ab67706f000000028a9e50e6e634a604fa545f72',
                des: 'Bình An Nhiên',
                url: 'playlist/dongha',
            },
            {
                id: 4,
                name: 'Thế Gian',
                img: 'https://i.scdn.co/image/ab67706f0000000255be59b7be2929112e7ac927',
                des: 'Âm u',
                url: 'playlist/thegian',
            },
            {
                id: 5,
                name: 'Hạnh phúc',
                img: 'https://i.scdn.co/image/ab67706f000000029385ce8e365c6b8ba3f70d4b',
                des: 'Mãi mãi',
                url: 'playlist/hanhphu',
            },
            {
                id: 6,
                name: 'Loli',
                img: 'https://i.scdn.co/image/ab67706f000000020408713c731caaf1f800615a',
                des: 'Mãi chill',
                url: 'playlist/loli',
            },
            {
                id: 7,
                name: 'Vắng em',
                img: 'https://i.scdn.co/image/ab67706f000000025db1394baf8862336f19ac83',
                des: 'Rời xa thế gian',
                url: 'playlist/vangem',
            },
            {
                id: 8,
                name: 'Ngày buồn',
                img: 'https://i.scdn.co/image/ab67616d00001e02d090c2d1357268d6e009f6cc',
                des: 'Đánh mất nhau',
                url: 'playlist/ngaybuon',
            },
            {
                id: 9,
                name: 'Thu Cuối',
                img: 'https://i.scdn.co/image/ab67616d00001e027f35adfbec3bb2bc8256802b',
                des: 'Chia cách bình yên',
                url: 'playlist/thucuoi',
            },
            {
                id: 10,
                name: 'Hoàng hôn',
                img: 'https://i.scdn.co/image/ab67706f00000002d86d545af3e116ba72b3d69f',
                des: 'Có lẽ là sai',
                url: 'playlist/hoanghon',
            },
        ];

        const playListIds = sectionPlaylistData
            .filter((data) => data.id_section === sectionId.sectionId)
            .map((data) => data.id_playlist);

        setData(playlistData.filter((data) => playListIds.includes(data.id)));
    }, []);

    const PlayMusic = () => {
        // play music
    };

    return (
        <div className={cx('sectionPlaylistItem')}>
            {data.map((item) => (
                <Link key={item.id} to={item.url} className={cx('sectionPlaylistItem-item')}>
                    <div className={cx('sectionPlaylistItem-item_img')}>
                        <img src={item.img} />
                    </div>
                    <div className={cx('sectionPlaylistItem-item__info')}>
                        <h3>{item.name}</h3>
                        <h6>{item.des}</h6>
                    </div>
                    <div className={cx('playBtn')} onClick={PlayMusic}>
                        <PlayButton />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SectionItem;
