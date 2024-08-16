import { Link } from 'react-router-dom';
import styles from './SectionAlbumItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import PlayButton from '../../PlayButton';

const cx = classNames.bind(styles);

function SectionAlbumItem(sectionId) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // get playlist by sectionId

        const sectionAlbumData = [
            {
                id_section: 1,
                id_album: 2,
            },
            {
                id_section: 1,
                id_album: 7,
            },
            {
                id_section: 2,
                id_album: 4,
            },
            {
                id_section: 2,
                id_album: 5,
            },
            {
                id_section: 4,
                id_album: 7,
            },
            {
                id_section: 4,
                id_album: 8,
            },
            {
                id_section: 4,
                id_album: 10,
            },
            {
                id_section: 4,
                id_album: 1,
            },
            {
                id_section: 4,
                id_album: 3,
            },
            {
                id_section: 5,
                id_album: 8,
            },
            {
                id_section: 5,
                id_album: 9,
            },
            {
                id_section: 5,
                id_playlist: 1,
            },
            {
                id_section: 5,
                id_playlist: 2,
            },
        ];

        const albumData = [
            {
                id: 1,
                name: 'Album Sương Mai',
                img: 'https://i.scdn.co/image/ab67706f00000002f706f22d6c4c596096535f35',
                des: 'Trong xanh',
                url: 'album/suongmai',
            },
            {
                id: 2,
                name: 'Album Chiều Thu',
                img: 'https://i.scdn.co/image/ab67706f00000002523900c130e847665a66b9d8',
                des: 'Ấm áp',
                url: 'album/chieuthu',
            },
            {
                id: 3,
                name: 'Album Đông Hạ',
                img: 'https://i.scdn.co/image/ab67706f000000028a9e50e6e634a604fa545f72',
                des: 'Bình An Nhiên',
                url: 'album/dongha',
            },
            {
                id: 4,
                name: 'Album Thế Gian',
                img: 'https://i.scdn.co/image/ab67706f0000000255be59b7be2929112e7ac927',
                des: 'Âm u',
                url: 'album/thegian',
            },
            {
                id: 5,
                name: 'Album Hạnh phúc',
                img: 'https://i.scdn.co/image/ab67706f000000029385ce8e365c6b8ba3f70d4b',
                des: 'Mãi mãi',
                url: 'album/hanhphuc',
            },
            {
                id: 6,
                name: 'Album Loli',
                img: 'https://i.scdn.co/image/ab67706f000000020408713c731caaf1f800615a',
                des: 'Mãi chill',
                url: 'album/loli',
            },
            {
                id: 7,
                name: 'Album Vắng em',
                img: 'https://i.scdn.co/image/ab67706f000000025db1394baf8862336f19ac83',
                des: 'Rời xa thế gian',
                url: 'album/vangem',
            },
            {
                id: 8,
                name: 'Album Ngày buồn',
                img: 'https://i.scdn.co/image/ab67616d00001e02d090c2d1357268d6e009f6cc',
                des: 'Đánh mất nhau',
                url: 'album/ngaybuon',
            },
            {
                id: 9,
                name: 'Album Thu Cuối',
                img: 'https://i.scdn.co/image/ab67616d00001e027f35adfbec3bb2bc8256802b',
                des: 'Chia cách bình yên',
                url: 'album/thucuoi',
            },
            {
                id: 10,
                name: 'Album Hoàng hôn',
                img: 'https://i.scdn.co/image/ab67706f00000002d86d545af3e116ba72b3d69f',
                des: 'Có lẽ là sai',
                url: 'album/hoanghon',
            },
        ];

        const albumIds = sectionAlbumData
            .filter((data) => data.id_section === sectionId.sectionId)
            .map((data) => data.id_album);

        setData(albumData.filter((data) => albumIds.includes(data.id)));
    }, []);

    const PlayMusic = () => {
        // play music
    };

    return (
        <div className={cx('sectionAlbumItem')}>
            {data.map((item) => (
                <Link key={item.id} to={item.url} className={cx('sectionAlbumItem-item')}>
                    <div className={cx('sectionAlbumItem-item_img')}>
                        <img src={item.img} />
                    </div>
                    <div className={cx('sectionAlbumItem-item__info')}>
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

export default SectionAlbumItem;
