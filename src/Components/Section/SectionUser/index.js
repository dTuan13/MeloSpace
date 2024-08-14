import { Link } from 'react-router-dom';
import styles from './SectionUserItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import PlayButton from '../../PlayButton';

const cx = classNames.bind(styles);

function SectionUserItem(sectionId) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // get playlist by sectionId

        const sectionUserData = [
            {
                id_section: 1,
                id_user: 5,
            },
            {
                id_section: 1,
                id_user: 7,
            },
            {
                id_section: 3,
                id_user: 6,
            },
            {
                id_section: 3,
                id_user: 2,
            },
            {
                id_section: 4,
                id_user: 10,
            },
            {
                id_section: 4,
                id_user: 6,
            },
            {
                id_section: 4,
                id_user: 4,
            },
            ,
            {
                id_section: 4,
                id_user: 9,
            },
            {
                id_section: 4,
                id_user: 2,
            },
            {
                id_section: 5,
                id_user: 7,
            },
            {
                id_section: 5,
                id_user: 8,
            },
        ];

        const userData = [
            {
                id: 1,
                name: 'Ngọc Ánh',
                img: 'https://i.scdn.co/image/ab67706f00000002f706f22d6c4c596096535f35',
                des: 'Trong xanh',
                url: 'user/nanghavang',
            },
            {
                id: 2,
                name: 'Thu Trinh',
                img: 'https://i.scdn.co/image/ab67706f00000002523900c130e847665a66b9d8',
                des: 'Ấm áp',
                url: 'user/chieuthu',
            },
            {
                id: 3,
                name: 'Quang Linh',
                img: 'https://i.scdn.co/image/ab67706f000000028a9e50e6e634a604fa545f72',
                des: 'Bình An Nhiên',
                url: 'user/dongha',
            },
            {
                id: 4,
                name: 'Ngọc Bảo',
                img: 'https://i.scdn.co/image/ab67706f0000000255be59b7be2929112e7ac927',
                des: 'Âm u',
                url: 'user/thegian',
            },
            {
                id: 5,
                name: 'Thu Tràm',
                img: 'https://i.scdn.co/image/ab67706f000000029385ce8e365c6b8ba3f70d4b',
                des: 'Mãi mãi',
                url: 'user/hanhphu',
            },
            {
                id: 6,
                name: 'Ái Nhân',
                img: 'https://i.scdn.co/image/ab67706f000000020408713c731caaf1f800615a',
                des: 'Mãi chill',
                url: 'user/loli',
            },
            {
                id: 7,
                name: 'Kiều Loan',
                img: 'https://i.scdn.co/image/ab67706f000000025db1394baf8862336f19ac83',
                des: 'Rời xa thế gian',
                url: 'user/vangem',
            },
            {
                id: 8,
                name: 'Phương Linh',
                img: 'https://i.scdn.co/image/ab67616d00001e02d090c2d1357268d6e009f6cc',
                des: 'Đánh mất nhau',
                url: 'user/ngaybuon',
            },
            {
                id: 9,
                name: 'Tuấn Kiệt',
                img: 'https://i.scdn.co/image/ab67616d00001e027f35adfbec3bb2bc8256802b',
                des: 'Chia cách bình yên',
                url: 'user/thucuoi',
            },
            {
                id: 10,
                name: 'Hoàng Hảo',
                img: 'https://i.scdn.co/image/ab67706f00000002d86d545af3e116ba72b3d69f',
                des: 'Có lẽ là sai',
                url: 'user/hoanghon',
            },
        ];

        const userIds = sectionUserData
            .filter((data) => data.id_section === sectionId.sectionId)
            .map((data) => data.id_user);

        setData(userData.filter((data) => userIds.includes(data.id)));
    }, []);

    const PlayMusic = () => {
        // play music
    };

    return (
        <div className={cx('sectionUserItem')}>
            {data.map((item) => (
                <Link key={item.id} to={item.url} className={cx('sectionUserItem-item')}>
                    <div className={cx('sectionUserItem-item_img')}>
                        <img src={item.img} />
                    </div>
                    <div className={cx('sectionUserItem-item__info')}>
                        <h3>{item.name}</h3>
                    </div>
                    <div className={cx('playBtn')} onClick={PlayMusic}>
                        <PlayButton />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SectionUserItem;
